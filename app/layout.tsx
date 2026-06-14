import "../styles/globals.css";
import type { Metadata } from "next";
import SmoothScroll from "../components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Travelzada — Modern Travel Booking Platform",
  description: "Book flights, hotels and holiday packages with the world's most modern travel platform.",
  openGraph: {
    title: "Travelzada — Modern Travel Booking",
    description: "Experience seamless travel booking with Travelzada.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

