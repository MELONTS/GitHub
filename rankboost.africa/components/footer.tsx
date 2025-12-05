import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">RB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-foreground">RANKBOOST</span>
                <span className="text-xs text-muted-foreground">.AFRICA</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional digital marketing and web development services.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://instagram.com/sabeconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/seo-services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/web-services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/web-services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Copywriting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Sabe Investment Holding (Pty) Ltd</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RankBoost.Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
