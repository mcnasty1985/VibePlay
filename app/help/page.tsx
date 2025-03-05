import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HelpPage() {
  const faqItems = [
    {
      question: "How do I create a VibePlay account?",
      answer:
        "To create a VibePlay account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details, choose a unique username, and follow the prompts to set up your profile.",
    },
    {
      question: "How can I customize my VibePlay space?",
      answer:
        "Once you're logged in, go to your profile and click on 'Edit Space'. Here you can change your background, add widgets, customize your color scheme, and more. You can also use our AI tools to generate unique designs based on your preferences.",
    },
    {
      question: "What are the different subscription tiers?",
      answer:
        "VibePlay offers three tiers: Basic (free), Vibe+ ($9.99/month), and Vibe Pro+ ($29.99/month). Each tier offers different features, with Vibe Pro+ providing full access to our creator tools and monetization options.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "If you come across content that violates our community guidelines, click on the '...' menu next to the content and select 'Report'. Fill in the required information, and our moderation team will review it promptly.",
    },
    {
      question: "How can I monetize my content on VibePlay?",
      answer:
        "Vibe Pro+ members can monetize their content through subscriptions, tips, and merchandise sales. Go to your Creator Dashboard to set up your monetization options and track your earnings.",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">Help Center</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-background/50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="mb-4">
            If you couldn't find the answer you were looking for, our support team is here to help.
          </p>
          <Link href="/contact">
            <Button className="vibe-button">Contact Support</Button>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Video Tutorials</h2>
          <p className="mb-4">Check out our video tutorials for step-by-step guides on using VibePlay's features:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-background/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Getting Started with VibePlay</h3>
              <div className="aspect-video bg-muted rounded-md"></div>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Using the AI Design Tools</h3>
              <div className="aspect-video bg-muted rounded-md"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

