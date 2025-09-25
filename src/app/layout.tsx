import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAYAFlOW | AI Agent Orchestration for Enterprise Automation",
  description: "NAYAFlOW orchestrates millions of AI agents to automate complex business processes at scale, driving efficiency and transforming enterprises.",
  keywords: "AI agents, agent orchestration, enterprise automation, AI orchestration, business process automation",
  icons: {
    icon: [
      { url: '/images/logo/nayaflow-logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48' }
    ],
    apple: { url: '/images/logo/nayaflow-logo.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title: "NAYAFlOW | AI Agent Orchestration Platform",
    description: "Orchestrate millions of AI agents for enterprise automation",
    images: [{ url: '/images/logo/nayaflow-logo.svg' }],
  },
  twitter: {
    card: 'summary',
    title: "NAYAFlOW | AI Agent Orchestration Platform",
    description: "Orchestrate millions of AI agents for enterprise automation",
    images: [{ url: '/images/logo/nayaflow-logo.svg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-950 text-gray-100`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}



