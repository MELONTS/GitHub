import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Search, Globe, TrendingUp, FileText, CheckCircle2, ArrowRight } from "lucide-react"


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RankBoost | Best SEO Services & Experts in 2025",
  description:
    "Professional SEO service to improve visibility, boost search rankings and drive steady organic traffic for long-term business growth.",
    alternates: {
    canonical: "https://www.rankboost.africa/seo-services",
  },
};
export default function SEOServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
                Best SEO Services in 2025
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
               Our SEO services are designed to boost your visibility across local and international search engine markets, increase organic traffic, 
               and improve your rankings through tailored strategies that support long-term digital growth.
               </p>
            </div>
          </div>
        </section>

        {/* SEO Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Local SEO */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Search className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h2> <CardTitle className="text-2xl mb-2">What are Local SEO Services?</CardTitle> </h2>
                        <CardDescription className="text-3xl font-bold text-accent">From R2,000/month</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for local businesses targeting specific geographic areas anywhere in the world. Dominate local search results and
                    attract customers in your area.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Video call support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Local keyword research</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Local competitor Analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Local citation building</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Monthly performance reports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">On-page SEO optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Review management support</span>
                    </div>
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/contact?service=Local SEO Package">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Regional SEO */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h2><CardTitle className="text-2xl mb-2">What are Regional SEO Services?</CardTitle></h2>
                        <CardDescription className="text-3xl font-bold text-accent">From R3,000/month</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Expand your reach across multiple cities and regions anywhere in the world. Ideal for businesses serving broader
                    geographic areas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Video call support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Multi-location SEO strategy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Regional keyword targeting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Content marketing strategy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Regional Outreach</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Regional competitor analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Bi-weekly progress updates</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Technical SEO audits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Schema markup implementation</span>
                    </div>
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/contact?service=Regional SEO Package">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* National SEO */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                       <h2><CardTitle className="text-2xl mb-2">What are National SEO Services?</CardTitle></h2>
                        <CardDescription className="text-3xl font-bold text-accent">From R4,000/month</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Dominate search results across the entire country from anywhere in the world. Our most comprehensive SEO package for businesses
                    with national reach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Video call support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Nationwide keyword strategy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Advanced content marketing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">National outreach</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">In-depth competitor analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Weekly performance reports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Advanced technical SEO</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Conversion rate optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Priority support & consultation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Brand reputation management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Custom reporting</span>
                    </div>
                  </div>
                  <Button asChild className="mt-6">
                    <Link href="/contact?service=National SEO Package">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* PPC & Copywriting */}
              <Card className="border-2 border-accent/30 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h2><CardTitle className="text-2xl mb-2">PPC & Copywriting Services</CardTitle></h2>
                        <CardDescription className="text-3xl font-bold text-accent">Custom Quote</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Professional paid advertising campaigns and compelling content creation tailored to your business
                    needs and budget.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Video call support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Google Ads campaign management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Social media advertising</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Display & remarketing campaigns</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Landing page copywriting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Blog content creation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Product descriptions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Email marketing copy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ad copy optimization</span>
                    </div>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Get a Custom Quote:</strong> Share your project brief with us,
                      and we'll provide a detailed proposal tailored to your specific needs and budget.
                    </p>
                  </div>
                  <Button asChild variant="secondary" className="mt-6">
                    <Link href="/contact?service=PPC and Copywriting Services">
                      Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Improve Your Search Rankings?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Let's discuss which services is right for your business and start driving more organic traffic today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link href="/packages">View All Packages</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/web-services">Explore Web Services</Link>
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