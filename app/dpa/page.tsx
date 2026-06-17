import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/ui/legal-document-page";
import { getLocale } from "@/lib/i18n-server";
import { legalDocuments } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Data Processing Agreement | SaaSolution SL",
  description: "Public data processing terms for SaaSolution SL services where SaaSolution processes personal data for clients."
};

export default async function DpaPage() {
  const locale = await getLocale();
  const t = legalDocuments.dpa[locale];

  return <LegalDocumentPage badge={t.badge} intro={t.intro} locale={locale} sections={t.sections} title={t.title} />;
}
