"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, SearchIcon } from "lucide-react"
import Link from "next/link"
import { Header } from "./header"
import { useState } from "react"

export function SearchView() {
  const [query, setQuery] = useState("")

  return (
    <>
      <Header />
      <main className="min-h-screen pb-6">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for posts, people, communities..."
                className="pl-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          {query ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Search results for "{query}" will appear here</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <SearchIcon className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-muted-foreground">Start typing to search</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
