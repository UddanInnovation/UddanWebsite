import { Code, Cloud, Megaphone, Brain, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "development",
    icon: Code,
    title: "Development",
    description: "Custom web applications, mobile apps, and SaaS platforms built with modern technologies.",
    color: "text-red-500",
    bgColor: "bg-red-50",
    features: [
      "Custom Web Applications",
      "Mobile App Development (iOS & Android)",
      "SaaS Platform Development",
      "E-commerce Solutions",
      "API Development & Integration",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["React", "Node.js", "Python", "React Native", "Next.js", "TypeScript"],
  },
  {
    id: "deployment",
    icon: Cloud,
    title: "Deployment",
    description: "Cloud infrastructure, CI/CD pipelines, and DevOps solutions for seamless scaling.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    features: [
      "Cloud Infrastructure Setup",
      "CI/CD Pipeline Implementation",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security & Compliance",
      "Performance Optimization",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Monitoring Tools"],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO optimization, PPC campaigns, and social media strategies that drive growth.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Analytics & Reporting",
    ],
    technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "HubSpot"],
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI/ML & Data Science",
    description: "Predictive analytics, machine learning models, and intelligent automation solutions.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    features: [
      "Machine Learning Model Development",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Data Pipeline Architecture",
      "AI-Powered Automation",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark", "MLflow"],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation. From
              development to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${service.color}`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={service.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:to-blue-600 text-white px-8 py-3"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
