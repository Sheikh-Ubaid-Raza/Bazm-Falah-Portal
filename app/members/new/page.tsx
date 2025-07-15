"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  PlusCircle,
  Save,
  Upload,
  User,
  MapPin,
  GroupIcon as Family,
  ImageIcon,
  Trash2,
  TimerResetIcon as ResetIcon,
} from "lucide-react"
import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

interface FamilyMember {
  id: number
  relationship: string
  name: string
  age: string
  education: string
  financialStatus: string
  other: string
}

export default function NewMemberPage() {
  // State for all form fields
  const [name, setName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [grandFatherName, setGrandFatherName] = useState("")
  const [cnic, setCnic] = useState("")
  const [dob, setDob] = useState("")
  const [education, setEducation] = useState("")
  const [maritalStatus, setMaritalStatus] = useState<string | undefined>(undefined)
  const [cellNo, setCellNo] = useState("")
  const [whatsappNo, setWhatsappNo] = useState("")
  const [villageIndia, setVillageIndia] = useState("")
  const [temporaryAddress, setTemporaryAddress] = useState("")
  const [permanentAddress, setPermanentAddress] = useState("")
  const [membershipFeeBookNo, setMembershipFeeBookNo] = useState("")
  const [membershipFeeSlipNo, setMembershipFeeSlipNo] = useState("")

  const [portalId, setPortalId] = useState("")
  const [memberShipNo, setMemberShipNo] = useState("")
  const [memberPicture, setMemberPicture] = useState<string | null>(null)
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([])

  // Initialize Portal ID on component mount
  useEffect(() => {
    setPortalId(`PORTAL-${Date.now().toString().slice(-6)}`)
  }, [])

  // Update Membership No. when CNIC changes (last 10 digits)
  useEffect(() => {
    if (cnic.length >= 10) {
      setMemberShipNo(cnic.slice(-10))
    } else {
      setMemberShipNo("")
    }
  }, [cnic])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setMemberPicture(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        id: Date.now(),
        relationship: "",
        name: "",
        age: "",
        education: "",
        financialStatus: "",
        other: "",
      },
    ])
  }

  const updateFamilyMember = (id: number, field: keyof FamilyMember, value: string) => {
    setFamilyMembers(familyMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const removeFamilyMember = (id: number) => {
    setFamilyMembers(familyMembers.filter((member) => member.id !== id))
  }

  const handleResetForm = () => {
    // Reset all state variables to their initial values
    setName("")
    setFatherName("")
    setGrandFatherName("")
    setCnic("")
    setDob("")
    setEducation("")
    setMaritalStatus(undefined)
    setCellNo("")
    setWhatsappNo("")
    setVillageIndia("")
    setTemporaryAddress("")
    setPermanentAddress("")
    setMembershipFeeBookNo("")
    setMembershipFeeSlipNo("")
    setPortalId(`PORTAL-${Date.now().toString().slice(-6)}`) // Regenerate Portal ID
    setMemberShipNo("") // Will be reset by cnic effect
    setMemberPicture(null)
    setFamilyMembers([])
    alert("Form has been reset!")
  }

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would collect all form data here and send it to your backend
    const formData = {
      name,
      fatherName,
      grandFatherName,
      cnic,
      dob,
      education,
      maritalStatus,
      cellNo,
      whatsappNo,
      villageIndia,
      temporaryAddress,
      permanentAddress,
      membershipFeeBookNo,
      membershipFeeSlipNo,
      portalId,
      memberShipNo,
      memberPicture, // Base64 string of the image
      familyMembers,
    }
    console.log("Saving Form Data:", formData)
    alert("Form data saved (mock submission)!")
    // You might want to reset the form after saving, or navigate away
    // handleResetForm();
  }

  return (
    <Card className="bg-white border-green-200 shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center gap-4 text-green-800">
          <PlusCircle className="h-8 w-8" />
          New Member Registration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSaveForm}>
          {" "}
          {/* Wrap the entire form in a <form> tag */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Details */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <User className="h-5 w-5" /> Personal Details
              </h3>
              <div>
                <Label htmlFor="name" className="text-green-700 font-semibold my-4">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter member name"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="father-name" className="text-green-700 font-semibold my-4">
                  Father Name
                </Label>
                <Input
                  id="father-name"
                  placeholder="Enter father's name"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="grand-father-name" className="text-green-700 font-semibold my-4">
                  Grand Father Name
                </Label>
                <Input
                  id="grand-father-name"
                  placeholder="Enter grand father's name"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={grandFatherName}
                  onChange={(e) => setGrandFatherName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="cnic" className="text-green-700 font-semibold my-4">
                  CNIC Number
                </Label>
                <Input
                  id="cnic"
                  placeholder="e.g., XXXXX-XXXXXXX-X"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dob" className="text-green-700 font-semibold my-4">
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="education" className="text-green-700 font-semibold my-4">
                  Education
                </Label>
                <Input
                  id="education"
                  placeholder="Enter education level"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="marital-status" className="text-green-700 font-semibold my-4">
                  Marital Status
                </Label>
                <Select value={maritalStatus} onValueChange={(value) => setMaritalStatus(value)}>
                  <SelectTrigger className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400">
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-green-200 text-gray-800">
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact & Address Details */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Contact & Address
              </h3>
              <div>
                <Label htmlFor="cell-no" className="text-green-700 font-semibold my-4">
                  Cell No.
                </Label>
                <Input
                  id="cell-no"
                  type="tel"
                  placeholder="Enter cell number"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={cellNo}
                  onChange={(e) => setCellNo(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="whatsapp-no" className="text-green-700 font-semibold my-4">
                  WhatsApp No.
                </Label>
                <Input
                  id="whatsapp-no"
                  type="tel"
                  placeholder="Enter WhatsApp number"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={whatsappNo}
                  onChange={(e) => setWhatsappNo(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="village-india" className="text-green-700 font-semibold my-4">
                  Village (India)
                </Label>
                <Input
                  id="village-india"
                  placeholder="Enter village name"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={villageIndia}
                  onChange={(e) => setVillageIndia(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="temporary-address" className="text-green-700 font-semibold my-4">
                  Temporary Address
                </Label>
                <Input
                  id="temporary-address"
                  placeholder="Enter temporary address"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={temporaryAddress}
                  onChange={(e) => setTemporaryAddress(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="permanent-address" className="text-green-700 font-semibold my-4">
                  Permanent Address
                </Label>
                <Input
                  id="permanent-address"
                  placeholder="Enter permanent address"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={permanentAddress}
                  onChange={(e) => setPermanentAddress(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="membership-fee-book-no" className="text-green-700 font-semibold my-4">
                  Membership Fee Book No.
                </Label>
                <Input
                  id="membership-fee-book-no"
                  placeholder="Enter book number"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={membershipFeeBookNo}
                  onChange={(e) => setMembershipFeeBookNo(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="membership-fee-slip-no" className="text-green-700 font-semibold my-4">
                  Membership Fee Slip No.
                </Label>
                <Input
                  id="membership-fee-slip-no"
                  placeholder="Enter slip number"
                  className="bg-green-50 border-green-200 text-gray-800 focus:border-green-400"
                  value={membershipFeeSlipNo}
                  onChange={(e) => setMembershipFeeSlipNo(e.target.value)}
                />
              </div>
            </div>

            {/* Portal Info & Picture */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <ImageIcon className="h-5 w-5" /> Portal Info & Picture
              </h3>
              <div>
                <Label htmlFor="portal-id" className="text-green-700 font-semibold my-4">
                  Portal ID No.
                </Label>
                <Input
                  id="portal-id"
                  value={portalId}
                  readOnly
                  className="bg-green-100 border-green-200 text-gray-800 font-mono"
                />
              </div>
              <div>
                <Label htmlFor="member-ship-no" className="text-green-700 font-semibold my-4">
                  Member Ship No. (CNIC last 10 digits)
                </Label>
                <Input
                  id="member-ship-no"
                  value={memberShipNo}
                  readOnly
                  className="bg-green-100 border-green-200 text-gray-800 font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="member-picture" className="text-green-700 font-semibold my-4">
                  Member Picture
                </Label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-green-200 rounded-lg p-4 h-48 relative">
                  {memberPicture ? (
                    <Image
                      src={memberPicture || "/placeholder.svg"}
                      alt="Member Preview"
                      className="max-h-full max-w-full object-contain rounded-md"
                      width={250}
                      height={250}
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <Upload className="h-10 w-10 mx-auto mb-2" />
                      <p>Click to Upload Picture</p>
                    </div>
                  )}
                  <Input
                    id="member-picture"
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                </div>
                {memberPicture && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setMemberPicture(null)}
                    className="w-full mt-2 bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4 mr-2" /> Remove Picture
                  </Button>
                )}
                <Button
                  type="button"
                  className="bg-green-600 hover:bg-green-700 text-white mt-2 w-full"
                  onClick={() => document.getElementById("member-picture")?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload Picture
                </Button>
              </div>
            </div>
          </div>
          {/* Family Information */}
          <div className="mt-10 space-y-6">
            <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
              <Family className="h-5 w-5" /> Family Information
            </h3>
            <div className="overflow-x-auto">
              <Table className="min-w-full bg-green-50 border border-green-200 rounded-md">
                <TableHeader>
                  <TableRow className="bg-green-100 border-b border-green-200">
                    <TableHead className="text-green-800 font-bold">Relationship</TableHead>
                    <TableHead className="text-green-800 font-bold">Name</TableHead>
                    <TableHead className="text-green-800 font-bold">Age</TableHead>
                    <TableHead className="text-green-800 font-bold">Education</TableHead>
                    <TableHead className="text-green-800 font-bold">Financial Status</TableHead>
                    <TableHead className="text-green-800 font-bold">Other</TableHead>
                    <TableHead className="text-green-800 font-bold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {familyMembers.map((member) => (
                    <TableRow key={member.id} className="border-b border-green-100 hover:bg-green-100">
                      <TableCell>
                        <Input
                          value={member.relationship}
                          onChange={(e) => updateFamilyMember(member.id, "relationship", e.target.value)}
                          className="bg-transparent border-none focus:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={member.name}
                          onChange={(e) => updateFamilyMember(member.id, "name", e.target.value)}
                          className="bg-transparent border-none focus:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={member.age}
                          onChange={(e) => updateFamilyMember(member.id, "age", e.target.value)}
                          className="bg-transparent border-none focus:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={member.education}
                          onChange={(e) => updateFamilyMember(member.id, "education", e.target.value)}
                          className="bg-transparent border-none focus:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={member.financialStatus}
                          onChange={(e) => updateFamilyMember(member.id, "financialStatus", e.target.value)}
                          className="bg-transparent border-none focus:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={member.other}
                          onChange={(e) => updateFamilyMember(member.id, "other", e.target.value)}
                          className="bg-transparent border-none focus:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFamilyMember(member.id)}
                          className="text-red-500 hover:bg-red-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {familyMembers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-gray-500 py-4">
                        No family members added yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <Button
              type="button"
              onClick={addFamilyMember}
              variant="outline"
              className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add Family Member
            </Button>
          </div>
          {/* Removed Signatures Section */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-end">
            <Button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleResetForm}
            >
              <ResetIcon className="mr-2 h-5 w-5" /> RESET FORM
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="bg-white hover:bg-green-50 text-green-700 border-green-400"
            >
              <Save className="mr-2 h-5 w-5" />
              SAVE FORM
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}