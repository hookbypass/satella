import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hook - Produtos Digitais Premium',
  description: 'A melhor loja de produtos digitais com entrega manual, atendimento via Discord e maxima seguranca.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-TKZCN9Cdxyg0JVxta4vc1WRkYMwmnm.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-TKZCN9Cdxyg0JVxta4vc1WRkYMwmnm.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
