
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

export const metadata = {
  title: {
    default: "Aya Nabil | Full Stack Developer",
    template: "%s | Aya Nabil",
  },
  description:
    "Aya Nabil Elsayed - Full Stack Developer specializing in React, Next.js, Node.js, Express, and MongoDB.",
  keywords: [
    "Aya Nabil",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
  ],
  authors: [{ name: "Aya Nabil Elsayed" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0b0f0d] text-[#f5f7f6]">
        {children}
      </body>
    </html>
  );
}
