import "@/styles/globals.css";
// import { Metadata } from "next";

//import { Toaster } from "@/components/ui/toaster";

// import { siteConfig } from "@/config/site";
// import { cn } from "@/lib/utils";
import { fonts } from "@/lib/fonts";

import { TrpcProvider } from "@/provider/trpc-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
//import { SessionProvider } from "next-auth/react";
//import { type Session } from 'next-auth';

export const metadata = {
  title: 'Website Name',
  description: 'Website Descrpition',
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE // Google Search Console Verification
  },
  alternates: {
    canonical: 'http://domain.com',
  },
  icons: {
    other: [
      {
        rel: 'preconnect',
        url: 'domain.com',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  //session,
}: {
  children: React.ReactNode;
  //session: Session | null | undefined;
}) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-[1920px] relative ${fonts.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TrpcProvider>
            {/* <SessionProvider refetchOnWindowFocus={false} session={session} > */}
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            {/* </SessionProvider> */}
          </TrpcProvider>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
