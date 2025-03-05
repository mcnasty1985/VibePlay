import { NextResponse } from "next/server"

const blogPosts = [
  { id: 1, title: "Introducing VibePlay: A New Way to Express Yourself", date: "2023-04-01", content: "..." },
  { id: 2, title: "5 Tips for Creating an Engaging VibePlay Space", date: "2023-04-15", content: "..." },
  { id: 3, title: "How AI is Revolutionizing Social Media Design", date: "2023-05-01", content: "..." },
]

export async function GET() {
  return NextResponse.json(blogPosts)
}

