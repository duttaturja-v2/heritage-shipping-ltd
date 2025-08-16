import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/hsl.jpg"
                alt="HSL Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="font-sans text-sm opacity-90 leading-relaxed">
              HSL - The trusted reliance for global shipping solutions. Your premier partner for maritime logistics from
              Chattogram Port, Bangladesh.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-accent/20 hover:text-accent transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-accent/20 hover:text-accent transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-accent/20 hover:text-accent transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-accent/20 hover:text-accent transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.85 14.81 3.85 12.455 4.126 11.987c.276-.468.827-.936 1.378-1.297.551-.361 1.378-.827 2.173-.827.795 0 1.622.466 2.173.827.551.361 1.102.829 1.378 1.297.276.468.276 2.823-.551 3.704-.827.881-2.026 1.297-3.228 1.297zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.827-.881-.827-3.236-.551-3.704.276-.468.827-.936 1.378-1.297.551-.361 1.378-.827 2.173-.827.795 0 1.622.466 2.173.827.551.361 1.102.829 1.378 1.297.276.468.276 2.823-.551 3.704-.827.881-2.026 1.297-3.677 1.297z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              {["Sea Freight", "Warehousing", "Customs Clearance", "Crew Immigration", "Supply Chain Solutions"].map(
                (service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="font-sans text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-sans text-sm">+880 31-710101</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-sans text-sm">info@heritageshipping.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="h-4 w-4 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="font-sans text-sm">
                  Chattogram Port Authority
                  <br />
                  Chattogram, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="font-sans text-sm opacity-80">© 2024 Heritage Shipping Limited. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="font-sans text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="font-sans text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
