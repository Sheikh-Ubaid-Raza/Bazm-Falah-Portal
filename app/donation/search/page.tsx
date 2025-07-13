import { TableCell } from "@/components/ui/table";
import { TableBody } from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import { Table } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchDonationPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <Search className="h-8 w-8" />
          Search Donation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="search-donor-name" className="text-green-700 font-semibold my-4">Search by Donor Name</Label>
              <Input
                id="search-donor-name"
                placeholder="Enter donor name"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="search-donation-id" className="text-green-700 font-semibold my-4">Search by Donation ID</Label>
              <Input
                id="search-donation-id"
                placeholder="Enter donation ID"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="search-date-range-start" className="text-green-700 font-semibold my-4">Date Range (Start)</Label>
              <Input
                id="search-date-range-start"
                type="date"
                defaultValue="2025-07-12" // Default to today's date
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="search-date-range-end" className="text-green-700 font-semibold my-4">Date Range (End)</Label>
              <Input
                id="search-date-range-end"
                type="date"
                defaultValue="2025-07-12" // Default to today's date
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-8">
          <Link href="/donation/search/alice">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-green-800">Search Results (Dummy)</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-lg">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Donation ID</TableHead>
                  <TableHead className="text-green-800 font-bold">Donor Name</TableHead>
                  <TableHead className="text-green-800 font-bold">Amount</TableHead>
                  <TableHead className="text-green-800 font-bold">Date</TableHead>
                  <TableHead className="text-green-800 font-bold">Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell className="font-medium text-gray-800">D001</TableCell>
                  <TableCell className="text-gray-800">Alice Johnson</TableCell>
                  <TableCell className="text-gray-800">$100.00</TableCell>
                  <TableCell className="text-gray-800">2023-01-15</TableCell>
                  <TableCell className="text-gray-800">Cash</TableCell>
                </TableRow>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell className="font-medium text-gray-800">D002</TableCell>
                  <TableCell className="text-gray-800">Bob Williams</TableCell>
                  <TableCell className="text-gray-800">$250.00</TableCell>
                  <TableCell className="text-gray-800">2023-02-20</TableCell>
                  <TableCell className="text-gray-800">Bank Transfer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}