"use client"

import { useState } from "react"
import { MapPin, Clock, DollarSign, Coffee, Heart, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Development",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description:
      "Join our development team to build cutting-edge web applications using React, Node.js, and modern technologies.",
    requirements: ["5+ years experience", "React/Node.js expertise", "TypeScript proficiency"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Help us scale our infrastructure and implement best practices for CI/CD, monitoring, and deployment.",
    requirements: ["AWS/GCP experience", "Docker/Kubernetes", "Infrastructure as Code"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    department: "Data Science",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $160k",
    description: "Develop and deploy machine learning models to solve complex business problems.",
    requirements: ["Python/TensorFlow", "ML model deployment", "Statistics background"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$70k - $90k",
    description: "Drive growth through SEO, PPC, and social media marketing strategies.",
    requirements: ["Google Ads certified", "SEO experience", "Analytics skills"],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
    requirements: ["Figma/Sketch proficiency", "User research experience", "Portfolio required"],
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Junior Developer",
    department: "Development",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$70k - $90k",
    description: "Start your career with us and learn from experienced developers in a supportive environment.",
    requirements: ["CS degree or bootcamp", "JavaScript knowledge", "Eager to learn"],
    posted: "4 days ago",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, and vision coverage",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and unlimited PTO",
  },
  {
    icon: Zap,
    title: "Professional Growth",
    description: "Learning budget, conference attendance, and mentorship programs",
  },
  {
    icon: Award,
    title: "Competitive Package",
    description: "Competitive salary, equity options, and performance bonuses",
  },
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredJobs = jobs.filter((job) => {
    const departmentMatch = selectedDepartment === "all" || job.department === selectedDepartment
    const typeMatch = selectedType === "all" || job.type === selectedType
    return departmentMatch && typeMatch
  })

  const departments = ["all", ...Array.from(new Set(jobs.map((job) => job.department)))]
  const types = ["all", ...Array.from(new Set(jobs.map((job) => job.type)))]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be part of a dynamic team that's shaping the future of technology. We're looking for passionate
              individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where innovation thrives and every team member can reach their full
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Find your next opportunity and grow your career with us.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">{job.title}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 text-white"
                    >
                      {job.department}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type} • Posted {job.posted}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No positions match your current filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't See the Right Position?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always interested in meeting talented individuals. Send us your resume and let's talk about future
              opportunities.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white px-8 py-3"
            >
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
