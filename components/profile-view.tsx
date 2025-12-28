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
     <main className="max-w-screen-xl mx-auto">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 bg-gradient-to-br from-primary via-accent to-primary relative">
          <img src="/abstract-cover.jpg" alt="Cover" className="w-full h-full object-cover opacity-50" />
        </div>

        <div className="px-4">
          {/* Profile Info */}
          <div className="relative -mt-16 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Badge className="absolute bottom-2 right-2 gradient-glow border-0 text-white">Expert</Badge>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Full Stack Developer | Tech Enthusiast | Lifelong Learner</p>

                {/* Social Points */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="gradient-glow rounded-lg px-3 py-1">
                    <span className="text-white font-bold">2,450 SP</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Social Points</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-5 w-5" />
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">156</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">89</p>
              <p className="text-sm text-muted-foreground">Questions</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">234</p>
              <p className="text-sm text-muted-foreground">Discussions</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">1.2K</p>
              <p className="text-sm text-muted-foreground">Contributions</p>
            </Card>
          </div>

          {/* About & Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="p-4 lg:col-span-2">
              <h3 className="font-semibold mb-2 flex items-center justify-between">
                About Me
                <Button variant="ghost" size="sm">
                  See More
                </Button>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate software engineer with 5+ years of experience in building scalable web applications. Love
                exploring new technologies and sharing knowledge with the community. Currently focusing on React,
                Next.js, and cloud architecture.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Cloud</Badge>
                <Badge variant="secondary">AI/ML</Badge>
              </div>
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
