export const metadata = {
  title: 'skills show',
  description: 'showcase your skiils and match your interest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
