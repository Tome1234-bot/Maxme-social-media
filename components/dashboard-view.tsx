"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, TrendingUp, Zap, Gift, Crown, Target, Calendar } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const weeklyChallenges = [
  {
    id: 1,
    title: "Post 5 quality discussions",
    progress: 3,
    total: 5,
    reward: 500,
    deadline: "3 days left",
  },
  {
    id: 2,
    title: "Answer 10 questions",
    progress: 7,
    total: 10,
    reward: 300,
    deadline: "5 days left",
  },
  {
    id: 3,
    title: "Complete 2 courses",
    progress: 1,
    total: 2,
    reward: 1000,
    deadline: "6 days left",
  },
]

const earnTips = [
  { tip: "Post during peak hours (9 AM - 11 AM) for 50% more engagement", bonus: "+50% engagement" },
  { tip: "Answer questions in trending communities for double XP", bonus: "2x XP" },
  { tip: "Complete daily streaks to unlock multipliers", bonus: "Up to 5x" },
  { tip: "Participate in Skillsphere competitions for bonus rewards", bonus: "2x points" },
]

const bonuses = [
  {
    id: 1,
    name: "Post Reach Coupon",
    description: "Boost any post to reach 10x more users",
    quantity: 3,
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    id: 2,
    name: "Premium Profile Badge",
    description: "Stand out with a premium profile badge for 30 days",
    quantity: 1,
    icon: Crown,
    color: "text-warning",
  },
  {
    id: 3,
    name: "Double XP Token",
    description: "Earn 2x XP on all activities for 24 hours",
    quantity: 2,
    icon: Zap,
    color: "text-accent",
  },
]

export function DashboardView() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          <div className="space-y-6">
            {/* Social Points Balance */}
            <Card className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 border-primary/30">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Total Social Points Balance</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    12,450
                  </p>
                  <div className="flex items-center justify-center gap-2 text-success">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+1,234 this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Weekly Challenges</h2>
              </div>
              <div className="space-y-3">
                {weeklyChallenges.map((challenge) => (
                  <Card key={challenge.id}>
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{challenge.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {challenge.deadline}
                            </Badge>
                            <Badge variant="secondary" className="text-xs bg-success/20 text-success">
                              <Gift className="h-3 w-3 mr-1" />+{challenge.reward} XP
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {challenge.progress} / {challenge.total}
                          </span>
                          <span className="font-semibold">
                            {Math.round((challenge.progress / challenge.total) * 100)}%
                          </span>
                        </div>
                        <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tips to Earn More */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-semibold">Tips to Earn More Social Points</h2>
              </div>
              <div className="grid gap-3">
                {earnTips.map((item, idx) => (
                  <Card key={idx} className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm flex-1">{item.tip}</p>
                        <Badge variant="secondary" className="bg-accent/20 text-accent whitespace-nowrap">
                          {item.bonus}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bonuses & Premium Features */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-5 w-5 text-warning" />
                <h2 className="text-xl font-semibold">Your Bonuses & Premium Features</h2>
              </div>
              <div className="space-y-3">
                {bonuses.map((bonus) => {
                  const Icon = bonus.icon
                  return (
                    <Card key={bonus.id}>
                      <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                              <Icon className={`h-6 w-6 ${bonus.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{bonus.name}</h3>
                                <Badge variant="secondary">x{bonus.quantity}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{bonus.description}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Use
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
