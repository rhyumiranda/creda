import { Shield, Zap, Globe, Code, Coins, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Developer-First",
    description: "Simple SDK integration with comprehensive documentation and TypeScript support.",
  },
  {
    icon: Coins,
    title: "Seamless Onboarding",
    description: "Create your organization and loyalty token in minutes—no complex setup required.",
  },
  {
    icon: Zap,
    title: "Secure by Design",
    description: "Every API call is protected by unique secret keys, ensuring only authorized access.",
  },
  {
    icon: Shield,
    title: "Flexible Token System",
    description: "Mint, distribute, and manage tokens effortlessly across users within your organization.",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description: "Built on Next.js and Supabase for reliable, scalable, and real-time performance.",
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Embed loyalty and rewards into any app or website without reinventing the wheel.",
  },
]

export function Features() {
  return (
    <section className="py-24 border-t border-gray-800/5  0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to build loyalty</h2>
          <p className="text-l text-gray-400 max-w-2xl mx-auto">
            Powerful tools and APIs designed for modern applications and developer workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 h-full hover:border-gray-700/50 transition-colors">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
``