import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Sparkles, Users, Music, Zap, Lock, DollarSign } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Moon-like circle */}
      <div className="absolute top-[-50vh] right-[-25vw] w-[150vw] h-[150vw] rounded-full bg-gradient-radial from-accent/20 via-accent/5 to-transparent opacity-70 pointer-events-none"></div>

      {/* Light beam effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-accent/10 via-accent/5 to-transparent transform rotate-12 pointer-events-none"></div>

      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 animate-pulse-glow"></div>
            <h1 className="text-2xl font-bold vibe-gradient-text">VibePlay</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" className="rounded-full">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="vibe-button">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="container max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 vibe-gradient-text">Come vibe with us</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Create your own customizable space with the help of AI. Express yourself freely and connect with others in
              a whole new way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="vibe-button gap-2 text-lg px-8 py-6">
                  Get Started <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/explore">
                <Button size="lg" variant="outline" className="vibe-button-outline gap-2 text-lg px-8 py-6">
                  Explore Vibes
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 relative">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 vibe-gradient-text">Express Your Unique Vibe</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our platform gives you the freedom to express yourself in ways traditional social media never could.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="vibe-card p-8 rounded-xl flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Creative Freedom</h3>
                <p className="text-muted-foreground">
                  Design your page exactly how you want it. Change layouts, colors, fonts, and more with no limitations.
                </p>
              </div>

              <div className="vibe-card p-8 rounded-xl flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Design</h3>
                <p className="text-muted-foreground">
                  Let our AI help you build the perfect page based on your preferences and style. No design skills
                  needed.
                </p>
              </div>

              <div className="vibe-card p-8 rounded-xl flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Authentic Expression</h3>
                <p className="text-muted-foreground">
                  Express yourself freely with appropriate content guidelines and age restrictions that respect your
                  creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute -top-24 right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-24 left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>

          <div className="container max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium mb-2">
                  AI-Powered Creation
                </div>
                <h2 className="text-4xl font-bold vibe-gradient-text">Design Your Space With AI</h2>
                <p className="text-lg text-muted-foreground">
                  Our advanced AI helps you create stunning pages without any design skills. Just describe what you
                  want, and watch as your vision comes to life.
                </p>
                <ul className="space-y-4">
                  {[
                    "Describe your ideal page in plain language",
                    "AI generates a customized layout based on your vibe",
                    "Easily modify and fine-tune the results",
                    "Save different versions and themes for different moods",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-white">{i + 1}</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/ai-builder">
                    <Button className="vibe-button gap-2">
                      Try AI Builder <Sparkles className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-vibe from-primary via-accent to-purple-500 rounded-2xl blur opacity-50 animate-pulse-glow"></div>
                <div className="vibe-card rounded-2xl p-6 backdrop-blur-sm bg-card/90 relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-background/80 to-background/40 rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                    <div className="vibe-blob absolute w-32 h-32 bg-primary/30 blur-xl animate-float"></div>
                    <div
                      className="vibe-blob absolute w-32 h-32 bg-accent/30 blur-xl animate-float"
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <Sparkles className="h-12 w-12 text-primary animate-pulse-glow" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500"></div>
                      <div>
                        <h4 className="font-medium">Your Vibe Space</h4>
                        <p className="text-sm text-muted-foreground">AI-generated design</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-foreground/10 rounded-md w-3/4"></div>
                      <div className="h-4 bg-foreground/10 rounded-md w-full"></div>
                      <div className="h-4 bg-foreground/10 rounded-md w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-foreground/10 rounded-lg"></div>
                      <div className="aspect-square bg-foreground/10 rounded-lg"></div>
                      <div className="aspect-square bg-foreground/10 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

          <div className="container max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold vibe-gradient-text mb-4">Features That Set Us Apart</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vibe offers unique features that let you express yourself in ways other platforms can't match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Music className="h-6 w-6 text-white" />,
                  title: "Music Integration",
                  description: "Add your favorite tracks to your profile to set the mood for visitors.",
                },
                {
                  icon: <Zap className="h-6 w-6 text-white" />,
                  title: "Interactive Elements",
                  description: "Create interactive experiences with mini-games and animations.",
                },
                {
                  icon: <Palette className="h-6 w-6 text-white" />,
                  title: "Custom Themes",
                  description: "Choose from hundreds of themes or create your own with our editor.",
                },
                {
                  icon: <Users className="h-6 w-6 text-white" />,
                  title: "Community Spaces",
                  description: "Create and join communities based on shared interests and vibes.",
                },
                {
                  icon: <Lock className="h-6 w-6 text-white" />,
                  title: "Secure Content",
                  description: "Share exclusive content safely with age verification and paywalls.",
                },
                {
                  icon: <DollarSign className="h-6 w-6 text-white" />,
                  title: "Creator Earnings",
                  description: "Monetize your content and earn through our secure payment system.",
                },
              ].map((feature, i) => (
                <div key={i} className="vibe-card rounded-xl p-6 flex flex-col h-full">
                  <div className="h-12 w-12 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold vibe-gradient-text mb-6">Choose Your Vibe Level</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Select the plan that best fits your needs and start vibing today!
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="vibe-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-2">Basic Vibe</h3>
                <div className="text-3xl font-bold mb-6">Free</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Create your Vibe space</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Basic customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Ad-supported</span>
                  </li>
                </ul>
                <Button variant="outline" className="vibe-button-outline w-full">
                  Get Started
                </Button>
              </div>

              <div className="vibe-card rounded-xl p-8 relative">
                <div className="absolute -top-3 right-8 bg-gradient-vibe from-primary via-accent to-purple-500 px-4 py-1 text-sm font-medium rounded-full text-white">
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Vibe+</h3>
                <div className="text-3xl font-bold mb-6">
                  $9.99<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Ad-free experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Advanced customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Exclusive themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="vibe-button w-full">Upgrade to Vibe+</Button>
              </div>

              <div className="vibe-card rounded-xl p-8 relative">
                <div className="absolute -top-3 right-8 bg-gradient-vibe from-purple-500 via-pink-500 to-red-500 px-4 py-1 text-sm font-medium rounded-full text-white">
                  Creator
                </div>
                <h3 className="text-2xl font-bold mb-2">Vibe Pro+</h3>
                <div className="text-3xl font-bold mb-6">
                  $29.99<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>All Vibe+ features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Monetization tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Payout system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">✓</span>
                    </div>
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="vibe-button w-full">Upgrade to Vibe Pro+</Button>
              </div>
            </div>
          </div>
        </section>

        {/* rest of the code */}
      </main>

      <footer className="border-t border-border/40 py-12 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500"></div>
                <h2 className="text-2xl font-bold vibe-gradient-text">VibePlay</h2>
              </div>
              <p className="text-muted-foreground mt-2">Come vibe with us</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 text-center md:text-left">
              <div>
                <h3 className="font-medium mb-2">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-builder" className="text-muted-foreground hover:text-foreground transition-colors">
                      AI Builder
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/tutorials" className="text-muted-foreground hover:text-foreground transition-colors">
                      Tutorials
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} VibePlay. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

