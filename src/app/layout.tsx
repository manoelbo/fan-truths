import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Fan Truths',
  description: 'Uncover the Fan Truths that set your brand apart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className={jetbrainsMono.variable}>{children}</main>
      </body>
    </html>
  )
}
