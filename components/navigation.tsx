"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/hsl.jpg"
              alt="HSL - Heritage Shipping Limited Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Link href="/track">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-sans border-border text-foreground hover:bg-muted hover:text-foreground bg-transparent"
                  >
                    Track Shipment
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="sm" className="font-sans bg-primary hover:bg-primary/90 text-primary-foreground">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-sans border-border text-foreground hover:bg-muted hover:text-foreground bg-transparent"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Profile
                  </Button>
                </Link>
                <Button
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                  className="font-sans text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-sans border-border text-foreground hover:bg-muted hover:text-foreground bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="font-sans bg-primary hover:bg-primary/90 text-primary-foreground">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg className="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                {user ? (
                  <>
                    <Link href="/track">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-sans w-full border-border text-foreground hover:bg-muted hover:text-foreground bg-transparent"
                      >
                        Track Shipment
                      </Button>
                    </Link>
                    <Link href="/quote">
                      <Button
                        size="sm"
                        className="font-sans bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                      >
                        Request Quote
                      </Button>
                    </Link>
                    <Link href="/profile">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-sans w-full border-border text-foreground hover:bg-muted hover:text-foreground bg-transparent"
                      >
                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Profile
                      </Button>
                    </Link>
                    <Button
                      onClick={logout}
                      variant="ghost"
                      size="sm"
                      className="font-sans w-full text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-sans w-full border-border text-foreground hover:bg-muted hover:text-foreground bg-transparent"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button
                        size="sm"
                        className="font-sans bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
