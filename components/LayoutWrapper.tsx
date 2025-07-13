"use client";

import { SessionProvider } from "next-auth/react";
import { Navbar } from "./navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </SessionProvider>
  );
}