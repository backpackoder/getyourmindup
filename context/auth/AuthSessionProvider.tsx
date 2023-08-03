"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "..";

type AuthProviderProps = {
  children: JSX.Element | JSX.Element[]
};

export function AuthSessionProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider>

      <AuthProvider >
        {children}
      </AuthProvider>

    </SessionProvider>
  );
}