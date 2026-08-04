import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ValoriaSMP • Official Rulebook",
    template: "%s • ValoriaSMP",
  },
  description:
    "Official ValoriaSMP Season 3 Rulebook. Read all gameplay, PvP, Discord, and server rules before joining.",
  keywords: [
    "ValoriaSMP",
    "Minecraft",
    "SMP",
    "Season 3",
    "Rulebook",
    "Rules",
    "Minecraft Server",
    "PvP",
  ],
  authors: [{ name: "ValoriaSMP Team" }],
  creator: "ValoriaSMP",
  applicationName: "ValoriaSMP Rulebook",
  metadataBase: new URL("https://rules.valoriasmp.fun"),

  openGraph: {
    title: "ValoriaSMP • Official Rulebook",
    description:
      "Everything you need to know before joining ValoriaSMP Season 3.",
    url: "https://rules.valoriasmp.fun",
    siteName: "ValoriaSMP",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ValoriaSMP • Official Rulebook",
    description:
      "Official Season 3 Rulebook for ValoriaSMP.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
