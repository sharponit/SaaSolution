import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/ui/legal-document-page";
import { getLocale } from "@/lib/i18n-server";
import { legalDocuments } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | SaaSolution SL",
  description: "Privacy policy for SaaSolution SL websites and general IT services."
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const t = legalDocuments.privacy[locale];

  return <LegalDocumentPage badge={t.badge} intro={t.intro} locale={locale} sections={t.sections} title={t.title} />;
}
