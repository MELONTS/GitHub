import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Globe, Server, CheckCircle2, ArrowRight } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RankBoost | Best Web Development and Hosting Services",
  description:
    "Web development and web hosting services to create fast, reliable websites that enhance performance, improve user experience and support business growth.",
    alternates: {
    canonical: "https://www.rankboost.africa/web-services",
  },
};
export default function WebServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
                Best Web Development Services 2025</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                We specialize in delivering professional web development services paired with secure hosting solutions, 
                enabling growing businesses to launch and maintain strong, scalable, and high-performing websites.
                </p>
            </div>
          </div>
        </section>

        {/* Web Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* E-Commerce Development */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                       <h2><CardTitle className="text-2xl mb-2">How Our e-Commerce Web Development Works</CardTitle></h2>
                        <CardDescription className="text-3xl font-bold text-accent">
                          From R8,000 - R20,000*
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">One-time setup fee</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Full-featured online stores with secure payment integration, inventory management, and customer
                    accounts. Pricing depends on the number of products and custom features required.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Custom e-commerce design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Custom Shopify developement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Secure payment gateway integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Product catalog</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Shopping cart & checkout system</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Customer account management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Order tracking & management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Mobile responsive design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">SEO-friendly structure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Inventory management system</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Email notifications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Video call support</span>
                    </div>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">*Pricing Note:</strong> Final quote depends on the number of
                      products, custom features, and integration requirements and is not limited to the advertised package range.
                    </p>
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/contact?service=E-Commerce Website Development">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* WordPress Development */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h2><CardTitle className="text-2xl mb-2">WordPress Web Development</CardTitle></h2>
                        <CardDescription className="text-3xl font-bold text-accent">From R5,000</CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">One-time setup fee</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Professional WordPress web development tailored to your business needs. Perfect for corporate sites,
                    portfolios, blogs, and small business websites.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Custom WordPress theme</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Responsive mobile design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Content management system</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Contact form integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Social media integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">SEO optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Security features</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Video Call Support</span>
                    </div>
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/contact?service=WordPress Website Development">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Hosting & Maintenance */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Server className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h2><CardTitle className="text-2xl mb-2">Web Hosting Services & Maintenance</CardTitle></h2>
                        <CardDescription className="text-3xl font-bold text-accent">From R500/pm</CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">Monthly subscription</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Reliable web hosting services with regular updates, security monitoring, and technical support to keep your
                    website running smoothly.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Fast & reliable hosting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">99.9% uptime guarantee</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Regular backups</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Web Security monitoring</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Web Software & Plugin updates</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Technical & Video Call support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Performance optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">SSL certificate included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Email support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Monthly reports</span>
                    </div>
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/contact?service=Website Hosting and Maintenance">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Copywriting */}
              <Card className="border-2 border-primary/30 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">Professional Copywriting</CardTitle>
                        <CardDescription className="text-3xl font-bold text-accent">Custom Quote</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Compelling content that engages your audience and drives conversions. From website copy to blog
                    posts and product descriptions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Website content writing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Blog post creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Product descriptions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">SEO-optimized content</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Landing page copy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Email marketing content</span>
                    </div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Get a Custom Quote:</strong> Share your content needs with us,
                      and we'll provide a detailed proposal based on word count and complexity.
                    </p>
                  </div>
                  <Button asChild variant="secondary" className="mt-6">
                    <Link href="/contact?service=Professional Copywriting Services">
                      Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Build Your Website?</h2>
              <p className="text-lg text-accent-foreground/90 leading-relaxed">
                Let's create a professional website that represents your brand and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/packages">View All Packages</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                >
                  <Link href="/seo-services">Explore SEO Services</Link>
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