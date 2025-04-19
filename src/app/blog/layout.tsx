// app/blog/layout.tsx

import type { ReactNode } from "react";
import Link from "next/link";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <Link href="/blog">
          <h1 className="text-4xl font-bold text-blue-600 hover:underline">
            My Blog
          </h1>
        </Link>
      </header>

      <main>{children}</main>
    </div>
  );
}
