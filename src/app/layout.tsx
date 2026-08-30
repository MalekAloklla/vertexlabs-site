import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexlabs-site.vercel.app"),

  title: {
    default: "Vertex Labs — Digital Innovation Studio",
    template: "%s | Vertex Labs",
  },

  description:
    "Vertex Labs builds modern websites, intelligent systems, AI solutions, applications, and custom software designed to move businesses forward.",

  keywords: [
    "Vertex Labs",
    "Web Development",
    "Software Development",
    "AI Solutions",
    "AI Automation",
    "Custom Software",
    "Mobile Applications",
    "Digital Products",
    "Telegram Bots",
    "SaaS",
  ],

  authors: [
    {
      name: "Vertex Labs",
    },
  ],

  creator: "Vertex Labs",
  publisher: "Vertex Labs",

  applicationName: "Vertex Labs",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vertex Labs",
    title: "Vertex Labs — Digital Innovation Studio",
    description:
      "We build modern websites, intelligent systems, AI solutions, applications, and custom software designed to move businesses forward.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vertex Labs — Digital Innovation Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vertex Labs — Digital Innovation Studio",
    description:
      "Modern websites, intelligent systems, AI solutions, applications, and custom software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}