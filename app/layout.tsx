import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinextLabs",
  description: "We build modern, reliable software solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
            <a href="/" className="font-bold">FinextLabs</a>
            <div className="space-x-4">
              <a href="/projects">Projects</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="border-t mt-16 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FinextLabs. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
