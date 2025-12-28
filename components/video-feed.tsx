"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Play, Clock, Eye } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const videos = [
  {
    id: 1,
    title: "Building a Full-Stack App with Next.js 16",
    thumbnail: "/nextjs-app-development.jpg",
    author: "Tech Academy",
    avatar: "/diverse-group.png",
    duration: "24:15",
    views: "45K",
    type: "tutorial",
    uploaded: "2 days ago",
  },
  {
    id: 2,
    title: "5 Pro Tips for Better Code Reviews",
    thumbnail: "/code-review-programming.jpg",
    author: "Dev Tips Daily",
    avatar: "/man.jpg",
    duration: "8:42",
    views: "28K",
    type: "tips",
    uploaded: "1 week ago",
  },
  {
    id: 3,
    title: "How to Optimize React Performance?",
    thumbnail: "/react-optimization.png",
    author: "Code Masters",
    avatar: "/diverse-woman-portrait.png",
    duration: "16:30",
    views: "67K",
    type: "question",
    uploaded: "3 days ago",
  },
  {
    id: 4,
    title: "The Future of AI in Software Development",
    thumbnail: "/ai-software-development.jpg",
    author: "Tech Talks",
    avatar: "/man.jpg",
    duration: "42:18",
    views: "120K",
    type: "discussion",
    uploaded: "1 day ago",
  },
  {
    id: 5,
    title: "Quick CSS Grid Layout Tutorial",
    thumbnail: "/css-grid-layout.png",
    author: "Design Code",
    avatar: "/diverse-woman-portrait.png",
    duration: "4:56",
    views: "15K",
    type: "short",
    uploaded: "5 hours ago",
  },
  {
    id: 6,
    title: "Database Design Best Practices 2025",
    thumbnail: "/database-design-concept.png",
    author: "Backend Mastery",
    avatar: "/man.jpg",
    duration: "31:22",
    views: "52K",
    type: "tutorial",
    uploaded: "4 days ago",
  },
]

const shortVideos = [
  {
    id: 7,
    title: "useEffect Hook Explained",
    thumbnail: "/react-useeffect-hook.jpg",
    views: "89K",
    duration: "0:58",
  },
  {
    id: 8,
    title: "Tailwind Tip of the Day",
    thumbnail: "/tailwind-css-tip.jpg",
    views: "62K",
    duration: "0:45",
  },
  {
    id: 9,
    title: "Git Merge vs Rebase",
    thumbnail: "/git-merge-rebase.jpg",
    views: "124K",
    duration: "1:23",
  },
]

export function VideoFeed() {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search videos, tutorials, and discussions..." className="pl-10" />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="questions">Questions Answered</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6 mt-4">
          {/* Shorts Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Shorts</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {shortVideos.map((video) => (
                <Card
                  key={video.id}
                  className="flex-shrink-0 w-[200px] overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="relative aspect-[9/16] bg-muted">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/80">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1">{video.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{video.views} views</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Suggested Videos Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Suggested for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="relative aspect-video bg-muted">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/80">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </Badge>
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {video.type}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 text-balance">{video.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={video.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{video.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{video.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views} views</span>
                      </div>
                      <span>•</span>
                      <span>{video.uploaded}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="py-8 text-center">
            <Button variant="outline">Load more videos</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
