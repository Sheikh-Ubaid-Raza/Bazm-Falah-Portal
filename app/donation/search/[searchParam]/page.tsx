"use client"

import { useParams } from "next/navigation";
import { TableCell } from "@/components/ui/table";
import { TableBody } from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import { Table } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

// Function to get dynamic search results based on searchParam
// This is reusable for other dynamic search pages
// Accepts a string parameter with a default value to handle undefined cases
const getSearchResults = (searchParam: string = "unknown") => {
  const dummyResults = [
    { id: "D001", name: "Alice Johnson", amount: "$100.00", date: "2023-01-15", method: "Cash" },
    { id: "D002", name: "Bob Williams", amount: "$250.00", date: "2023-02-20", method: "Bank Transfer" },
  ].filter(result => result.name.toLowerCase().includes(searchParam.toLowerCase()) || result.id.includes(searchParam));

  return (
    <>
      <h3 className="text-2xl font-semibold text-green-800">Search Results for: {searchParam}</h3>
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
            {dummyResults.length > 0 ? (
              dummyResults.map((result) => (
                <TableRow key={result.id} className="border-b border-green-100 hover:bg-green-100">
                  <TableCell className="font-medium text-gray-800">{result.id}</TableCell>
                  <TableCell className="text-gray-800">{result.name}</TableCell>
                  <TableCell className="text-gray-800">{result.amount}</TableCell>
                  <TableCell className="text-gray-800">{result.date}</TableCell>
                  <TableCell className="text-gray-800">{result.method}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-600">
                  No results found for "{searchParam}".
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

// Main component for dynamic donation search
// Uses useParams to get the dynamic searchParam from the URL
export default function SearchDonationPage() {
  const params = useParams();
  const searchParam = params.searchParam;

  // Ensure searchParam is a string, default to "unknown" if undefined
  const safeSearchParam = typeof searchParam === "string" ? searchParam : "unknown";

  return (
    <div className="py-8">
      <Card className="bg-white border-green-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2 text-green-800">
            <Search className="h-6 w-6 text-green-700" />
            Search Donation Results: {safeSearchParam}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getSearchResults(safeSearchParam)} {/* Render dynamic search results */}
          <div className="flex justify-end mt-8">
            <Link href="/donation/search">
              <Button className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-200">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Search
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// getStaticPaths function to pre-render specific searchParam paths
// This ensures initial routes are statically generated, with fallback for dynamic ones
export async function getStaticPaths() {
  const paths = [
    { params: { searchParam: "alice" } },
    { params: { searchParam: "bob" } },
  ];
  return { paths, fallback: "blocking" };
}