import "./globals.css"

export const metadata = {
  title: "Nexora",
  description: "منصة Nexora للتسويق الذكي"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
