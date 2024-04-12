import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
