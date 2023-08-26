"use client";

import NavBar from "@components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@components";
import { Providers } from "@/components/Providers";


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
   
      <html lang="en">
        <body className="relative">
          <Providers> 
          <NavBar navLinks={[PRO]} />
          {children}
          <Footer />
          </Providers>
        </body>
      </html>

  );
}
