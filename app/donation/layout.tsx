import { SectionHeader } from "@/components/section-header"
import { SectionTabs } from "@/components/section-tabs"
import { HandCoins } from "lucide-react"
import type { ReactNode } from "react"

export default function DonationLayout({ children }: { children: ReactNode }) {
  const tabs = [
    {
      value: "paid",
      label: "Paid Donation",
      content: children,
      path: "/donation/paid",
    },
    {
      value: "search",
      label: "Search Donation",
      content: children,
      path: "/donation/search",
    },
    {
      value: "reports",
      label: "Donation Reports",
      content: children,
      path: "/donation/reports",
    },
  ]

  return (
    <div className="py-8">
      <SectionHeader
        title="Donation"
        description="Create a flowchart of your research process here."
        icon={HandCoins}
      />
      <SectionTabs tabs={tabs} basePath="/donation" />
    </div>
  )
}