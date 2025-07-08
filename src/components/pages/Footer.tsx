import Link from "next/link"

const footerLinks = {
  Product: ["Features", "Documentation", "API Reference", "SDKs", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Community", "Help Center", "Guides", "Webinars", "Security"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses", "Settings"],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-black">
        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} LoyaltySDK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Discord
            </Link>
          </div>
        </div>
    </footer>
  )
}
