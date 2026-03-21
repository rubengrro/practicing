import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ReactNode } from "react";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800"
})

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better version of stack Overflow",
};

const RootLayout = async ({children}: {children: ReactNode}) => {
  const session = await auth()

  return (

    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <SessionProvider session={session}>
        <body
          className={`${inter.variable} antialiased`}
        >
          <ThemeProvider
          attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          
          <Toaster />
        </body>
      </SessionProvider>

    </html>
  );
}

export default RootLayout