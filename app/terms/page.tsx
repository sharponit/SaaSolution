import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/ui/legal-document-page";
import { getLocale } from "@/lib/i18n-server";
import { legalDocuments } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | SaaSolution SL",
  description: "Terms and conditions for SaaSolution SL IT services, software delivery, consulting, support, and managed operations."
};

export default async function TermsPage() {
  const locale = await getLocale();
  const t = legalDocuments.terms[locale];

  return <LegalDocumentPage badge={t.badge} intro={t.intro} locale={locale} sections={t.sections} title={t.title} />;
}
