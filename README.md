# GoogleTagManager `dataLayer` prop is queued after the `gtm.js` event

Minimal reproduction based on `npx create-next-app -e reproduction-template`, tested on `next@canary` and `@next/third-parties@canary`.

## Steps

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

The page lists `window.dataLayer` in push order (`app/page.tsx`). `app/layout.tsx` renders `<GoogleTagManager gtmId="GTM-XXXXXXX" dataLayer={{ user_id: "example-user" }} />` as in the docs.

## Result

```
1. {"gtm.start":…,"event":"gtm.js"}
2. {"user_id":"example-user"}
```

The object passed in `dataLayer` is pushed after the `gtm.js` event entry, so GTM processes it only after the Container Loaded event.
