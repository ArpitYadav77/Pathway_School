import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Seekers International - Where Learning is an Adventure",
  description: "The Seekers International is a premier preschool and kindergarten offering quality education for children. Our nurturing environment fosters creativity, curiosity, and a love for learning.",
  keywords: "preschool, kindergarten, school, education, children, learning, seekers international",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-bg-light">
        {children}
      </body>
    </html>
  );
}
