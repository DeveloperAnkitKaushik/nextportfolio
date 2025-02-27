import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Kaushik - Portfolio",
  description: "Ankit Kaushik portfolio, ankit kaushik, ankit, kaushik, Full Stack Developer, Web Developer, JavaScript, TypeScript, React, Next.js, Vercel, Frontend Developer, Backend Developer, Software Engineer, UI/UX Designer, Tech Enthusiast",
  metadataBase: new URL("https://kaushikankit.vercel.app"),
  keywords: [
    "Ankit Kaushik",
    "Ankit Kaushik portfolio",
    "Full Stack Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vercel",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "UI/UX Designer",
    "Tech Enthusiast",
  ],
  openGraph: {
    type: 'website',
    url: 'https://kaushikankit.vercel.app',
    title: 'Ankit Kaushik - Portfolio',
    description: "Explore Ankit Kaushik's portfolio, highlighting expertise in Next.js, React, TypeScript, JavaScript, C++, MongoDB, Sanity, HTML, CSS, and other technologies.",
    images: [
      {
        url: 'https://kaushikankit.vercel.app/me.png',
        width: 800,
        height: 600,
        alt: 'Ankit Kaushik Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Ankit_kaushik0',
    title: 'Ankit Kaushik - Portfolio',
    description: "Explore Ankit Kaushik's portfolio and projects in Next.js, React, TypeScript, and other technologies.",
    images: [
      {
        url: 'https://kaushikankit.vercel.app/me.png',
        alt: 'Ankit Kaushik Portfolio'
      }
    ]
  },
  verification: {
    google: "IhleRkwS3CAPHzFgSf0ySPwCj7IYM1DdenB4JQzDb28" 
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="IhleRkwS3CAPHzFgSf0ySPwCj7IYM1DdenB4JQzDb28" />
      </head>
      <body>{children}</body>
    </html>
  );
}
