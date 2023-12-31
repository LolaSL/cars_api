"use client"
import NavBar from '@components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@components';
// import { BrowserRouter as Router } from 'react-router-dom';

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
      {/* <Router> */}
      <body className='relative'>
      <NavBar />
        {children}
        <Footer/>
        </body>
      </Router>
    </html>
  )
}
