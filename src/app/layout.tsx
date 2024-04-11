import type { Metadata } from "next";
import "./globals.css";
import Footer from "../component/Footer/Footer";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Ankit Kaushik - Portfolio",
  description: "Ankit kaushik portfolio, ankit kaushik, ankit, kaushik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Footer /> */}
        <Toaster />
      </body>
    </html>
  );
}
