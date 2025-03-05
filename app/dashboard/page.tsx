"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Settings,
  LogOut,
  Plus,
  Users,
  BarChart,
  MessageSquare,
  Heart,
  Eye,
  Sparkles,
  Lock,
  Music,
  DollarSign,
  FileText,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AdDisplay } from "@/components/ad-display"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("mypage")
  const [userPlan, setUserPlan] = useState("Vibe Pro+") // This would come from user data in a real app

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 animate-pulse-glow"></div>
            <h1 className="text-2xl font-bold vibe-gradient-text">VibePlay</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8">
          <div className="space-y-6">
            <Card className="vibe-card rounded-xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>John Doe</CardTitle>
                <CardDescription>@johndoe</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">128</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">56</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">1.2k</p>
                    <p className="text-xs text-muted-foreground">Views</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 border-primary/30">
                    Vibe Pro+
                  </Badge>
                  <Link href="/upgrade">
                    <Button className="vibe-button w-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Upgrade Your Vibe
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="vibe-card rounded-xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Your Vibe Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Page Views</p>
                      <p className="text-xs text-muted-foreground">Last 30 days</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold">1,245</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Likes</p>
                      <p className="text-xs text-muted-foreground">Total received</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold">342</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Comments</p>
                      <p className="text-xs text-muted-foreground">Total received</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold">89</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold vibe-gradient-text">My Dashboard</h2>
              <Link href="/ai-builder">
                <Button className="vibe-button">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Vibe
                </Button>
              </Link>
            </div>
            {userPlan === "Basic Vibe" && <AdDisplay />}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5 mb-6 bg-background/50 backdrop-blur-sm p-1 rounded-full">
                <TabsTrigger value="mypage" className="rounded-full">
                  My Vibe
                </TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-full">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="community" className="rounded-full">
                  Community
                </TabsTrigger>
                <TabsTrigger value="monetization" className="rounded-full">
                  Monetization
                </TabsTrigger>
                <TabsTrigger value="settings" className="rounded-full">
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mypage" className="space-y-6">
                <Card className="vibe-card rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>My Vibe Space</CardTitle>
                      <Badge className="bg-gradient-vibe from-primary via-accent to-purple-500 text-white border-0">
                        Live
                      </Badge>
                    </div>
                    <CardDescription>Last updated 2 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-background/80 to-background/40 rounded-xl overflow-hidden relative">
                      <div className="vibe-blob absolute w-32 h-32 bg-primary/20 blur-xl"></div>
                      <div
                        className="vibe-blob absolute w-32 h-32 bg-accent/20 blur-xl"
                        style={{ animationDelay: "2s" }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-xl font-bold vibe-gradient-text">My Custom Vibe</h3>
                          <p className="text-muted-foreground">AI-generated personal space</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">1.2k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">342</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">89</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="vibe-button-outline">
                        Edit
                      </Button>
                      <Button size="sm" className="vibe-button">
                        View
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="vibe-card rounded-xl overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Music Vibe</CardTitle>
                        <Badge variant="outline" className="bg-primary/5 border-primary/30">
                          Draft
                        </Badge>
                      </div>
                      <CardDescription>Created 1 week ago</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gradient-to-br from-background/80 to-background/40 rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <Music className="h-10 w-10 text-primary mx-auto mb-2" />
                            <h3 className="text-lg font-medium">Music Showcase</h3>
                            <p className="text-sm text-muted-foreground">Share your favorite tracks</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="vibe-button-outline">
                        Edit
                      </Button>
                      <Button size="sm" className="vibe-button">
                        Publish
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="vibe-card rounded-xl overflow-hidden border-dashed">
                    <CardContent className="flex flex-col items-center justify-center h-full py-8">
                      <div className="h-12 w-12 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow">
                        <Plus className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Create New Vibe</h3>
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        Use our AI builder to create a custom vibe space
                      </p>
                      <Link href="/ai-builder">
                        <Button className="vibe-button">Get Started</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="vibe-card rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle>Vibe Analytics</CardTitle>
                    <CardDescription>View detailed statistics about your vibe space</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border border-border/40 rounded-lg bg-background/50">
                      <div className="text-center">
                        <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Track page views, engagement, and visitor demographics
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="community" className="space-y-6">
                <Card className="vibe-card rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle>Community Vibes</CardTitle>
                    <CardDescription>Connect with other users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border border-border/40 rounded-lg bg-background/50">
                      <div className="text-center">
                        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">Community Features</h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Discover other vibe spaces, follow users, and engage with content
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="monetization" className="space-y-6">
                <Card className="vibe-card rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle>Monetization Options</CardTitle>
                    <CardDescription>Earn from your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border border-border/40 rounded-lg p-6 bg-background/50">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center flex-shrink-0">
                            <Lock className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Premium Content</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Create exclusive content behind a paywall
                            </p>
                            <Link href="/creator-settings">
                              <Button variant="outline" className="vibe-button-outline">
                                Manage Content Settings
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border/40 rounded-lg p-6 bg-background/50">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Earnings</h3>
                            <p className="text-sm text-muted-foreground mb-4">View your earnings and manage payouts</p>
                            <Link href="/creator-settings?tab=payments">
                              <Button className="vibe-button">View Earnings</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="vibe-card rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border border-border/40 rounded-lg p-6 bg-background/50">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center flex-shrink-0">
                            {/* <CreditCard className="h-5 w-5 text-white" /> */}
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Subscriptions</h3>
                            <p className="text-sm text-muted-foreground mb-4">Manage your active subscriptions</p>
                            <Link href="/subscriptions">
                              <Button variant="outline" className="vibe-button-outline">
                                View Subscriptions
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="border border-border/40 rounded-lg p-6 bg-background/50">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center flex-shrink-0">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">Terms of Service</h3>
                            <p className="text-sm text-muted-foreground mb-4">Review our terms and conditions</p>
                            <Link href="/terms">
                              <Button className="vibe-button">View Terms</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 py-6">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500"></div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} VibePlay. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Help
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

