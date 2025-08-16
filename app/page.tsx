import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: `url('/chattogram-port-sunset.png')`,
          }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/20 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in-up">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-slide-up">
            Chattogram Port's Premier
            <br />
            <span className="text-accent animate-glow">Shipping Solutions</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in-delayed">
            Heritage Shipping Limited connects Bangladesh to the world through reliable maritime logistics, crew
            immigration services, and comprehensive supply chain solutions from Chattogram Port.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delayed">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black font-sans text-lg px-8 py-4 w-full sm:w-auto font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Our Services
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-sans text-lg px-8 py-4 bg-transparent w-full sm:w-auto font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "50+", label: "Countries Served" },
              { number: "10K+", label: "Shipments Delivered" },
              { number: "99.5%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-2 animate-fade-in-up group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="font-serif font-bold text-3xl md:text-4xl text-primary group-hover:text-accent transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="font-sans text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="space-y-4">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">
                  Maritime Excellence Since 1999
                </h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  Based at Chattogram Port, Heritage Shipping Limited has been Bangladesh's trusted maritime partner,
                  connecting local businesses to global markets through innovative shipping solutions and expert crew
                  services.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    title: "Reliability",
                    desc: "Trusted by thousands",
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    title: "Efficiency",
                    desc: "On-time delivery",
                  },
                  {
                    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Local Expertise",
                    desc: "Chattogram Port specialists",
                  },
                  {
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                    title: "Excellence",
                    desc: "Industry leading",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-foreground">{item.title}</h3>
                      <p className="font-sans text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Learn More About Us
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="Chattogram Port operations - Heritage Shipping"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg animate-bounce-subtle">
                <div className="font-serif font-bold text-2xl">ISO 9001</div>
                <div className="font-sans text-sm">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-accent rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-primary rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Comprehensive Maritime Solutions
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              From sea freight to crew immigration services, we offer end-to-end logistics solutions tailored to
              Bangladesh's maritime industry needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                title: "Sea Freight",
                description: "Reliable ocean shipping from Chattogram Port with global coverage and competitive rates.",
              },
              {
                icon: "M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "Warehousing",
                description: "Secure storage facilities at Chattogram Port with advanced inventory management.",
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Customs Clearance",
                description: "Expert Bangladesh customs brokerage and documentation services.",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Crew Immigration",
                description: "Complete seafarer visa processing, work permits, and crew change services.",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Supply Chain Solutions",
                description: "End-to-end supply chain management and optimization services.",
              },
              {
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Logistics Consulting",
                description: "Expert consultation for optimizing your maritime logistics operations.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-l-4 border-l-transparent hover:border-l-accent"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                View All Services
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
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
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="animate-wave-delayed"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Ready to Ship with Heritage?</h2>
          <p className="font-sans text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Get a personalized quote for your shipping needs or track your existing shipments with our advanced tracking
            system. Experience Bangladesh's premier maritime services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black font-sans w-full sm:w-auto font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Request a Quote
              </Button>
            </Link>
            <Link href="/track">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-sans bg-transparent w-full sm:w-auto font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Track Shipment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
