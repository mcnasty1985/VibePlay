"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Sparkles, Palette, Layout, Type, Image, Music, Loader2, Check, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function AIBuilder() {
  const router = useRouter()
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [settings, setSettings] = useState({
    creativity: 50,
    complexity: 50,
    colorful: true,
    animations: true,
    music: false,
  })

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleSettingChange = (setting: string, value: number | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const generatePage = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const regeneratePage = () => {
    setIsGenerating(true)

    // Simulate AI regeneration
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  const previewPage = () => {
    router.push("/preview")
  }

  const publishPage = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">AI Page Builder</h1>
          </div>
          <div className="flex items-center gap-2">
            {isGenerated && (
              <>
                <Button variant="outline" onClick={previewPage}>
                  Preview
                </Button>
                <Button onClick={publishPage}>Publish</Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-medium">Describe your page</h2>
                  </div>

                  <Textarea
                    placeholder="Describe how you want your page to look and feel. Be specific about colors, layout, sections, and the overall vibe."
                    className="min-h-32 resize-none"
                    value={prompt}
                    onChange={handlePromptChange}
                  />

                  <div className="flex justify-end">
                    <Button onClick={generatePage} disabled={!prompt.trim() || isGenerating} className="gap-2">
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          {isGenerated ? "Regenerate" : "Generate"}
                          <Sparkles className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="style">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="style">
                      <Palette className="h-4 w-4 mr-2" />
                      <span className="sr-only sm:not-sr-only">Style</span>
                    </TabsTrigger>
                    <TabsTrigger value="layout">
                      <Layout className="h-4 w-4 mr-2" />
                      <span className="sr-only sm:not-sr-only">Layout</span>
                    </TabsTrigger>
                    <TabsTrigger value="content">
                      <Type className="h-4 w-4 mr-2" />
                      <span className="sr-only sm:not-sr-only">Content</span>
                    </TabsTrigger>
                    <TabsTrigger value="media">
                      <Image className="h-4 w-4 mr-2" />
                      <span className="sr-only sm:not-sr-only">Media</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="style" className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Creativity</Label>
                        <span className="text-sm text-muted-foreground">{settings.creativity}%</span>
                      </div>
                      <Slider
                        value={[settings.creativity]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) => handleSettingChange("creativity", value[0])}
                      />
                      <p className="text-xs text-muted-foreground">
                        Higher values produce more creative and unique designs
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Complexity</Label>
                        <span className="text-sm text-muted-foreground">{settings.complexity}%</span>
                      </div>
                      <Slider
                        value={[settings.complexity]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) => handleSettingChange("complexity", value[0])}
                      />
                      <p className="text-xs text-muted-foreground">
                        Higher values produce more complex layouts and elements
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="colorful">Colorful Design</Label>
                        <p className="text-xs text-muted-foreground">Use a vibrant color palette</p>
                      </div>
                      <Switch
                        id="colorful"
                        checked={settings.colorful}
                        onCheckedChange={(checked) => handleSettingChange("colorful", checked)}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="layout" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {["Classic", "Modern", "Minimal", "Creative"].map((layout) => (
                        <div
                          key={layout}
                          className="border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50"
                        >
                          <div className="aspect-video bg-muted rounded-md mb-2 flex items-center justify-center">
                            <Layout className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <span className="text-sm font-medium">{layout}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="content" className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Content will be generated based on your description and selected interests.
                    </p>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Content Sections</h3>
                      <div className="space-y-2">
                        {["About Me", "Gallery", "Blog", "Contact", "Music Player"].map((section) => (
                          <div key={section} className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded border flex items-center justify-center">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-sm">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="animations">Animations</Label>
                        <p className="text-xs text-muted-foreground">Add subtle animations to page elements</p>
                      </div>
                      <Switch
                        id="animations"
                        checked={settings.animations}
                        onCheckedChange={(checked) => handleSettingChange("animations", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="music">Background Music</Label>
                        <p className="text-xs text-muted-foreground">Add background music to your page</p>
                      </div>
                      <Switch
                        id="music"
                        checked={settings.music}
                        onCheckedChange={(checked) => handleSettingChange("music", checked)}
                      />
                    </div>

                    {settings.music && (
                      <div className="border rounded-lg p-4 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Music className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-primary/20 rounded-full">
                            <div className="h-full w-1/3 bg-primary rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="border rounded-lg overflow-hidden">
            {!isGenerated ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                {isGenerating ? (
                  <div className="space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Loader2 className="h-8 w-8 text-primary animate-spin" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Generating your page</h3>
                      <p className="text-muted-foreground mt-1">
                        Our AI is creating your custom page based on your description...
                      </p>
                    </div>
                    <div className="w-full max-w-md mx-auto space-y-2">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Analyzing prompt</span>
                        <span>Generating design</span>
                        <span>Finalizing</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Your AI-generated page</h3>
                      <p className="text-muted-foreground mt-1">
                        Describe your ideal page and our AI will create it for you.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm"
                    onClick={regeneratePage}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                </div>

                <div className="h-[600px] overflow-auto">
                  {/* This would be the actual generated page preview */}
                  <div className="min-h-full bg-background p-8">
                    <div className="max-w-4xl mx-auto space-y-8">
                      {/* Header */}
                      <div className="flex justify-between items-center border-b pb-4">
                        <h1 className="text-2xl font-bold">My Canvas</h1>
                        <div className="flex gap-4">
                          <div className="h-8 w-20 bg-muted rounded"></div>
                          <div className="h-8 w-20 bg-muted rounded"></div>
                          <div className="h-8 w-20 bg-muted rounded"></div>
                        </div>
                      </div>

                      {/* Hero */}
                      <div className="py-12 text-center space-y-4">
                        <h2 className="text-4xl font-bold">Welcome to My Space</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                          This is a custom AI-generated page based on your description. It can be fully customized to
                          match your style and preferences.
                        </p>
                      </div>

                      {/* Content */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">About Me</h3>
                          <div className="space-y-2">
                            <div className="h-4 bg-muted rounded w-full"></div>
                            <div className="h-4 bg-muted rounded w-5/6"></div>
                            <div className="h-4 bg-muted rounded w-4/5"></div>
                            <div className="h-4 bg-muted rounded w-full"></div>
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Gallery</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-muted rounded"></div>
                            <div className="aspect-square bg-muted rounded"></div>
                            <div className="aspect-square bg-muted rounded"></div>
                            <div className="aspect-square bg-muted rounded"></div>
                          </div>
                        </div>
                      </div>

                      {/* Blog */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Latest Posts</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="border rounded-lg overflow-hidden">
                              <div className="aspect-video bg-muted"></div>
                              <div className="p-4 space-y-2">
                                <h4 className="font-medium">Post Title {i}</h4>
                                <div className="space-y-1">
                                  <div className="h-3 bg-muted rounded w-full"></div>
                                  <div className="h-3 bg-muted rounded w-5/6"></div>
                                  <div className="h-3 bg-muted rounded w-4/5"></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="h-4 bg-muted rounded w-1/4"></div>
                              <div className="h-10 bg-muted rounded w-full"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-muted rounded w-1/4"></div>
                              <div className="h-10 bg-muted rounded w-full"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-muted rounded w-1/4"></div>
                              <div className="h-32 bg-muted rounded w-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="h-48 w-48 bg-muted rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

