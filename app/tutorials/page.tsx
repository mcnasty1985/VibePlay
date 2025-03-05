import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TutorialsPage() {
  const tutorials = [
    { id: 1, title: "Getting Started with VibePlay", difficulty: "Beginner" },
    { id: 2, title: "Advanced AI Page Creation", difficulty: "Intermediate" },
    { id: 3, title: "Monetizing Your VibePlay Content", difficulty: "Advanced" },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">VibePlay Tutorials</h1>
      <div className="space-y-6">
        <p className="text-lg">
          Learn how to make the most of VibePlay with our comprehensive tutorials. From beginner basics to advanced
          techniques, we've got you covered.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Tutorials</h2>
        <div className="space-y-4">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="border border-border p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-muted-foreground mb-4">Difficulty: {tutorial.difficulty}</p>
              <Link href={`/tutorials/${tutorial.id}`}>
                <Button variant="outline">Start Tutorial</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

