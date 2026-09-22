import { mkdir, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import openapiTS, { astToString, COMMENT_HEADER } from "openapi-typescript";

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const schemaDirectory = join(rootDirectory, "schemas");
const outputDirectory = join(rootDirectory, "src", "__generated");
const generatedIndexPath = join(outputDirectory, "index.ts");

async function findSchemas(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const schemas = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);

      if (entry.isDirectory()) {
        return findSchemas(path);
      }

      return entry.name.endsWith(".openapi.yaml") ? [path] : [];
    }),
  );

  return schemas.flat();
}

function toCamelCase(value: string): string {
  return value.replace(/-([a-z])/g, (_, character: string) =>
    character.toUpperCase(),
  );
}

function getExportName(schemaPath: string): string {
  const schemaName = basename(schemaPath, ".openapi.yaml")
    .replace("business-messaging_whatsapp_reference_", "")
    .replace(/_v\d+(?:\.\d+)*$/, "");
  const separatorIndex = schemaName.indexOf("_");
  const category = schemaName.slice(0, separatorIndex);
  let name = schemaName.slice(separatorIndex + 1).replace(/-api$/, "");

  if (category === "business") {
    name = name.replace(/^whatsapp-business-/, "");
  } else if (category === "media") {
    name = "media";
  } else if (category === "message-history") {
    name = name.replace(/^whatsapp-business-/, "");
  } else if (category === "whatsapp-business-account") {
    if (name === "whatsapp-business-account") {
      return "whatsappBusinessAccount";
    }

    name = name.replace(/^whatsapp-business-account-/, "business-account-");
  } else if (category === "whatsapp-business-phone-number") {
    if (name === "block") {
      return "blockUsers";
    }

    if (name === "settings") {
      return "phoneNumberSettings";
    }

    name = name
      .replace(/^whatsapp-business-account-/, "")
      .replace(/^whatsapp-business-/, "business-");
  } else if (category === "whatsapp-business-pre-verified-phone-number") {
    if (name.startsWith("whatsapp-business-pre-verified-phone-number")) {
      name = name.replace(/^whatsapp-business-/, "");
    } else {
      name = `pre-verified-phone-number-${name}`;
    }
  }

  return toCamelCase(name);
}

const schemaPaths = (await findSchemas(schemaDirectory)).sort();

await Promise.all(
  schemaPaths.map(async (schemaPath) => {
    const outputPath = join(
      outputDirectory,
      `${basename(schemaPath, ".openapi.yaml")}-types.ts`,
    );
    const generatedTypes = await openapiTS(pathToFileURL(schemaPath));

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(
      outputPath,
      `${COMMENT_HEADER}${astToString(generatedTypes)}`,
    );
  }),
);

const exportStatements = schemaPaths.map((schemaPath) => {
  const generatedFileName = `${basename(schemaPath, ".openapi.yaml")}-types`;

  return `export * as ${getExportName(schemaPath)} from "./${generatedFileName}";`;
});

const pathsType = schemaPaths
  .map(
    (schemaPath) =>
      `import("./${basename(schemaPath, ".openapi.yaml")}-types").paths`,
  )
  .join(" &\n  ");

await writeFile(
  generatedIndexPath,
  [...exportStatements, "", `export type paths = ${pathsType};`, ""].join("\n"),
);
