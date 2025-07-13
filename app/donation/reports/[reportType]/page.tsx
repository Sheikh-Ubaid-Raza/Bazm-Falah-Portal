"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

// Function to get dynamic report content based on reportId
// This is reusable for other dynamic report pages
// Accepts a string parameter with a default value to handle undefined cases
const getReportContent = (reportId: string = "unknown") => {
  switch (reportId) {
    case "total":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Total Donations Report</h3>
          <Card className="bg-green-50 border-green-200 text-gray-800 mb-6">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-green-700">$15,250.00</p>
              <p className="text-gray-600 mt-2">Total Donations (Year-to-Date)</p>
            </CardContent>
          </Card>
          <p className="text-gray-600">This report summarizes all donations received.</p>
        </>
      );
    case "by-date":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Donations by Date Report</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Date</TableHead>
                  <TableHead className="text-green-800 font-bold">Daily Total</TableHead>
                  <TableHead className="text-green-800 font-bold">Number of Donations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>2023-01-15</TableCell>
                  <TableCell>$350.00</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>2023-02-20</TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow className="hover:bg-green-100">
                  <TableCell>2023-03-01</TableCell>
                  <TableCell>$150.00</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-gray-600 mt-4">Detailed breakdown of donations per day.</p>
        </>
      );
    case "donor-specific":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Donor Specific Report</h3>
          <Card className="bg-green-50 border-green-200 text-gray-800 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold">Donor: Alice Johnson</p>
              <p className="text-gray-600">Total Donated: $500.00</p>
              <p className="text-gray-600">Number of Donations: 5</p>
            </CardContent>
          </Card>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Donation ID</TableHead>
                  <TableHead className="text-green-800 font-bold">Date</TableHead>
                  <TableHead className="text-green-800 font-bold">Amount</TableHead>
                  <TableHead className="text-green-800 font-bold">Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>D001</TableCell>
                  <TableCell>2023-01-15</TableCell>
                  <TableCell>$100.00</TableCell>
                  <TableCell>Cash</TableCell>
                </TableRow>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>D005</TableCell>
                  <TableCell>2023-03-10</TableCell>
                  <TableCell>$150.00</TableCell>
                  <TableCell>Online</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-gray-600 mt-4">Detailed list of donations by a specific donor.</p>
        </>
      );
    default:
      return (
        <div className="text-center text-gray-600">
          <p className="text-xl font-semibold mb-2">Report Type Not Found</p>
          <p>The report type "{reportId}" is not recognized.</p>
        </div>
      );
  }
};

// Main component for dynamic donation reports
// Uses useParams to get the dynamic reportId from the URL
export default function DonationReportsPage() {
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
            Dynamic Donation Report: {safeReportId.replace(/-/g, " ").toUpperCase()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getReportContent(safeReportId)} {/* Render dynamic content based on safeReportId */}
          <div className="flex justify-end mt-8">
            <Link href="/donation/reports">
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
    { params: { reportId: "total" } },
    { params: { reportId: "by-date" } },
    { params: { reportId: "donor-specific" } },
  ];
  return { paths, fallback: "blocking" };
}