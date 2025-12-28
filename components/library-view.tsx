"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, Download, Trophy, TrendingUp, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const purchasedCourses = [
  {
    id: 1,
    title: "Complete Next.js 16 Masterclass",
    thumbnail: "/nextjs-app-development.jpg",
    progress: 65,
    completed: 13,
    total: 20,
    duration: "12h 30m",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    thumbnail: "/code-review-programming.jpg",
    progress: 100,
    completed: 15,
    total: 15,
    duration: "8h 45m",
  },
  {
    id: 3,
    title: "React Performance Optimization",
    thumbnail: "/react-optimization.png",
    progress: 30,
    completed: 4,
    total: 12,
    duration: "6h 15m",
  },
]

const downloadedVideos = [
  { id: 1, title: "Server Components Deep Dive", duration: "24:15", size: "156 MB" },
  { id: 2, title: "Database Optimization Techniques", duration: "31:22", size: "210 MB" },
  { id: 3, title: "CSS Grid Mastery", duration: "18:45", size: "128 MB" },
]

const quizResults = [
  { id: 1, title: "React Fundamentals Quiz", score: 85, total: 100, status: "won", date: "2 days ago" },
  { id: 2, title: "TypeScript Advanced Quiz", score: 72, total: 100, status: "won", date: "1 week ago" },
  { id: 3, title: "CSS Flexbox Challenge", score: 55, total: 100, status: "lost", date: "2 weeks ago" },
  { id: 4, title: "JavaScript ES6+ Quiz", score: 92, total: 100, status: "won", date: "3 weeks ago" },
]

const skillProgress = [
  { skill: "React Development", level: 8, progress: 75, xp: 8500 },
  { skill: "TypeScript", level: 6, progress: 45, xp: 6200 },
  { skill: "Next.js", level: 7, progress: 60, xp: 7400 },
  { skill: "Database Design", level: 5, progress: 30, xp: 5100 },
]

const challenges = [
  { id: 1, title: "30 Days of Code", participated: true, completed: 23, total: 30 },
  { id: 2, title: "UI/UX Design Sprint", participated: true, completed: 5, total: 7 },
  { id: 3, title: "Algorithm Master", participated: true, completed: 15, total: 15 },
]

export function LibraryView() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">My Library</h1>
          </div>

          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="videos">Downloads</TabsTrigger>
              <TabsTrigger value="skills">Skills Progress</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-4 mt-4">
              {purchasedCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-48 h-48 md:h-auto bg-muted flex-shrink-0">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors cursor-pointer">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {course.completed} of {course.total} lessons • {course.duration}
                          </p>
                        </div>
                        {course.progress === 100 && (
                          <Badge className="bg-success text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="mt-4">
                        {course.progress === 100 ? "Review Course" : "Continue Learning"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="videos" className="space-y-4 mt-4">
              {downloadedVideos.map((video) => (
                <Card key={video.id}>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{video.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {video.duration} • {video.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Skills Progress Tab */}
            <TabsContent value="skills" className="space-y-4 mt-4">
              {skillProgress.map((skill) => (
                <Card key={skill.skill}>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{skill.skill}</h3>
                          <Badge variant="secondary">Level {skill.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.xp.toLocaleString()} XP</p>
                      </div>
                      <TrendingUp className="h-5 w-5 text-success" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress to Level {skill.level + 1}</span>
                        <span className="font-semibold">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Quizzes Tab */}
            <TabsContent value="quizzes" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card className="bg-success/10 border-success/30">
                  <CardContent className="pt-4 text-center">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-success" />
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Quizzes Won</p>
                  </CardContent>
                </Card>
                <Card className="bg-destructive/10 border-destructive/30">
                  <CardContent className="pt-4 text-center">
                    <XCircle className="h-8 w-8 mx-auto mb-2 text-destructive" />
                    <p className="text-2xl font-bold">1</p>
                    <p className="text-sm text-muted-foreground">Quizzes Lost</p>
                  </CardContent>
                </Card>
              </div>

              {quizResults.map((quiz) => (
                <Card key={quiz.id}>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{quiz.title}</h3>
                        <p className="text-sm text-muted-foreground">{quiz.date}</p>
                      </div>
                      <Badge
                        variant={quiz.status === "won" ? "default" : "destructive"}
                        className={quiz.status === "won" ? "bg-success" : ""}
                      >
                        {quiz.status === "won" ? "Won" : "Lost"}
                      </Badge>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-2xl font-bold">{quiz.score}</span>
                      <span className="text-muted-foreground">/ {quiz.total}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Challenges Tab */}
            <TabsContent value="challenges" className="space-y-4 mt-4">
              {challenges.map((challenge) => (
                <Card key={challenge.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{challenge.title}</h3>
                      {challenge.completed === challenge.total && (
                        <Badge className="bg-success text-white">
                          <Trophy className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {challenge.completed} of {challenge.total} days
                        </span>
                        <span className="font-semibold">
                          {Math.round((challenge.completed / challenge.total) * 100)}%
                        </span>
                      </div>
                      <Progress value={(challenge.completed / challenge.total) * 100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
