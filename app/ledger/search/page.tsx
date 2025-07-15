"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Search, User, BookText } from "lucide-react"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

// Dummy data for demonstration. In a real app, you'd fetch this from a database.
const memberLedgerData = {
  "1234567890": {
    // Using Membership No. as key for direct lookup
    id: "123",
    name: "John Doe",
    fatherName: "Richard Doe",
    permanentAddress: "123 Main St, Anytown, USA",
    memberShipNo: "1234567890",
    portalId: "PORTAL-123456",
    cnic: "12345-6789012-3",
    dob: "1990-05-15",
    cellNo: "123-456-7890",
    picture: "/placeholder.svg?height=150&width=150", // Placeholder image
    transactions: [
      {
        date: "2023-01-01",
        fundDetails: "Membership Fee",
        amount: "$50.00",
        portalReceiptNo: "PRN001",
        bookNo: "B001",
        slipNo: "S001",
      },
      {
        date: "2023-02-10",
        fundDetails: "Donation (General)",
        amount: "$100.00",
        portalReceiptNo: "PRN002",
        bookNo: "B001",
        slipNo: "S002",
      },
      {
        date: "2023-03-05",
        fundDetails: "Zakat",
        amount: "$200.00",
        portalReceiptNo: "PRN003",
        bookNo: "B002",
        slipNo: "S003",
      },
    ],
  },
  "0987654321": {
    // Using Membership No. as key
    id: "456",
    name: "Jane Smith",
    fatherName: "Robert Smith",
    permanentAddress: "456 Oak Ave, Otherville, USA",
    memberShipNo: "0987654321",
    portalId: "PORTAL-789012",
    cnic: "98765-4321098-7",
    dob: "1988-11-22",
    cellNo: "987-654-3210",
    picture: "/placeholder.svg?height=150&width=150", // Placeholder image
    transactions: [
      {
        date: "2023-01-20",
        fundDetails: "Donation (Education)",
        amount: "$75.00",
        portalReceiptNo: "PRN004",
        bookNo: "B002",
        slipNo: "S004",
      },
    ],
  },
}

export default function LedgerSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [foundMember, setFoundMember] = useState<(typeof memberLedgerData)[keyof typeof memberLedgerData] | null>(null)
  const [searchAttempted, setSearchAttempted] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchAttempted(true)
    const member =
      memberLedgerData[searchQuery as keyof typeof memberLedgerData] ||
      Object.values(memberLedgerData).find(
        (m) => m.portalId === searchQuery || m.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    setFoundMember(member || null)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    setFoundMember(null)
    setSearchAttempted(false)
  }

  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <BookText className="h-8 w-8" />
          Search Member Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <Label htmlFor="member-search" className="text-green-700 font-semibold my-4">
              Search Member by Member Ship No., Portal ID, or Name
            </Label>
            <Input
              id="member-search"
              placeholder="Enter Member Ship No., Portal ID, or Name"
              className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4 justify-end">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
              <Search className="mr-2 h-5 w-5" />
              Search Ledger
            </Button>
            {searchAttempted && (
              <Button
                type="button"
                variant="outline"
                onClick={handleClearSearch}
                className="bg-white hover:bg-green-50 text-green-700 border-green-400"
              >
                Clear Search
              </Button>
            )}
          </div>
        </form>

        {searchAttempted && !foundMember && (
          <div className="mt-8 text-center text-gray-600">
            <p className="text-xl font-semibold mb-2">No Member Ledger Found</p>
            <p>Please try a different Member Ship No., Portal ID, or Name.</p>
          </div>
        )}

        {foundMember && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Member Ledger Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Member Details */}
              <div className="md:col-span-2 space-y-3 text-gray-800">
                <p>
                  <span className="font-semibold">Name:</span> {foundMember.name}
                </p>
                <p>
                  <span className="font-semibold">Father Name:</span> {foundMember.fatherName}
                </p>
                <p>
                  <span className="font-semibold">Permanent Address:</span> {foundMember.permanentAddress}
                </p>
                <p>
                  <span className="font-semibold">Member Ship No.:</span> {foundMember.memberShipNo}
                </p>
                <p>
                  <span className="font-semibold">Portal ID No.:</span> {foundMember.portalId}
                </p>
                <p>
                  <span className="font-semibold">CNIC Number:</span> {foundMember.cnic}
                </p>
                <p>
                  <span className="font-semibold">Date of Birth:</span> {foundMember.dob}
                </p>
                <p>
                  <span className="font-semibold">Cell No.:</span> {foundMember.cellNo}
                </p>
              </div>

              {/* Member Picture */}
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-36 h-36 border border-green-200 rounded-md flex items-center justify-center overflow-hidden bg-green-50">
                  {foundMember.picture ? (
                    <Image
                      src={foundMember.picture || "/placeholder.svg"}
                      alt="Member Picture"
                      className="object-cover w-full h-full"
                      width={250}
                      height={250}
                    />
                  ) : (
                    <User className="h-16 w-16 text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-800 mb-4">Transaction History</h3>
            <div className="overflow-x-auto">
              <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
                <TableHeader>
                  <TableRow className="bg-green-100 border-b border-green-200">
                    <TableHead className="text-green-800 font-bold">Date</TableHead>
                    <TableHead className="text-green-800 font-bold">Fund Details</TableHead>
                    <TableHead className="text-green-800 font-bold">Amount</TableHead>
                    <TableHead className="text-green-800 font-bold">Portal Receipt No</TableHead>
                    <TableHead className="text-green-800 font-bold">Book No</TableHead>
                    <TableHead className="text-green-800 font-bold">Slip No</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {foundMember.transactions.length > 0 ? (
                    foundMember.transactions.map((transaction, index) => (
                      <TableRow key={index} className="border-b border-green-100 hover:bg-green-100">
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.fundDetails}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.portalReceiptNo}</TableCell>
                        <TableCell>{transaction.bookNo}</TableCell>
                        <TableCell>{transaction.slipNo}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                        No transactions found for this member.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
