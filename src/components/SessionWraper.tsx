// components/SessionWrapper.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AuthButton from "./AuthButton";

// SessionWrapper chỉ được dùng ở Client Component
export default function SessionWrapper({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthButton />
      {children}
    </SessionProvider>
  );
}
