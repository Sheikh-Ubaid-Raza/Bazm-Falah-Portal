import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, CalendarDays, TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LedgerReportsPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <FileText className="h-8 w-8" />
          Ledger Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                <CalendarDays className="h-6 w-6" />
                Daily/Monthly Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">Generate a summary of ledger entries for a specific day or month.</p>
              <Link href="/ledger/reports/daily" className="block mt-4">
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
                <TrendingUp className="h-6 w-6" />
                Income Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">View a detailed report of all recorded income entries.</p>
              <Link href="/ledger/reports/income" className="block mt-4">
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
                <TrendingDown className="h-6 w-6" />
                Expense Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">Generate a report detailing all expense entries.</p>
              <Link href="/ledger/reports/expense" className="block mt-4">
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
                <TableHead className="text-green-800 font-bold">Description</TableHead>
                <TableHead className="text-green-800 font-bold">Category</TableHead>
                <TableHead className="text-green-800 font-bold">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-green-100 hover:bg-green-100">
                <TableCell className="text-gray-800">2023-01-01</TableCell>
                <TableCell className="text-gray-800">Office Supplies</TableCell>
                <TableCell className="text-gray-800">Expense</TableCell>
                <TableCell className="text-gray-800">-$50.00</TableCell>
              </TableRow>
              <TableRow className="border-b border-green-100 hover:bg-green-100">
                <TableCell className="text-gray-800">2023-01-05</TableCell>
                <TableCell className="text-gray-800">Donation Received</TableCell>
                <TableCell className="text-gray-800">Income</TableCell>
                <TableCell className="text-gray-800">+$200.00</TableCell>
              </TableRow>
              <TableRow className="hover:bg-green-100">
                <TableCell className="text-gray-800">2023-01-10</TableCell>
                <TableCell className="text-gray-800">Utility Bill</TableCell>
                <TableCell className="text-gray-800">Expense</TableCell>
                <TableCell className="text-gray-800">-$120.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}