"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Users, Plus, Lock } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"

const myRooms = [
  {
    id: 1,
    name: "Next.js Developers",
    community: "Tech Enthusiasts",
    members: 24,
    activity: "Active now",
    avatar: "/diverse-group.png",
  },
  {
    id: 2,
    name: "Design Systems",
    community: "Design Community",
    members: 18,
    activity: "2 hours ago",
    avatar: "/diverse-woman-portrait.png",
  },
]

const availableRooms = [
  {
    id: 3,
    name: "React Performance",
    community: "Tech Enthusiasts",
    members: 45,
    isPrivate: true,
    avatar: "/man.jpg",
  },
  {
    id: 4,
    name: "UI/UX Best Practices",
    community: "Design Community",
    members: 32,
    isPrivate: false,
    avatar: "/diverse-group.png",
  },
]

export function RoomsView() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/profile">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">Rooms</h1>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Room
            </Button>
          </div>

          {/* Info */}
          <Card className="mb-6 bg-primary/10 border-primary/30">
            <CardContent className="pt-4">
              <p className="text-sm">
                Rooms are private spaces where you can collaborate with members from your communities. Join existing
                rooms or create your own!
              </p>
            </CardContent>
          </Card>

          {/* My Rooms */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">My Rooms</h2>
            {myRooms.length > 0 ? (
              <div className="space-y-3">
                {myRooms.map((room) => (
                  <Card key={room.id} className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={room.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{room.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold">{room.name}</h3>
                            <p className="text-sm text-muted-foreground">{room.community}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                            <Users className="h-4 w-4" />
                            <span>{room.members} members</span>
                          </div>
                          <Badge variant="secondary" className="bg-success/20 text-success">
                            {room.activity}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center py-8">
                  <Users className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">You haven't joined any rooms yet</p>
                  <Button>Browse Available Rooms</Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Available Rooms */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Rooms in Your Communities</h2>
            <div className="space-y-3">
              {availableRooms.map((room) => (
                <Card key={room.id} className="hover:border-primary/50 transition-colors">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={room.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{room.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{room.name}</h3>
                            {room.isPrivate && <Lock className="h-4 w-4 text-muted-foreground" />}
                          </div>
                          <p className="text-sm text-muted-foreground">{room.community}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{room.members}</span>
                        </div>
                        <Button variant="outline">{room.isPrivate ? "Request to Join" : "Join Room"}</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
