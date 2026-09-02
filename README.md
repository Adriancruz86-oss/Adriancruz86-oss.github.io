# Adrian Cruz Author Site

Public author website for Adrian Cruz.

## Publishing
This repository is intended to be served with GitHub Pages at:

https://Adriancruz86-oss.github.io/

## Included SEO
- descriptive page title and meta description
- semantic, crawlable HTML
- canonical URL
- Open Graph metadata
- Person structured data (JSON-LD)
- robots.txt
- sitemap.xml
- responsive mobile layout

## Next upgrades
- add final author photo or author logo
- add confirmed covers for every live book
- add individual Amazon product links
- expand each series and book into dedicated SEO pages as the catalog grows
- connect a custom domain such as AdrianCruzBooks.com if desired
- submit sitemap to Google Search Console after publication

## Reader-list setup

The launch form is ready for a privacy-conscious Buttondown embed, but it does not collect addresses until a real account form URL is configured.

1. Create the reader list in Buttondown.
2. Copy its embed form action URL.
3. Set `newsletterFormAction` in `site-config.js`.

The form validates email addresses, exposes accessible status messages, and includes consent/unsubscribe language. It deliberately blocks submission while no provider URL is configured so email addresses are never discarded or falsely reported as collected.
