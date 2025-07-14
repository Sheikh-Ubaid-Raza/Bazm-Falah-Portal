"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Users, User, Search } from "lucide-react"
// Add necessary imports for useState and Select
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MemberReportsPage() {
  // Add state variables for filters
  const [memberIdFilter, setMemberIdFilter] = useState("")
  const [memberNameFilter, setMemberNameFilter] = useState("")
  const [memberPhoneFilter, setMemberPhoneFilter] = useState("")
  const [memberStatusFilter, setMemberStatusFilter] = useState<string | undefined>(undefined)

  return (
    <Card className="bg-portal-card text-portal-text-light border-portal-bg shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6 text-portal-accent" />
          Members Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-8 p-4 border border-green-200 rounded-lg bg-green-50">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Filter Member Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <Label htmlFor="report-member-id" className="text-green-700 font-semibold my-4">
                Member ID
              </Label>
              <Input
                id="report-member-id"
                placeholder="Enter Member ID"
                className="bg-white border-green-200 text-gray-800 focus:border-green-400"
                value={memberIdFilter}
                onChange={(e) => setMemberIdFilter(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="report-member-name" className="text-green-700 font-semibold my-4">
                Member Name
              </Label>
              <Input
                id="report-member-name"
                placeholder="Enter Member Name"
                className="bg-white border-green-200 text-gray-800 focus:border-green-400"
                value={memberNameFilter}
                onChange={(e) => setMemberNameFilter(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="report-member-phone" className="text-green-700 font-semibold my-4">
                Phone Number
              </Label>
              <Input
                id="report-member-phone"
                type="tel"
                placeholder="Enter Phone Number"
                className="bg-white border-green-200 text-gray-800 focus:border-green-400"
                value={memberPhoneFilter}
                onChange={(e) => setMemberPhoneFilter(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="report-member-status" className="text-green-700 font-semibold my-4">
                Status
              </Label>
              <Select value={memberStatusFilter} onValueChange={(value) => setMemberStatusFilter(value)}>
                <SelectTrigger className="bg-white border-green-200 text-gray-800 focus:border-green-400">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-green-200 text-gray-800">
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Search className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-portal-bg border-portal-accent/50 text-portal-text-light">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-portal-accent" />
                Members All Data
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-portal-text-dark">
              <p>
                Generate a comprehensive report of all member data including personal details and membership status.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-portal-bg border-portal-accent/50 text-portal-text-light">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-portal-accent" />
                Member ID/Name/Phone
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-portal-text-dark">
              <p>Generate a report based on specific member ID, name, or phone number for quick lookups.</p>
            </CardContent>
          </Card>
          <Card className="bg-portal-bg border-portal-accent/50 text-portal-text-light">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-portal-accent" />
                Custom Member Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-portal-text-dark">
              <p>Create a custom report by selecting specific fields and filters for member data.</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold text-portal-text-light mb-4">Sample Report Data</h3>
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-portal-bg border border-portal-bg rounded-md">
            <TableHeader>
              <TableRow className="bg-green-100">
                <TableHead>Member ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-portal-bg/50 hover:bg-portal-bg/30">
                <TableCell className="font-medium">M001</TableCell>
                <TableCell>Alice Johnson</TableCell>
                <TableCell>alice@example.com</TableCell>
                <TableCell>555-1234</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow className="border-b border-portal-bg/50 hover:bg-portal-bg/30">
                <TableCell className="font-medium">M002</TableCell>
                <TableCell>Bob Williams</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>555-5678</TableCell>
                <TableCell>Inactive</TableCell>
              </TableRow>
              <TableRow className="hover:bg-portal-bg/30">
                <TableCell className="font-medium">M003</TableCell>
                <TableCell>Charlie Brown</TableCell>
                <TableCell>charlie@example.com</TableCell>
                <TableCell>555-9012</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
