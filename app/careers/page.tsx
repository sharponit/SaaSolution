import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, Globe2, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { careersContent, common, countryNames } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";

type Capability = { title: string; body: string; icon: React.ComponentType<{ className?: string }> };
type LocationGroup = { city: string; country: string; label: string; schedule: string; roles: Role[] };
type Role = { title: string; count: number; type: string; summary: string };
type RoleDetail = { scope: string[]; hours: string; benefits: string[] };

const capabilities: Capability[] = [
  {
    title: "Web & Mobile Platforms",
    body: "Production-grade React, Next.js, and native apps engineered for scale and designed for delight.",
    icon: Code2
  },
  {
    title: "AI Agents & Automation",
    body: "Custom LLM workflows, voice agents, and internal copilots that actually ship, not demos.",
    icon: Sparkles
  },
  {
    title: "Product Strategy",
    body: "From 0-to-1 discovery to launch, we run lean sprints that compress quarters into weeks.",
    icon: BriefcaseBusiness
  },
  {
    title: "Design Systems",
    body: "Motion-rich, token-driven UI kits that keep your brand consistent across every surface.",
    icon: UsersRound
  },
  {
    title: "Cloud & DevOps",
    body: "Secure, observable infrastructure across AWS, GCP, and the edge, built to sleep through 3AM.",
    icon: ShieldCheck
  },
  {
    title: "Growth Engineering",
    body: "A/B experiments, analytics pipelines, and conversion optimization wired into every release.",
    icon: Globe2
  }
];

const locations: LocationGroup[] = [
  {
    city: "Ceuta",
    country: "Spain",
    label: "Global Headquarters",
    schedule: "Hybrid / Europe hours",
    roles: [
      { title: "Full-Stack Developer", count: 3, type: "Engineering", summary: "Build product features, integrations, dashboards, and internal systems across the SaaSolutions product portfolio." },
      { title: "Engineering Lead", count: 1, type: "Leadership", summary: "Own delivery rhythm, code quality, technical direction, and mentoring for the Ceuta engineering pod." },
      { title: "HR & Operations Admin", count: 1, type: "HQ Operations", summary: "Handle recruiting coordination, onboarding, HR paperwork, team records, and cross-office people operations from Ceuta HQ." }
    ]
  },
  {
    city: "Asuncion",
    country: "Paraguay",
    label: "Americas Hub",
    schedule: "Hybrid / LATAM hours",
    roles: [
      { title: "Full-Stack Developer", count: 3, type: "Engineering", summary: "Ship customer-facing features, APIs, automations, and operational tooling for international product launches." },
      { title: "Engineering Lead", count: 1, type: "Leadership", summary: "Coordinate the Americas development pod, lead reviews, unblock delivery, and keep demos moving weekly." }
    ]
  },
  {
    city: "Cebu City",
    country: "Philippines",
    label: "APAC Support Hub",
    schedule: "Hybrid / APAC hours",
    roles: [
      { title: "Full-Stack Developer", count: 3, type: "Engineering", summary: "Develop platform modules, support automation, product interfaces, and integrations for APAC coverage." },
      { title: "Engineering Lead", count: 1, type: "Leadership", summary: "Lead the Cebu engineering pod, guide implementation quality, and maintain delivery continuity across time zones." }
    ]
  }
];

const totals = [
  { value: "9", label: "Full-stack vacancies" },
  { value: "3", label: "Engineering leads" },
  { value: "1", label: "Ceuta HQ HR admin" }
];

function roleId(role: Role, city: string) {
  return `${city}-${role.title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function roleDetails(role: Role, location: LocationGroup): RoleDetail {
  if (role.title === "Full-Stack Developer") {
    return {
      scope: [
        "Build production features across web apps, APIs, dashboards, and internal tools.",
        "Work with design, product, and AI workflows from discovery through release.",
        "Own clean implementation, testing, documentation, and weekly demo readiness."
      ],
      hours: `${location.schedule}. Core collaboration window follows the ${location.city} office, with overlap for cross-office demos.`,
      benefits: [
        "Modern product stack with real ownership",
        "Weekly demo rhythm and clear delivery goals",
        "International team exposure across Europe, LATAM, and APAC"
      ]
    };
  }

  if (role.title === "Engineering Lead") {
    return {
      scope: [
        "Guide the local engineering pod and keep delivery aligned with SaaSolution SL standards.",
        "Review architecture, unblock implementation, and mentor full-stack developers.",
        "Coordinate weekly releases with product, design, and other office leads."
      ],
      hours: `${location.schedule}. Lead roles include recurring overlap with Ceuta HQ for planning, hiring feedback, and release coordination.`,
      benefits: [
        "Leadership ownership over a new regional pod",
        "Direct influence on engineering culture and technical standards",
        "Close collaboration with founders and product decision makers"
      ]
    };
  }

  return {
    scope: [
      "Coordinate hiring pipelines, interview scheduling, onboarding, and candidate communication.",
      "Maintain HR records, team documentation, and cross-office operations from Ceuta HQ.",
      "Support team rituals, local compliance paperwork, and founder-level operational follow-up."
    ],
    hours: "Ceuta HQ office rhythm, Monday to Friday, aligned with Europe hours and occasional cross-office coordination windows.",
    benefits: [
      "Central HQ role with visibility across all three locations",
      "Clear ownership of people operations and onboarding quality",
      "Direct collaboration with leadership while the company scales"
    ]
  };
}

function applicationHref(role: Role, city: string) {
  const subject = encodeURIComponent(`Application: ${role.title} - ${city}`);
  const body = encodeURIComponent(`Hi SaaSolution SL,\n\nI would like to apply for the ${role.title} role in ${city}.\n\nName:\nLocation:\nLinkedIn / portfolio:\nRelevant experience:\n\n`);
  return `mailto:SLsaasolution@gmail.com?subject=${subject}&body=${body}`;
}

export default async function CareersPage() {
  const locale = await getLocale();
  const t = careersContent[locale];
  const c = common[locale];
  const names = countryNames[locale];
  const localizedCapabilities = capabilities.map((capability, index) => {
    const [title, body] = t.capabilityItems[index] ?? [capability.title, capability.body];
    return { ...capability, title, body };
  });
  const localizedTotals = totals.map((item, index) => ({ ...item, label: t.totals[index] ?? item.label }));
  const roleCopy = {
    "Full-Stack Developer": t.roles.fullStack,
    "Engineering Lead": t.roles.lead,
    "HR & Operations Admin": t.roles.hr
  };
  const locationCopy = {
    Ceuta: t.locations.ceuta,
    Asuncion: t.locations.asuncion,
    "Cebu City": t.locations.cebu
  };

  return (
    <main className="min-h-screen bg-[#100F1F] text-[#F5F1FF]">
      <section className="relative overflow-hidden px-6 py-8 md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(168,85,247,0.24),transparent_34%),radial-gradient(circle_at_14%_78%,rgba(20,184,166,0.2),transparent_34%),linear-gradient(135deg,#100F1F_0%,#1B1740_48%,#0E2B2B_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,241,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,241,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-14 flex items-center justify-between">
            <Link className="text-sm font-bold tracking-tight text-[#F5F1FF] transition hover:text-[#A78BFA] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <a className="inline-flex items-center gap-2 rounded-full border border-[#2DD4BF]/40 bg-[#2DD4BF]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5EEAD4] transition hover:bg-[#2DD4BF] hover:text-[#100F1F] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]" href="mailto:SLsaasolution@gmail.com">
                {t.openApplication}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <header className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#22D3EE]">{t.capabilitiesLabel}</p>
              <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">{t.heroTitle}</h1>
              <p className="mt-6 text-2xl font-semibold leading-tight text-[#F5F1FF]/52 md:text-3xl">{t.heroKicker}</p>
            </div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-[#F5F1FF]/70">
              {t.heroBody}
            </p>
          </header>

          <section aria-label={t.capabilitiesLabel.replace("- ", "")} className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {localizedCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article className="rounded-2xl border border-[#F5F1FF]/12 bg-[#F5F1FF]/[0.055] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur transition hover:-translate-y-1 hover:border-[#A78BFA]/55" key={capability.title}>
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#F5F1FF]/14 bg-[#F5F1FF]/[0.06]">
                    <Icon className="h-5 w-5 text-[#C4B5FD]" />
                  </div>
                  <h2 className="mt-7 text-xl font-bold tracking-tight">{capability.title}</h2>
                  <p className="mt-5 max-w-sm text-base font-semibold leading-7 text-[#F5F1FF]/62">{capability.body}</p>
                </article>
              );
            })}
          </section>
        </div>
      </section>

      <section className="relative bg-[#E8E0FF] px-6 py-20 text-[#100F1F] md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#6D28D9]">{t.vacanciesLabel}</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.vacanciesTitle}</h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-[#100F1F]/68">
              {t.vacanciesBody}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {localizedTotals.map((item) => (
              <div className="rounded-2xl border border-[#100F1F]/10 bg-[#F5F1FF]/70 p-6 shadow-sm" key={item.label}>
                <p className="text-5xl font-bold tracking-tight">{item.value}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-[#100F1F]/54">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6">
            {locations.map((location) => (
              <section className="rounded-[28px] border border-[#100F1F]/10 bg-[#100F1F] p-6 text-[#F5F1FF] shadow-[0_28px_90px_rgba(16,15,31,0.18)] md:p-8" key={location.city}>
                <div className="flex flex-col gap-4 border-b border-[#F5F1FF]/10 pb-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-[#2DD4BF]">{locationCopy[location.city as keyof typeof locationCopy]?.[0] ?? location.label}</p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{location.city}</h3>
                    <p className="mt-2 text-base font-semibold text-[#F5F1FF]/58">{names[location.country] ?? location.country}</p>
                  </div>
                  <div className="inline-flex w-fit rounded-full border border-[#A78BFA]/35 bg-[#A78BFA]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C4B5FD]">
                    {locationCopy[location.city as keyof typeof locationCopy]?.[1] ?? location.schedule}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {location.roles.map((role) => {
                    const copy = roleCopy[role.title as keyof typeof roleCopy] ?? [role.title, role.type, role.summary];
                    return (
                    <article className="rounded-2xl border border-[#F5F1FF]/12 bg-[#F5F1FF]/[0.06] p-6 transition hover:-translate-y-1 hover:border-[#2DD4BF]/55" key={`${location.city}-${role.title}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5F1FF]/42">{copy[1]}</p>
                          <h4 className="mt-3 text-xl font-bold tracking-tight">{copy[0]}</h4>
                        </div>
                        <span className="rounded-full bg-[#2DD4BF] px-3 py-1 text-sm font-bold text-[#100F1F]">x{role.count}</span>
                      </div>
                      <p className="mt-5 min-h-24 text-sm font-semibold leading-6 text-[#F5F1FF]/62">{copy[2]}</p>
                      <Link className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-5 py-3 text-sm font-bold text-[#100F1F] transition hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#100F1F]" href={`/careers/${roleId(role, location.city)}`}>
                        {t.detailsCta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </article>
                  );})}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}
