import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/ui/legal-document-page";
import { getLocale } from "@/lib/i18n-server";
import { legalDocuments } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Security | SaaSolution SL",
  description: "Security practices for SaaSolution SL IT services, software delivery, support, and managed operations."
};

export default async function SecurityPage() {
  const locale = await getLocale();
  const t = legalDocuments.security[locale];

  return <LegalDocumentPage badge={t.badge} intro={t.intro} locale={locale} sections={t.sections} title={t.title} />;
}
