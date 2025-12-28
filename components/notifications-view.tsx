"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, MessageSquare, UserPlus, Heart, Trophy } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const notifications = [
  {
    id: 1,
    type: "comment",
    user: "Sarah Kim",
    avatar: "/diverse-woman-portrait.png",
    action: "commented on your post",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    type: "friend",
    user: "Mike Chen",
    avatar: "/man.jpg",
    action: "sent you a friend request",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 3,
    type: "like",
    user: "Emma Wilson",
    avatar: "/diverse-woman-portrait.png",
    action: "voted on your discussion",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 4,
    type: "achievement",
    user: "System",
    avatar: "/abstract-geometric-shapes.png",
    action: "You earned the 'Top Contributor' badge!",
    time: "2 days ago",
    unread: false,
  },
]

export function NotificationsView() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Notifications</h1>
            </div>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </div>

          <div className="space-y-2">
            {notifications.map((notification) => (
              <Card key={notification.id} className={notification.unread ? "border-primary/50" : ""}>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{notification.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{notification.user}</span> {notification.action}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {notification.type === "comment" && <MessageSquare className="h-5 w-5 text-primary" />}
                      {notification.type === "friend" && <UserPlus className="h-5 w-5 text-accent" />}
                      {notification.type === "like" && <Heart className="h-5 w-5 text-destructive" />}
                      {notification.type === "achievement" && <Trophy className="h-5 w-5 text-warning" />}
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
