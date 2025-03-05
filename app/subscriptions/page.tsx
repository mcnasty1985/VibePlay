"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const mockSubscriptions = [
  { id: 1, creator: "Alice Wonderland", username: "alice", price: 9.99, status: "active" },
  { id: 2, creator: "Bob Builder", username: "bob", price: 14.99, status: "active" },
  { id: 3, creator: "Charlie Chaplin", username: "charlie", price: 4.99, status: "expired" },
]

export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions)

  const handleCancel = (id: number) => {
    setSubscriptions(subscriptions.map((sub) => (sub.id === id ? { ...sub, status: "cancelled" } : sub)))
  }

  const handleRenew = (id: number) => {
    setSubscriptions(subscriptions.map((sub) => (sub.id === id ? { ...sub, status: "active" } : sub)))
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 vibe-gradient-text">Your Subscriptions</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((sub) => (
          <Card key={sub.id} className="vibe-card">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${sub.username}`} />
                  <AvatarFallback>
                    {sub.creator
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{sub.creator}</CardTitle>
                  <CardDescription>@{sub.username}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${sub.price}</span>
                <Badge variant={sub.status === "active" ? "default" : "secondary"}>{sub.status}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              {sub.status === "active" ? (
                <Button variant="outline" className="w-full vibe-button-outline" onClick={() => handleCancel(sub.id)}>
                  Cancel Subscription
                </Button>
              ) : (
                <Button className="w-full vibe-button" onClick={() => handleRenew(sub.id)}>
                  Renew Subscription
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

