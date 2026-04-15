# SEO Implementation Summary

## Environment Variable

`NEXT_PUBLIC_SITE_URL` in `.env.local` controls all SEO URLs.

### Phase 1: Testing (Current)
```
NEXT_PUBLIC_SITE_URL="https://fursmartism.vercel.app"
```

### Phase 2: Production (At Cutover)
Change to:
```
NEXT_PUBLIC_SITE_URL="https://funsmartism.in"
```

Then redeploy to Vercel.

---

## SEO Files Implemented

| File | Purpose |
|------|---------|
| `src/app/sitemap.ts` | Auto-generates sitemap.xml with all routes |
| `src/app/robots.ts` | Auto-generates robots.txt allowing all, blocking /studio/ |
| `src/app/layout.tsx` | Global metadata, OG tags, Twitter cards |
| `src/app/about/page.tsx` | Page-specific metadata |
| `src/app/programs/page.tsx` | Page-specific metadata |
| `src/app/thinking-lab/metadata.ts` | Page-specific metadata (extracted) |
| `src/app/schedule-visit/metadata.ts` | Page-specific metadata (extracted) |

---

## Routes in Sitemap

1. `/` (priority: 1.0)
2. `/about`
3. `/activities`
4. `/blogs`
5. `/for-parents`
6. `/gallery`
7. `/programs`
8. `/schedule-visit`
9. `/thinking-lab`

---

## Manual Steps Required

### 1. Google Search Console
- URL: https://search.google.com/search-console
- Add property: `fursmartism.vercel.app` (now) or `funsmartism.in` (at cutover)
- Verify via DNS or HTML tag
- Submit sitemap: `/sitemap.xml`

### 2. Bing Webmaster Tools
- URL: https://www.bing.com/webmasters
- Add site
- Submit sitemap
- Enable IndexNow

### 3. Test Link Previews
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

### 4. Request Indexing
In GSC URL Inspection tool, request indexing for:
- `/`
- `/about`
- `/programs`
- `/thinking-lab`
- `/schedule-visit`

---

## Cutover Checklist

- [ ] Add `funsmartism.in` as custom domain in Vercel dashboard
- [ ] Update DNS A record to point to Vercel
- [ ] Change `NEXT_PUBLIC_SITE_URL` to `https://funsmartism.in`
- [ ] Re-deploy
- [ ] Submit `funsmartism.in` to GSC
- [ ] Submit `funsmartism.in` to Bing
- [ ] Request re-indexing for key pages
- [ ] Update any hardcoded URLs in marketing materials

---

## Verification Commands

```bash
# Test sitemap
curl https://fursmartism.vercel.app/sitemap.xml

# Test robots.txt
curl https://fursmartism.vercel.app/robots.txt

# Check metadata
curl -s https://fursmartism.vercel.app/ | grep -i "og:"
```
