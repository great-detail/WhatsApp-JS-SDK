import createOpenAPIClient from "openapi-fetch";
import type { paths } from "../__generated/index.js";

export * from "../__generated/index.js";

export const createClient = createOpenAPIClient<paths>;
