import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lewis Cellars - Estate Launch Campaign',
  description: 'Discover Lewis Cellars\' legendary wines and experience Napa Valley\'s ultimate indulgence with exquisite wines, MICHELIN-Starred cuisine, and exclusive Salon Privé.',
  keywords: 'Lewis Cellars, Napa Valley, wine tasting, luxury wine, Cabernet Sauvignon, Chardonnay, wine estate, Salon Privé',
  authors: [{ name: 'Lewis Cellars' }],
  openGraph: {
    title: 'Lewis Cellars - Estate Launch Campaign',
    description: 'Discover Lewis Cellars\' legendary wines and experience Napa Valley\'s ultimate indulgence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lewis Cellars - Estate Launch Campaign',
    description: 'Discover Lewis Cellars\' legendary wines and experience Napa Valley\'s ultimate indulgence.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}