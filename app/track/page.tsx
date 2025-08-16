"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return

    setIsLoading(true)
    setError("")

    try {
      const token = localStorage.getItem("access_token")
      const response = await fetch(`http://localhost:8000/api/track/${trackingNumber}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setTrackingResult(data)
      } else if (response.status === 404) {
        setError("Shipment not found. Please check your tracking number.")
      } else {
        setError("Failed to track shipment. Please try again.")
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Track Your Shipment</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your tracking number to get real-time updates on your shipment's location and delivery status.
          </p>
        </div>

        {/* Tracking Form */}
        <Card className="max-w-2xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Enter Tracking Details</CardTitle>
            <CardDescription>
              Your tracking number can be found on your shipping receipt or confirmation email.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number (e.g., HSL123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleTrack}
                disabled={isLoading || !trackingNumber.trim()}
                className="bg-accent hover:bg-accent/90 text-black"
              >
                {isLoading ? (
                  <svg className="h-4 w-4 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
                Track
              </Button>
            </div>
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Status Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif text-2xl">Tracking #{trackingResult.tracking_number}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {trackingResult.origin_port} → {trackingResult.destination_port}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-accent text-black text-lg px-4 py-2">
                    {trackingResult.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <p className="font-medium">Current Location</p>
                      <p className="text-muted-foreground">{trackingResult.updates?.[0]?.location || "In Transit"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Vessel</p>
                      <p className="text-muted-foreground">{trackingResult.vessel_name || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Est. Delivery</p>
                      <p className="text-muted-foreground">
                        {new Date(trackingResult.estimated_delivery).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            {trackingResult.updates && trackingResult.updates.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Shipment Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingResult.updates.map((update: any, index: number) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-black">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <p className="font-medium text-foreground">{update.status}</p>
                            {index === 0 && (
                              <Badge variant="secondary" className="bg-accent text-black">
                                Latest
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{update.location}</p>
                          <p className="text-sm text-muted-foreground">{new Date(update.timestamp).toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground mt-1">{update.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Help Section */}
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                If you're having trouble tracking your shipment or need additional assistance:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Contact Support
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Live Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
