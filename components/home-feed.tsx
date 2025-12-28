"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ArrowBigUp, Share2, TrendingUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const stories = [
  { id: 1, name: "Sarah", avatar: "/diverse-woman-portrait.png" },
  { id: 2, name: "Mike", avatar: "/man.jpg" },
  { id: 3, name: "Emma", avatar: "/diverse-woman-portrait.png" },
  { id: 4, name: "John", avatar: "/man.jpg" },
  { id: 5, name: "Lisa", avatar: "/diverse-woman-portrait.png" },
]

const posts = [
  {
    id: 1,
    type: "post",
    author: "Alex Chen",
    avatar: "/diverse-group.png",
    badge: "green",
    xp: 450,
    community: "Tech Enthusiasts",
    content: "Just deployed my first full-stack app using Next.js 16! The new caching features are incredible.",
    engagement: { comments: 24, votes: 128 },
    time: "2h ago",
  },
  {
    id: 2,
    type: "question",
    author: "Maria Garcia",
    avatar: "/diverse-woman-portrait.png",
    badge: "yellow",
    xp: 320,
    community: "Design Community",
    content: "What are the best practices for creating accessible color palettes in 2025?",
    engagement: { responses: 12, reactions: 45 },
    time: "4h ago",
  },
  {
    id: 3,
    type: "discussion",
    author: "David Park",
    avatar: "/man.jpg",
    badge: "red",
    xp: 890,
    community: "Business Leaders",
    content: "The future of remote work: How AI is reshaping our daily workflows",
    engagement: { contributions: 34, recommends: 89 },
    time: "6h ago",
  },
]

export function HomeFeed() {
  const [postFilter, setPostFilter] = useState("all")

  return (
    <div className="max-w-2xl mx-auto px-4 space-y-4">
      {/* Create Post */}
      <Card className="p-4">
      <div className="flex gap-3">
        <Link href="/profile/me">
          <Avatar className="h-10 w-10 cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex-1">
          <Button
            variant="outline"
            className="w-full justify-start text-muted-foreground hover:text-foreground bg-transparent"
          >
            What's on your mind?
          </Button>

          <Tabs defaultValue="post" className="mt-3">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="post" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Post</span>
              </TabsTrigger>
              <TabsTrigger value="discussion" className="gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Discussion</span>
              </TabsTrigger>
              <TabsTrigger value="question" className="gap-2">
                <HelpCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Question</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </Card>
      {/* Stories Carousel */}
     <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-3 p-1">
        {stories.map((story) => (
          <button key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <div className="relative">
              <div className="p-[2px] bg-gradient-to-br from-accent via-warning to-accent rounded-full">
                <Avatar className="h-16 w-16 border-2 border-background">
                  <AvatarImage src={story.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{story.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              {story.isOwn && (
                <div className="absolute bottom-0 right-0 gradient-glow rounded-full p-1">
                  <Plus className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <span className="text-xs font-medium max-w-[70px] truncate">{story.name}</span>
          </button>
        ))}
      </div>
    </ScrollArea>

      {/* User XP Card */}
      <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Your XP Progress</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Overall community performance</p>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-xl sm:text-2xl font-bold text-primary">2,450 XP</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button variant={postFilter === "all" ? "default" : "outline"} size="sm" onClick={() => setPostFilter("all")}>
          All
        </Button>
        <Button
          variant={postFilter === "posts" ? "default" : "outline"}
          size="sm"
          onClick={() => setPostFilter("posts")}
        >
          Posts
        </Button>
        <Button
          variant={postFilter === "questions" ? "default" : "outline"}
          size="sm"
          onClick={() => setPostFilter("questions")}
        >
          Questions
        </Button>
        <Button
          variant={postFilter === "discussions" ? "default" : "outline"}
          size="sm"
          onClick={() => setPostFilter("discussions")}
        >
          Discussions
        </Button>
      </div>

      {/* News Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={post.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm sm:text-base">{post.author}</h4>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium ${
                          post.badge === "green"
                            ? "bg-success/15 text-success border border-success/30"
                            : post.badge === "yellow"
                              ? "bg-warning/15 text-warning border border-warning/30"
                              : "bg-destructive/15 text-destructive border border-destructive/30"
                        }`}
                      >
                        {post.xp} XP
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {post.community} • {post.time}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    post.badge === "green"
                      ? "border-success text-success"
                      : post.badge === "yellow"
                        ? "border-warning text-warning"
                        : "border-destructive text-destructive"
                  }`}
                >
                  {post.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base mb-4">{post.content}</p>
              <div className="flex items-center gap-4 pt-2 border-t">
                <Button variant="ghost" size="sm" className="gap-2">
                  {post.type === "post" && (
                    <>
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">{post.engagement.comments}</span>
                    </>
                  )}
                  {post.type === "question" && (
                    <>
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">{post.engagement.responses} responses</span>
                    </>
                  )}
                  {post.type === "discussion" && (
                    <>
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">{post.engagement.contributions} contributions</span>
                    </>
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowBigUp className="h-4 w-4" />
                  <span className="text-xs sm:text-sm">
                    {post.type === "post" && post.engagement.votes}
                    {post.type === "question" && post.engagement.reactions}
                    {post.type === "discussion" && post.engagement.recommends}
                  </span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Trigger */}
      <div className="py-8 text-center">
        <Button variant="outline">Load more posts</Button>
      </div>
    </div>
  )
}
