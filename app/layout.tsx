import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MassAdoption',
  description: 'Bitcoiner meetup & AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-CJ7V691Z5P'/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}