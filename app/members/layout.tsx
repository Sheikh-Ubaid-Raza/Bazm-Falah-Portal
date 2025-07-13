import { SectionHeader } from "@/components/section-header"
import { SectionTabs } from "@/components/section-tabs"
import { Users } from "lucide-react"
import type { ReactNode } from "react"

export default function MembersLayout({ children }: { children: ReactNode }) {
  const tabs = [
    {
      value: "new",
      label: "New Member",
      content: children, // Content will be rendered by the nested page
      path: "/members/new",
    },
    {
      value: "search",
      label: "Search Member",
      content: children,
      path: "/members/search",
    },
    {
      value: "reports",
      label: "Member Reports",
      content: children,
      path: "/members/reports",
    },
  ]

  return (
    <div className="py-8">
      <SectionHeader title="Members" description="Create a flowchart of your research process here." icon={Users} />
      <SectionTabs tabs={tabs} basePath="/members" />
    </div>
  )
}
