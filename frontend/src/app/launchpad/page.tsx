import { LaunchpadForm } from "@/components/launchpad-form"
import Navbar from "@/components/Navbar"

export default function LaunchpadPage() {
  return (
    <div className="wrapper mt-24 min-h-screen bg-black text-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                Loyalty/Reward Launchpad
              </span>
            </h1>
            <p className="text-l text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Create and deploy your loyalty token with our comprehensive launchpad platform.
            </p>
          </div>
          <LaunchpadForm />
        </div>
      </main>
    </div>
  )
}