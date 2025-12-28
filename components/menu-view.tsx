"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Settings, HelpCircle, Shield, FileText, Info, Users, Bookmark, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const menuItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Bookmark, label: "Saved Posts", href: "/saved" },
  { icon: TrendingUp, label: "Your Activity", href: "/activity" },
  { icon: Users, label: "Communities", href: "/communities" },
  { icon: HelpCircle, label: "Help Center", href: "/help" },
  { icon: Shield, label: "Privacy Policy", href: "/privacy" },
  { icon: FileText, label: "Terms of Service", href: "/terms" },
  { icon: Info, label: "About Maxme", href: "/about" },
]

export function MenuView() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Menu</h1>
          </div>

          <Card>
            <CardContent className="pt-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button key={item.href} variant="ghost" className="w-full justify-start" asChild>
                    <Link href={item.href}>
                      <Icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Link>
                  </Button>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
