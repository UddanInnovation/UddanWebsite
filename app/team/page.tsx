"use client"

import { useState } from "react"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech industry. Expert in business strategy and digital transformation.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Technical architect specializing in cloud infrastructure and scalable systems. Former Google engineer.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Development",
    bio: "Full-stack developer with expertise in React, Node.js, and modern web technologies.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Emily Davis",
    role: "AI/ML Lead",
    bio: "Data scientist and machine learning expert. PhD in Computer Science from Stanford.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist with expertise in AWS, Docker, and Kubernetes. Automation enthusiast.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Director",
    bio: "Growth hacker with proven track record in SEO, PPC, and social media marketing strategies.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
]

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our diverse team of experts brings together decades of experience in technology, innovation, and business
              transformation to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredMember === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Want to Join Our Team?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white px-8 py-3"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
