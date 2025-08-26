import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/UI components/Navbar/Navbar";
import QueryProviders from "@/providers/ReactQueryProvider";
// import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeProvider } from "../providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Applai",
  description: "Applai - Your gateway to the Finnish job market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <QueryProviders>
            <Navbar />
              {children}
        </QueryProviders>
      </ThemeProvider>
      </body>
    </html>
  );
}
