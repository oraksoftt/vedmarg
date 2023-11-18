import type { Metadata } from "next";
import "./globals.css";
//import Navbar from "@/components/Navbar";
//import Footer from "@/components/Footer";
import NavbarStrip from "@/components/NavbarStrip";


import dynamic from "next/dynamic"; 
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));



export const metadata: Metadata = {
  title: "vedmarg",
  description: "vedmarg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <NavbarStrip />
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
