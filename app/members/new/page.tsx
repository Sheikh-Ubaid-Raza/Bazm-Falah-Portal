import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PlusCircle, Save, CheckCircle } from "lucide-react"

export default function NewMemberPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <PlusCircle className="h-8 w-8" />
          New Member
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-green-700 font-semibold my-4">Name</Label>
              <Input
                id="name"
                placeholder="Enter member name"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-green-700 font-semibold my-4">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-green-700 font-semibold my-4">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="address" className="text-green-700 font-semibold my-4">Address</Label>
              <Input
                id="address"
                placeholder="Enter address"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="city" className="text-green-700 font-semibold my-4">City</Label>
              <Input
                id="city"
                placeholder="Enter city"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="zip" className="text-green-700 font-semibold my-4">Zip Code</Label>
              <Input
                id="zip"
                placeholder="Enter zip code"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-end">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <CheckCircle className="mr-2 h-5 w-5" />
            COMPLETE FORM
          </Button>
          <Button
            variant="outline"
            className="bg-white hover:bg-green-50 text-green-700 border-green-400"
          >
            <Save className="mr-2 h-5 w-5" />
            SAVE FORM
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}