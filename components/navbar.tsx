"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, Home, Users, HandCoins, BookText, LogIn, Menu, UserPlus, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"


export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  // const router = useRouter()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    {
      name: "Members",
      href: "/members",
      icon: Users,
      dropdown: [
        { name: "Member Reports", href: "/members/reports" },
        { name: "Member Ledger", href: "/ledger" },
      ],
    },
    { name: "LEDGER Reports", href: "/ledger/reports", icon: BookText },
    {
      name: "Donation",
      href: "/donation",
      icon: HandCoins,
      dropdown: [
        { name: "Donate NOW", href: "/donation/paid" },
        { name: "Donation Reports", href: "/donation/reports" },
      ],
    },
  ]

  const handleLogout = async () => {
    // This is the only functional change needed for logout
    await signOut({ callbackUrl: "/login" })
  }

  return (
    <header className="bg-gray-100 text-green-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-6 my-4">
          <Link href="/" className="text-2xl font-bold tracking-tight my-5">
            <Image src="/logo.png" alt="Bazm Falah-ul-Ahbab Sultanpur Logo" width={70} height={70} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-green-700 hover:bg-green-100/50 transition-colors",
                      pathname.startsWith(item.href) && "bg-green-100/70",
                    )}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-gray-200">
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link
                        href={subItem.href}
                        className={cn(
                          "text-green-700 hover:bg-green-100/50",
                          pathname === subItem.href && "bg-green-100/70",
                        )}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium hover:text-green-800 transition-colors",
                  pathname === item.href && "text-green-800",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ),
          )}
          <div className="flex gap-2">
            {status === "authenticated" && session?.user && (
              <>
                <span className="text-sm flex items-center">Welcome, {session.user.name || session.user.email}</span>
                <Button
                  onClick={handleLogout}
                  className="bg-white text-green-700 hover:bg-green-100 border border-green-200"
                >
                  <LogOut className="mr-2 h-5 w-5" /> {/* Added LogOut icon back */}
                  Logout
                </Button>
              </>
            )}
            {status === "unauthenticated" && (
              <>
                <Link href="/login">
                  {" "}
                  {/* Changed to /login */}
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  {" "}
                  {/* Changed to /signup */}
                  <Button className="bg-white hover:bg-green-200 text-green-700">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-green-700"
          onClick={() => setIsMobileMenuMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-start px-4 gap-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="w-full">
                  <Button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-100/50">
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.name}
                    <ChevronDown className="ml-auto h-5 w-5" />
                  </Button>
                  <div className="flex flex-col pl-8 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={cn(
                          "block py-2 text-sm text-green-700 hover:bg-green-100/50 rounded-md",
                          pathname === subItem.href && "bg-green-100/70",
                        )}
                        onClick={() => setIsMobileMenuMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 w-full py-2 px-2 text-sm font-medium hover:bg-green-100/50 rounded-md",
                    pathname === item.href && "bg-green-100/70 text-green-800",
                  )}
                  onClick={() => setIsMobileMenuMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-2 w-full mt-2">
              {status === "authenticated" && session?.user && (
                <>
                  <span className="text-sm px-2 py-2">Welcome, {session.user.name || session.user.email}</span>
                  <Button
                    onClick={handleLogout}
                    className="w-full bg-white text-green-700 hover:bg-green-100 border border-green-200"
                  >
                    <LogOut className="mr-2 h-5 w-5" /> {/* Added LogOut icon back */}
                    Logout
                  </Button>
                </>
              )}
              {status === "unauthenticated" && (
                <>
                  <Link href="/login" className="w-full">
                    {" "}
                    {/* Changed to /login */}
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <LogIn className="mr-2 h-5 w-5" />
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" className="w-full my-3">
                    {" "}
                    {/* Changed to /signup */}
                    <Button className="w-full bg-white hover:bg-green-200 text-green-700">
                      <UserPlus className="mr-2 h-5 w-5" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
