import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hadis | Web Developer Portfolio",
  description: "Portfolio of Hadis - A passionate web developer creating modern, responsive web applications.",
  keywords: ["Hadis", "Web Developer", "Next.js", "React", "Portfolio"],
  openGraph: {
    title: "Hadis | Web Developer Portfolio",
    description: "A showcase of my web development projects and skills.",
    url: "https://hadissedaghat.com",
    siteName: "Hadis Portfolio",
    images: [
      {
        url: "/profile2.jpg",
        width: 800,
        height: 600,
        alt: "Hadis Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          <main className="pt-20 container mx-auto">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
