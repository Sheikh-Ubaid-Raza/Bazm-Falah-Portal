import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { LayoutWrapper } from "@/components/LayoutWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bazm Falah ul Ahbab",
  description: "Portal of Bazm Falah ul Ahbab",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-portal-bg font-sans antialiased text-portal-text-light", inter.className)}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
