"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Code, Palette, Pen, Mic, Trophy, BookOpen, Award, Users } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    name: "Tech & Programming",
    icon: Code,
    members: "125K",
    description: "Master coding, software development, and technical skills",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Design & Creative",
    icon: Palette,
    members: "89K",
    description: "Learn UI/UX design, graphic design, and creative tools",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 3,
    name: "Writing & Content",
    icon: Pen,
    members: "67K",
    description: "Improve writing, copywriting, and content creation",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Public Speaking",
    icon: Mic,
    members: "45K",
    description: "Develop presentation and communication skills",
    color: "from-green-500 to-emerald-500",
  },
]

const topRankedUsers = [
  { name: "Alice Johnson", avatar: "/diverse-woman-portrait.png", rank: 1, victories: 45, courses: 28, xp: 15600 },
  { name: "Bob Smith", avatar: "/man.jpg", rank: 2, victories: 42, courses: 25, xp: 14200 },
  { name: "Carol White", avatar: "/diverse-woman-portrait.png", rank: 3, victories: 38, courses: 23, xp: 13100 },
]

export function SkillsphereView() {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 py-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skillsphere
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join skill-based communities, compete in challenges, and earn double social points while mastering new
          abilities
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.id} className="overflow-hidden hover:border-primary/50 transition-colors">
              <div className={`h-24 bg-gradient-to-br ${category.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3 flex-1">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center -mt-10 border-4 border-background">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{category.members} members</span>
                  </div>
                  <Button>Join Sphere</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Tech & Programming Sphere Details (Example) */}
      <Card className="border-primary/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Tech & Programming Sphere</h2>
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">2x XP Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold mb-1">Courses</p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-muted-foreground mt-1">Available to learn</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-warning" />
                <p className="font-semibold mb-1">Quizzes</p>
                <p className="text-2xl font-bold">89</p>
                <p className="text-xs text-muted-foreground mt-1">Test your knowledge</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-success" />
                <p className="font-semibold mb-1">Competitions</p>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-muted-foreground mt-1">Compete with others</p>
              </CardContent>
            </Card>
          </div>

          {/* Top Ranked Users */}
          <div>
            <h3 className="font-semibold mb-4">Top Ranked Members</h3>
            <div className="space-y-3">
              {topRankedUsers.map((user) => (
                <Card key={user.rank}>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge
                          className={`h-8 w-8 flex items-center justify-center rounded-full ${
                            user.rank === 1
                              ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                              : user.rank === 2
                                ? "bg-gradient-to-br from-slate-300 to-slate-500"
                                : "bg-gradient-to-br from-amber-600 to-amber-800"
                          } text-white`}
                        >
                          {user.rank}
                        </Badge>
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.victories} victories • {user.courses} courses
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{user.xp.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">XP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
