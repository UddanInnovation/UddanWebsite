"use client"

import { useState } from "react"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Development",
    description: "Modern e-commerce solution with AI-powered recommendations and real-time analytics.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Development",
    description: "Comprehensive healthcare platform for patient management and telemedicine.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "PostgreSQL", "Docker", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Cloud Infrastructure Migration",
    category: "Infrastructure",
    description: "Migrated legacy systems to AWS with 99.9% uptime and 40% cost reduction.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "Multi-channel marketing campaign that increased ROI by 250% in 6 months.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Predictive Analytics Dashboard",
    category: "AI/ML",
    description: "Machine learning dashboard for sales forecasting and customer behavior analysis.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "Development",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Development", "Infrastructure", "Marketing", "AI/ML"]

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform through innovative
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 text-white"
                    : "hover:bg-gray-50"
                }
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <ExternalLink className="h-4 w-4" />
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
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white px-8 py-3"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
