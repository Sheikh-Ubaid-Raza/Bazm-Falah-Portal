"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="w-full container mx-auto py-10 px-4 ">
      <Card className="bg-white border-green-200 shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-green-800">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">bazmsultanpur@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">0330 7674196</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">
                  Plot No ST-23A Sector 37-c Area 2-A Landhi 03 Karachi, Landhi Town, Pakistan
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="contact-name" className="text-green-700 font-semibold my-4">
                  Name
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Your Name"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="text-green-700 font-semibold my-4">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                />
              </div>
              <div>
                <Label htmlFor="contact-message" className="text-green-700 font-semibold my-4">
                  Message
                </Label>
                <Input
                  id="contact-message"
                  placeholder="Your Message"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400 h-24 resize-none"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                Send Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}