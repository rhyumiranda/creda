"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 wrapper">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              <p>LNR</p>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm font-medium">Features</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm font-medium">Developers</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm font-medium">Resources</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/docs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/signin" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              <Button>Connect Wallet</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;