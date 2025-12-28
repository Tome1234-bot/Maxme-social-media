"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, Zap } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

export function JobApplicationView() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/jobs">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Apply for Position</h1>
          </div>

          {/* Job Summary */}
          <Card className="mb-6 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/30">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-2">Senior Full-Stack Developer</h2>
              <p className="text-muted-foreground mb-3">TechCorp Inc. • Remote</p>
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground">
                  <Zap className="h-3 w-3 mr-1" />
                  50 XP required
                </Badge>
                <Badge variant="outline">Your balance: 12,450 XP</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Application Details</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio/Website</Label>
                <Input id="portfolio" placeholder="https://yourportfolio.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea id="coverLetter" placeholder="Tell us why you're a great fit for this position..." rows={6} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (max 10MB)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="/jobs">Cancel</Link>
                </Button>
                <Button className="flex-1">
                  <Zap className="h-4 w-4 mr-2" />
                  Submit Application (50 XP)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
