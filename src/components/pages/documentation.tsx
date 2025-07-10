import { Button } from "@/components/ui/button"
import { Book, Code, MessageSquare, FileText } from "lucide-react"

const resources = [
  {
    icon: Book,
    title: "API Documentation",
    description: "Complete API reference with interactive examples and code samples.",
    link: "View Docs",
  },
  {
    icon: Code,
    title: "SDK Libraries",
    description: "Official SDKs and libraries for popular programming languages.",
    link: "Browse SDKs",
  },
  {
    icon: MessageSquare,
    title: "Developer Community",
    description: "Join our Discord community to connect with other developers.",
    link: "Join Discord",
  },
  {
    icon: FileText,
    title: "Guides & Tutorials",
    description: "Step-by-step guides and tutorials to help you get started quickly.",
    link: "View Guides",
  },
]

export function Documentation() {
  return (
    <section className="py-24 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Developer resources</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build with BitLoyal, from documentation to community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/20 border border-gray-700/30 rounded-lg p-6 h-full hover:border-gray-600/50 hover:bg-gray-900/30 transition-all backdrop-blur-sm">
                <div className="mb-4">
                  <resource.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{resource.description}</p>
                <Button variant="link" className="text-blue-400 p-0 h-auto group-hover:text-blue-300">
                  {resource.link} →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Ready to start building?</h3>
            <p className="text-gray-300 mb-6">
              Get your API key and start integrating Web3 loyalty rewards in minutes.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-medium">Get API Key</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
