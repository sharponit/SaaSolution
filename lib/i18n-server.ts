import "server-only";
import { cookies, headers } from "next/headers";
import { isLocale, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const cookieStore = await cookies();
  const headerLocale = requestHeaders.get("x-saas-locale");
  const cookieLocale = cookieStore.get("saas-locale")?.value;

  if (isLocale(headerLocale)) return headerLocale;
  if (isLocale(cookieLocale)) return cookieLocale;
  return "en";
}
