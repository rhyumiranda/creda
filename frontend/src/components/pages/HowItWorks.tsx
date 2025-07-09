import { Button } from "@/components/ui/button"

const steps = [
  {
    step: "01",
    title: "Install SDK",
    description: "Add our lightweight SDK to your application with a single command.",
    code: "npm install @loyaltysdk/core",
  },
  {
    step: "02",
    title: "Configure Rewards",
    description: "Set up your reward rules and currency system through our dashboard.",
    code: 'const loyalty = new LoyaltySDK({ apiKey: "your-key" })',
  },
  {
    step: "03",
    title: "Track Interactions",
    description: "Automatically reward customers for purchases, referrals, and engagement.",
    code: 'loyalty.trackEvent("purchase", { amount: 100 })',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get started in minutes</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to integrate loyalty rewards into your application.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4">
                  <span className="text-sm font-mono text-gray-500">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">{step.description}</p>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-900 bg-transparent">
                  Learn more
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}