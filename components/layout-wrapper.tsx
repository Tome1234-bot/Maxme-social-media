import type React from "react"
import { Header } from "./header"
import { BottomNav } from "./bottom-nav"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 pt-2">{children}</main>
      <BottomNav />
    </>
  )
}
