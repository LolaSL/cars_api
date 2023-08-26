"use client";

import NavBar from "@components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@components";

import { SessionProvider } from "next-auth/react";
import { navLinks } from "@constants";

export const metadata: Metadata = {
  title: "CarLoft",
  description: "Find, book or rent the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {


  return (
     < SessionProvider> 
      <html lang="en">
        <body className="relative">
        
          <NavBar navLinks={navLinks}  />
          {children}
          <Footer />
      
        </body>
      </html>
    </ SessionProvider>
  );
}
