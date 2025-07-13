"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bazm Falah-ul-Ahbab</h3>
            <p className="text-sm text-gray-300">
              A social welfare organization committed to serving the community through education, charitable activities, and social development.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Mail className="h-5 w-5 inline mr-2" /> bazmsultanpur@gmail.com
              </li>
              <li>
                <Phone className="h-5 w-5 inline mr-2" /> 0330 7674196
              </li>
              <li>
                <MapPin className="h-5 w-5 inline mr-2" /> Plot No ST-23A Sector 37-c Area 2-A Landhi 03 Karachi, Landhi Town, Pakistan
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/Bazm-e-falah-ul-ahbab-sultanpur-official/61573907880416/?checkpoint_src=any#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link href="https://www.youtube.com/@bazmsultanpur" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link href="https://www.instagram.com/bazm_sultanpur?fbclid=IwY2xjawLfH35leHRuA2FlbQIxMABicmlkETAwMWthY2tpc2p2N2dMbEJRAR5Z6Nd0MvZogQimUgwavOBH7ID7SiY2aFOhtesUPRBgZe8ZaIHeMoBBqRogHA_aem_2CDcchsyUjL7QDijPXh_Fw" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Bazm Falah-ul-Ahbab Sultanpur. All rights reserved.
        </div>
      </div>
    </footer>
  )
}