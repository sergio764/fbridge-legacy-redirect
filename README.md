# FBridge Legacy Domain Redirect

This public, redirect-only GitHub Pages repository restores the former website address `https://fbridge.webridge.es/` and directs visitors to `https://itsfbridge.com/`.

Repository: `sergio764/fbridge-legacy-redirect`. The existing legacy CNAME already points to `sergio764.github.io`; no DNS, email or main-site hosting changes are needed.

GitHub Pages does not support configurable HTTP 301 responses. Each of the four previously published pages therefore uses an immediate, zero-second HTML meta-refresh and a destination canonical URL. Google documents an immediate meta-refresh as a permanent redirect when a server-side redirect is unavailable: https://developers.google.com/search/docs/crawling-indexing/301-redirects

`redirect.js` preserves query parameters and fragments for browsers with JavaScript enabled. The static meta-refresh still works without JavaScript. Unknown paths remain genuine 404 responses, not misleading redirects to the homepage. Never block known legacy URLs in robots.txt or add noindex to their redirect pages.

This repository contains no content copy of the main site and no secrets. Keep its `CNAME` set to `fbridge.webridge.es`; the separate production repository `sergio764/fbridge` must keep `itsfbridge.com`.
