import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "@/app/page";
import { createMetadata, languageMetadata, seoLanguages, type SeoLanguage } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return seoLanguages.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isSeoLanguage(locale)) notFound();
  const copy = languageMetadata[locale];

  return createMetadata({
    title: copy.title,
    description: copy.description,
    path: `/${locale}`
  });
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  if (!isSeoLanguage(locale)) notFound();
  return <Home />;
}

function isSeoLanguage(value: string): value is SeoLanguage {
  return (seoLanguages as readonly string[]).includes(value);
}
