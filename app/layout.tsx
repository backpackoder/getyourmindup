import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import { NavbarMain } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get your mind up",
  description: "Improve your mental health thanks to our tips and actions to take",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMain />
        <main className="flex flex-col items-center gap-4 min-h-screen p-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
