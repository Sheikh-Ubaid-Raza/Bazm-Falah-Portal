"use client"

import type React from "react"
import { Suspense, useState } from "react" // Import Suspense and useState
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { LogIn, UserPlus, Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

// This component contains the actual login form and uses useSearchParams
function LoginFormContent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams() // This hook is now inside a component wrapped by Suspense
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError("Invalid email or password")
      console.error("Login error:", result.error)
    } else if (result?.ok) {
      router.push(callbackUrl)
    }
  }

  return (
    <Card className="w-full max-w-md bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-extrabold text-green-800">Log In</CardTitle>
        <CardDescription className="text-gray-600">Enter your credentials to access the portal.</CardDescription>
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
              type={showPassword ? "text" : "password"}
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
            <LogIn className="mr-2 h-5 w-5" />
            Login
          </Button>
        </form>
        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </div>
        <Link href="/auth/signup" className="text-green-600 hover:underline">
          <Button variant="outline" className="w-full bg-white hover:bg-green-50 text-green-700 border-green-400">
            <UserPlus className="mr-2 h-5 w-5" />
            Register New Account
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

// Main LoginPage component that wraps LoginFormContent in Suspense
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] bg-gradient-to-b from-green-50 to-white py-12 mx-6">
      <Suspense fallback={<div>Loading login form...</div>}>
        <LoginFormContent />
      </Suspense>
    </div>
  )
}
