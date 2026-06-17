"use client";

import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { Clock3, Globe2, MapPin } from "lucide-react";
import Link from "next/link";
import { ProductHoverSlider, products } from "@/components/ui/product-hover-slider";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { common, countryNames, storyContent, type Locale } from "@/lib/i18n";

type Slide = { title: string; description: string; image: string; fallback: string; variant?: "method" };
type Office = { label: string; city: string; country: string; zone: string; timeZone: string; hours: string; startHour: number; endHour: number; coordinates: string; status: string; tone: string; color: string };
type LocalClock = { date: Date; timeZone: string };
type CoverageSegment = { office: Office; start: number; end: number };
type MethodStep = { number: string; title: string; body: string };

const productSlideIndex = 3;

const methodSteps: MethodStep[] = [
  { number: "01", title: "Discover", body: "We audit, interview, and pressure-test your brief. You walk out with a clarity document, not a slide deck." },
  { number: "02", title: "Design", body: "High-fidelity prototypes wired to real data. Every interaction defended with research." },
  { number: "03", title: "Build", body: "Weekly demos. Production deploys from week one. No 'big reveal' surprises." },
  { number: "04", title: "Scale", body: "We stay on as a partner - performance tuning, growth loops, and expansion into new markets." }
];

const slides: Slide[] = [
  { title: "About SaaSolutions", description: "We are SaaSolutions — a studio of engineers and designers shipping cinematic products for ambitious companies. From commerce to AI agents to connected hardware, we build the things your customers can't stop talking about.", image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop" },
  { title: "AI-First Platforms", description: "We create software that combines automation, modern cloud architecture and AI-driven workflows.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" },
  { title: "How we turn a brief\ninto a breakout.", description: "The SaaSolutions Method", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", variant: "method" },
  { title: "Seven products.\nOne obsession with craft.", description: "Every line of code, every pixel, every interaction — engineered to make your customers feel something. Here's what we're shipping right now, including our upcoming hospitality platforms hospitalityOS, HospitalityOps and HospitalityTV.", image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop" },
  { title: "Partner With Us", description: "We are open to partnerships, pilots and international deployment opportunities with enterprises, governments, operators and technology partners.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" }
];

const storyStyles = [
  {
    background: "#2563EB",
    accent: "#1D4ED8",
    accentSoft: "rgba(147,197,253,0.52)",
    grid: "rgba(147,197,253,0.34)",
    title: "tracking-tight text-white",
    body: "text-white/82",
    button: "bg-[#050505] text-[#F3F2EE]"
  },
  {
    background: "#DC2626",
    accent: "#B91C1C",
    accentSoft: "rgba(252,165,165,0.52)",
    grid: "rgba(252,165,165,0.34)",
    title: "tracking-normal text-white",
    body: "text-white/82",
    button: "bg-[#050505] text-[#F3F2EE]"
  },
  {
    background: "#F97316",
    accent: "#EA580C",
    accentSoft: "rgba(251,146,60,0.46)",
    grid: "rgba(154,52,18,0.22)",
    title: "tracking-tight text-black",
    body: "text-black/72",
    button: "bg-[#050505] text-[#F97316]"
  },
  {
    background: "#FFF100",
    accent: "#CA8A04",
    accentSoft: "rgba(133,77,14,0.34)",
    grid: "rgba(133,77,14,0.22)",
    title: "tracking-tighter text-black",
    body: "text-black/78",
    button: "bg-[#050505] text-[#FFF100]"
  },
  {
    background: "#16A34A",
    accent: "#15803D",
    accentSoft: "rgba(134,239,172,0.52)",
    grid: "rgba(134,239,172,0.34)",
    title: "tracking-tight text-white",
    body: "text-white/82",
    button: "bg-[#050505] text-[#F3F2EE]"
  }
];

const offices: Office[] = [
  { label: "Americas Hub", city: "Asuncion", country: "Paraguay", zone: "PYT - UTC-4", timeZone: "America/Asuncion", hours: "12:00 - 21:00", startHour: 12, endHour: 21, coordinates: "25.2637 S, 57.5759 W", status: "Q4 2026", tone: "bg-cyan-400", color: "bg-cyan-500/65" },
  { label: "Global Headquarters", city: "Ceuta", country: "Spain", zone: "CEST - UTC+2", timeZone: "Europe/Madrid", hours: "09:00 - 18:00", startHour: 9, endHour: 18, coordinates: "35.8894 N, 5.3213 W", status: "Live", tone: "bg-emerald-400", color: "bg-emerald-500/75" },
  { label: "APAC Support Hub", city: "Cebu City", country: "Philippines", zone: "PHT - UTC+8", timeZone: "Asia/Manila", hours: "07:00 - 16:00", startHour: 7, endHour: 16, coordinates: "10.3157 N, 123.8854 E", status: "Q2 2027", tone: "bg-teal-400", color: "bg-teal-400/70" }
];

function getClockSnapshot(): LocalClock {
  return {
    date: new Date(),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time"
  };
}

function getDayProgress(date: Date) {
  const minutes = date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60;
  return (minutes / 1440) * 100;
}

function getTimeZoneOffset(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const utcTime = Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day), Number(values.hour), Number(values.minute), Number(values.second));
  return (utcTime - date.getTime()) / 60000;
}

function buildCoverageSegments(date: Date, localTimeZone: string) {
  const localOffset = getTimeZoneOffset(date, localTimeZone);
  return offices.flatMap((office) => {
    const officeOffset = getTimeZoneOffset(date, office.timeZone);
    const offsetDelta = officeOffset - localOffset;
    const start = office.startHour * 60 - offsetDelta;
    const end = office.endHour * 60 - offsetDelta;
    const normalizedStart = ((start % 1440) + 1440) % 1440;
    const normalizedEnd = ((end % 1440) + 1440) % 1440;

    if (normalizedStart < normalizedEnd) return [{ office, start: normalizedStart, end: normalizedEnd }];
    return [
      { office, start: 0, end: normalizedEnd },
      { office, start: normalizedStart, end: 1440 }
    ];
  });
}

function getLocalMinutes(date: Date) {
  return date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60;
}

function getOfficeLocalTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat(undefined, { timeZone, hour: "2-digit", minute: "2-digit" }).format(date);
}

function formatLocalTime(date: Date) {
  return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(date);
}

export function InteractiveScrollingStory({ locale }: { locale: Locale }) {
  const c = common[locale];
  const t = storyContent[locale];
  const names = countryNames[locale];
  const officeLabels = {
    es: { "Americas Hub": "Hub Americas", "Global Headquarters": "Sede global", "APAC Support Hub": "Hub soporte APAC", Live: "Activo" },
    en: { "Americas Hub": "Americas Hub", "Global Headquarters": "Global Headquarters", "APAC Support Hub": "APAC Support Hub", Live: "Live" },
    nl: { "Americas Hub": "Americas Hub", "Global Headquarters": "Wereldwijde hoofdzetel", "APAC Support Hub": "APAC Support Hub", Live: "Live" },
    de: { "Americas Hub": "Americas Hub", "Global Headquarters": "Globale Zentrale", "APAC Support Hub": "APAC Support Hub", Live: "Live" }
  }[locale];
  const translatedSlides = t.slides as string[][];
  const slides: Slide[] = translatedSlides.map(([title, description], index) => ({
    title,
    description,
    image: [
      "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    ][index],
    fallback: [
      "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    ][index],
    variant: index === 2 ? "method" : undefined
  }));
  const methodSteps: MethodStep[] = (t.methodSteps as string[][]).map(([title, body], index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    body
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProductImage, setActiveProductImage] = useState(products[0].image);
  const [localClock, setLocalClock] = useState<LocalClock | null>(null);
  const refs = useRef<Array<HTMLElement | null>>([]);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveIndex(Number((entry.target as HTMLElement).dataset.index || 0));
        }
      });
    }, { threshold: [0.5] });
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateClock = () => setLocalClock(getClockSnapshot());
    updateClock();
    const timer = window.setInterval(updateClock, 60000);
    return () => window.clearInterval(timer);
  }, []);

  const localProgress = localClock ? getDayProgress(localClock.date) : 0;
  const markerOffsetRem = 0.75 - (localProgress / 100) * 1.5;
  const coverageSegments = useMemo(() => (localClock ? buildCoverageSegments(localClock.date, localClock.timeZone) : []), [localClock]);
  const localMinutes = localClock ? getLocalMinutes(localClock.date) : 0;
  const activeSegment = coverageSegments.find((segment) => localMinutes >= segment.start && localMinutes < segment.end);
  const currentSupportOffice = activeSegment?.office ?? offices.find((office) => office.city === "Ceuta") ?? offices[0];
  const currentSupportStatus = activeSegment ? t.supportRunning : t.supportOnCall;
  const activeStoryStyle = storyStyles[activeIndex] ?? storyStyles[0];

  return (
    <section className="relative text-black transition-colors duration-700" style={{ backgroundColor: activeStoryStyle.background }}>
      <div className="mx-auto grid w-screen min-h-screen max-w-7xl grid-cols-1 p-8 transition-colors duration-700 md:grid-cols-2 md:p-16" style={{ backgroundColor: activeStoryStyle.background }}>
        <div className="relative">
          <div className="fixed top-16 left-4 md:left-16 flex w-[50%] max-w-[200px] space-x-2 z-10">
            {slides.map((_, i) => (
              <div className="h-1 w-full rounded-full transition-colors duration-700" key={i} style={{ backgroundColor: activeStoryStyle.accentSoft }}>
                <div
                  className={`h-full rounded-full transition-all duration-500 ${i <= activeIndex ? "w-full" : "w-0"}`}
                  style={{ backgroundColor: activeStoryStyle.accent }}
                />
              </div>
            ))}
          </div>

          {slides.map((slide, i) => (
            <article key={slide.title} data-index={i} ref={(el) => { refs.current[i] = el; }} className="min-h-screen flex items-center">
              <div className={`${slide.variant === "method" ? "max-w-3xl" : "max-w-md"} transition-all duration-500 ${activeIndex===i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}>
                {slide.variant === "method" ? (
                  <>
                    <p className="text-xs font-bold uppercase tracking-[0.42em] text-black/70">{t.methodLabel}</p>
                    <h2 className={`mt-6 whitespace-pre-line text-5xl font-bold leading-tight transition-all duration-700 md:text-6xl ${activeStoryStyle.title}`}>{slide.title}</h2>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                      {methodSteps.map((step) => (
                        <section className="border-t border-black/25 pt-8" key={step.number}>
                          <p className="font-mono text-sm text-black/45">{step.number}</p>
                          <h3 className="mt-7 text-2xl font-bold tracking-tight text-black">{step.title}</h3>
                          <p className="mt-5 max-w-xs text-base font-semibold leading-relaxed text-black/64">{step.body}</p>
                        </section>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className={`whitespace-pre-line text-5xl font-bold leading-tight transition-all duration-700 md:text-6xl ${activeStoryStyle.title}`}>{slide.title}</h2>
                    <p className={`mt-6 max-w-md text-lg leading-relaxed transition-colors duration-700 md:text-xl ${activeStoryStyle.body}`}>{slide.description}</p>
                    {i === productSlideIndex && <ProductHoverSlider onActiveProductChange={(product) => setActiveProductImage(product.image)} />}
                  </>
                )}
              </div>
            </article>
          ))}

          <Link className={`sticky bottom-16 inline-flex rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors duration-700 ${activeStoryStyle.button}`} href="/partners">{t.partnerCta}</Link>
        </div>

        <div
          className="hidden md:flex sticky top-0 h-screen justify-center items-center overflow-hidden relative border-r transition-colors duration-700"
          style={{ borderColor: activeStoryStyle.accent }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--story-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--story-grid)_1px,transparent_1px)] bg-[size:40px_40px] transition-colors duration-700" style={{ "--story-grid": activeStoryStyle.grid } as CSSProperties} />
          <div className="relative h-[80vh] w-[500px] max-w-[calc(100%-3rem)] overflow-hidden">
            <div className="transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
              {slides.map((slide, i) => (
                <div
                  className="h-[80vh] w-full overflow-hidden rounded-2xl border-4 bg-[#F3F2EE] shadow-2xl transition-colors duration-700"
                  key={slide.title}
                  style={{ borderColor: activeStoryStyle.accent }}
                >
                  <img src={i === productSlideIndex ? activeProductImage : failed[i] ? slide.fallback : slide.image} alt={slide.title} className="h-full w-full object-cover" onError={() => setFailed((p) => ({ ...p, [i]: true }))} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#050505] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-cyan-300">{t.presenceLabel}</p>
              <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-none tracking-tight md:text-6xl">{t.officesTitle}</h2>
              <p className="mt-5 max-w-3xl text-2xl leading-tight text-white/55 md:text-3xl">{t.officesBody}</p>
            </div>
            <div className="inline-flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-[#111111] px-5 py-4 text-xs font-bold uppercase tracking-[0.32em] text-white/70 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.95)]" />
              {t.followSun}
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {offices.map((office) => (
              <article key={office.city} className={`rounded-lg border p-8 shadow-[0_18px_70px_rgba(0,0,0,0.24)] ${office.city === currentSupportOffice.city ? "border-cyan-300/50 bg-[#16201f]" : "border-white/10 bg-[#101010]"}`}>
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-[#171717]">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                    <span className={`h-1.5 w-1.5 rounded-full ${office.tone}`} />
                    {officeLabels[office.status as keyof typeof officeLabels] ?? office.status}
                  </span>
                </div>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.42em] text-white/32">{officeLabels[office.label as keyof typeof officeLabels] ?? office.label}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">{office.city}</h3>
                <p className="mt-3 text-base font-semibold text-white/55">{names[office.country] ?? office.country}</p>
                <div className="mt-7 border-t border-white/10 pt-6 font-mono text-sm text-white/45">
                  <p className="flex items-center gap-3">
                    <Clock3 className="h-4 w-4" />
                    {office.zone} - {office.hours}
                  </p>
                  <p className="mt-4 flex items-center gap-3">
                    <Globe2 className="h-4 w-4" />
                    {office.coordinates}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-white/10 bg-[#101010] p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-white/35">{t.coverageLabel}</p>
                <p className="mt-2 text-sm text-white/45">{currentSupportStatus} {currentSupportOffice.city}, {names[currentSupportOffice.country] ?? currentSupportOffice.country}.</p>
              </div>
              <div className="rounded-full border border-white/10 bg-[#050505]/35 px-4 py-2 font-mono text-xs text-white/60">
                {localClock ? `${formatLocalTime(localClock.date)} - ${localClock.timeZone}` : t.readingLocalTime}
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-white/10 bg-[#111111] p-4">
              <div className="ml-28 flex justify-between font-mono text-[11px] text-white/35">
                <span>00</span>
                <span>06</span>
                <span>12</span>
                <span>18</span>
                <span>24</span>
              </div>
              <div className="mt-4 space-y-4">
                {offices.map((office) => {
                  const officeSegments = coverageSegments.filter((segment) => segment.office.city === office.city);
                  const isCurrentOffice = office.city === currentSupportOffice.city;

                  return (
                    <div className="grid items-center gap-4 md:grid-cols-[7rem_1fr]" key={office.city}>
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/75">
                        <span className={`h-2 w-2 rounded-full ${office.tone}`} />
                        {office.city}
                      </div>
                      <div className="relative h-9 overflow-hidden rounded-md border border-white/10 bg-[#171717]">
                        {officeSegments.map((segment) => (
                          <div
                            className={`absolute top-0 h-full ${segment.office.color}`}
                            key={`${segment.office.city}-${segment.start}-${segment.end}`}
                            style={{ left: `${(segment.start / 1440) * 100}%`, width: `${((segment.end - segment.start) / 1440) * 100}%` }}
                          />
                        ))}
                        <div
                          className="absolute top-0 z-10 h-full w-px bg-[#F3F2EE] shadow-[0_0_18px_rgba(243,242,238,0.9)] transition-[left] duration-700"
                          style={{ left: `calc(${localProgress}% + ${markerOffsetRem}rem)` }}
                        >
                          {isCurrentOffice && (
                            <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#F3F2EE] shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
                          )}
                        </div>
                        {isCurrentOffice && (
                          <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#F3F2EE] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                            {activeSegment ? t.active : t.onCall}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-white/10 bg-[#050505]/25 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">{t.supportCountry}</p>
              <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <p className="text-2xl font-bold tracking-tight">{names[currentSupportOffice.country] ?? currentSupportOffice.country}</p>
                <p className="font-mono text-sm text-white/45">
                  {currentSupportOffice.city} {t.localTime}: {localClock ? getOfficeLocalTime(localClock.date, currentSupportOffice.timeZone) : "--:--"}
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80 sm:grid-cols-3">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Asuncion</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Ceuta</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-400" />Cebu City</span>
            </div>
          </div>
        </div>
      </div>
      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </section>
  );
}
