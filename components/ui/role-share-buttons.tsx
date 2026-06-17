"use client";

import { Mail, Share2 } from "lucide-react";
import { useMemo, useState } from "react";
import { shareContent, type Locale } from "@/lib/i18n";

type RoleShareButtonsProps = {
  roleTitle: string;
  location: string;
  locale: Locale;
};

export function RoleShareButtons({ roleTitle, location, locale }: RoleShareButtonsProps) {
  const [url] = useState(() => (typeof window === "undefined" ? "" : window.location.href));
  const t = shareContent[locale];
  const title = `${roleTitle} - ${location} at SaaSolution SL`;
  const text = `${t.text} ${title}`;

  const links = useMemo(() => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent(text);

    return {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`
    };
  }, [text, title, url]);

  async function shareNative() {
    if (!url || !navigator.share) return;
    await navigator.share({ title, text, url });
  }

  return (
    <section aria-label="Share this role" className="rounded-2xl border border-[#F5F1FF]/12 bg-[#F5F1FF]/[0.055] p-6 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#C4B5FD]">{t.title}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#F5F1FF]/62">
            {t.body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]" href={links.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#100F1F] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]" href={links.whatsapp} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
          <a className="inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-5 py-3 text-sm font-bold text-[#100F1F] transition hover:scale-[1.02] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]" href={links.email}>
            <Mail className="h-4 w-4" />
            Email
          </a>
          <button className="inline-flex items-center gap-2 rounded-full border border-[#F5F1FF]/18 px-5 py-3 text-sm font-bold text-[#F5F1FF] transition hover:border-[#2DD4BF] hover:text-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] disabled:cursor-not-allowed disabled:opacity-45" disabled={!url} onClick={shareNative} type="button">
            <Share2 className="h-4 w-4" />
            {t.share}
          </button>
        </div>
      </div>
    </section>
  );
}
