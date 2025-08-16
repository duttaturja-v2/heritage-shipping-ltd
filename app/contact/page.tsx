import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Sea Freight Inquiries",
      description: "Ocean shipping quotes and bookings",
      contact: "info@heritageshipping.com",
      phone: "+880 31 123-4567 ext. 101",
    },
    {
      icon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Customs & Documentation",
      description: "Trade compliance and customs clearance",
      contact: "info@heritageshipping.com",
      phone: "+880 31 123-4567 ext. 102",
    },
    {
      icon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      title: "Crew Immigration Services",
      description: "Seafarer documentation and visa processing",
      contact: "info@heritageshipping.com",
      phone: "+880 31 123-4567 ext. 103",
    },
    {
      icon: () => (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Customer Support",
      description: "General inquiries and account management",
      contact: "info@heritageshipping.com",
      phone: "+880 31 123-4567 ext. 100",
    },
    {
      icon: () =>(
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6v11H9V7z"
          />
        </svg>
      ),
      title: "Corporate Partnerships",
      description: "Strategic partnerships and enterprise solutions",
      contact: "partnerships@heritageshipping.com",
      phone: "+1 (555) 123-4567 ext. 105",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/50 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent/30 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="font-sans text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Ready to ship with Heritage? Our expert team at Chattogram Port is here to help you find the perfect
              maritime logistics solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-accent/30 transition-all duration-300 animate-slide-up">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-sans text-sm">24/7 Support Available</span>
              </div>
              <div
                className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-accent/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span className="font-sans text-sm">Chattogram Port Based</span>
              </div>
              <div
                className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-accent/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="font-sans text-sm">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="font-serif font-bold text-3xl text-foreground mb-6">Send Us a Message</h2>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 animate-slide-up">
                        <Label htmlFor="firstName" className="font-sans font-medium text-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="border-2 focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        <Label htmlFor="lastName" className="font-sans font-medium text-foreground">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="border-2 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                      <Label htmlFor="email" className="font-sans font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@company.com"
                        required
                        className="border-2 focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                      <Label htmlFor="phone" className="font-sans font-medium text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+880 31 123-4567"
                        className="border-2 focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                      <Label htmlFor="company" className="font-sans font-medium text-foreground">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Company Ltd."
                        className="border-2 focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                      <Label htmlFor="service" className="font-sans font-medium text-foreground">
                        Service Interest *
                      </Label>
                      <Select>
                        <SelectTrigger className="border-2 focus:border-accent transition-colors">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sea-freight">Sea Freight</SelectItem>
                          <SelectItem value="warehousing">Warehousing</SelectItem>
                          <SelectItem value="customs">Customs Clearance</SelectItem>
                          <SelectItem value="crew-immigration">Crew Immigration</SelectItem>
                          <SelectItem value="supply-chain">Supply Chain Solutions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                      <Label htmlFor="message" className="font-sans font-medium text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your shipping requirements..."
                        rows={5}
                        required
                        className="border-2 focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-black font-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: "0.7s" }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif font-bold text-3xl text-foreground mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-background to-muted/10 hover:from-accent/5 hover:to-accent/10 animate-slide-up"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                          <div className="text-primary group-hover:text-accent transition-colors">
                            <method.icon />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-semibold text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
                            {method.title}
                          </h3>
                          <p className="font-sans text-sm text-muted-foreground mb-2">{method.description}</p>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <svg
                                className="h-4 w-4 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                              <a
                                href={`mailto:${method.contact}`}
                                className="font-sans text-sm text-foreground hover:text-accent transition-colors font-medium"
                              >
                                {method.contact}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg
                                className="h-4 w-4 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                              <a
                                href={`tel:${method.phone}`}
                                className="font-sans text-sm text-foreground hover:text-accent transition-colors font-medium"
                              >
                                {method.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations & Map Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Office & Location</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Located at Chattogram Port, we're strategically positioned to serve your maritime logistics needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {/* Our Office - Takes 1 column */}
            <div className="lg:col-span-1 animate-slide-up">
              <h3 className="font-serif font-bold text-2xl text-foreground mb-6">Our Office</h3>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-background to-muted/20 hover:scale-105 h-full">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="font-serif text-xl text-foreground flex items-center">
                    <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Chattogram Port Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-1">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 group hover:bg-accent/10 p-2 rounded-lg transition-all duration-300">
                      <svg
                        className="h-5 w-5 text-accent mt-0.5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-sans font-semibold text-foreground group-hover:text-accent transition-colors">
                          Address
                        </p>
                        <p className="font-sans text-sm text-foreground group-hover:text-foreground/90 transition-colors">
                          Port Road, Chattogram, Bangladesh
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 group hover:bg-accent/10 p-2 rounded-lg transition-all duration-300">
                      <svg
                        className="h-5 w-5 text-accent mt-0.5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="font-sans font-semibold text-foreground group-hover:text-accent transition-colors">
                          Phone
                        </p>
                        <a
                          href="tel:+88031123456"
                          className="font-sans text-sm text-foreground font-medium group-hover:text-accent transition-colors"
                        >
                          +880 31 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 group hover:bg-accent/10 p-2 rounded-lg transition-all duration-300">
                      <svg
                        className="h-5 w-5 text-accent mt-0.5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-sans font-semibold text-foreground group-hover:text-accent transition-colors">
                          Email
                        </p>
                        <a
                          href="mailto:info@heritageshipping.com"
                          className="font-sans text-sm text-foreground font-medium group-hover:text-accent transition-colors"
                        >
                          info@heritageshipping.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 group hover:bg-accent/10 p-2 rounded-lg transition-all duration-300">
                      <svg
                        className="h-5 w-5 text-accent mt-0.5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-sans font-semibold text-foreground group-hover:text-accent transition-colors">
                          Business Hours
                        </p>
                        <p className="font-sans text-sm text-foreground group-hover:text-foreground/90 transition-colors">
                          Sun-Thu: 8:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="font-sans font-semibold text-foreground mb-2">Services Available:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="font-sans text-xs bg-accent/20 text-accent px-3 py-1 rounded-full hover:bg-accent/30 hover:text-black transition-all duration-300 cursor-default">
                          Sea Freight
                        </span>
                        <span className="font-sans text-xs bg-accent/20 text-accent px-3 py-1 rounded-full hover:bg-accent/30 hover:text-black transition-all duration-300 cursor-default">
                          Customs
                        </span>
                        <span className="font-sans text-xs bg-accent/20 text-accent px-3 py-1 rounded-full hover:bg-accent/30 hover:text-black transition-all duration-300 cursor-default">
                          Port Operations
                        </span>
                        <span className="font-sans text-xs bg-accent/20 text-accent px-3 py-1 rounded-full hover:bg-accent/30 hover:text-black transition-all duration-300 cursor-default">
                          Crew Immigration
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Find Us - Takes 2 columns */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-serif font-bold text-2xl text-foreground mb-6">Find Us</h3>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:scale-105 h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8479469757!2d91.81115731495654!3d22.33654998530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64dafa8c3%3A0x5045a6fd6b8c8c8c!2sChattogram%20Port!5e0!3m2!1sen!2sbd!4v1642678901234!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Heritage Shipping Limited - Chattogram Port Office Location"
                      className="hover:saturate-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10">
                    <div className="flex items-center space-x-2 text-center">
                      <svg
                        className="h-5 w-5 text-accent animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="font-sans text-sm text-foreground">
                        <span className="font-semibold">Heritage Shipping Limited</span> - Strategically located at
                        Chattogram Port for optimal maritime logistics
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
