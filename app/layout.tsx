import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Ruxandra — Music for the in-between",
    description: "Ruxandra is a Los Angeles-based downtempo artist and songwriter making music for the space between breaking and becoming.",
    openGraph: {
      title: "Ruxandra — I’ll Follow Your Lead",
      description: "Downtempo soul for the in-between.",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "Ruxandra — I’ll Follow Your Lead" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ruxandra — I’ll Follow Your Lead",
      description: "Downtempo soul for the in-between.",
      images: ["/og.png"],
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
