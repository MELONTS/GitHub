"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* LEFT — Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">RB</span>
          </div>
      <div className="hidden md:flex flex-col">
        <span className="text-lg font-bold leading-none">RANKBOOST</span>
        <span className="text-xs text-muted-foreground">.AFRICA</span>
      </div>
    </Link>

  {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-primary">Home</Link>
          <Link href="/about" className="text-sm hover:text-primary">About</Link>         
          <Menubar className="border-none p-0">
            <MenubarMenu>
              <MenubarTrigger className="px-3 py-1">Services</MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <Link href="/seo-services">SEO Services</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link href="/web-services">Web Services</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link href="/packages">Packages</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        <div className="md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="px-3 py-1">Menu</MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild><Link href="/">Home</Link></MenubarItem>
                <MenubarItem asChild><Link href="/about">About</Link></MenubarItem>
                <MenubarItem asChild><Link href="/seo-services">SEO Services</Link></MenubarItem>
                <MenubarItem asChild><Link href="/web-services">Web Services</Link></MenubarItem>
                <MenubarItem asChild><Link href="/packages">Packages</Link></MenubarItem>
                <MenubarItem asChild><Link href="/contact">Contact</Link></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* DESKTOP CTA */}
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Get Started</Link>
        </Button>

      </div>
    </header>
  )
}