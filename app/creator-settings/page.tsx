"use client"

import { CardDescription } from "@/components/ui/card"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Lock } from "lucide-react"

export default function CreatorSettings() {
  const [contentType, setContentType] = useState("general")
  const [ageVerification, setAgeVerification] = useState(false)
  const [subscriptionPrice, setSubscriptionPrice] = useState(9.99)
  const [userPlan, setUserPlan] = useState("Vibe Pro+") // This would come from user data in a real app

  const isProPlus = userPlan === "Vibe Pro+"

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 vibe-gradient-text">Creator Settings</h1>

      {/* Remove the upgrade card */}

      <Tabs defaultValue="content">
        <TabsList className="mb-8">
          <TabsTrigger value="content">Content Settings</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="verification">Age Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Content Settings</CardTitle>
              <CardDescription>Manage your content type and visibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="content-type">Content Type</Label>
                <select
                  id="content-type"
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full mt-1 bg-background border border-input rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                >
                  <option value="general">General Content</option>
                  <option value="mature">Mature Content (18+)</option>
                  <option value="explicit">Explicit Content (18+)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="age-verification" checked={ageVerification} onCheckedChange={setAgeVerification} />
                <Label htmlFor="age-verification">Require Age Verification</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Set up your subscription and payout details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="subscription-price">Monthly Subscription Price ($)</Label>
                <div className="flex items-center mt-1">
                  <DollarSign className="text-muted-foreground mr-2" />
                  <Input
                    type="number"
                    id="subscription-price"
                    value={subscriptionPrice}
                    onChange={(e) => setSubscriptionPrice(Number.parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              <div>
                <Label>Platform Fee</Label>
                <p className="text-sm text-muted-foreground mt-1">Vibe takes a 20% fee on all earnings</p>
              </div>
              <div>
                <Label htmlFor="payout-method">Payout Method</Label>
                <select
                  id="payout-method"
                  className="w-full mt-1 bg-background border border-input rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                >
                  <option>Bank Transfer</option>
                  <option>PayPal</option>
                  <option>Crypto</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="vibe-button">Save Payment Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Age Verification</CardTitle>
              <CardDescription>Set up age verification for your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="enable-age-verification" checked={ageVerification} onCheckedChange={setAgeVerification} />
                <Label htmlFor="enable-age-verification">Enable Age Verification</Label>
              </div>
              {ageVerification && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Users will be required to verify their age before accessing your content. This process is handled
                    securely by our third-party verification partner.
                  </p>
                  <Button className="vibe-button-outline">
                    <Lock className="mr-2 h-4 w-4" />
                    Set Up Verification
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

