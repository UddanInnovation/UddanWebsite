import { Code, Cloud, Megaphone, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Development",
    description: "Custom web applications, mobile apps, and SaaS platforms built with modern technologies.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Cloud,
    title: "Deployment",
    description: "Cloud infrastructure, CI/CD pipelines, and DevOps solutions for seamless scaling.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO optimization, PPC campaigns, and social media strategies that drive growth.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Brain,
    title: "AI/ML & Data Science",
    description: "Predictive analytics, machine learning models, and intelligent automation solutions.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Our Core Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">{service.description}</CardDescription>
                <Button
                  variant="outline"
                  className="group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-orange-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
