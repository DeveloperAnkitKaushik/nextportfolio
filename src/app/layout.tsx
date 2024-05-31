import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Kaushik - Portfolio",
  description: "Ankit Kaushik portfolio, ankit kaushik, ankit, kaushik, Full Stack Developer, Web Developer, JavaScript, TypeScript, React, Next.js, Vercel, Frontend Developer, Backend Developer, Software Engineer, UI/UX Designer, Tech Enthusiast",
  metadataBase: new URL("https://kaushikankit.vercel.app"),
  keywords: [
    "Ankit Kaushik",
    "Ankit Kaushik portfolio",
    "Ankit",
    "Kaushik",
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
    "Ankit Kaushik Vercel",
    "C++",
    "MongoDB",
    "Sanity",
    "HTML",
    "CSS"
  ],
  openGraph: {
    type: 'website',
    url: 'https://kaushikankit.vercel.app',
    title: 'Ankit Kaushik - Portfolio',
    description: "Explore Ankit Kaushik's portfolio, highlighting expertise in Next.js, React, TypeScript, JavaScript, C++, MongoDB, Sanity, HTML, CSS, and other technologies. Discover a range of projects showcasing web development skills, coding proficiency, and innovative solutions. Dive into a comprehensive display of Ankit's technical capabilities and accomplishments in software development and web design.",
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
    description: "Explore Ankit Kaushik's portfolio, highlighting expertise in Next.js, React, TypeScript, JavaScript, C++, MongoDB, Sanity, HTML, CSS, and other technologies. Discover a range of projects showcasing web development skills, coding proficiency, and innovative solutions. Dive into a comprehensive display of Ankit's technical capabilities and accomplishments in software development and web design.",
    images: [
      {
        url: 'https://kaushikankit.vercel.app/me.png',
        alt: 'Ankit Kaushik Portfolio'
      }
    ]
  }
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
