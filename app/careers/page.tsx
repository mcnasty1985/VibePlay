import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    { id: 1, title: "Frontend Developer", department: "Engineering" },
    { id: 2, title: "UX Designer", department: "Design" },
    { id: 3, title: "Community Manager", department: "Operations" },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">Careers at VibePlay</h1>
      <div className="space-y-6">
        <p className="text-lg">
          Join our team and help shape the future of creative expression online. We're always looking for passionate
          individuals to join our mission.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Open Positions</h2>
        <div className="space-y-4">
          {openPositions.map((position) => (
            <div key={position.id} className="border border-border p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
              <p className="text-muted-foreground mb-4">Department: {position.department}</p>
              <Link href={`/careers/${position.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

