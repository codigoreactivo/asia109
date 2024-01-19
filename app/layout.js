import { Inter } from 'next/font/google'
import notFound from './not-found'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dunas de Asia',
  description: 'Condiminio Residencial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <not-found/>{children}</body>
    </html>
  )
}
