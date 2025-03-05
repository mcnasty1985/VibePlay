import { Button } from "@/components/ui/button"
import Link from "next/link"

async function getBlogPosts() {
  const res = await fetch("http://localhost:3000/api/blog-posts")
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts")
  }
  return res.json()
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">VibePlay Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border border-border p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4">Published on {post.date}</p>
            <Link href={`/blog/${post.id}`}>
              <Button variant="outline">Read More</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

