"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 bg-gradient-radial" />
        <NavBar />
        <div className="relative max-w-7xl mx-auto">
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
