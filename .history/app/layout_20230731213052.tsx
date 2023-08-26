"use client"
import NavBar from '@components/Navbar';
import '../styles/styles.module.css';
import type { Metadata } from 'next';
import { Footer } from '@components';


export const metadata: Metadata = {
  title: 'Car LOFT',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
      <NavBar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
