import { Inter } from "next/font/google";
import GoogleAnalytics from '@/Components/GoogleAnalytics';
import "./globals.css";
import CookieBanner from '@/Components/cookiebanner';
import React, { Suspense } from 'react';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tree Top Fitness",
  description: "Fitness for the adventerous",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <Suspense fallback={<div>Loading...</div>}>
              <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000' />
          </Suspense>
          <body className={inter.className}>
              {children}
              <CookieBanner />
          </body>
    </html>
  );
}
