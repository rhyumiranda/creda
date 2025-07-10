"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const codeExamples = {
  javascript: `// Initialize BitLoyal SDK
import { BitLoyal } from '@bitloyal/sdk';

const bitloyal = new BitLoyal({
  apiKey: 'your-api-key',
  network: 'mainnet' // or 'testnet'
});

// Create a reward campaign
const campaign = await bitloyal.campaigns.create({
  name: 'Purchase Rewards',
  type: 'points',
  rules: {
    event: 'purchase',
    multiplier: 10 // 10 points per $1
  }
});

// Track user activity
await bitloyal.events.track({
  userId: 'user_123',
  event: 'purchase',
  properties: {
    amount: 99.99,
    currency: 'USD'
  }
});`,

  curl: `# Create a reward campaign
curl -X POST https://api.bitloyal.com/v1/campaigns \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Purchase Rewards",
    "type": "points",
    "rules": {
      "event": "purchase",
      "multiplier": 10
    }
  }'

# Track user event
curl -X POST https://api.bitloyal.com/v1/events \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userId": "user_123",
    "event": "purchase",
    "properties": {
      "amount": 99.99,
      "currency": "USD"
    }
  }'`,

  python: `# Install: pip install bitloyal
from bitloyal import BitLoyal

# Initialize client
client = BitLoyal(api_key='your-api-key')

# Create reward campaign
campaign = client.campaigns.create(
    name='Purchase Rewards',
    type='points',
    rules={
        'event': 'purchase',
        'multiplier': 10
    }
)

# Track user activity
client.events.track(
    user_id='user_123',
    event='purchase',
    properties={
        'amount': 99.99,
        'currency': 'USD'
    }
)`,
}

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("javascript")

  return (
    <section className="py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Simple integration, powerful results</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Get started with just a few lines of code. Our REST API and SDKs make it easy to integrate Web3 loyalty
              rewards into any application.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200">RESTful API with comprehensive documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200">SDKs for JavaScript, Python, and more</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200">Real-time webhooks and events</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="flex border-b border-gray-700/50">
              {Object.keys(codeExamples).map((lang) => (
                <Button
                  key={lang}
                  variant="ghost"
                  size="sm"
                  className={`rounded-none border-b-2 ${
                    activeTab === lang
                      ? "border-blue-400 text-white bg-gray-800/30"
                      : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/20"
                  }`}
                  onClick={() => setActiveTab(lang as keyof typeof codeExamples)}
                >
                  {lang === "javascript" ? "JavaScript" : lang === "curl" ? "cURL" : "Python"}
                </Button>
              ))}
            </div>
            <div className="p-6">
              <pre className="text-sm text-gray-200 font-mono overflow-x-auto">
                <code>{codeExamples[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
