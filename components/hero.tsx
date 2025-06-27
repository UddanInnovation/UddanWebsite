import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50 opacity-50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Innovative IT Solutions for{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
              Tomorrow's World
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            We transform businesses through cutting-edge technology, delivering scalable solutions in development,
            deployment, digital marketing, and AI/ML that drive real results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
    </section>
  )
}
