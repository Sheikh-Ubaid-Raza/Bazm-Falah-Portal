import { cn } from "@/lib/utils"
import type React from "react"

interface SectionHeaderProps {
  title: string
  description: string
  icon: React.ElementType
  className?: string
}

export function SectionHeader({ title, description, icon: Icon, className }: SectionHeaderProps) {
  return (
    <div className={cn("bg-green-50 p-6 rounded-xl shadow-md mb-8 text-center", className)}>
      <Icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-green-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}