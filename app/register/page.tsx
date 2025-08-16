"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useAuth } from "@/components/auth-provider"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    phone: "",
    company: "",
    password: "",
    password_confirm: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.password !== formData.password_confirm) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      await register(formData)
      router.push("/profile")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl text-primary">Create Account</CardTitle>
              <CardDescription className="font-sans">
                Join Heritage Shipping for premium maritime services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">First Name</label>
                    <Input
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="font-sans"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">Last Name</label>
                    <Input
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="font-sans"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-sans"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">Username</label>
                  <Input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="font-sans"
                    placeholder="Choose a username"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">Phone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-sans"
                    placeholder="Phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-sans"
                    placeholder="Company name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">Password</label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="font-sans"
                    placeholder="Create password"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">Confirm Password</label>
                  <Input
                    type="password"
                    name="password_confirm"
                    value={formData.password_confirm}
                    onChange={handleChange}
                    className="font-sans"
                    placeholder="Confirm password"
                    required
                  />
                </div>

                {error && <div className="text-red-600 text-sm font-sans text-center">{error}</div>}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="font-sans text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
