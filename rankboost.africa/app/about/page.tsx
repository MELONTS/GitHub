import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Target, Users, Award, Lightbulb } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RankBoost.Africa| Powered by Sabeconnect",
  description:
    "Learn how Rankboost.africa empower businesses with digital marketing and web development solutions.",
  alternates: {
    canonical: "https://www.rankboost.africa/about",
  },
};
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-foreground">About RankBoost</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Providing local and international businesses with world-class digital marketing and web development solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RankBoost.Africa operates under the trusted umbrella of{" "}
                  <strong className="text-foreground">Sabe Investment Holdings (Pty) Ltd</strong>, bringing together
                  expertise in digital marketing, web development, and business strategy to deliver exceptional results
                  for our clients.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in helping businesses establish and grow their online presence through
                  comprehensive SEO services, professional web development, reliable hosting solutions, and compelling
                  copywriting.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <Card className="border-2">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3><CardTitle>Our Mission</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower SMEs & businesses with cutting-edge digital solutions that drive growth, increase
                      visibility, and deliver measurable results in an ever-evolving online landscape.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-accent" />
                    </div>
                    <h3><CardTitle>Our Vision</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To become Africa's leading digital transformation partner, recognized for innovation, reliability,
                      and our commitment to helping businesses thrive in the digital age.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The principles that guide everything we do at RankBoost.Africa
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3><CardTitle>Excellence</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We strive for excellence in every project, delivering high-quality solutions that exceed
                      expectations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3><CardTitle>Partnership</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We always strive to maintain a lasting relationship with our clients, working as true partners in their success.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3><CardTitle>Innovation</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We stay ahead of digital trends, continuously innovating to provide cutting-edge solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold text-foreground">Why Choose RankBoost?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine global expertise with international standards
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <h3><CardTitle>International Market Expertise</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We understand the unique challenges and opportunities of the local and international markets, tailoring our
                      strategies to deliver results in your specific context.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <h3><CardTitle>Comprehensive Ditigal Marketing Services</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      From SEO to web development, hosting to copywriting, we offer a complete suite of digital services
                      under one roof, ensuring seamless integration and consistent quality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <h3><CardTitle>Proven Track Record</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Backed by Sabe Investment Holdings (Pty) Ltd, we bring corporate reliability and professionalism to
                      every project, with a proven track record of delivering results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <h3><CardTitle>Transparent Pricing</CardTitle></h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      No hidden fees or surprises. We offer clear, competitive pricing with packages designed to fit
                      businesses of all sizes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Work Together?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Let's discuss how we can help your business achieve its digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/packages">View Our Packages</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/seo-services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}