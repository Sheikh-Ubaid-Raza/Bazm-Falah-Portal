import About from "@/components/About"
import ContactUs from "@/components/ContactUs"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-white">
      <div className="w-full max-w-4xl p-16 py-28 px-4">
        <div className="w-full bg-white">
          <CardHeader className="flex flex-col items-center text-center">
            <Image src="/logo.png" alt="Bazm Falah-ul-Ahbab Sultanpur Logo" width={150} height={150} className="mb-6" />
            <CardTitle className="text-5xl font-extrabold text-green-800">
              Bazm Falah-ul-Ahbab Sultanpur
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl">
              A social welfare organization dedicated to education, charity, and community development. We support the
              needy, promote learning, and strive for a brighter future together.
            </p>
          </CardContent>
          <div className="text-center">
              <Link href="/members/new">
                <Button className="bg-white hover:bg-green-700 text-green-700 hover:text-white border-1 border-green-700">
                  <LogOut className="mr-2 h-5 w-5" />
                  Join Us
                </Button>
              </Link>
          </div>
        </div>
      </div>
      <About />
      <ContactUs />
    </div>
  )
}