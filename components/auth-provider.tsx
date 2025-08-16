"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  username: string
  first_name: string
  last_name: string
  phone: string
  company: string
  address: string
  role?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  googleLogin: (token: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const demoUsers = {
  "admin@heritageshipping.com": {
    id: "demo-admin-1",
    email: "admin@heritageshipping.com",
    username: "admin",
    first_name: "Admin",
    last_name: "User",
    phone: "+880 31-710101",
    company: "Heritage Shipping Limited",
    address: "Chattogram Port Authority, Chattogram, Bangladesh",
    role: "admin",
  },
  "customer@heritageshipping.com": {
    id: "demo-customer-1",
    email: "customer@heritageshipping.com",
    username: "customer",
    first_name: "John",
    last_name: "Doe",
    phone: "+880 1712-345678",
    company: "ABC Trading Ltd",
    address: "Dhaka, Bangladesh",
    role: "customer",
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    const demoUser = localStorage.getItem("demo_user")

    if (demoUser) {
      try {
        const userData = JSON.parse(demoUser)
        setUser(userData)
      } catch (error) {
        localStorage.removeItem("demo_user")
      }
      setLoading(false)
    } else if (token) {
      fetchProfile()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("access_token")
      const response = await fetch("http://localhost:8000/api/auth/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      } else {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
      }
    } catch (error) {
      console.error("Error fetching profile:", error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    if (demoUsers[email as keyof typeof demoUsers] && password === "demo123") {
      const demoUser = demoUsers[email as keyof typeof demoUsers]
      localStorage.setItem("demo_user", JSON.stringify(demoUser))
      setUser(demoUser)
      return
    }

    // Regular login flow
    const response = await fetch("http://localhost:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      throw new Error("Login failed")
    }

    const data = await response.json()
    localStorage.setItem("access_token", data.access)
    localStorage.setItem("refresh_token", data.refresh)
    setUser(data.user)
  }

  const register = async (userData: any) => {
    const response = await fetch("http://localhost:8000/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    if (!response.ok) {
      throw new Error("Registration failed")
    }

    const data = await response.json()
    localStorage.setItem("access_token", data.access)
    localStorage.setItem("refresh_token", data.refresh)
    setUser(data.user)
  }

  const googleLogin = async (token: string) => {
    const response = await fetch("http://localhost:8000/api/auth/google/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })

    if (!response.ok) {
      throw new Error("Google login failed")
    }

    const data = await response.json()
    localStorage.setItem("access_token", data.access)
    localStorage.setItem("refresh_token", data.refresh)
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("demo_user") // Clear demo user session
    setUser(null)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, googleLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
