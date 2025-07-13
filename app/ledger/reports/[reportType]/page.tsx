"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, ArrowLeft} from "lucide-react";

// Function to get dynamic report content based on reportId
// This is reusable for other dynamic report pages
// Accepts a string parameter with a default value to handle undefined cases
const getReportContent = (reportId: string = "unknown") => {
  switch (reportId) {
    case "daily":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Daily/Monthly Summary Report</h3>
          <Card className="bg-green-50 border-green-200 text-gray-800 mb-6">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-green-700">$1,500.00</p>
              <p className="text-gray-600 mt-2">Total for January 2023</p>
            </CardContent>
          </Card>
          <p className="text-gray-600">Summary of ledger entries for a specific day or month.</p>
        </>
      );
    case "income":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Income Report</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Date</TableHead>
                  <TableHead className="text-green-800 font-bold">Description</TableHead>
                  <TableHead className="text-green-800 font-bold">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>2023-01-05</TableCell>
                  <TableCell>Donation Received</TableCell>
                  <TableCell>$200.00</TableCell>
                </TableRow>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>2023-01-15</TableCell>
                  <TableCell>Membership Fees</TableCell>
                  <TableCell>$300.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-gray-600 mt-4">Detailed report of all recorded income entries.</p>
        </>
      );
    case "expense":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Expense Report</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Date</TableHead>
                  <TableHead className="text-green-800 font-bold">Description</TableHead>
                  <TableHead className="text-green-800 font-bold">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>2023-01-01</TableCell>
                  <TableCell>Office Supplies</TableCell>
                  <TableCell>$50.00</TableCell>
                </TableRow>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>2023-01-10</TableCell>
                  <TableCell>Utility Bill</TableCell>
                  <TableCell>$120.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-gray-600 mt-4">Detailed report of all expense entries.</p>
        </>
      );
    default:
      return (
        <div className="text-center text-gray-600">
          <p className="text-xl font-semibold mb-2">Report Type Not Found</p>
          <p>The report type {reportId} is not recognized.</p>
        </div>
      );
  }
};

// Main component for dynamic ledger reports
// Uses useParams to get the dynamic reportId from the URL
export default function LedgerReportsPage() {
  const params = useParams();
  const reportId = params.reportId;

  // Ensure reportId is a string, default to "unknown" if undefined
  const safeReportId = typeof reportId === "string" ? reportId : "unknown";

  return (
    <div className="py-8">
      <Card className="bg-white border-green-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2 text-green-800">
            <FileText className="h-6 w-6 text-green-700" />
            Dynamic Ledger Report: {safeReportId.replace(/-/g, " ").toUpperCase()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getReportContent(safeReportId)} {/* Render dynamic content based on safeReportId */}
          <div className="flex justify-end mt-8">
            <Link href="/ledger/reports">
              <Button className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-200">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Reports
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// getStaticPaths function to pre-render specific reportId paths
// This ensures initial routes are statically generated, with fallback for dynamic ones
export async function getStaticPaths() {
  const paths = [
    { params: { reportId: "daily" } },
    { params: { reportId: "income" } },
    { params: { reportId: "expense" } },
  ];
  return { paths, fallback: "blocking" };
}