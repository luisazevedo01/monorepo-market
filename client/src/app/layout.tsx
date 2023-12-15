import GraphQLProvider from '../graphql/graphql-provider';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/src/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


export const metadata: Metadata = {
  title: 'Mercadinho',
  description: 'No description yet',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GraphQLProvider>{children}</GraphQLProvider>
      </body>
    </html>
  )
}
