import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeaderImage } from "@/components/leader-image"

export default function AboutPage() {
  const milestones = [
    {
      year: "1999",
      title: "Company Founded",
      description:
        "Heritage Shipping Limited established with a vision to revolutionize maritime logistics from Chattogram Port.",
    },
    {
      year: "2003",
      title: "First International Route",
      description: "Launched our first international shipping route connecting Bangladesh with global markets.",
    },
    {
      year: "2008",
      title: "Fleet Expansion",
      description: "Expanded operations and introduced specialized cargo handling services at Chattogram Port.",
    },
    {
      year: "2012",
      title: "Service Diversification",
      description: "Added warehousing and customs clearance services to complement our shipping offerings.",
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description: "Implemented advanced tracking systems and digital platforms for enhanced customer experience.",
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Launched comprehensive sustainability program with eco-friendly operations.",
    },
    {
      year: "2024",
      title: "Market Leadership",
      description:
        "Established as a leading maritime logistics provider from Chattogram Port with comprehensive services.",
    },
  ]

  const leadership = [
    {
      name: "Md. Rafiqul Islam",
      position: "Chairman & Founder",
      experience: "30+ years",
      bio: "Visionary leader who founded Heritage Shipping Limited and built it into a premier maritime logistics company from Chattogram Port.",
      linkedin: "#",
    },
    {
      name: "Nasir Ahmed",
      position: "Managing Director",
      experience: "25+ years",
      bio: "Strategic operations expert specializing in port logistics and international trade from Bangladesh.",
      linkedin: "#",
    },
    {
      name: "Fatema Khatun",
      position: "Executive Director",
      experience: "20+ years",
      bio: "Financial strategist with deep expertise in maritime finance and business development in South Asian markets.",
      linkedin: "#",
    },
    {
      name: "Mohammad Hassan",
      position: "Director of Operations",
      experience: "22+ years",
      bio: "Operations specialist driving efficiency and innovation in cargo handling and logistics solutions.",
      linkedin: "#",
    },
  ]

  const values = [
    {
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service that our clients can trust.",
    },
    {
      title: "Global Excellence",
      description: "Our network from Chattogram Port ensures seamless logistics solutions across major trade routes.",
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative approaches to enhance our services.",
    },
    {
      title: "Sustainability",
      description: "Committed to environmental responsibility through eco-friendly practices and green technologies.",
    },
    {
      title: "Partnership",
      description: "We build lasting relationships with clients, suppliers, and communities we serve.",
    },
    {
      title: "Quality",
      description: "ISO certified processes ensure the highest standards in all our operations.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-accent rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-accent rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-accent rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border border-accent rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              About <span className="text-accent">Heritage Shipping</span>
            </h1>
            <p className="font-sans text-lg md:text-xl mb-8 opacity-90 leading-relaxed animate-fade-in-delay">
              For over 25 years, Heritage Shipping Limited has been connecting Bangladesh to the world through reliable
              maritime logistics, innovative solutions, and unwavering commitment to excellence from Chattogram Port.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-sans font-semibold">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Since 1999
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-black font-sans font-semibold bg-transparent"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="m3 3 3 9-3 9 19-9z" />
                  <path d="m6 12 15-3" />
                </svg>
                25+ Years Growth
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-sans font-semibold">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
                </svg>
                Chattogram Port
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  To provide world-class maritime logistics solutions from Chattogram Port that connect Bangladesh to
                  global markets, enabling trade and commerce through reliable, efficient, and sustainable shipping
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  To be Bangladesh's most trusted maritime logistics partner, setting industry standards for innovation,
                  sustainability, and customer excellence in regional and international shipping.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">Our Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We exist to facilitate Bangladesh's trade growth by providing seamless logistics solutions that bring
                  local businesses closer to global markets and opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Core Values</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every service we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors">
                    <svg
                      className="h-6 w-6 text-primary group-hover:text-accent transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Journey</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to market leadership, explore the key milestones that shaped Heritage Shipping.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} group`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                          {milestone.year}
                        </div>
                        <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{milestone.title}</h3>
                        <p className="font-sans text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Leadership Team</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who guide Heritage Shipping's strategic vision and operational
              excellence from Chattogram Port.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden bg-gradient-to-br from-background to-muted/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="relative mb-6">
                    <div className="relative overflow-hidden rounded-full mx-auto w-32 h-32 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-primary/20 to-accent/20">
                      <LeaderImage
                        src={`/placeholder_j8n1g.png?key=j8n1g&height=128&width=128&text=${encodeURIComponent(leader.name.split(" ")[0])}`}
                        alt={leader.name}
                        fallbackSrc={`/placeholder.svg?height=128&width=128&text=${encodeURIComponent(leader.name.split(" ")[0])}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Button
                        size="icon"
                        className="bg-accent hover:bg-accent/90 text-black rounded-full w-10 h-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="font-sans text-accent font-semibold text-sm uppercase tracking-wide">
                      {leader.position}
                    </p>
                    <Badge
                      variant="outline"
                      className="font-sans bg-accent/20 text-accent border-accent/30 font-medium"
                    >
                      {leader.experience}
                    </Badge>
                    <p className="font-sans text-sm text-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 font-medium">
                      {leader.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Heritage Shipping by Numbers</h2>
            <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto">
              Our achievements reflect our commitment to excellence and continuous growth in the maritime industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 hover:scale-110 transition-transform duration-300">
              <div className="font-serif font-bold text-4xl md:text-5xl text-accent">25+</div>
              <div className="font-sans text-sm md:text-base opacity-90">Years of Excellence</div>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform duration-300">
              <div className="font-serif font-bold text-4xl md:text-5xl text-accent">50+</div>
              <div className="font-sans text-sm md:text-base opacity-90">Global Destinations</div>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform duration-300">
              <div className="font-serif font-bold text-4xl md:text-5xl text-accent">25K+</div>
              <div className="font-sans text-sm md:text-base opacity-90">Shipments Delivered</div>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform duration-300">
              <div className="font-serif font-bold text-4xl md:text-5xl text-accent">99.5%</div>
              <div className="font-sans text-sm md:text-base opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Partner With Us</h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience reliable maritime logistics solutions from Chattogram Port. Let Heritage Shipping connect your
            business to global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              Get Quote
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
