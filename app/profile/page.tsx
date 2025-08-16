"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useAuth } from "@/components/auth-provider"

export default function ProfilePage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()
  const [shipments, setShipments] = useState([])
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

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

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground">My Account</h1>
              <p className="font-sans text-muted-foreground">Manage your profile and track your shipments</p>
            </div>
            <Button onClick={logout} variant="outline" className="font-sans bg-transparent">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile" className="font-sans">
                Profile
              </TabsTrigger>
              <TabsTrigger value="shipments" className="font-sans">
                My Shipments
              </TabsTrigger>
              <TabsTrigger value="quotes" className="font-sans">
                My Quotes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Profile Information</CardTitle>
                  <CardDescription className="font-sans">
                    Update your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-sans text-sm font-medium text-foreground">First Name</label>
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <Input value={user.first_name} className="pl-10 font-sans" readOnly />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-sm font-medium text-foreground">Last Name</label>
                      <Input value={user.last_name} className="font-sans" readOnly />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">Email</label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
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
                      <Input value={user.email} className="pl-10 font-sans" readOnly />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">Phone</label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
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
                      <Input value={user.phone || "Not provided"} className="pl-10 font-sans" readOnly />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">Company</label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <Input value={user.company || "Not provided"} className="pl-10 font-sans" readOnly />
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipments">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    My Shipments
                  </CardTitle>
                  <CardDescription className="font-sans">
                    Track and manage your current and past shipments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <svg
                      className="mx-auto h-12 w-12 text-muted-foreground mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <p className="font-sans text-muted-foreground">No shipments found</p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                      Create New Shipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quotes">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    My Quotes
                  </CardTitle>
                  <CardDescription className="font-sans">View your quote requests and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <svg
                      className="mx-auto h-12 w-12 text-muted-foreground mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="font-sans text-muted-foreground">No quotes found</p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                      Request New Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
