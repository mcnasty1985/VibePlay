"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AdDisplay() {
  const [adContent, setAdContent] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call to an ad network
    const mockAdContent = "This is a sample ad. Upgrade to Vibe+ for an ad-free experience!"
    setAdContent(mockAdContent)
  }, [])

  if (!adContent) return null

  return (
    <Card className="my-4 bg-muted/50">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{adContent}</p>
      </CardContent>
    </Card>
  )
}

