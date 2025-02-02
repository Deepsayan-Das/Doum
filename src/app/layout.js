import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-start items-center gap-8 bg-[#e1eefd] overflow-x-hidden`}
        
      >
        <Navbar/>
        <Hero/>
        
      </body>
    </html>
  );
}
