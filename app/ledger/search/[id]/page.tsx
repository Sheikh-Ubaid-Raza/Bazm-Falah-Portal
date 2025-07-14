import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, ArrowLeft, BookText } from "lucide-react" // Removed Signature icon
import Image from "next/image"

// Dummy data for demonstration. In a real app, you'd fetch this from a database.
const memberLedgerData = {
  "123": {
    name: "John Doe",
    fatherName: "Richard Doe",
    permanentAddress: "123 Main St, Anytown, USA",
    memberShipNo: "1234567890",
    portalId: "PORTAL-123456",
    cnic: "12345-6789012-3",
    dob: "1990-05-15",
    cellNo: "123-456-7890",
    picture: "/placeholder.svg?height=150&width=150", // Placeholder image
    transactions: [
      {
        date: "2023-01-01",
        fundDetails: "Membership Fee",
        amount: "$50.00",
        portalReceiptNo: "PRN001",
        bookNo: "B001",
        slipNo: "S001",
      },
      {
        date: "2023-02-10",
        fundDetails: "Donation (General)",
        amount: "$100.00",
        portalReceiptNo: "PRN002",
        bookNo: "B001",
        slipNo: "S002",
      },
      {
        date: "2023-03-05",
        fundDetails: "Zakat",
        amount: "$200.00",
        portalReceiptNo: "PRN003",
        bookNo: "B002",
        slipNo: "S003",
      },
    ],
  },
  "456": {
    name: "Jane Smith",
    fatherName: "Robert Smith",
    permanentAddress: "456 Oak Ave, Otherville, USA",
    memberShipNo: "0987654321",
    portalId: "PORTAL-789012",
    cnic: "98765-4321098-7",
    dob: "1988-11-22",
    cellNo: "987-654-3210",
    picture: "/placeholder.svg?height=150&width=150", // Placeholder image
    transactions: [
      {
        date: "2023-01-20",
        fundDetails: "Donation (Education)",
        amount: "$75.00",
        portalReceiptNo: "PRN004",
        bookNo: "B002",
        slipNo: "S004",
      },
    ],
  },
}

// Removed MemberLedgerPageProps interface and defined props inline for clarity
export default function MemberLedgerPage({ params }: { params: { id: string } }) {
  const { id } = params
  const member = memberLedgerData[id as keyof typeof memberLedgerData] || null

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] py-12">
        <Card className="w-full max-w-md bg-white text-gray-800 border-green-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-800">Member Ledger Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-gray-600">The ledger for member ID &quot;{id}&quot; could not be found.</p>
            <Link href="/ledger/search">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Search Ledger
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="py-8">
      <Card className="bg-white border-green-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2 text-green-800">
            <BookText className="h-6 w-6 text-green-700" />
            Member Ledger
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Member Details */}
            <div className="md:col-span-2 space-y-3 text-gray-800">
              <p>
                <span className="font-semibold">Name:</span> {member.name}
              </p>
              <p>
                <span className="font-semibold">Father Name:</span> {member.fatherName}
              </p>
              <p>
                <span className="font-semibold">Permanent Address:</span> {member.permanentAddress}
              </p>
              <p>
                <span className="font-semibold">Member Ship No.:</span> {member.memberShipNo}
              </p>
              <p>
                <span className="font-semibold">Portal ID No.:</span> {member.portalId}
              </p>
              <p>
                <span className="font-semibold">CNIC Number:</span> {member.cnic}
              </p>
              <p>
                <span className="font-semibold">Date of Birth:</span> {member.dob}
              </p>
              <p>
                <span className="font-semibold">Cell No.:</span> {member.cellNo}
              </p>
            </div>

            {/* Member Picture */}
            <div className="md:col-span-1 flex justify-center items-start">
              <div className="w-36 h-36 border border-green-200 rounded-md flex items-center justify-center overflow-hidden bg-green-50">
                {member.picture ? (
                  <Image
                    src={member.picture || "/placeholder.svg"}
                    alt="Member Picture"
                    className="object-cover w-full h-full"
                    width={250} // Added width
                    height={250} // Added height
                  />
                ) : (
                  <User className="h-16 w-16 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-green-800 mb-4">Transaction History</h3>
          <div className="overflow-x-auto mb-8">
            <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
              <TableHeader>
                <TableRow className="bg-green-100 border-b border-green-200">
                  <TableHead className="text-green-800 font-bold">Date</TableHead>
                  <TableHead className="text-green-800 font-bold">Fund Details</TableHead>
                  <TableHead className="text-green-800 font-bold">Amount</TableHead>
                  <TableHead className="text-green-800 font-bold">Portal Receipt No</TableHead>
                  <TableHead className="text-green-800 font-bold">Book No</TableHead>
                  <TableHead className="text-green-800 font-bold">Slip No</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {member.transactions.length > 0 ? (
                  member.transactions.map((transaction, index) => (
                    <TableRow key={index} className="border-b border-green-100 hover:bg-green-100">
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.fundDetails}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.portalReceiptNo}</TableCell>
                      <TableCell>{transaction.bookNo}</TableCell>
                      <TableCell>{transaction.slipNo}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                      No transactions found for this member.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Removed Signatures Section */}

          <div className="flex justify-end mt-8">
            <Link href="/ledger/search">
              <Button className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-200">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Search Ledger Selection
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// generateStaticParams function to pre-render specific member ID paths
export async function generateStaticParams() {
  const memberIds = Object.keys(memberLedgerData) // Get all keys from the dummy data
  return memberIds.map((id) => ({
    id: id,
  }))
}
