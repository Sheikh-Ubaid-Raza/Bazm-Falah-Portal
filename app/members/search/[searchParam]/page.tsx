"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, ArrowLeft, User, Phone, Mail } from "lucide-react";

// Function to get dynamic search results based on searchParam
// This is reusable for other dynamic search pages
// Accepts a string parameter with a default value to handle undefined cases
const getSearchResults = (searchParam: string = "unknown") => {
  const dummyResults = [
    { id: "1001", name: "John Doe", phone: "123-456-7890", email: "john.doe@example.com" },
    { id: "1002", name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com" },
  ].filter(result => 
    result.name.toLowerCase().includes(searchParam.toLowerCase()) ||
    result.id.includes(searchParam) ||
    result.phone.includes(searchParam) ||
    result.email.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <>
      <h3 className="text-2xl font-semibold text-green-800">Search Results for: {searchParam}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyResults.length > 0 ? (
          dummyResults.map((result) => (
            <Card key={result.id} className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                  <User className="h-6 w-6" />
                  Member ID: {result.id}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Name: {result.name}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone: {result.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email: {result.email}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-white border-green-400 text-green-700 hover:bg-green-50"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center text-gray-600 col-span-full">
            <p className="text-xl font-semibold mb-2">No Results Found</p>
            <p>No members found for {searchParam}.</p>
          </div>
        )}
      </div>
    </>
  );
};

// Main component for dynamic member search
// Uses useParams to get the dynamic searchParam from the URL
export default function SearchMemberPage() {
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
            Search Members Results: {safeSearchParam}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getSearchResults(safeSearchParam)} {/* Render dynamic search results */}
          <div className="flex justify-end mt-8">
            <Link href="/members/search">
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
    { params: { searchParam: "john" } },
    { params: { searchParam: "jane" } },
  ];
  return { paths, fallback: "blocking" };
}