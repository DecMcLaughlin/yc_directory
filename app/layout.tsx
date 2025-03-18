import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";

const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Thin.ttf", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-ExtraLight.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC Directory | Pitch, Vote and Grow",
  description: "Discover, pitch, and vote for the best startup ideas in YC Directory. Join now and shape the future of innovation.",
  keywords: ["YC Directory", "startup voting", "pitch ideas", "YC startups", "entrepreneurship"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "YC Directory Team",
  applicationName: "YC Directory",
  openGraph: {
    title: "YC Directory | Pitch, Vote and Grow",
    description: "Discover, pitch, and vote for the best startup ideas in YC Directory.",
    url: "https://yc-directory-jc5j89xkd-declan-mclaughlins-projects.vercel.app/",
    siteName: "YC Directory",
    images: [
      {
        url: "https://yc-directory-jc5j89xkd-declan-mclaughlins-projects.vercel.app/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "YC Directory Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your actual Twitter handle
    creator: "@yourtwitterhandle",
    title: "YC Directory | Pitch, Vote and Grow",
    description: "Discover, pitch, and vote for the best startup ideas in YC Directory.",
    images: ["https://yc-directory-jc5j89xkd-declan-mclaughlins-projects.vercel.app/og-image.jpg"], // Replace with actual image
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://yc-directory-jc5j89xkd-declan-mclaughlins-projects.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "YC Directory",
              url: "https://yc-directory-jc5j89xkd-declan-mclaughlins-projects.vercel.app/",
              description: "Discover, pitch, and vote for the best startup ideas in YC Directory.",
              publisher: {
                "@type": "Organization",
                name: "YC Directory",
              },
            }),
          }} 
        />
      </head>
      <body className={workSans.variable}>
        {children}
      </body>
    </html>
  );
}
