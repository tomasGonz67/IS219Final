import { Inter } from "next/font/google";
import GoogleAnalytics from '@/Components/GoogleAnalytics';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <GoogleAnalytics GA_MEASUREMENT_ID='G-0000000000' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
