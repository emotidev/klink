import Navbar from '@components/Navbar'
import '@styles/tailwind.css'
import { getServerSession } from 'next-auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  )
}
