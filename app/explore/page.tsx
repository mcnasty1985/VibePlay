"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExplorePage() {
  const [suggestion, setSuggestion] = useState("")

  const getAISuggestion = async () => {
    // In a real app, this would call an AI service
    const suggestions = [
      "Check out the new digital art exhibition!",
      "Discover emerging musicians in the Electronic genre.",
      "Explore the latest trends in creative writing.",
    ]
    setSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)])
  }

  const featuredCreators = [
    { id: 1, name: "Alice Wonder", category: "Digital Art" },
    { id: 2, name: "Bob Beats", category: "Music Production" },
    { id: 3, name: "Carol Writes", category: "Creative Writing" },
  ]

  const trendingTags = ["#DigitalArt", "#ElectronicMusic", "#PoetryInMotion", "#VisualStorytelling"]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">Explore VibePlay</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Creators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCreators.map((creator) => (
              <div key={creator.id} className="border border-border p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>
                <p className="text-muted-foreground mb-4">{creator.category}</p>
                <Link href={`/creator/${creator.id}`}>
                  <Button variant="outline">View Profile</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Trending Tags</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <Link key={tag} href={`/explore/tag/${tag.slice(1)}`}>
                <Button variant="outline" size="sm">
                  {tag}
                </Button>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">AI-Powered Suggestions</h2>
          <Button onClick={getAISuggestion} className="vibe-button mb-4">
            Get Suggestion
          </Button>
          {suggestion && <p className="text-lg">{suggestion}</p>}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Discover New Vibes</h2>
          <p className="text-lg mb-4">
            Explore a world of creativity and find your next favorite creator or inspiration.
          </p>
          <Link href="/explore/random">
            <Button className="vibe-button">Surprise Me</Button>
          </Link>
        </section>
      </div>
    </div>
  )
}

