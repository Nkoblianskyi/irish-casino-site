import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Top Casino Reviews',
  description: 'Top raiting casino reviews Ireland 2025',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
