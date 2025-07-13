"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

// Function to get dynamic report content based on reportId
const getReportContent = (reportId: string = "unknown") => {
  switch (reportId) {
    case "all-data":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">All Members Data Report</h3>
          <Card className="bg-green-50 border-green-200 text-gray-800 mb-6">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-green-700">500 Members</p>
              <p className="text-gray-600 mt-2">Total Active Members</p>
            </CardContent>
          </Card>
          <p className="text-gray-600">Comprehensive report of all member data.</p>
        </>
      );
    case "by-id":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Members by ID Report</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Member ID</TableHead>
                  <TableHead className="text-green-800 font-bold">Name</TableHead>
                  <TableHead className="text-green-800 font-bold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>M001</TableCell>
                  <TableCell>Alice Johnson</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow className="border-b border-green-100 hover:bg-green-100">
                  <TableCell>M002</TableCell>
                  <TableCell>Bob Williams</TableCell>
                  <TableCell>Inactive</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-gray-600 mt-4">Report by member ID with details.</p>
        </>
      );
    case "custom":
      return (
        <>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Custom Member Report</h3>
          <Card className="bg-green-50 border-green-200 text-gray-800 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold">Custom Filter: Active Members</p>
              <p className="text-gray-600">Total: 400</p>
            </CardContent>
          </Card>
          <p className="text-gray-600 mt-4">Custom report with specific filters.</p>
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

// Main component for dynamic member reports
export default function MemberReportsPage() {
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
            Dynamic Member Report: {safeReportId.replace(/-/g, " ").toUpperCase()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getReportContent(safeReportId)} {/* Render dynamic content based on safeReportId */}
          <div className="flex justify-end mt-8">
            <Link href="/members/reports">
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