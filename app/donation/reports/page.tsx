import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, DollarSign, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DonationReportsPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <FileText className="h-8 w-8" />
          Donation Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                <DollarSign className="h-6 w-6" />
                Total Donations Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">Generate a report of total donations over a specified period.</p>
              <Link href="/donation/reports/total" className="block mt-4">
                <Button
                  variant="outline"
                  className="w-full bg-white border-green-200 text-green-700 hover:bg-green-50"
                >
                  View Report
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                <CalendarDays className="h-6 w-6" />
                Donations by Date
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">View donations by date with daily, weekly, or monthly summaries.</p>
              <Link href="/donation/reports/by-date" className="block mt-4">
                <Button
                  variant="outline"
                  className="w-full bg-white border-green-200 text-green-700 hover:bg-green-50"
                >
                  View Report
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                <FileText className="h-6 w-6" />
                Donor Specific Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">Generate a report of all donations by a specific donor.</p>
              <Link href="/donation/reports/donor-specific" className="block mt-4">
                <Button
                  variant="outline"
                  className="w-full bg-white border-green-200 text-green-700 hover:bg-green-50"
                >
                  View Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-green-800 mb-6">Sample Report Data</h3>
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-green-50 border border-green-200 rounded-lg">
            <TableHeader>
              <TableRow className="bg-green-100 border-b border-green-200">
                <TableHead className="text-green-800 font-bold">Date</TableHead>
                <TableHead className="text-green-800 font-bold">Donor Name</TableHead>
                <TableHead className="text-green-800 font-bold">Amount</TableHead>
                <TableHead className="text-green-800 font-bold">Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-green-100 hover:bg-green-100">
                <TableCell className="text-gray-800">2023-01-15</TableCell>
                <TableCell className="text-gray-800">Alice Johnson</TableCell>
                <TableCell className="text-gray-800">$100.00</TableCell>
                <TableCell className="text-gray-800">Cash</TableCell>
              </TableRow>
              <TableRow className="border-b border-green-100 hover:bg-green-100">
                <TableCell className="text-gray-800">2023-02-20</TableCell>
                <TableCell className="text-gray-800">Bob Williams</TableCell>
                <TableCell className="text-gray-800">$250.00</TableCell>
                <TableCell className="text-gray-800">Bank Transfer</TableCell>
              </TableRow>
              <TableRow className="hover:bg-green-100">
                <TableCell className="text-gray-800">2023-03-01</TableCell>
                <TableCell className="text-gray-800">Charlie Brown</TableCell>
                <TableCell className="text-gray-800">$50.00</TableCell>
                <TableCell className="text-gray-800">Online</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}