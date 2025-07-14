"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, CalendarDays, TrendingUp, TrendingDown, Search } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LedgerReportsPage() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined)

  return (
    <Card className="bg-portal-card text-portal-text-light border-portal-bg shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6 text-portal-accent" />
          Ledger Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-8 p-4 border border-green-200 rounded-lg bg-green-50">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Filter Ledger Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="report-start-date" className="text-green-700 font-semibold my-4">
                Start Date
              </Label>
              <Input
                id="report-start-date"
                type="date"
                className="bg-white border-green-200 text-gray-800 focus:border-green-400"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="report-end-date" className="text-green-700 font-semibold my-4">
                End Date
              </Label>
              <Input
                id="report-end-date"
                type="date"
                className="bg-white border-green-200 text-gray-800 focus:border-green-400"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="report-category" className="text-green-700 font-semibold my-4">
                Category
              </Label>
              <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value)}>
                <SelectTrigger className="bg-white border-green-200 text-gray-800 focus:border-green-400">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-green-200 text-gray-800">
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Income">Income</SelectItem>
                  <SelectItem value="Expense">Expense</SelectItem>
                  <SelectItem value="Transfer">Transfer</SelectItem>
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
                <CalendarDays className="h-5 w-5 text-portal-accent" />
                Daily/Monthly Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-portal-text-dark">
              <p>Generate a summary of all ledger entries for a specific day or month.</p>
            </CardContent>
          </Card>
          <Card className="bg-portal-bg border-portal-accent/50 text-portal-text-light">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-portal-accent" />
                Income Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-portal-text-dark">
              <p>View a detailed report of all income entries recorded in the ledger.</p>
            </CardContent>
          </Card>
          <Card className="bg-portal-bg border-portal-accent/50 text-portal-text-light">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-portal-accent" />
                Expense Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-portal-text-dark">
              <p>Generate a report detailing all expense entries from the ledger.</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold text-portal-text-light mb-4">Sample Report Data</h3>
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-portal-bg border border-portal-bg rounded-md">
            <TableHeader>
              <TableRow className="bg-portal-bg/70 border-b border-portal-bg">
                <TableHead className="text-portal-text-light">Date</TableHead>
                <TableHead className="text-portal-text-light">Description</TableHead>
                <TableHead className="text-portal-text-light">Category</TableHead>
                <TableHead className="text-portal-text-light">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-portal-bg/50 hover:bg-portal-bg/30">
                <TableCell>2023-01-01</TableCell>
                <TableCell>Office Supplies</TableCell>
                <TableCell>Expense</TableCell>
                <TableCell>-$50.00</TableCell>
              </TableRow>
              <TableRow className="border-b border-portal-bg/50 hover:bg-portal-bg/30">
                <TableCell>2023-01-05</TableCell>
                <TableCell>Donation Received</TableCell>
                <TableCell>Income</TableCell>
                <TableCell>+$200.00</TableCell>
              </TableRow>
              <TableRow className="hover:bg-portal-bg/30">
                <TableCell>2023-01-10</TableCell>
                <TableCell>Utility Bill</TableCell>
                <TableCell>Expense</TableCell>
                <TableCell>-$120.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
