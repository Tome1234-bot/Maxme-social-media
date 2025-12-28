"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, UserCheck, Users } from "lucide-react"

const friendRequests = [
  { id: 1, name: "Sarah Kim", avatar: "/diverse-woman-portrait.png", mutualFriends: 12, community: "Tech Enthusiasts" },
  { id: 2, name: "Mike Chen", avatar: "/man.jpg", mutualFriends: 8, community: "Design Community" },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/diverse-woman-portrait.png",
    mutualFriends: 15,
    community: "Business Leaders",
  },
]

const suggestions = [
  { id: 4, name: "Alex Johnson", avatar: "/diverse-group.png", mutualFriends: 23, community: "Tech Enthusiasts" },
  {
    id: 5,
    name: "Lisa Martinez",
    avatar: "/diverse-woman-portrait.png",
    mutualFriends: 18,
    community: "Design Community",
  },
  { id: 6, name: "David Park", avatar: "/man.jpg", mutualFriends: 9, community: "Tech Enthusiasts" },
  {
    id: 7,
    name: "Rachel Green",
    avatar: "/diverse-woman-portrait.png",
    mutualFriends: 14,
    community: "Business Leaders",
  },
]

const myConnections = [
  { id: 8, name: "John Doe", avatar: "/man.jpg", status: "online", community: "Tech Enthusiasts" },
  {
    id: 9,
    name: "Jane Smith",
    avatar: "/diverse-woman-portrait.png",
    status: "offline",
    community: "Design Community",
  },
  { id: 10, name: "Tom Brown", avatar: "/man.jpg", status: "online", community: "Tech Enthusiasts" },
]

export function NetworkView() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      <div className="text-center space-y-2 py-4">
        <h1 className="text-3xl font-bold">Network</h1>
        <p className="text-muted-foreground">Connect with professionals and expand your network</p>
      </div>

      <Tabs defaultValue="requests" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="requests">
            Friend Requests
            {friendRequests.length > 0 && (
              <Badge className="ml-2 bg-primary text-primary-foreground">{friendRequests.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          <TabsTrigger value="connections">My Connections</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4 mt-4">
          {friendRequests.length > 0 ? (
            friendRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{request.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{request.name}</h3>
                        <p className="text-sm text-muted-foreground">{request.community}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Users className="h-3 w-3" />
                          <span>{request.mutualFriends} mutual connections</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <UserCheck className="h-4 w-4 mr-1" />
                        Accept
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="pt-6 text-center py-8">
                <UserPlus className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">No pending friend requests</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((suggestion) => (
              <Card key={suggestion.id}>
                <CardContent className="pt-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-16 w-16 mb-3">
                      <AvatarImage src={suggestion.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{suggestion.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-1">{suggestion.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{suggestion.community}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                      <Users className="h-3 w-3" />
                      <span>{suggestion.mutualFriends} mutual connections</span>
                    </div>
                    <Button size="sm" className="w-full">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="connections" className="space-y-4 mt-4">
          {myConnections.map((connection) => (
            <Card key={connection.id}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={connection.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{connection.name[0]}</AvatarFallback>
                      </Avatar>
                      {connection.status === "online" && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-success rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{connection.name}</h3>
                      <p className="text-sm text-muted-foreground">{connection.community}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
