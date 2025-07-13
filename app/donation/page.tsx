import { redirect } from "next/navigation"

export default function DonationPage() {
  // Redirect to the default tab for donations
  redirect("/donation/paid")
}
