import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({subsets: ['latin'], variable: "--font-sans"})
const calistoga = Calistoga({subsets: ['latin'], variable: "--font-serif", weight: ['400']})

export const metadata: Metadata = {
  title: "JohnMVPortfolio",
  description: "MyPortfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "text-white antialiased font-sans")}>
        {/* Background with radial gradients */}
        <div className="fixed inset-0 bg-slate-950 -z-10 overflow-hidden">
          {/* Bottom gradients */}
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          
          {/* Top gradients for more dynamic effect */}
          <div className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.1),rgba(255,255,255,0))]"></div>
          <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,.1),rgba(255,255,255,0))]"></div>
          
          {/* Center gradient for depth */}
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,.08),rgba(255,255,255,0))]"></div>
        </div>
        
        {/* Scroll Progress Bar - Global */}
        <ScrollProgressBar />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Back to Top Button - Global */}
        <BackToTopButton />
        <Analytics />
      </body>
    </html>
  );
}
