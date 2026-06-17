import type { Metadata } from "next";
import { headers } from "next/headers";
import { createMetadata } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...createMetadata({
    title: "SaaSolutions SL | AI-first software and automation company in Spain",
    description:
      "SaaSolutions SL builds enterprise SaaS, AI automation, hospitality automation, smart building systems and government digital platforms from Ceuta, Spain for international markets."
  }),
  title: {
    default: "SaaSolutions SL | AI-first software and automation company in Spain",
    template: "%s | SaaSolutions SL"
  },
  applicationName: "SaaSolutions SL",
  authors: [{ name: "SaaSolutions SL", url: "https://SaaSolution.es" }],
  creator: "SaaSolutions SL",
  publisher: "Paradox FZCO",
  category: "AI software and enterprise automation",
  keywords: [
    "SaaSolutions Spain",
    "AI software company Spain",
    "AI automation Ceuta",
    "SaaS development Mediterranean",
    "enterprise software UAE",
    "AI automation UAE",
    "hospitality automation Africa",
    "smart building software Spain",
    "AI SaaS Paraguay",
    "South America SaaS development",
    "Philippines software development",
    "enterprise AI Philippines",
    "government digital platforms",
    "AI concierge systems",
    "custom SaaS development"
  ]
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const detected = requestHeaders.get("x-saas-locale") ?? "en";
  const locale = ["en", "es", "ar", "pt", "fr", "de"].includes(detected) ? detected : "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
