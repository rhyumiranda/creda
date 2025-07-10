import { Button } from "@/components/ui/button"

const steps = [
  {
    step: "01",
    title: "Install SDK",
    description: "Install our SDK package to get started with BitLoyal integration.",
    code: `npm install @bitloyal/sdk`,
  },
  {
    step: "02",
    title: "Get API Key",
    description: "Sign up and get your API key from the dashboard. Start with our generous free tier.",
    code: `curl -H "Authorization: Bearer your-api-key" \\
     https://api.bitloyal.com/v1/account`,
  },
  {
    step: "03",
    title: "Create Campaign",
    description: "Define your reward rules and campaign parameters using our API or dashboard.",
    code: `const campaign = await bitloyal.campaigns.create({
  name: 'Welcome Bonus',
  type: 'tokens',
  amount: 100,
  trigger: 'signup'
});`,
  },
  {
    step: "04",
    title: "Track Events",
    description: "Start tracking user events and automatically distribute rewards based on your rules.",
    code: `await bitloyal.events.track({
  userId: 'user_123',
  event: 'signup',
  metadata: { source: 'web' }
});`,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get started in minutes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Four simple steps to integrate Web3 loyalty rewards into your application.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="mb-4">
                  <span className="text-sm font-mono text-blue-400">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-900/50 bg-transparent">
                  Learn more
                </Button>
              </div>
              <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                <pre className="text-sm text-gray-200 font-mono overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
