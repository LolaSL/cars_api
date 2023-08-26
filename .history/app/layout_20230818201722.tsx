"use client";

import "./styles/globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@components";

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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>Car LOFT</title>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
