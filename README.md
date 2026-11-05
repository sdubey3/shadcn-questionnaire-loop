# Questionnaire loop on React 19.3

Minimal reproduction for [shadcn-ui/ui#12596](https://github.com/shadcn-ui/ui/issues/12596).

A `Questionnaire.Item` from `@shadcn/react` 0.3.1 that holds both choices and a `Questionnaire.Input` throws "Maximum update depth exceeded" on load with React 19.3, when it sits inside a `<Suspense>` boundary.

[Open in StackBlitz](https://stackblitz.com/github/sdubey3/shadcn-questionnaire-loop)

```bash
npm install
npm run dev
```

- `/` has choices and an input, and throws.
- `/choices-only` is the same item without the input, and renders.

Applying the change from [shadcn-ui/ui#12299](https://github.com/shadcn-ui/ui/pull/12299) to `@shadcn/react` makes `/` render.

Versions: `@shadcn/react` 0.3.1, `react` and `react-dom` 19.3.1, `next` 16.4.5 with `reactStrictMode`.
