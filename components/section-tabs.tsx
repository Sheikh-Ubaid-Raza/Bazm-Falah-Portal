"use client"

import type React from "react"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

interface TabConfig {
  value: string
  label: string
  content: React.ReactNode
  path: string
}

interface SectionTabsProps {
  tabs: TabConfig[]
  basePath: string
}

export function SectionTabs({ tabs, basePath }: SectionTabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "")

  useEffect(() => {
    // Match the current tab based on the base path and first segment of the pathname
    const currentPathSegment = pathname.replace(basePath, "").split("/")[1] || tabs[0].value
    const foundTab = tabs.find((tab) => tab.value === currentPathSegment)
    if (foundTab) {
      setActiveTab(foundTab.value)
    } else if (tabs.length > 0) {
      setActiveTab(tabs[0].value)
      router.replace(`${basePath}/${tabs[0].value}`)
    }
  }, [pathname, tabs, basePath, router])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // Navigate to the tab's base path, preserving any dynamic sub-routes if present
    router.push(`${basePath}/${value}`)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full mx-auto px-4 py-6">
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full bg-green-50 text-green-700 border-green-200 hover:bg-green-100 my-4"
            >
              {tabs.find((tab) => tab.value === activeTab)?.label || tabs[0].label}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border-green-200 my-4">
            {tabs.map((tab) => (
              <DropdownMenuItem
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "text-green-700 hover:bg-green-100",
                  activeTab === tab.value && "bg-green-100"
                )}
              >
                {tab.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:block">
        <TabsList
          className={cn(
            "grid w-full h-16 bg-green-50 border border-green-200 rounded-xl mx-auto",
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          )}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg",
                "hover:bg-green-100 transition-colors px-4 py-2 text-sm sm:text-base"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}