"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
  Code,
} from "lucide-react"
// import { ChevronDown } from "lucide-react"


export function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 wrapper">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 gap-10">
            <div className="flex gap-2">
              <Link href="/">
                <img src="/creda.svg" alt="Creda" className="h-8 w-auto" />
              </Link>
              <Link href="/" className="text-xl font-bold tracking-tight">
                <p>Creda</p>
              </Link>
            </div>
            <Link href="https://creda-1.gitbook.io/creda-docs/" target="_blank" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/launchpad">
              <Button variant="default" size="sm">
                Launchpad
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <Code className="w-4 h-4 mr-2" />
                Developer Hub
              </Button>
            </Link>
          </div>
        </div>  
      </div>
    </header>
  )
}

export default Header;