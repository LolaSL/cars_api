"use client";
import NavBar from "@components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@components";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "Car LOFT",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Se>
      <html lang="en">
        <body className="relative">
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </Se>
  );
}
