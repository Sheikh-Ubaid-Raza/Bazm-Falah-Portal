import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Users, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MemberReportsPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <FileText className="h-8 w-8" />
          Members Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                <Users className="h-6 w-6" />
                Members All Data
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">
                Generate a comprehensive report of all member data, including personal details and status.
              </p>
              <Link href="/members/reports/all-data" className="block mt-4">
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
                <User className="h-6 w-6" />
                Member ID/Name/Phone
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">Generate a report by member ID, name, or phone for quick lookups.</p>
              <Link href="/members/reports/by-id" className="block mt-4">
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
                Custom Member Report
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="text-base">Create a custom report with specific fields and filters.</p>
              <Link href="/members/reports/custom" className="block mt-4">
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
                <TableHead className="text-green-800 font-bold">Member ID</TableHead>
                <TableHead className="text-green-800 font-bold">Name</TableHead>
                <TableHead className="text-green-800 font-bold">Email</TableHead>
                <TableHead className="text-green-800 font-bold">Phone</TableHead>
                <TableHead className="text-green-800 font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-green-100 hover:bg-green-100">
                <TableCell className="font-medium text-gray-800">M001</TableCell>
                <TableCell className="text-gray-800">Alice Johnson</TableCell>
                <TableCell className="text-gray-800">alice@example.com</TableCell>
                <TableCell className="text-gray-800">555-1234</TableCell>
                <TableCell className="text-gray-800">Active</TableCell>
              </TableRow>
              <TableRow className="border-b border-green-100 hover:bg-green-100">
                <TableCell className="font-medium text-gray-800">M002</TableCell>
                <TableCell className="text-gray-800">Bob Williams</TableCell>
                <TableCell className="text-gray-800">bob@example.com</TableCell>
                <TableCell className="text-gray-800">555-5678</TableCell>
                <TableCell className="text-gray-800">Inactive</TableCell>
              </TableRow>
              <TableRow className="hover:bg-green-100">
                <TableCell className="font-medium text-gray-800">M003</TableCell>
                <TableCell className="text-gray-800">Charlie Brown</TableCell>
                <TableCell className="text-gray-800">charlie@example.com</TableCell>
                <TableCell className="text-gray-800">555-9012</TableCell>
                <TableCell className="text-gray-800">Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}