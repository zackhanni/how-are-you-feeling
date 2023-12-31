import './globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emotional Intelligence',
  description: 'Lean about your emotions and how to better express your feelings.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>  
        {children}
      </body>
    </html>
  )
}
