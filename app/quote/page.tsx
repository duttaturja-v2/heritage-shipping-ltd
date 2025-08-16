"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-provider"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    service_type: "",
    origin_port: "",
    destination_port: "",
    cargo_type: "",
    weight: "",
    dimensions: "",
    estimated_value: "",
    preferred_shipping_date: "",
    special_requirements: "",
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    cargo_description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [quoteNumber, setQuoteNumber] = useState("")
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://localhost:8000/api/quote/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          weight: Number.parseFloat(formData.weight) || 0,
          estimated_value: Number.parseFloat(formData.estimated_value) || null,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setQuoteNumber(data.quote_number)
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Failed to submit quote request. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-sans text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <svg className="h-16 w-16 text-accent mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Quote Request Submitted!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your quote request. Our team will review your requirements and get back to you within 24
                hours with a detailed proposal.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Reference Number: <span className="font-mono font-medium">{quoteNumber}</span>
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-accent hover:bg-accent/90 text-black">
                  Submit Another Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Request a Quote</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a customized shipping quote tailored to your specific needs. Our experts will provide competitive
            pricing and optimal solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Service Type */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
                Service Type
              </CardTitle>
              <CardDescription>Select the shipping service that best fits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <Select
                value={formData.service_type}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, service_type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ocean_freight">Ocean Freight</SelectItem>
                  <SelectItem value="air_freight">Air Freight</SelectItem>
                  <SelectItem value="land_transport">Land Transport</SelectItem>
                  <SelectItem value="multimodal">Multimodal Transport</SelectItem>
                  <SelectItem value="warehousing">Warehousing & Distribution</SelectItem>
                  <SelectItem value="customs">Customs Clearance</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Route Information */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Route Information
              </CardTitle>
              <CardDescription>Specify your origin and destination</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="origin">Origin Port/City</Label>
                <Input
                  id="origin"
                  placeholder="e.g., Chattogram, Bangladesh"
                  value={formData.origin_port}
                  onChange={(e) => setFormData((prev) => ({ ...prev, origin_port: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="destination">Destination Port/City</Label>
                <Input
                  id="destination"
                  placeholder="e.g., Los Angeles, USA"
                  value={formData.destination_port}
                  onChange={(e) => setFormData((prev) => ({ ...prev, destination_port: e.target.value }))}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Cargo Details */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Cargo Details
              </CardTitle>
              <CardDescription>Provide information about your cargo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="cargoType">Cargo Type</Label>
                  <Select
                    value={formData.cargo_type}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, cargo_type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select cargo type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="container">Container</SelectItem>
                      <SelectItem value="bulk">Bulk Cargo</SelectItem>
                      <SelectItem value="breakbulk">Break Bulk</SelectItem>
                      <SelectItem value="roro">Roll-on/Roll-off</SelectItem>
                      <SelectItem value="liquid">Liquid Cargo</SelectItem>
                      <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="weight">Total Weight (kg)</Label>
                  <Input
                    id="weight"
                    placeholder="e.g., 1500"
                    value={formData.weight}
                    onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="dimensions">Dimensions (L×W×H cm)</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 200×150×100"
                    value={formData.dimensions}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dimensions: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="value">Cargo Value (USD)</Label>
                  <Input
                    id="value"
                    placeholder="e.g., 50000"
                    value={formData.estimated_value}
                    onChange={(e) => setFormData((prev) => ({ ...prev, estimated_value: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="shipping-date">Preferred Shipping Date</Label>
                <Input
                  id="shipping-date"
                  type="date"
                  value={formData.preferred_shipping_date}
                  onChange={(e) => setFormData((prev) => ({ ...prev, preferred_shipping_date: e.target.value }))}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Contact Information</CardTitle>
              <CardDescription>How can we reach you with the quote?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your company name"
                    value={formData.company_name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company_name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactName">Contact Person</Label>
                  <Input
                    id="contactName"
                    placeholder="Your full name"
                    value={formData.contact_name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, contact_name: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+880 1234 567890"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Cargo Description & Special Requirements</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed description of your cargo and any special requirements..."
                  rows={4}
                  value={formData.cargo_description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, cargo_description: e.target.value }))}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {error && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <p className="text-red-600 text-sm">{error}</p>
              </CardContent>
            </Card>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black px-12"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Quote Request"}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Our team will review your request and respond within 24 hours
            </p>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
