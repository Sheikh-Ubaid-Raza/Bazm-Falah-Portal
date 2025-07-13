import { SectionHeader } from "@/components/section-header"
import { SectionTabs } from "@/components/section-tabs"
import { BookText } from "lucide-react"
import type { ReactNode } from "react"

export default function LedgerLayout({ children }: { children: ReactNode }) {
  const tabs = [
    {
      value: "entry",
      label: "Ledger Entry",
      content: children,
      path: "/ledger/entry",
    },
    {
      value: "reports",
      label: "Ledger Reports",
      content: children,
      path: "/ledger/reports",
    },
  ]

  return (
    <div className="py-8">
      <SectionHeader
        title="Member Ledger" // Renamed to match design's section title
        description="Create a flowchart of your research process here."
        icon={BookText}
      />
      <SectionTabs tabs={tabs} basePath="/ledger" />
    </div>
  )
}
