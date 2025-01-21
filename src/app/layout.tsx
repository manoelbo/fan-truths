import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Fan Truths',
  description: 'Uncover the Fan Truths that set your brand apart',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className={jetbrainsMono.className}>{children}</main>
      </body>
    </html>
  )
}
