"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <Card className="bg-white p-7">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-green-800">
            About Us
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to the official page of Bazm Falah-ul-Ahbab Sultanpur! This is
            a social welfare organization committed to serving the community
            through education, charitable activities, and social development
            initiatives. Our mission is to support those in need, promote learning
            opportunities for all ages, and build a brighter future by bringing
            people together for the greater good. Whether its through educational
            support, donations, or community outreach, Bazm Falah-ul-Ahbab strives
            to make a positive impact in society. We invite you to join us in our
            journey of compassion, growth, and service. Together, we can build a
            better and more connected community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Our Mission</h3>
                <p className="text-gray-600">
                  To support those in need and promote learning opportunities for
                  all ages through education and charitable initiatives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Our Community</h3>
                <p className="text-gray-600">
                  Join us to contribute to a brighter future with community
                  outreach and support.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/members/new">
              <Button className="bg-green-600 hover:bg-green-700 text-white my-4">
                Join Us Today
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}