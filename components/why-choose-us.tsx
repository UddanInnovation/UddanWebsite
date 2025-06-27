import { CheckCircle, Users, Zap, Shield, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with 10+ years of industry experience",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick turnaround times",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security built into every solution we deliver",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality control for flawless performance",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "500+ successful projects delivered across various industries",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Why Choose InnovateTech?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
