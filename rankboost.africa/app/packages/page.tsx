import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Zap, CheckCircle2, ArrowRight } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RankBoost | SA's Best Ditigal Service Packages",
  description:
    "Comprehensive digital web services: SEO, web development, hosting and copywriting to improve visibility, boost rankings and drive real business growth.",
    alternates: {
    canonical: "https://www.rankboost.africa/packages",
  },
};
export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-foreground">Recommended On-the-Go Packages</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Powerful digital marketing packages for worldwide businesses, SMEs, and Shopify stores, delivering quick setup, website optimization, and reliable growth across all digital channels.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* New Website Package */}
              <Card className="border-2 border-primary/30 hover:border-primary/50 transition-colors relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                </div>
                <CardHeader className="pb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h2><CardTitle className="text-3xl">New Web Development</CardTitle></h2>
                  <CardDescription className="text-4xl font-bold text-primary mt-4">From R2,500</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Everything you need to launch a professional 5-page website on WordPress. Perfect for small
                    businesses, startups, and entrepreneurs.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">What's Included:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">5 Page Design & Development</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Professional WordPress website with up to 5 pages
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">FREE Domain Setup</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            We'll help you register and configure your domain
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Standard Logo Design</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Professional logo to represent your brand
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Mobile Responsive Design</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Looks great on all devices and screen sizes
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Secure SSL Certification</span>
                          <p className="text-xs text-muted-foreground mt-0.5">HTTPS security for your website</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Google Search Console Activation</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Get indexed by Google search</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Google Analytics Activation</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Track your website visitors and performance
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Video Call</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Engage in a detailed video call to discuss your project requirements and vision
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Perfect for:</strong> New businesses, startups, personal
                      brands, and anyone looking to establish an online presence quickly and affordably.
                    </p>
                  </div>

                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact?service=New Website Package">
                      Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Existing Website Package */}
              <Card className="border-2 border-accent/30 hover:border-accent/50 transition-colors">
                <CardHeader className="pb-6">
                  <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <h2><CardTitle className="text-3xl">Existing Web Development</CardTitle></h2>
                  <CardDescription className="text-4xl font-bold text-accent mt-4">From R3,000</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive audit and optimization for your existing website. Identify issues, fix problems, and
                    improve performance.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">What's Included:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            Technical SEO Audit, Report & Fixes
                          </span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Comprehensive analysis and implementation of fixes
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Priority Page Optimization</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Fix and optimize 2 commercial pages for better performance
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Mobile Responsiveness Audit</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Ensure your site works perfectly on all devices
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Site Loading Speed Analysis</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Identify and fix performance bottlenecks
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Technical Error Report</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Detailed report of all issues, warnings, and errors
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Keyword Gap Analysis</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Discover missed keyword opportunities</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            Detailed Reporting & Recommendations
                          </span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Actionable insights for ongoing improvement
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Video Call</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Get to discuss your project requirements and vision
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Perfect for:</strong> Businesses with existing websites that
                      need optimization, performance improvements, or SEO enhancements.
                    </p>
                  </div>

                  <Button asChild className="w-full" size="lg" variant="secondary">
                    <Link href="/contact?service=Existing Website Package">
                      Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* All Services Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold text-foreground">Need More Than a Package?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore our full range of services for ongoing support and growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <h3><CardTitle>SEO Services</CardTitle></h3>
                    <CardDescription>From R2,000/month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Ongoing SEO optimization with local, regional, and national packages available.
                    </p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/seo-services">View SEO Services</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <h3><CardTitle>Web Development</CardTitle></h3>
                    <CardDescription>From R5,000/month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Custom WordPress sites, e-commerce platforms, and ongoing hosting & maintenance.
                    </p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/web-services">View Web Services</Link>
                    </Button>
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
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Get Started?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Choose the package that's right for you, or contact us to discuss a custom solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/">Back to Home</Link>
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