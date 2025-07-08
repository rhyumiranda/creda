import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Ready to build loyalty?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of developers who trust LoyaltySDK to power their customer retention strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-900 bg-transparent">
              Talk to Sales
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">Free tier available • No credit card required</p>
        </div>
      </div>
    </section>
  )
}
