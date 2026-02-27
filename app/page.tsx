import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>🚀 Nexora</h1>
      <p>منصة التسويق الذكي المرتبطة بسلة</p>

      <Link href="/dashboard">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          دخول الداشبورد
        </button>
      </Link>
    </main>
  )
}
