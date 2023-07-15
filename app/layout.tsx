import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import { NavbarMain } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from '@/theme';
import { AuthSessionProvider } from "@/context/auth/AuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get your mind up",
  description: "Improve your mental health thanks to our tips and actions to take",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>
            <ThemeProvider theme={lightTheme}>
              <NavbarMain />
              <main className="flex flex-col items-center gap-4 min-h-screen p-24">{children}</main>
              <Footer />
            </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
