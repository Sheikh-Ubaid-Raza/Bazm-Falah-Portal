"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { UserPlus, Eye, EyeOff } from "lucide-react" // Added Eye and EyeOff icons
import { useState } from "react"
import { useRouter } from "next/navigation"
// import { hash } from "bcryptjs"; // Hashing should ideally happen on the server

export default function SignupPage() {
  // Renamed to SignupPage for consistency
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // --- MOCK USER CREATION (FOR DEMONSTRATION ONLY) ---
    // In a real application, this logic would be handled by a server-side API route
    // that interacts with your database and securely hashes passwords.
    // This client-side mock will NOT persist users across page loads or server restarts.

    // Simulate checking if user exists (very basic mock)
    if (email === "existing@example.com") {
      setError("User with this email already exists.")
      return
    }

    // Simulate successful signup
    console.log(`Mock Signup: User ${email} with password ${password} would be registered.`)
    setError(null) // Clear error on success
    router.push("/login") // Redirect to login after "signup"
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] bg-gradient-to-b from-green-50 to-white py-12 mx-6">
      <Card className="w-full max-w-md bg-white border-green-200 shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-green-800">Sign Up</CardTitle>
          <CardDescription className="text-gray-600">Create a new account to get started.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-green-700 font-semibold my-4">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="text-green-700 font-semibold my-4">
                Password
              </Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"} // Toggle between text and password
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-10 h-6 w-6 text-gray-500 hover:text-green-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              <UserPlus className="mr-2 h-5 w-5" />
              Sign Up
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:underline">
              Log In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}