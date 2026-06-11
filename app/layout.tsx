import "../styles/globals.css";
import type { Metadata } from "next";
import SmoothScroll from "../components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Travelzada — Curated Journeys, Expert Guides",
  description: "Travelzada is a world-class travel inspiration platform and DMC booking tool designed for the discerning explorer.",
  openGraph: {
    title: "Travelzada — Curated Journeys, Expert Guides",
    description: "Experience the world's most immersive journeys with Travelzada.",
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
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
