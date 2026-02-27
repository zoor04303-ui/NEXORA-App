import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>أهلاً بك 👑</h2>
      <p>هذه لوحة تحكم Nexora الرسمية</p>
    </div>
  )
}
