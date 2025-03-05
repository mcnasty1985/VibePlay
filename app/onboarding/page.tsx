"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    displayName: "",
    bio: "",
    interests: [],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // In a real app, you would save this data to the user's profile
      console.log("Onboarding completed:", formData)
      router.push("/ai-builder")
    }
  }

  // const handleStyleSelect = (style: string) => {
  //   setPreferences((prev) => ({
  //     ...prev,
  //     pageStyle: style,
  //   }))
  // }

  // const handleInterestToggle = (interest: string) => {
  //   setPreferences((prev) => {
  //     const newInterests = prev.interests.includes(interest)
  //       ? prev.interests.filter((i) => i !== interest)
  //       : [...prev.interests, interest]

  //     return {
  //       ...prev,
  //       interests: newInterests,
  //     }
  //   })
  // }

  // const handleAIDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setPreferences((prev) => ({
  //     ...prev,
  //     aiDescription: e.target.value,
  //   }))
  // }

  // const handleContentTypeChange = (value: string) => {
  //   setPreferences((prev) => ({
  //     ...prev,
  //     contentType: value,
  //   }))
  // }

  // const nextStep = () => {
  //   setStep((prev) => prev + 1)
  // }

  // const prevStep = () => {
  //   setStep((prev) => prev - 1)
  // }

  // const finishOnboarding = () => {
  //   console.log("Onboarding completed with preferences:", preferences)
  //   router.push("/ai-builder")
  // }

  // const interests = [
  //   "Art",
  //   "Music",
  //   "Gaming",
  //   "Technology",
  //   "Fashion",
  //   "Sports",
  //   "Travel",
  //   "Food",
  //   "Photography",
  //   "Writing",
  //   "Movies",
  //   "Science",
  //   "Fitness",
  //   "Design",
  //   "Education",
  // ]

  // const pageStyles = [
  //   { id: "minimal", name: "Minimal", description: "Clean and simple design with focus on content" },
  //   { id: "creative", name: "Creative", description: "Artistic and expressive with unique layouts" },
  //   { id: "professional", name: "Professional", description: "Polished and organized for a business-like appearance" },
  //   { id: "retro", name: "Retro", description: "Nostalgic design inspired by early web aesthetics" },
  //   { id: "bold", name: "Bold", description: "High contrast with striking visuals and typography" },
  // ]

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Vibe</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Label htmlFor="displayName">Choose a display name</Label>
              <Input
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                placeholder="Your display name"
              />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Label htmlFor="bio">Tell us about yourself</Label>
              <Input id="bio" name="bio" value={formData.bio} onChange={handleInputChange} placeholder="A short bio" />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <Label>Select your interests</Label>
              {/* Add a list of interests here */}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} className="w-full">
            {step === 3 ? "Finish" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

