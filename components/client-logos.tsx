"use client"

import { useState } from "react"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120" },
  { name: "CloudSync", logo: "/placeholder.svg?height=60&width=120" },
  { name: "AI Solutions", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DevOps Pro", logo: "/placeholder.svg?height=60&width=120" },
  { name: "MarketGrow", logo: "/placeholder.svg?height=60&width=120" },
]

export default function ClientLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600">We're proud to work with some of the most innovative companies in the world.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className={`max-h-12 w-auto transition-all duration-300 ${
                  hoveredIndex === index ? "filter-none scale-110" : "filter grayscale hover:filter-none"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
