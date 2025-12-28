"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ArrowBigUp, Trophy, Users, TrendingUp } from "lucide-react"
import { useState } from "react"

const topContributors = [
  { name: "Sarah Kim", avatar: "/diverse-woman-portrait.png", badge: "platinum", xp: 8900 },
  { name: "James Wilson", avatar: "/man.jpg", badge: "gold", xp: 7200 },
  { name: "Maya Patel", avatar: "/diverse-woman-portrait.png", badge: "gold", xp: 6800 },
  { name: "Chris Lee", avatar: "/man.jpg", badge: "silver", xp: 5400 },
  { name: "Emma Davis", avatar: "/diverse-woman-portrait.png", badge: "silver", xp: 4900 },
]

const communityPosts = [
  {
    id: 1,
    type: "tutorial",
    author: "Alex Chen",
    avatar: "/diverse-group.png",
    badge: "gold",
    content: "Complete Guide to React Server Components in Next.js 16",
    engagement: { comments: 45, votes: 234 },
    time: "1h ago",
  },
  {
    id: 2,
    type: "question",
    author: "Maria Garcia",
    avatar: "/diverse-woman-portrait.png",
    badge: "silver",
    content: "How do I optimize my database queries for better performance?",
    engagement: { comments: 28, votes: 156 },
    time: "3h ago",
  },
  {
    id: 3,
    type: "discussion",
    author: "David Park",
    avatar: "/man.jpg",
    badge: "platinum",
    content: "The evolution of web frameworks: What's next after React?",
    engagement: { comments: 67, votes: 423 },
    time: "5h ago",
  },
]

export function CommunityFeed() {
  const [contentFilter, setContentFilter] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-4">
      {/* Community Header */}
      <Card className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 border-primary/30">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Tech Enthusiasts</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>24.5K members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  <span>15.2K Community XP</span>
                </div>
              </div>
            </div>
            <Button>Join Community</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/man.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">Moderator: John Smith</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Type Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
          <TabsTrigger value="post">Posts</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Top Contributors</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {topContributors.map((contributor, idx) => (
                  <div key={contributor.name} className="flex flex-col items-center gap-2 min-w-[80px]">
                    <div className="relative">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                      </Avatar>
                      <Badge
                        className={`absolute -bottom-1 -right-1 h-6 w-6 flex items-center justify-center p-0 ${
                          contributor.badge === "platinum"
                            ? "bg-gradient-to-br from-slate-400 to-slate-600"
                            : contributor.badge === "gold"
                              ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                              : "bg-gradient-to-br from-slate-300 to-slate-500"
                        }`}
                      >
                        {idx + 1}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium truncate w-20">{contributor.name.split(" ")[0]}</p>
                      <p className="text-xs text-muted-foreground">{contributor.xp} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sort and Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
            <Button
              variant={sortBy === "relevance" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("relevance")}
            >
              Relevance
            </Button>
            <Button variant={sortBy === "newest" ? "default" : "outline"} size="sm" onClick={() => setSortBy("newest")}>
              Newest
            </Button>
            <Button
              variant={sortBy === "trending" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("trending")}
            >
              Trending
            </Button>
            <Button
              variant={sortBy === "engaging" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("engaging")}
            >
              Engaging
            </Button>
          </div>

          {/* Community Posts */}
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <Card key={post.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3 flex-1">
                      <Avatar>
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-semibold">{post.author}</h4>
                          <Badge
                            variant="secondary"
                            className={
                              post.badge === "platinum"
                                ? "bg-gradient-to-br from-slate-400 to-slate-600 text-white"
                                : post.badge === "gold"
                                  ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
                                  : "bg-gradient-to-br from-slate-300 to-slate-500 text-white"
                            }
                          >
                            {post.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{post.time}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{post.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-4 text-balance">{post.content}</h3>
                  <div className="flex items-center gap-4 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.engagement.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ArrowBigUp className="h-4 w-4" />
                      <span>{post.engagement.votes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="py-8 text-center">
            <Button variant="outline">Load more content</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
