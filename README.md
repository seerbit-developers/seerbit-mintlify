# SeerBit Documentation

The source for the SeerBit developer documentation, built with [Mintlify](https://mintlify.com).

## Structure

| Path | Contents |
| --- | --- |
| `docs.json` | Site configuration: navigation, theme, redirects |
| `index.mdx` | Landing page |
| `quickstart.mdx` | First test payment, end to end |
| `online-payments/` | Integrations, payment features, and after-payment guides |
| `payment-methods/` | Card, bank account, transfer, USSD and mobile money |
| `in-store/` | ISV POS Transaction API for card-present payments |
| `development-resources/` | Hashing, response codes, currencies, test and live modes |
| `testing/` | Test credentials |
| `assets/` | Images, fonts and logos |

## Local development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
```

Run the dev server from the repository root, where `docs.json` lives:

```bash
mint dev
```

The site is served at `http://localhost:3000`. Pass `--port` to use a different one.

## Writing pages

Pages are MDX with YAML frontmatter. Every page needs a `title`:

```mdx
---
title: Page title
description: One line describing the page
---
```

Add each new page to the `navigation` block in `docs.json` — a page that is not listed there will not appear in the sidebar.

When you move or rename a page, add an entry to `redirects` in `docs.json` so existing links keep working.

## Conventions

- Sentence case for headings.
- Active voice and second person ("you").
- Code formatting for field names, file names, paths and endpoints.
- Bold for UI elements: click **Settings**.
- Test credentials live only in `testing/overview.mdx`. Link to that page rather than repeating cards or keys elsewhere.

## Deployment

Changes merged to the default branch deploy automatically.

## Troubleshooting

- **`mint dev` fails to start** — make sure you are in the directory containing `docs.json`.
- **A page 404s locally** — confirm it is listed in the `navigation` block in `docs.json`.
- **An icon does not render** — this site uses the [Lucide](https://lucide.dev/icons/) icon set. Font Awesome names will not resolve.
