import { redirect } from "next/navigation"

export default function LedgerPage() {
  // Redirect to the default tab for ledger
  redirect("/ledger/entry")
}
