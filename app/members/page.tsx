import { redirect } from "next/navigation"

export default function MembersPage() {
  // Redirect to the default tab for members
  redirect("/members/new")
}
