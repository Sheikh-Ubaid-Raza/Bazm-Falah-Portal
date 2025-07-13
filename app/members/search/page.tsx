import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, User, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function SearchMemberPage() {
  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <Search className="h-8 w-8" />
          Search Members
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="search-name" className="text-green-700 font-semibold my-4">Search by Name</Label>
              <Input
                id="search-name"
                placeholder="Enter member name"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="search-id" className="text-green-700 font-semibold my-4">Search by Member ID</Label>
              <Input
                id="search-id"
                placeholder="Enter member ID"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Label htmlFor="search-phone" className="text-green-700 font-semibold my-4">Search by Phone</Label>
              <Input
                id="search-phone"
                type="tel"
                placeholder="Enter phone number"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
            <div>
              <Label htmlFor="search-email" className="text-green-700 font-semibold my-4">Search by Email</Label>
              <Input
                id="search-email"
                type="email"
                placeholder="Enter email address"
                className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-8">
          <Link href="/members/search/john">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-green-800">Search Results (Dummy)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                  <User className="h-6 w-6" />
                  Member ID: 1001
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Name: John Doe
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone: 123-456-7890
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email: john.doe@example.com
                </p>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-white border-green-400 text-green-700 hover:bg-green-50"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                  <User className="h-6 w-6" />
                  Member ID: 1002
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Name: Jane Smith
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone: 987-654-3210
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email: jane.smith@example.com
                </p>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-white border-green-400 text-green-700 hover:bg-green-50"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}