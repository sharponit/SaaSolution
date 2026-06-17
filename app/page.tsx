import type { Metadata } from "next";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InteractiveScrollingStory } from "@/components/ui/interactive-scrolling-story-component";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { homeContent, platformsContent } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { createMetadata, faq, organizationSchema, products, services, websiteSchema } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "SaaSolutions SL | AI-first software and automation company in Spain",
  description:
    "SaaSolutions SL is a global SaaS company building international software, AI automation, smart building and government platforms from Ceuta, Spain — including its upcoming hospitality platforms hospitalityOS, HospitalityOps and HospitalityTV."
});

const projects = [
  { name: "hospitalityOS", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Multilingual digital hospitality website and brand platform" },
  { name: "HospitalityOps", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Operations suite for housekeeping, maintenance and field teams" },
  { name: "HospitalityTV", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Smart TV guest experience for stays and short-term rentals" },
  { name: "Mithaq", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Digital Islamic prenup, will and legal workflow platform" },
  { name: "Viyra", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Premium real estate and international workflow automation" },
  { name: "Smart NFC Guest Pass", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Hospitality and smart building guest access" },
  { name: "Delicious Fitness", tone: "from-[#F3F2EE] to-[#F3F2EE]", tag: "Social food, meal prep and fitness commerce" }
] as const;

export default async function Home() {
  const locale = await getLocale();
  const t = homeContent[locale];
  const translatedProjects = projects.map((project) => ({
    ...project,
    tag: (t.projectTags as Record<string, string>)[project.name] ?? project.tag
  }));

  return (
    <main className="bg-[#F3F2EE] text-black">
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(), serviceSchema(), softwareSchema()]} />
      <div className="fixed right-4 top-4 z-50">
        <LanguageSwitcher locale={locale} />
      </div>
      <section className="flex flex-col">
        <ContainerScroll
          titleComponent={
            <div>
              <h1 className="text-4xl md:text-[6rem] font-bold text-black">SaaSolution SL</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl text-black/70">{t.heroSubtitle}</p>
            </div>
          }
        >
          <div className="relative h-full bg-[#F3F2EE] p-4 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.08),transparent_42%)]" />
            <div className="relative h-full rounded-2xl border border-black/15 bg-[#F3F2EE] p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold md:text-base">{t.showcaseTitle}</h3><span className="rounded-full border border-black/15 bg-[#F3F2EE] px-3 py-1 text-xs text-black/70">{t.ecosystem}</span></div>
              <div className="relative h-[58%] rounded-xl border border-black/15 bg-[#F3F2EE] p-4 shadow-sm"><div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/50">{t.featuredSystem}</div><div className="mb-2 text-xl font-semibold">{t.productLayer}</div><div className="grid grid-cols-3 gap-2 text-xs">{t.chips.map((chip) => <div className="rounded-lg bg-[#F3F2EE] p-2 shadow-sm" key={chip}>{chip}</div>)}</div></div>
              <div className="relative mt-4 h-[34%] overflow-hidden"><div className="project-marquee absolute left-0 top-1/2 flex -translate-y-1/2 gap-3">{[...translatedProjects, ...translatedProjects].map((project, idx) => <div key={`${project.name}-${idx}`} className={`w-[190px] shrink-0 rounded-xl border border-black/15 bg-gradient-to-br ${project.tone} p-3 shadow-sm`} style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}><div className="mb-5 h-10 rounded-md bg-[#F3F2EE]/85" /><div className="text-xs font-semibold">{project.name}</div><div className="text-[11px] text-black/60">{project.tag}</div></div>)}</div></div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <UpcomingPlatforms locale={locale} />

      <section className="sr-only" aria-label="SaaSolutions SEO summary">
        <h2>International AI software company</h2>
        <p>
          SaaSolutions SL is an AI-first software and automation company headquartered in Ceuta, Spain, serving Spain, the Mediterranean, Africa, South America, UAE/GCC, Southeast Asia and Europe.
        </p>
        <p>
          SaaSolutions builds enterprise SaaS, AI automation, hospitality automation, smart building systems, government digital platforms, AI concierge systems and custom SaaS development.
        </p>
      </section>

      <InteractiveScrollingStory locale={locale} />
    </main>
  );
}

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function UpcomingPlatforms({ locale }: { locale: keyof typeof platformsContent }) {
  const t = platformsContent[locale];

  return (
    <section id="products" aria-labelledby="upcoming-platforms-title" className="bg-[#F3F2EE] px-6 py-20 text-black md:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.42em] text-black/55">{t.label}</p>
        <h2 id="upcoming-platforms-title" className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          {t.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-black/65 md:text-lg">{t.intro}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.cards.map((card) => (
            <article
              key={card.slug}
              className="flex flex-col rounded-2xl border border-black/15 bg-white/70 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1D4ED8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                {t.status}
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{card.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8]">{card.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-black/65">{card.text}</p>
              <Link
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-black transition hover:text-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                href={`/products/${card.slug}`}
              >
                {t.cta}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const groups = [
    ["Company", [["About", "/about"], ["Mission & Vision", "/mission-vision"], ["Contact", "/contact"]]],
    ["Products", products.slice(0, 4).map((product) => [product.name, `/products/${product.slug}`])],
    ["Services", services.slice(0, 4).map((service) => [service.title, `/services/${service.slug}`])],
    ["Regions", [["Spain", "/regions/spain"], ["Africa", "/regions/africa"], ["UAE", "/regions/uae"], ["Philippines", "/regions/philippines"]]],
    ["Legal", [["Privacy", "/privacy"], ["Terms & Conditions", "/terms"], ["Security", "/security"]]]
  ] as const;

  return (
    <footer className="border-t border-black/10 bg-[#6B7280] px-6 py-12 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-sm font-bold">SaaSolutions SL</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/62">
              International AI-first software, automation and SaaS development from Ceuta, Spain.
            </p>
          </div>
          <nav className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5" aria-label="Footer">
            {groups.map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link className="text-sm font-medium text-white/85 transition hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/50">
          Developed by SaaSolutions SL. Intellectual property owned by Paradox FZCO. © 2026 Paradox FZCO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}

function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@type": "Organization", name: "SaaSolutions SL" },
        areaServed: ["Spain", "Africa", "South America", "UAE/GCC", "Southeast Asia", "Europe"]
      }
    }))
  };
}

function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: product.industry,
        operatingSystem: "Web",
        description: product.description,
        creator: { "@type": "Organization", name: "SaaSolutions SL" }
      }
    }))
  };
}
