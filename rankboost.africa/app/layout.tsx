import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RankBoost | SEO, Web Development & Hosting Experts",
  description:
    "Grow your rankings with expert SEO, web development, hosting, and copywriting services. Get ranked higher and drive real results.",

  icons: {
    icon: "/sabeconnect-logo.jpg", // path to your favicon in /public
    shortcut: "/sabeconnect-logo.jpg",
    apple: "/sabeconnect-logo.jpg", // optional
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load gtag.js after the page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GKVD70ZN3Q"
          strategy="afterInteractive"
        />
        {/* Initialize gtag */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GKVD70ZN3Q');
            `,
          }}
        />
      </head>
<body className={`font-sans antialiased`}>
  {children}
  <Analytics />
</body>
    </html>
  )
}