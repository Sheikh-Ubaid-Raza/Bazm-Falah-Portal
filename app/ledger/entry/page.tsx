import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PlusCircle, DollarSign } from "lucide-react"

export default function LedgerEntryPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <PlusCircle className="h-8 w-8" />
          Ledger Entry
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="entry-date" className="text-green-700 font-semibold my-4">Date</Label>
              <Input
                id="entry-date"
                type="date"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-green-700 font-semibold my-4">Description</Label>
              <Input
                id="description"
                placeholder="Enter transaction description"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="category" className="text-green-700 font-semibold my-4">Category</Label>
              <Input
                id="category"
                placeholder="e.g., Expense, Income"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="amount" className="text-green-700 font-semibold my-4">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <DollarSign className="mr-2 h-5 w-5" />
            Add Entry
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}