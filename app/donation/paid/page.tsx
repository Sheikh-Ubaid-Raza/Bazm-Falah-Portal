import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DollarSign, Receipt } from "lucide-react"

export default function PaidDonationPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <DollarSign className="h-8 w-8" />
          Paid Donation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="donor-name" className="text-green-700 font-semibold my-4">Donor Name</Label>
              <Input
                id="donor-name"
                placeholder="Enter donor name"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="donation-amount" className="text-green-700 font-semibold my-4">Amount</Label>
              <Input
                id="donation-amount"
                type="number"
                placeholder="Enter donation amount"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="donation-date" className="text-green-700 font-semibold my-4">Date</Label>
              <Input
                id="donation-date"
                type="date"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="payment-method" className="text-green-700 font-semibold my-4">Payment Method</Label>
              <Input
                id="payment-method"
                placeholder="e.g., Cash, Bank Transfer"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Receipt className="mr-2 h-5 w-5" />
            Record Donation
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}