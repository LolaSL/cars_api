// "use client";

// import "./styles/globals.css";
// import type { Metadata } from "next";
// import { Footer, Navbar } from "@components";

// export const metadata: Metadata = {
//   title: "CarLoft",
//   description: "Find, book or rent the best car in the world",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta name="theme-color" content="#000000" />
//       <meta name="description" content="This is a concise summary of Car LOFT page's content." />
//         <link rel="manifest" href="/manifest.json" />
//         <title>Car LOFT</title>
//       </head>
//       <body className="relative">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
import "./styles/globals.css";
import { Metadata } from "next";
import { Footer, Navbar } from "@components";

const metadata: Metadata = {
  title: "CarLoft",
  description: "Find, book, or rent the best car in the world",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
        <title>{metadata.title}</title>
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
