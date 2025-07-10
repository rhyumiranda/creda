import { Button } from "@/components/ui/button"
import { Check, Shield, Zap, Crown } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started and small projects",
    features: ["10,000 API calls/month", "Basic analytics", "Email support", "Standard webhooks", "Community access"],
    cta: "Start Free",
    popular: false,
    icon: Zap,
    trustBadge: "No credit card required",
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing applications and businesses",
    features: [
      "100,000 API calls/month",
      "Advanced analytics",
      "Priority support",
      "Custom webhooks",
      "Team collaboration",
      "99.9% SLA",
    ],
    cta: "Start Pro Trial",
    popular: true,
    icon: Shield,
    trustBadge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications with custom needs",
    features: [
      "Unlimited API calls",
      "Custom analytics",
      "Dedicated support",
      "Custom integrations",
      "SSO & advanced security",
      "99.99% SLA",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
    icon: Crown,
    trustBadge: "Enterprise-grade",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-gray-800/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/30 border border-gray-700/30 rounded-full px-4 py-2 text-sm text-gray-300 mb-4 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Transparent pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees or surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/20 border rounded-lg p-8 backdrop-blur-sm trust-badge ${
                plan.popular ? "border-blue-400 bg-gray-900/30 ring-1 ring-blue-400/20" : "border-gray-700/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>
                <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  {plan.trustBadge}
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                    : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-900/50"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/20 border border-gray-700/30 rounded-lg p-6 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">30-day money-back guarantee</div>
              </div>
              <div>
                <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Instant activation</div>
              </div>
              <div>
                <Crown className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Enterprise support</div>
              </div>
              <div>
                <Check className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">No setup fees</div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            All plans include our core API features. Need something custom?
            <Button variant="link" className="text-blue-400 p-0 ml-1 h-auto hover:text-blue-300">
              Contact us
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
