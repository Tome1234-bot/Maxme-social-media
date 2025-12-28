"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const conversations = [
  {
    id: 1,
    user: "Sarah Kim",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "Thanks for your help on the project!",
    time: "10m ago",
    unread: 2,
  },
  {
    id: 2,
    user: "Mike Chen",
    avatar: "/man.jpg",
    lastMessage: "Did you see the latest update?",
    time: "1h ago",
    unread: 0,
  },
  {
    id: 3,
    user: "Emma Wilson",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "Great discussion in the community!",
    time: "3h ago",
    unread: 1,
  },
]

export function MessagesView() {
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
            <h1 className="text-2xl font-bold">Messages</h1>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            {conversations.map((conversation) => (
              <Card key={conversation.id} className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{conversation.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">{conversation.user}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <Badge className="ml-2 bg-primary text-primary-foreground">{conversation.unread}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
