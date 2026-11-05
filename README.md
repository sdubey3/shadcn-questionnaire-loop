# Questionnaire loop on React 19.3

Minimal reproduction for [shadcn-ui/ui#12596](https://github.com/shadcn-ui/ui/issues/12596).

A `Questionnaire.Item` from `@shadcn/react` 0.3.1 that holds both choices and a `Questionnaire.Input` throws "Maximum update depth exceeded" on load with React 19.3 when it sits inside a `<Suspense>` boundary.

```bash
npm install
npm run dev
```

- `/` renders the item with choices and an input inside `<Suspense>`, and throws.
- `/choices-only` renders the same item without the input, also inside `<Suspense>`, and works.
- Removing the `<Suspense>` boundary from `app/page.jsx` makes `/` render.

Applying the change from [shadcn-ui/ui#12299](https://github.com/shadcn-ui/ui/pull/12299) to `@shadcn/react` makes `/` render.

Versions: `@shadcn/react` 0.3.1 and `next` 16.4.5 with `reactStrictMode`. The App Router runs the React that Next bundles, `19.3.0-canary-278794d7-20261002`.
