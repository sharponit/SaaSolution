import Link from "next/link";
import { footerContent, type Locale } from "@/lib/i18n";

type FooterLink = { label: string; href: string };

const hrefGroups = [
  ["/about", "/mission-vision", "/careers", "/partners", "/contact"],
  ["/products/hospitalityos", "/products/hospitalityops", "/products/hospitalitytv", "/products/mithaq", "/products/smart-nfc-guest-pass"],
  ["/blog", "/help-center", "/docs", "/api", "https://saasupport.com"],
  ["/privacy", "/terms", "/cookies", "/dpa", "/security"],
  ["/social/linkedin", "/social/instagram", "/social/youtube", "/social/x"]
];

export function StandardFooterLinks({ locale }: { locale: Locale }) {
  const t = footerContent[locale];
  const footerGroups = t.groups.map(([title, labels], groupIndex) => ({
    title,
    links: labels.map((label, index): FooterLink => ({ label, href: hrefGroups[groupIndex][index] }))
  }));

  return (
    <section aria-labelledby="footer-links-title" className="bg-[#6B7280] px-6 py-14 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[1fr_2.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#C8A96B]">SaaSolutions</p>
            <h2 id="footer-links-title" className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              {t.headline}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              {t.body}
            </p>
          </div>

          <nav aria-label={t.aria} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-flex text-sm font-medium text-white/85 transition hover:translate-x-0.5 hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100] focus:ring-offset-2 focus:ring-offset-[#6B7280]"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
