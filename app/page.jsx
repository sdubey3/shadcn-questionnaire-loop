import Link from "next/link";
import { Suspense } from "react";

import { Repro } from "./repro";

export default function Page() {
  return (
    <main>
      <h1>Choices and an input</h1>
      <p>
        Throws "Maximum update depth exceeded" on React 19.3.{" "}
        <Link href="/choices-only">Without the input</Link> it renders.
      </p>
      <Suspense>
        <Repro withInput />
      </Suspense>
    </main>
  );
}
