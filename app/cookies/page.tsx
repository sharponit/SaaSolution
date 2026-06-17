import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/ui/legal-document-page";
import { getLocale } from "@/lib/i18n-server";
import { legalDocuments } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Cookie Policy | SaaSolution SL",
  description: "Cookie policy for SaaSolution SL websites."
};

export default async function CookiesPage() {
  const locale = await getLocale();
  const t = legalDocuments.cookies[locale];

  return <LegalDocumentPage badge={t.badge} intro={t.intro} locale={locale} sections={t.sections} title={t.title} />;
}
