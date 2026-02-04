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
    <html lang="en" className="scroll-smooth">
      <body>
        <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FinextLabs
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/services" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
                Services
              </a>
              <a href="/projects" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
                Projects
              </a>
              <a href="/contact" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Contact Us
              </a>
            </div>
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        {children}

        <footer className="bg-black text-white py-12 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FinextLabs
                </div>
                <p className="text-gray-400 text-sm">
                  Building innovative software solutions for the modern world.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/services" className="hover:text-white transition-colors">Web Development</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Mobile Apps</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">UI/UX Design</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} FinextLabs. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
