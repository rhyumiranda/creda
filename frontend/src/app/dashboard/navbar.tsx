
import { Button } from "@/components/ui/button"

import {
  Code,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
{/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Creda
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="font-medium">
                Dashboard
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Analytics
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Documentation
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Code className="w-4 h-4 mr-2" />
              Developer Hub
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
}

export default Header;