"use client";

import NavBar from "@components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@components";
// import { Providers } from "@/components/Providers";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "CarLoft",
  description: "Find, book or rent the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const navLinks = [
     { label: "Profile", href: "/profile" },
  { label: "Sign Out", href: "/" },
  ]
  return (
     < SessionProvider> 
      <html lang="en">
        <body className="relative">
        
          <NavBar navLinks={navLinks}   />
          {children}
          <Footer />
      
        </body>
      </html>
    </ SessionProvider>
  );
}
