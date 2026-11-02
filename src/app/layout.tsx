import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import { Toaster } from "@/components/ui/toast";
import { Suspense } from "react";
import NavbarSkeleton from "@/components/nav/skealon/NavbarSkeleton";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialServe - Stronger Community. Brighter Tomorrow.",
  description: "Discover and join community service events in your area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col justify-between">
        <Suspense fallback={<NavbarSkeleton />}>
          <nav>
            <Navbar />
          </nav>
        </Suspense>

        <main className="flex-1">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
