import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Search, Globe, Server, FileText, TrendingUp, Zap, Shield } from "lucide-react"

import type { Metadata } from "next";

export const metadata = {
  alternates: {
    canonical: "https://www.rankboost.africa/",
  },
};
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance text-foreground">
                Elevate Your Digital Presence with RankBoost
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                From expert SEO to full web development, hosting, and copywriting, we provide growth-driven digital
                services that help your business stand out in local and global search engine markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/packages">
                    View Packages <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Digital Marketing Experts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Powered by Sabeconnect under Sabe Investment Holdings (Pty) Ltd, Rankboost brings together a dedicated team
                of digital experts to deliver high-performance marketing solutions that accelerate growth and produce measurable results.
              </p>
              <Button asChild variant="link" className="text-primary">
                <Link href="/about">
                  Read Our Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Results-Driven</CardTitle>
                  <CardDescription>
                    We focus on delivering measurable outcomes that impact your bottom line.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fast Delivery</CardTitle>
                  <CardDescription>
                    Quick turnaround times without compromising on quality or attention to detail.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Powered By</CardTitle>
                  <CardDescription>
                    Sabe Investment Holdings (Pty) Ltd and partners, ensuring reliability and professionalism.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Search Engine Optimization</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
Maximize your visibility and organic performance with our tailored SEO strategies for local, regional, and national audiences.              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h2><CardTitle>Local Optimization Package</CardTitle></h2>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">From R2,000/pm</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Perfect for local businesses targeting specific geographic areas.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/seo-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=Local SEO Package">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h2><CardTitle>Regional Optimization Package</CardTitle></h2>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">From R3,000/pm</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Expand your reach across multiple cities and regions.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/seo-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=Regional SEO Package">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h2><CardTitle>National Optimization Package</CardTitle></h2>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">From R4,000/pm</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Dominate search results across the entire country.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/seo-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=National SEO Package">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h2><CardTitle>PPC & Copywriting</CardTitle></h2>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">Custom Quote</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Paid advertising and professional content creation services.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/seo-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/seo-services">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Web Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Web Development & Hosting</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional website creation and reliable hosting solutions for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3><CardTitle>E-Commerce Sites</CardTitle></h3>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">From R8,000 - R20,000</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Full-featured online stores with secure payment integration. Pricing range advertised is subject to product count. This range may change upon final quotation.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/web-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=E-Commerce Website Development">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3><CardTitle>WordPress Sites</CardTitle></h3>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">From R5,000</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    We design high-performing websites tailored to match your business goals, brand identity, functionality requirements, and long-term digital growth needs.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/web-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=WordPress Website Development">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Server className="h-8 w-8 text-accent" />
                  </div>
                  <h3><CardTitle>Hosting & Maintenance</CardTitle></h3>
                  <CardDescription className="text-2xl font-bold text-accent mt-2">From R500/pm</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Our hosting delivers reliable performance, routine updates, strong security, responsive support, and consistent uptime to keep your website stable and secure.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/web-services">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=Website Hosting and Maintenance">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* On-the-Go Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">On-the-Go Packages</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quick-start solutions for new websites and comprehensive audits for existing sites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors flex flex-col">
                <CardHeader>
                  <h3><CardTitle className="text-2xl">New Website Package</CardTitle></h3>
                  <CardDescription className="text-3xl font-bold text-accent mt-2">From R2,500</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">5 Page design & development on WordPress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">FREE Domain setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Standard logo design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Mobile responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Secure SSL certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Google Search Console activation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Google Analytics activation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Video Call Support</span>
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-6">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/packages">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=New Website Package">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors flex flex-col">
                <CardHeader>
                  <h3><CardTitle className="text-2xl">Existing Website Package</CardTitle></h3>
                  <CardDescription className="text-3xl font-bold text-accent mt-2">From R3,000</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Technical SEO audit, report & fixes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Priority and commercial page optimization (2 pages)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Mobile responsiveness audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Site loading speed analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Technical errors, issues & warnings report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Keyword gap analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Detailed reporting & recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">Video Call Support</span>
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-6">
                    <Button asChild variant="outline" className="flex-1 bg-background">
                      <Link href="/packages">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/contact?service=Existing Website Package">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Boost Your Online Presence?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Let's discuss how RankBoost can help your business grow with our comprehensive digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/seo-services">
                    View Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/about">Learn More About Us</Link>
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