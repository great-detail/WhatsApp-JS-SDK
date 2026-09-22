---
"@great-detail/whatsapp": minor
---

Added experimental generated client option.

Try it out:

```
import { experimental } from "@great-detail/whatsapp";

// Instantiate the alternative client:
const client = experimental.createClient({
  baseUrl: "https://graph.facebook.com",
});

// Explore the available endpoints and methods
client.GET("/{Version}/{Phone-Number-ID}", {
  params: {
    path: {
      Version: "v23.0",
      "Phone-Number-ID": "123...809",
    },
    header: {
      Authorization: "Bearer ...",
    },
  },
})
```

Note: This client is experimenal - any
[feedback](https://github.com/great-detail/WhatsApp-JS-SDK/issues) would be
greatly appreciated!

The experimental client uses the WhatsApp Business Cloud API OpenAPI schema
definitions and [openapi-fetch](https://openapi-ts.dev/openapi-fetch) /
[openapi-typescript](https://openapi-ts.dev) to provide client methods and type
hints for constructing requests.
