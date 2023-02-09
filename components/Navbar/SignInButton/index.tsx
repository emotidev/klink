'use client';

import { Session } from "next-auth";
import { SessionProvider, signIn } from "next-auth/react";

export default function SignInButton({ children }: {
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="flex justify-between items-center rounded px-3 py-2 text-sm font-medium hover:bg-slate-700"
    >
      {children}
    </button>
  );
}