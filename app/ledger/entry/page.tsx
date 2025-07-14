"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PlusCircle, CheckCircle, Save, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"

export default function LedgerEntryPage() {
  const [memberIdentifier, setMemberIdentifier] = useState("") // To link to a member
  const [date, setDate] = useState("")
  const [fundType, setFundType] = useState<string | undefined>(undefined)
  const [amount, setAmount] = useState<number | string>(0)
  const [portalReceiptNo, setPortalReceiptNo] = useState("")
  const [bookNo, setBookNo] = useState("")
  const [slipNo, setSlipNo] = useState("")

  // Optional: Auto-generate a mock Portal Receipt No.
  useEffect(() => {
    setPortalReceiptNo(`PRN-${Date.now().toString().slice(-6)}`)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      memberIdentifier,
      date,
      fundType,
      amount: Number(amount),
      portalReceiptNo,
      bookNo,
      slipNo,
    }
    console.log("New Ledger Entry Submitted:", formData)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Ledger entry added successfully!")
    handleReset() // Reset form after successful submission
  }

  const handleReset = () => {
    setMemberIdentifier("")
    setDate("")
    setFundType(undefined)
    setAmount(0)
    setPortalReceiptNo(`PRN-${Date.now().toString().slice(-6)}`) // Regenerate on reset
    setBookNo("")
    setSlipNo("")
  }

  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <PlusCircle className="h-8 w-8" />
          New Ledger Entry Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Member Identification */}
          <div className="space-y-4 border-b pb-6 border-green-100">
            <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
              <User className="h-5 w-5" /> Member Details
            </h3>
            <div>
              <Label htmlFor="member-identifier" className="text-green-700 font-semibold my-4">
                Member Ship No. / Portal ID
              </Label>
              <Input
                id="member-identifier"
                placeholder="Enter Member Ship No. or Portal ID"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                value={memberIdentifier}
                onChange={(e) => setMemberIdentifier(e.target.value)}
                required
              />
            </div>
            {/* In a real app, you might add a button here to fetch/display member name based on ID */}
          </div>

          {/* Transaction Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="entry-date" className="text-green-700 font-semibold my-4">
                  Date
                </Label>
                <Input
                  id="entry-date"
                  type="date"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fund-type" className="text-green-700 font-semibold my-4">
                  Fund Type
                </Label>
                <Select value={fundType} onValueChange={(value) => setFundType(value)} required>
                  <SelectTrigger className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400">
                    <SelectValue placeholder="Select Fund Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-green-200 text-gray-800">
                    <SelectItem value="Zakat">Zakat</SelectItem>
                    <SelectItem value="Fitara">Fitara</SelectItem>
                    <SelectItem value="Membership Fee">Membership Fee</SelectItem>
                    <SelectItem value="Donation">Donation</SelectItem>
                    <SelectItem value="Sacrificial Skin">Sacrificial Skin</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="amount" className="text-green-700 font-semibold my-4">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="Enter amount"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="portal-receipt-no" className="text-green-700 font-semibold my-4">
                  Portal Receipt No.
                </Label>
                <Input
                  id="portal-receipt-no"
                  placeholder="Auto-generated or enter"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={portalReceiptNo}
                  onChange={(e) => setPortalReceiptNo(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="book-no" className="text-green-700 font-semibold my-4">
                  Book No.
                </Label>
                <Input
                  id="book-no"
                  placeholder="Enter book number"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={bookNo}
                  onChange={(e) => setBookNo(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slip-no" className="text-green-700 font-semibold my-4">
                  Slip No.
                </Label>
                <Input
                  id="slip-no"
                  placeholder="Enter slip number"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={slipNo}
                  onChange={(e) => setSlipNo(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-end">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle className="mr-2 h-5 w-5" />
              ADD ENTRY
            </Button>
            <Button
              type="button"
              variant="outline"
              className="bg-white hover:bg-green-50 text-green-700 border-green-400"
              onClick={handleReset}
            >
              <Save className="mr-2 h-5 w-5" />
              RESET FORM
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
