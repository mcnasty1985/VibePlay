"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Vibe",
    price: "Free",
    description: "Get started with the basics",
    features: ["Create your Vibe space", "Basic customization", "Connect with friends", "Ad-supported experience"],
    button: "Current Plan",
    disabled: true,
  },
  {
    name: "Vibe+",
    price: "$9.99/mo",
    description: "Enhance your Vibe experience",
    features: [
      "Ad-free experience",
      "Advanced customization",
      "Exclusive themes",
      "Priority support",
      "Extended content limits",
    ],
    button: "Upgrade to Vibe+",
    disabled: false,
  },
  {
    name: "Vibe Pro+",
    price: "$29.99/mo",
    description: "Unlock full creator potential",
    features: [
      "All Vibe+ features",
      "Monetization tools",
      "Payout system",
      "Analytics dashboard",
      "Exclusive creator workshops",
      "Verified creator badge",
    ],
    button: "Upgrade to Vibe Pro+",
    disabled: false,
  },
]

export default function UpgradePage() {
  const [selectedPlan, setSelectedPlan] = useState("Basic Vibe")

  const handleUpgrade = (plan: string) => {
    // Add your upgrade logic here
    console.log("Upgrading to:", plan)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 vibe-gradient-text">Upgrade Your Vibe</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={`vibe-card ${selectedPlan === plan.name ? "border-primary" : ""}`}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${plan.disabled ? "vibe-button-outline" : "vibe-button"}`}
                disabled={plan.disabled}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.button}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedPlan !== "Basic Vibe" && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Upgrade to {selectedPlan}</h2>
          <p className="mb-4">
            You've selected the {selectedPlan} plan. Click the button below to complete your upgrade.
          </p>
          <Button className="vibe-button" onClick={() => handleUpgrade(selectedPlan)}>
            Complete Upgrade to {selectedPlan}
          </Button>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">What happens to my content if I downgrade?</h3>
            <p>Your content remains intact, but some features may be limited based on your new plan.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Can I switch between plans?</h3>
            <p>
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
              cycle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Is there a commitment period?</h3>
            <p>No, all paid plans are billed monthly and you can cancel at any time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

