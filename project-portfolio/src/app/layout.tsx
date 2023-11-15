import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'G&N Business Consulting',
  description: 'Secure your sustainable Business Needs',
}

export default async function RootLayout(props: {
  children: React.ReactNode
  search: React.ReactNode
}) {
  const doSearch = false
  return (
    <html lang="en">
      <body>
        <Layout>
          {!doSearch && props.children}
          {doSearch && props.children}
        </Layout> 
    </body>
    </html>
  )
}
