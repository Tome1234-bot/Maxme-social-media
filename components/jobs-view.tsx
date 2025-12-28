"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, MapPin, Briefcase, Clock, DollarSign, Zap } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    budget: "$120k - $180k",
    duration: "Permanent",
    xpCost: 50,
    posted: "2 days ago",
    description:
      "We're looking for an experienced full-stack developer to join our team and build amazing web applications using modern technologies.",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "New York, NY",
    type: "Contract",
    budget: "$80k - $100k",
    duration: "6 months",
    xpCost: 30,
    posted: "5 days ago",
    description:
      "Join our creative team to design beautiful and intuitive user interfaces for cutting-edge digital products.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    type: "Full-time",
    budget: "$100k - $140k",
    duration: "Permanent",
    xpCost: 40,
    posted: "1 week ago",
    description:
      "Help us build and maintain scalable cloud infrastructure using AWS, Kubernetes, and modern DevOps practices.",
    skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    type: "Full-time",
    budget: "$90k - $130k",
    duration: "Permanent",
    xpCost: 35,
    posted: "3 days ago",
    description: "Build responsive and performant web applications using React and modern frontend technologies.",
    skills: ["React", "JavaScript", "CSS", "Tailwind"],
  },
]

export function JobsView() {
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
            <h1 className="text-2xl font-bold">Job Opportunities</h1>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs by title, skills, or company..." className="pl-10" />
            </div>
          </div>

          {/* Info Banner */}
          <Card className="mb-6 bg-primary/10 border-primary/30">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Use your social points to apply for jobs. Each application costs social points based on the position
                    level.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Your current balance: 12,450 XP</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      <Zap className="h-3 w-3 mr-1" />
                      {job.xpCost} XP to apply
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.budget}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                    <Link href={`/jobs/${job.id}/apply`}>
                      <Button>Apply Now</Button>
                    </Link>
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
