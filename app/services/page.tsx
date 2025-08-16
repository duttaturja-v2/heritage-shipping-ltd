import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ShipIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 18h18v-2H3v2zm.5-5L12 4l8.5 9H3.5z" />
  </svg>
)

const PlaneIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
)

const TruckIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
)

const WarehouseIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.7L18.3 12H17v6H7v-6H5.7L12 5.7z" />
  </svg>
)

const FileCheckIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2s2-.89 2-2v-5l-6-6h7v5h5v11zm-9.5-7L10 14.5l1.5-1.5L15 16.5 13.5 18 10 14.5 8.5 13z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.35.47-.35 1.1 0 1.58l2.54 3.38c.47.62 1.21.99 2.01.99h1.54c.69 0 1.32-.42 1.58-1.05L22 14v8h-2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 16v-7H9l-1.5-4.5c-.19-.56-.76-.95-1.38-.95H4.88c-.62 0-1.19.39-1.38.95L2 15h2v7h3z" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
)

const SmallCheckIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const SmallZapIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
)

const SmallGlobeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.5 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

const SmallClockIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
  </svg>
)

const SmallShieldIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
)

const ContainerIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
  </svg>
)

const PackageIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3 3h4v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5h4l3-3zm0 2.83L10.83 6H7v13h10V6h-3.83L12 4.83z" />
  </svg>
)

export default function ServicesPage() {
  const services = [
    {
      icon: ShipIcon,
      title: "Sea Freight",
      subtitle: "Ocean Shipping Solutions",
      description:
        "Comprehensive ocean freight services from Chattogram Port connecting to major destinations worldwide with reliable, cost-effective shipping solutions.",
      features: [
        "Full Container Load (FCL)",
        "Less than Container Load (LCL)",
        "Break Bulk Cargo",
        "Project Cargo Handling",
        "Temperature Controlled Shipping",
        "Hazardous Materials Transport",
      ],
      benefits: [
        "Cost-effective for large shipments",
        "Chattogram Port expertise",
        "Flexible scheduling options",
        "Real-time tracking",
      ],
    },
    {
      icon: WarehouseIcon,
      title: "Warehousing",
      subtitle: "Storage & Distribution",
      description:
        "Modern warehousing facilities in Chattogram with advanced inventory management and distribution services.",
      features: [
        "Climate-Controlled Storage",
        "Inventory Management",
        "Pick & Pack Services",
        "Cross-Docking",
        "Value-Added Services",
        "Port-Adjacent Storage",
      ],
      benefits: [
        "Secure storage facilities",
        "Advanced WMS systems",
        "Flexible storage terms",
        "Strategic port location",
      ],
    },
    {
      icon: FileCheckIcon,
      title: "Customs Clearance",
      subtitle: "Trade Compliance",
      description:
        "Expert customs brokerage services at Chattogram Port ensuring smooth clearance and compliance with Bangladesh trade regulations.",
      features: [
        "Import/Export Documentation",
        "Duty & Tax Calculation",
        "Trade Compliance Consulting",
        "Customs Bond Services",
        "Port Authority Liaison",
        "Regulatory Updates",
      ],
      benefits: ["Local regulatory expertise", "Compliance assurance", "Reduced clearance times", "Cost optimization"],
    },
    {
      icon: UsersIcon,
      title: "Crew Immigration",
      subtitle: "Maritime Personnel Services",
      description:
        "Comprehensive crew immigration and documentation services for maritime personnel, ensuring compliance with international maritime regulations.",
      features: [
        "Seafarer Visa Processing",
        "Work Permit Applications",
        "Medical Certificate Coordination",
        "STCW Documentation",
        "Crew Change Services",
        "Immigration Compliance",
      ],
      benefits: ["Expert maritime knowledge", "Fast processing times", "Regulatory compliance", "24/7 crew support"],
    },
    {
      icon: NetworkIcon,
      title: "Supply Chain Solutions",
      subtitle: "End-to-End Management",
      description:
        "Comprehensive supply chain optimization and management services tailored to your business requirements with Chattogram Port as the hub.",
      features: [
        "Supply Chain Design",
        "Vendor Management",
        "Demand Planning",
        "Risk Management",
        "Performance Analytics",
        "Technology Integration",
      ],
      benefits: ["Optimized operations", "Cost reduction", "Improved visibility", "Strategic partnerships"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary-foreground/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-slide-up">
              Comprehensive Shipping <span className="text-accent animate-glow">Solutions</span>
            </h1>
            <p className="font-sans text-lg md:text-xl mb-8 opacity-90 leading-relaxed animate-fade-in-delayed">
              From sea freight to crew immigration, Heritage Shipping Limited offers complete logistics solutions from
              Chattogram Port designed to meet your unique business requirements with reliability and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up-delayed">
              <Badge
                variant="secondary"
                className="bg-accent text-black font-sans px-4 py-2 transform hover:scale-105 transition-all duration-300"
              >
                <SmallGlobeIcon />
                <span className="ml-2">150+ Global Destinations</span>
              </Badge>
              <Badge
                variant="secondary"
                className="bg-accent text-black font-sans px-4 py-2 transform hover:scale-105 transition-all duration-300"
              >
                <SmallClockIcon />
                <span className="ml-2">99.8% On-Time Delivery</span>
              </Badge>
              <Badge
                variant="secondary"
                className="bg-accent text-black font-sans px-4 py-2 transform hover:scale-105 transition-all duration-300"
              >
                <SmallShieldIcon />
                <span className="ml-2">ISO 9001 Certified</span>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up border-l-4 border-l-transparent hover:border-l-accent"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8 bg-muted group-hover:bg-gradient-to-br group-hover:from-muted group-hover:to-accent/5 transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <service.icon />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <p className="font-sans text-accent font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans w-fit transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Get Quote
                      <ArrowRightIcon />
                    </Button>
                  </CardHeader>

                  <CardContent className="p-8 group-hover:bg-gradient-to-bl group-hover:from-background group-hover:to-primary/5 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="animate-fade-in-left">
                        <h4 className="font-serif font-semibold text-lg text-foreground mb-4">Service Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 group/item hover:transform hover:translate-x-1 transition-all duration-200"
                            >
                              <SmallCheckIcon />
                              <span className="font-sans text-sm text-foreground group-hover/item:text-accent transition-colors duration-200">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="animate-fade-in-right">
                        <h4 className="font-serif font-semibold text-lg text-foreground mb-4">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 group/item hover:transform hover:translate-x-1 transition-all duration-200"
                            >
                              <SmallZapIcon />
                              <span className="font-sans text-sm text-foreground group-hover/item:text-accent transition-colors duration-200">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-accent rounded-full animate-spin-reverse"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-primary rounded-full animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
              Why Choose Heritage Shipping?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: ContainerIcon,
                  title: "Advanced Technology",
                  desc: "State-of-the-art tracking systems and digital platforms for complete shipment visibility.",
                },
                {
                  icon: PackageIcon,
                  title: "Flexible Solutions",
                  desc: "Customized logistics solutions tailored to meet your specific business requirements.",
                },
                {
                  icon: SmallShieldIcon,
                  title: "Trusted Partner",
                  desc: "25+ years of experience with a proven track record of reliable service delivery.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mx-auto mb-4 text-primary-foreground group-hover:bg-accent group-hover:rotate-6 transition-all duration-300">
                    <item.icon />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-20 text-primary-foreground/10"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="animate-wave"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up mb-4">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="font-sans text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our logistics experts today to discuss your shipping requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black font-sans transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
