import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 vibe-gradient-text">About VibePlay</h1>
      <div className="space-y-6 prose prose-invert max-w-none">
        <p className="text-xl">
          VibePlay is more than just a social platform - it's a vibrant ecosystem where creativity thrives and
          connections flourish.
        </p>

        <section>
          <h2>Our Story</h2>
          <p>
            Founded in 2023, VibePlay emerged from a simple idea: to create a space where individuals could express
            themselves freely and connect with others who share their passions. Our founders, a diverse group of
            artists, technologists, and dreamers, envisioned a platform that would break down the barriers between
            creators and their audience, fostering a community of mutual inspiration and support.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            At VibePlay, our mission is to empower creative expression and build meaningful connections through
            innovative technology. We believe that everyone has a unique voice and perspective to share with the world,
            and we're committed to providing the tools and platform to make that possible.
          </p>
        </section>

        <section>
          <h2>What Sets Us Apart</h2>
          <ul>
            <li>
              <strong>AI-Powered Creativity:</strong> Our cutting-edge AI tools help you bring your vision to life,
              whether you're a seasoned artist or just starting out.
            </li>
            <li>
              <strong>Customizable Spaces:</strong> Your VibePlay profile is more than just a page - it's your own
              corner of the internet, fully customizable to reflect your unique style and personality.
            </li>
            <li>
              <strong>Community-Centric:</strong> We foster a supportive environment where creators can collaborate,
              learn from each other, and grow together.
            </li>
            <li>
              <strong>Fair Monetization:</strong> We believe creators should be fairly compensated for their work. Our
              platform provides various ways for you to monetize your content on your own terms.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Our Community</h2>
          <p>
            Whether you're an artist, musician, writer, or simply someone who appreciates creativity, there's a place
            for you on VibePlay. Join us in building a more vibrant, expressive, and connected world.
          </p>
          <div className="mt-4">
            <Link href="/signup">
              <Button className="vibe-button">Get Started Today</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

