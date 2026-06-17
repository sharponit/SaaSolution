import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3, FileUp, MapPin, Sparkles } from "lucide-react";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { RoleShareButtons } from "@/components/ui/role-share-buttons";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { careersContent, common, countryNames, rolePageContent, type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";

type LocationGroup = { city: string; country: string; label: string; schedule: string; roles: Role[] };
type Role = { title: string; count: number; type: string; summary: string };
type RoleDetail = { scope: string[]; hours: string; benefits: string[]; profile: string[]; intro?: string; requirements?: string[]; compensation?: string[] };

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
      hours: `${location.schedule}. Core collaboration follows the ${location.city} office, with planned overlap for cross-office demos.`,
      benefits: [
        "Modern product stack with real ownership",
        "Weekly demo rhythm and clear delivery goals",
        "International team exposure across Europe, LATAM, and APAC"
      ],
      profile: [
        "Comfortable shipping React, Next.js, APIs, and database-backed product features.",
        "Pragmatic about quality: readable code, testing where it matters, and clean handoff notes.",
        "Able to work independently while staying close to design and product direction."
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
      ],
      profile: [
        "Experienced leading developers without losing touch with hands-on technical decisions.",
        "Strong product judgment, communication rhythm, and code review discipline.",
        "Calm under ambiguity and comfortable turning fuzzy requirements into releases."
      ]
    };
  }

  return {
    scope: [
      "Support HR and administrative processes.",
      "Coordinate onboarding and employee documentation.",
      "Assist with recruitment and internal communication.",
      "Help manage schedules, meetings, and operational tasks.",
      "Maintain organized records and internal workflows.",
      "Support management with day-to-day operations."
    ],
    hours: "Ceuta HQ office rhythm, Monday to Friday, aligned with Europe hours and occasional cross-office coordination windows.",
    benefits: [
      "Company laptop provided",
      "Internet support: company internet connection provided when needed, or monthly reimbursement if the employee already has a stable high-speed internet connection suitable for remote work",
      "Company phone provided, or 50% reimbursement if the employee already has an unlimited mobile subscription",
      "Lunch allowance of €250 per month for full-time employees, 40 hours per week",
      "Small and professional international team",
      "Modern digital work environment",
      "Long-term growth opportunities within the company",
      "Direct collaboration with management"
    ],
    profile: [
      "Enjoys working in a modern, fast-moving environment where structure, communication, and responsibility are important.",
      "Comfortable supporting a growing international team of up to 15 employees across multiple countries and time zones.",
      "Able to work independently while maintaining confidentiality and operational accuracy."
    ],
    intro: "We are looking for an experienced HR & Operations Administrator to support the daily operations of our international company based in Ceuta.",
    requirements: [
      "Minimum 5 years of experience in HR, administration, office management, or operations",
      "Fluent in Spanish and English, spoken and written",
      "Strong organizational and communication skills",
      "Comfortable working with digital tools and remote teams",
      "Able to work independently and maintain confidentiality",
      "Experience with onboarding, scheduling, documentation, and internal coordination"
    ],
    compensation: [
      "Salary: €1,400 per month",
      "Company laptop provided",
      "Internet support provided or reimbursed as needed",
      "Company phone provided, or 50% reimbursement of an existing unlimited mobile subscription",
      "Lunch allowance of €250 per month for full-time employees, 40 hours per week"
    ]
  };
}

function findRole(slug: string) {
  for (const location of locations) {
    for (const role of location.roles) {
      if (roleId(role, location.city) === slug) return { location, role, details: roleDetails(role, location) };
    }
  }
  return null;
}

function translateItems(items: string[], locale: Locale) {
  if (locale === "en") return items;

  const dictionary: Record<Locale, Record<string, string>> = {
    en: {},
    es: {
      "Build production features across web apps, APIs, dashboards, and internal tools.": "Construir funcionalidades de producción en apps web, APIs, paneles y herramientas internas.",
      "Work with design, product, and AI workflows from discovery through release.": "Trabajar con diseño, producto y flujos de IA desde discovery hasta release.",
      "Own clean implementation, testing, documentation, and weekly demo readiness.": "Responsabilizarte de implementación limpia, pruebas, documentación y demos semanales.",
      "Modern product stack with real ownership": "Stack moderno con responsabilidad real",
      "Weekly demo rhythm and clear delivery goals": "Ritmo de demos semanales y objetivos claros",
      "International team exposure across Europe, LATAM, and APAC": "Exposición a un equipo internacional en Europa, LATAM y APAC",
      "Comfortable shipping React, Next.js, APIs, and database-backed product features.": "Cómodo lanzando features con React, Next.js, APIs y bases de datos.",
      "Pragmatic about quality: readable code, testing where it matters, and clean handoff notes.": "Pragmático con la calidad: código legible, pruebas donde importan y notas claras.",
      "Able to work independently while staying close to design and product direction.": "Capaz de trabajar de forma independiente manteniendo alineación con diseño y producto.",
      "Guide the local engineering pod and keep delivery aligned with SaaSolution SL standards.": "Guiar el pod local de ingeniería y alinear la entrega con los estándares de SaaSolution SL.",
      "Review architecture, unblock implementation, and mentor full-stack developers.": "Revisar arquitectura, desbloquear implementación y mentorizar developers full-stack.",
      "Coordinate weekly releases with product, design, and other office leads.": "Coordinar releases semanales con producto, diseño y otros leads.",
      "Leadership ownership over a new regional pod": "Liderazgo real sobre un nuevo pod regional",
      "Direct influence on engineering culture and technical standards": "Influencia directa en cultura de ingeniería y estándares técnicos",
      "Close collaboration with founders and product decision makers": "Colaboración directa con founders y decisiones de producto",
      "Experienced leading developers without losing touch with hands-on technical decisions.": "Experiencia liderando developers sin perder contacto con decisiones técnicas prácticas.",
      "Strong product judgment, communication rhythm, and code review discipline.": "Buen criterio de producto, comunicación constante y disciplina de code review.",
      "Calm under ambiguity and comfortable turning fuzzy requirements into releases.": "Calma ante la ambigüedad y facilidad para convertir requisitos difusos en releases.",
      "Support HR and administrative processes.": "Apoyar procesos de RR. HH. y administración.",
      "Coordinate onboarding and employee documentation.": "Coordinar onboarding y documentación de empleados.",
      "Assist with recruitment and internal communication.": "Apoyar recruitment y comunicación interna.",
      "Help manage schedules, meetings, and operational tasks.": "Ayudar a gestionar agendas, reuniones y tareas operativas.",
      "Maintain organized records and internal workflows.": "Mantener registros y flujos internos organizados.",
      "Support management with day-to-day operations.": "Apoyar a management en operaciones diarias."
    },
    nl: {},
    de: {}
  };

  return items.map((item) => dictionary[locale][item] ?? item);
}

function applicationHref(role: Role, city: string) {
  const subject = encodeURIComponent(`Application: ${role.title} - ${city}`);
  const body = encodeURIComponent(`Hi SaaSolution SL,\n\nI would like to apply for the ${role.title} role in ${city}.\n\nName:\nLocation:\nLinkedIn / portfolio:\nRelevant experience:\n\nI will attach my resume to this email.\n\n`);
  return `mailto:SLsaasolution@gmail.com?subject=${subject}&body=${body}`;
}

export function generateStaticParams() {
  return locations.flatMap((location) => location.roles.map((role) => ({ role: roleId(role, location.city) })));
}

export default async function CareerRolePage({ params }: { params: Promise<{ role: string }> }) {
  const locale = await getLocale();
  const c = common[locale];
  const t = rolePageContent[locale];
  const names = countryNames[locale];
  const careersT = careersContent[locale];
  const { role: slug } = await params;
  const vacancy = findRole(slug);
  if (!vacancy) notFound();

  const { location, role, details } = vacancy;
  const roleCopy = {
    "Full-Stack Developer": careersT.roles.fullStack,
    "Engineering Lead": careersT.roles.lead,
    "HR & Operations Admin": careersT.roles.hr
  }[role.title as "Full-Stack Developer" | "Engineering Lead" | "HR & Operations Admin"];
  const locationCopy = {
    Ceuta: careersT.locations.ceuta,
    Asuncion: careersT.locations.asuncion,
    "Cebu City": careersT.locations.cebu
  }[location.city as "Ceuta" | "Asuncion" | "Cebu City"];
  const displayRoleTitle = roleCopy?.[0] ?? role.title;
  const displaySchedule = locationCopy?.[1] ?? location.schedule;
  const displayDetails = {
    ...details,
    scope: translateItems(details.scope, locale),
    profile: translateItems(details.profile, locale),
    benefits: translateItems(details.benefits, locale),
    requirements: details.requirements ? translateItems(details.requirements, locale) : undefined,
    compensation: details.compensation ? translateItems(details.compensation, locale) : undefined
  };

  return (
    <main className="min-h-screen bg-[#100F1F] text-[#F5F1FF]">
      <section className="relative overflow-hidden px-6 py-8 md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(168,85,247,0.28),transparent_35%),radial-gradient(circle_at_18%_72%,rgba(20,184,166,0.22),transparent_34%),linear-gradient(135deg,#100F1F_0%,#1B1740_48%,#0E2B2B_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,241,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,241,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-12 flex items-center justify-between">
            <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#F5F1FF] transition hover:text-[#A78BFA] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]" href="/careers">
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <a className="inline-flex items-center gap-2 rounded-full border border-[#2DD4BF]/40 bg-[#2DD4BF]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5EEAD4] transition hover:bg-[#2DD4BF] hover:text-[#100F1F] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]" href={applicationHref(role, location.city)}>
                {t.emailApplication}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <div className="space-y-10">
            <section>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#22D3EE]">{t.roleDetails}</p>
              <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">{displayRoleTitle}</h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-4 py-2 text-sm font-bold text-[#100F1F]">
                  <MapPin className="h-4 w-4" />
                  {location.city}, {names[location.country] ?? location.country}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#2DD4BF] px-4 py-2 text-sm font-bold text-[#100F1F]">
                  <Clock3 className="h-4 w-4" />
                  {displaySchedule}
                </span>
              </div>
              <p className="mt-8 max-w-4xl text-lg font-semibold leading-8 text-[#F5F1FF]/70">{displayDetails.intro ?? roleCopy?.[2] ?? role.summary}</p>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[
                  [(t.sections as string[])[0], displayDetails.scope],
                  [(t.sections as string[])[1], displayDetails.profile],
                  [(t.sections as string[])[2], displayDetails.benefits]
                ].map(([title, items]) => (
                  <article className="rounded-2xl border border-[#F5F1FF]/12 bg-[#F5F1FF]/[0.055] p-6 backdrop-blur" key={title as string}>
                    <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#C4B5FD]">{title as string}</h2>
                    <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-[#F5F1FF]/66">
                      {(items as string[]).map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
                <article className="rounded-2xl border border-[#2DD4BF]/22 bg-[#2DD4BF]/10 p-6">
                  <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#5EEAD4]">{t.workHours}</h2>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[#F5F1FF]/72">{displayDetails.hours}</p>
                </article>
                {displayDetails.requirements && (
                  <article className="rounded-2xl border border-[#F5F1FF]/12 bg-[#F5F1FF]/[0.055] p-6 backdrop-blur">
                    <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#C4B5FD]">{t.requirements}</h2>
                    <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-[#F5F1FF]/66">
                      {displayDetails.requirements.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </article>
                )}
                {displayDetails.compensation && (
                  <article className="rounded-2xl border border-[#A78BFA]/22 bg-[#A78BFA]/10 p-6">
                    <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#C4B5FD]">{t.compensation}</h2>
                    <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-[#F5F1FF]/72">
                      {displayDetails.compensation.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </article>
                )}
              </div>
            </section>

            <RoleShareButtons roleTitle={displayRoleTitle} location={`${location.city}, ${names[location.country] ?? location.country}`} locale={locale} />

            <section aria-labelledby="application-title" className="rounded-[28px] border border-[#F5F1FF]/14 bg-[#F5F1FF]/[0.075] p-6 shadow-[0_40px_140px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#2DD4BF]">{t.applyNow}</p>
              <h2 id="application-title" className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{t.sendProfile}</h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#F5F1FF]/62">
                {t.applyBody}
              </p>

              <form action={applicationHref(role, location.city)} className="mt-8 grid gap-6" encType="multipart/form-data" method="post">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#F5F1FF]/50">{t.fullName}</span>
                    <input className="h-14 rounded-xl border border-[#F5F1FF]/16 bg-[#100F1F]/76 px-5 text-base text-[#F5F1FF] outline-none transition placeholder:text-[#F5F1FF]/34 focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/28" name="name" placeholder={(t.placeholders as string[])[0]} required />
                  </label>
                  <label className="grid gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#F5F1FF]/50">{t.email}</span>
                    <input className="h-14 rounded-xl border border-[#F5F1FF]/16 bg-[#100F1F]/76 px-5 text-base text-[#F5F1FF] outline-none transition placeholder:text-[#F5F1FF]/34 focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/28" name="email" placeholder={(t.placeholders as string[])[1]} required type="email" />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#F5F1FF]/50">{t.portfolio}</span>
                    <input className="h-14 rounded-xl border border-[#F5F1FF]/16 bg-[#100F1F]/76 px-5 text-base text-[#F5F1FF] outline-none transition placeholder:text-[#F5F1FF]/34 focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/28" name="portfolio" placeholder={(t.placeholders as string[])[2]} />
                  </label>
                  <label className="grid gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#F5F1FF]/50">{t.currentLocation}</span>
                    <input className="h-14 rounded-xl border border-[#F5F1FF]/16 bg-[#100F1F]/76 px-5 text-base text-[#F5F1FF] outline-none transition placeholder:text-[#F5F1FF]/34 focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/28" name="current_location" placeholder={(t.placeholders as string[])[3]} />
                  </label>
                </div>

                <label className="grid gap-3 rounded-2xl border border-dashed border-[#A78BFA]/48 bg-[#100F1F]/48 p-5">
                  <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#C4B5FD]">
                    <FileUp className="h-4 w-4" />
                    {t.resumeUpload}
                  </span>
                  <input accept=".pdf,.doc,.docx" className="block w-full cursor-pointer rounded-xl border border-[#F5F1FF]/14 bg-[#100F1F]/76 text-sm text-[#F5F1FF]/70 file:mr-4 file:border-0 file:bg-[#A78BFA] file:px-5 file:py-3 file:text-sm file:font-bold file:text-[#100F1F] hover:file:bg-[#2DD4BF]" name="resume" required type="file" />
                  <span className="text-xs font-semibold text-[#F5F1FF]/42">{t.resumeHint}</span>
                </label>

                <label className="grid gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#F5F1FF]/50">{t.why}</span>
                  <textarea className="min-h-36 rounded-xl border border-[#F5F1FF]/16 bg-[#100F1F]/76 px-5 py-5 text-base text-[#F5F1FF] outline-none transition placeholder:text-[#F5F1FF]/34 focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/28" name="message" placeholder={t.whyPlaceholder as string} required />
                </label>

                <button className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#A78BFA] px-8 py-4 text-base font-bold text-[#100F1F] shadow-[0_0_52px_rgba(167,139,250,0.32)] transition hover:scale-[1.02] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#100F1F]" type="submit">
                  <Sparkles className="h-5 w-5" />
                  {t.sendApplication}
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}
