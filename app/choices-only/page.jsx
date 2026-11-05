import Link from "next/link";
import { Suspense } from "react";

import { Repro } from "../repro";

export default function Page() {
  return (
    <main>
      <h1>Choices only</h1>
      <p>
        Renders fine. <Link href="/">With an input</Link> it throws.
      </p>
      <Suspense>
        <Repro withInput={false} />
      </Suspense>
    </main>
  );
}
