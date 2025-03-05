import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunityPage() {
  const communityGroups = [
    { id: 1, name: "Digital Artists", members: 1500 },
    { id: 2, name: "Music Producers", members: 2000 },
    { id: 3, name: "Writers' Corner", members: 1200 },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">VibePlay Community</h1>
      <div className="space-y-6">
        <p className="text-lg">
          Connect with like-minded creators, share your work, and get inspired by others in the VibePlay community.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Community Groups</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {communityGroups.map((group) => (
            <div key={group.id} className="border border-border p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <p className="text-muted-foreground mb-4">{group.members} members</p>
              <Link href={`/community/${group.id}`}>
                <Button variant="outline">Join Group</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

