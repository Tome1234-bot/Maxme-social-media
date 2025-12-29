"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  Share2,
  MessageSquare,
  ArrowBigUp,
  Library,
  LayoutDashboard,
  UsersIcon,
  Briefcase,
  Plus,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Header } from "./header"

const userPosts = [
  {
    id: 1,
    type: "post",
    content:
      "Just deployed my first full-stack app using Next.js 16! The new caching features are incredible.",
    engagement: { comments: 24, votes: 128 },
    time: "2h ago",
    badge: "green",
  },
  {
    id: 2,
    type: "question",
    content:
      "What are the best practices for creating accessible color palettes in 2025?",
    engagement: { comments: 12, votes: 45 },
    time: "1d ago",
    badge: "yellow",
  },
  {
    id: 3,
    type: "discussion",
    content:
      "The future of remote work: How AI is reshaping our daily workflows",
    engagement: { comments: 34, votes: 89 },
    time: "3d ago",
    badge: "red",
  },
]

export function ProfileView() {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)

  return (
    <>
      <Header />

      <main className="max-w-screen-xl mx-auto">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 bg-gradient-to-br from-primary via-accent to-primary relative">
          <img
            src="/abstract-cover.jpg"
            alt="Cover"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="px-4">
          {/* Profile Info */}
          <div className="relative -mt-16 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">
                  Full Stack Developer | Tech Enthusiast | Lifelong Learner
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Activity Tabs */}
          <Tabs defaultValue="posts">
            <TabsList>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4 mt-4">
              {userPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between mb-2">
                      <Badge variant="outline">{post.type}</Badge>
                      <Badge variant="secondary">{post.time}</Badge>
                    </div>

                    <p className="mb-4">{post.content}</p>

                    <div className="flex gap-4 border-t pt-2">
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {post.engagement.comments}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ArrowBigUp className="h-4 w-4 mr-1" />
                        {post.engagement.votes}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Floating Menu Button */}
      <button
        onClick={() => setShowFloatingMenu(!showFloatingMenu)}
        className="fixed bottom-20 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
      >
        {showFloatingMenu ? <X /> : <Plus />}
      </button>

      {/* Floating Menu */}
      {showFloatingMenu && (
        <div className="fixed bottom-36 right-6 z-40 flex flex-col gap-3">
          <Link href="/library" className="floating-link">
            <Library /> Library
          </Link>
          <Link href="/dashboard" className="floating-link">
            <LayoutDashboard /> Dashboard
          </Link>
          <Link href="/rooms" className="floating-link">
            <UsersIcon /> Rooms
          </Link>
          <Link href="/jobs" className="floating-link">
            <Briefcase /> Jobs
          </Link>
        </div>
      )}

      {showFloatingMenu && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setShowFloatingMenu(false)}
        />
      )}
    </>
  )
}
