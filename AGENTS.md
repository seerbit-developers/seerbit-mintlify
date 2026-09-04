# SeerBit documentation — instructions for AI coding agents

> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- **Merchant**, not "user" or "customer", for the business integrating SeerBit.
- **Customer**, not "shopper" or "buyer", for the person paying.
- **Public key** and **secret key** — never "API key" alone, which is ambiguous between the two.
- **Test mode** and **live mode**, not "sandbox" and "production".
- **Payment reference** (`paymentReference`) is merchant-generated; **session ID** is SeerBit's own reference.

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

- Do not document internal or admin-only endpoints.
- Never commit real API keys, live card numbers, or merchant data. Test credentials belong only in `testing/overview.mdx`.
- Do not invent endpoints, field names, rate limits, or response codes. If a fact cannot be verified against the API or an exported Postman collection, leave it out and flag it.
- Icons come from the [Lucide](https://lucide.dev/icons/) set — Font Awesome names will not resolve.
- When moving or renaming a page, add a `redirects` entry in `docs.json`.
