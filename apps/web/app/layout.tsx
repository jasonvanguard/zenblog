import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  title: "Zenblog blog",
  description: "A simple headless blogging CMS",
  icons: {
    icon: "/static/favicon.ico",
  },
  openGraph: {
    title: "Zenblog blog",
    description: "A simple headless blogging CMS",
    images: "/static/og.jpg",
  },
};

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="zenblog.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />{" "}
      </head>
      <body className={`${ibmPlexMono.variable} ${inter.variable}`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
