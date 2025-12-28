"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
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
    content: "Just deployed my first full-stack app using Next.js 16! The new caching features are incredible.",
    engagement: { comments: 24, votes: 128 },
    time: "2h ago",
    badge: "green",
  },
  {
    id: 2,
    type: "question",
    content: "What are the best practices for creating accessible color palettes in 2025?",
    engagement: { comments: 12, votes: 45 },
    time: "1d ago",
    badge: "yellow",
  },
  {
    id: 3,
    type: "discussion",
    content: "The future of remote work: How AI is reshaping our daily workflows",
    engagement: { comments: 34, votes: 89 },
    time: "3d ago",
    badge: "red",
  },
]

const categories = ["Tech", "Design", "Business", "AI", "Web Development"]

export function ProfileView() {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)

  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-4xl mx-auto">
          {/* Cover Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary via-accent to-primary">
            <div className="absolute top-4 left-4">
              <Button variant="ghost" size="icon" className="bg-black/20 text-white hover:bg-black/30" asChild>
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button variant="ghost" size="icon" className="bg-black/20 text-white hover:bg-black/30">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-black/20 text-white hover:bg-black/30" asChild>
                <Link href="/settings">
                  <Settings className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="px-4 -mt-16 relative z-10">
            <div className="flex items-end gap-4 mb-4">
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-background">
                  <AvatarImage src="/diverse-group.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1">
                  <Badge className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 text-white border-2 border-background shadow-lg px-3 py-1 text-xs font-semibold">
                    Gold
                  </Badge>
                </div>
              </div>
              <div className="flex-1 pb-2">
                <Button>Follow</Button>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <h1 className="text-xl sm:text-2xl font-bold">John Doe</h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Full-stack developer passionate about building amazing web experiences. Love learning new technologies
                and sharing knowledge with the community.
              </p>
            </div>

            {/* Social Points */}
            <Card className="mb-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Total Social Points</p>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">12,450</p>
                  </div>
                  <Badge variant="secondary" className="text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                    Level 24
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6">
              <Card>
                <CardContent className="pt-3 sm:pt-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold">234</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Posts</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-3 sm:pt-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold">89</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Questions</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-3 sm:pt-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold">156</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Discussions</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-3 sm:pt-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold">1.2K</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Contributions</p>
                </CardContent>
              </Card>
            </div>

            {/* About & Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <h3 className="font-semibold text-sm sm:text-base">About Me</h3>
                </CardHeader>
                <CardContent className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span> San Francisco, CA
                  </div>
                  <div>
                    <span className="text-muted-foreground">Joined:</span> January 2024
                  </div>
                  <div>
                    <span className="text-muted-foreground">Website:</span>{" "}
                    <a href="#" className="text-primary hover:underline">
                      johndoe.dev
                    </a>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary text-xs sm:text-sm">
                    See more
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="font-semibold text-sm sm:text-base">Categories</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="posts" className="text-xs sm:text-sm">
                  Posts
                </TabsTrigger>
                <TabsTrigger value="questions" className="text-xs sm:text-sm">
                  Questions
                </TabsTrigger>
                <TabsTrigger value="discussions" className="text-xs sm:text-sm">
                  Discussions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4 mt-4">
                {userPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.type}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            post.badge === "green"
                              ? "bg-success/15 text-success border border-success/30"
                              : post.badge === "yellow"
                                ? "bg-warning/15 text-warning border border-warning/30"
                                : "bg-destructive/15 text-destructive border border-destructive/30"
                          }`}
                        >
                          {post.time}
                        </Badge>
                      </div>
                      <p className="text-sm sm:text-base mb-4">{post.content}</p>
                      <div className="flex items-center gap-4 pt-2 border-t">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-xs sm:text-sm">{post.engagement.comments}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ArrowBigUp className="h-4 w-4" />
                          <span className="text-xs sm:text-sm">{post.engagement.votes}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Floating Menu Button */}
      <button
        onClick={() => setShowFloatingMenu(!showFloatingMenu)}
        className="fixed bottom-20 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {showFloatingMenu ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>

      {/* Floating Menu */}
      {showFloatingMenu && (
        <div className="fixed bottom-36 right-6 z-40 flex flex-col gap-3">
          <Link
            href="/library"
            className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Library className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">Library</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <LayoutDashboard className="h-5 w-5 text-accent" />
            </div>
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            href="/rooms"
            className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
              <UsersIcon className="h-5 w-5 text-success" />
            </div>
            <span className="font-medium">Rooms</span>
          </Link>
          <Link
            href="/jobs"
            className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <div className="h-10 w-10 rounded-full bg-warning/10 flex items-center justify-center group-hover:bg-warning/20 transition-colors">
              <Briefcase className="h-5 w-5 text-warning" />
            </div>
            <span className="font-medium">Jobs</span>
          </Link>
        </div>
      )}

      {/* Backdrop */}
      {showFloatingMenu && (
        <div onClick={() => setShowFloatingMenu(false)} className="fixed inset-0 bg-black/20 z-30" aria-hidden="true" />
      )}
    </>
  )
}
