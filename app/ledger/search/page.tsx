import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Search, BookText } from "lucide-react"
import Link from "next/link"

export default function LedgerSearchPage() {
  // In a real application, you would implement search functionality here
  // and display a list of members to choose from, or redirect directly
  // to a specific member's ledger if a search query is provided.

  // For now, we'll provide dummy links to demonstrate navigation.
  const dummyMembers = [
    { id: "123", name: "John Doe" },
    { id: "456", name: "Jane Smith" },
  ]

  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <BookText className="h-8 w-8" />
          Select Member Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <Label htmlFor="member-search" className="text-green-700 font-semibold my-4">
              Search Member by ID or Name
            </Label>
            <Input
              id="member-search"
              placeholder="Enter Member ID or Name"
              className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
            />
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Search className="mr-2 h-5 w-5" />
            Search Member
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Quick Select (Dummy)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyMembers.map((member) => (
              <Link key={member.id} href={`/ledger/search/${member.id}`}>
                <Button
                  variant="outline"
                  className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                >
                  View Ledger for {member.name} (ID: {member.id})
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
