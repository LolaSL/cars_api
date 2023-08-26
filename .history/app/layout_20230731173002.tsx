import NavBar from '@components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
