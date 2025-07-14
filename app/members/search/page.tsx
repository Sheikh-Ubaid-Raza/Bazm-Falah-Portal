"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Search, User, Phone, Mail, MapPin } from "lucide-react" // Import MapPin for Area
import Link from "next/link"
import { useState } from "react" // Import useState for form state

export default function SearchMemberPage() {
  // State for search filters
  const [searchName, setSearchName] = useState("")
  const [searchId, setSearchId] = useState("")
  const [searchArea, setSearchArea] = useState("") // New state for Area
  const [searchPhone, setSearchPhone] = useState("")

  // Dummy data for demonstration. In a real app, you'd fetch this based on search filters.
  const dummyMembers = [
    {
      id: "1001",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      area: "Northwood",
    },
    {
      id: "1002",
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      area: "Southside",
    },
    {
      id: "1003",
      name: "Alice Brown",
      phone: "111-222-3333",
      email: "alice.brown@example.com",
      area: "Eastville",
    },
  ]

  // Simple client-side filtering for demonstration
  const filteredMembers = dummyMembers.filter((member) => {
    const nameMatch = member.name.toLowerCase().includes(searchName.toLowerCase())
    const idMatch = member.id.toLowerCase().includes(searchId.toLowerCase())
    const areaMatch = member.area.toLowerCase().includes(searchArea.toLowerCase())
    const phoneMatch = member.phone.includes(searchPhone)

    return nameMatch && idMatch && areaMatch && phoneMatch
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would trigger a data fetch here
    console.log("Searching with filters:", { searchName, searchId, searchArea, searchPhone })
    // The filteredMembers state will update automatically due to React's re-rendering
  }

  return (
    <Card className="bg-portal-card text-portal-text-light border-portal-bg shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <Search className="h-6 w-6 text-portal-accent" />
          Search Members
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="search-name" className="text-green-700 font-semibold my-4">Search by Name</Label>
                <Input
                  id="search-name"
                  placeholder="Enter member name"
                  className="bg-portal-bg border-portal-bg text-portal-text-light"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="search-id" className="text-green-700 font-semibold my-4">Search by Member ID</Label>
                <Input
                  id="search-id"
                  placeholder="Enter member ID"
                  className="bg-portal-bg border-portal-bg text-portal-text-light"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="search-area" className="text-green-700 font-semibold my-4">Search by Area</Label>
                <Input
                  id="search-area"
                  placeholder="Enter area"
                  className="bg-portal-bg border-portal-bg text-portal-text-light"
                  value={searchArea}
                  onChange={(e) => setSearchArea(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="search-phone" className="text-green-700 font-semibold my-4">Search by Phone</Label>
                <Input
                  id="search-phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="bg-portal-bg border-portal-bg text-portal-text-light"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <Button type="submit" className="bg-portal-accent hover:bg-portal-accent/90 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </form>

        <div className="mt-10 space-y-6">
          <h3 className="text-xl font-semibold text-portal-text-light">
            Search Results ({filteredMembers.length} Found)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <Card key={member.id} className="bg-portal-bg border-portal-accent/50 text-portal-text-light">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                      <User className="h-5 w-5 text-portal-accent" />
                      Member ID: {member.id}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="flex items-center gap-2">
                      <User className="h-4 w-4 text-portal-text-dark" /> Name: {member.name}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-portal-text-dark" /> Phone: {member.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-portal-text-dark" /> Email: {member.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-portal-text-dark" /> Area: {member.area}
                    </p>
                    <Link href={`/members/details/${member.id}`} className="block mt-4 w-full">
                      <Button
                        variant="outline"
                        className="mt-4 w-full bg-white border-green-400 text-green-700 hover:bg-green-50"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-portal-text-dark col-span-full">
                No members found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
