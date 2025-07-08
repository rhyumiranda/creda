"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { pb } from "@/lib/utils"
import { Avatar } from "@radix-ui/react-avatar"

export function Header() {
  const handleGithubAuth = async () => {
    try {
      const authData = await pb.collection("users").authWithOAuth2({
        provider: 'github'
      });
      console.log('Auth successful:', authData);
      // You can redirect or update UI state here
    } catch (error) {
      console.error('Auth failed:', error);
    }
  };

  const isLoggedIn = pb.authStore.record?.id;
  console.log('Is user logged in?', isLoggedIn); // Check if user is logged in

  const handleDisconnect = async () => {
    pb.authStore.clear();
    console.log('Disconnected from GitHub');
    console.log(pb.authStore.isValid); // Should be false after clearing
  }

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
            {isLoggedIn ? (
              <div className="w-8 h-8 rounded-full cursor-pointer bg-orange-300"></div>
            ) : (
              <Button onClick={handleGithubAuth} className="text-sm font-medium">
                Connect Wallet
              </Button>
            )}
            
            <Button onClick={handleDisconnect} className="text-sm font-medium">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;