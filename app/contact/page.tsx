import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Mail, MapPin, Paperclip, Phone, Send, UserRound } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { common, countryNames } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { contactLocalized, contactPeopleLocalized } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Contact SaaSolution SL",
  description: "Contact SaaSolution for product, support, security, process, hardware, and partnership requests."
};

const contactEmail = "info@saasolution.com";

const avatarTones = [
  "from-[#FFF100] to-[#5EEAD4] text-[#111318]",
  "from-[#C4B5FD] to-[#5EEAD4] text-[#111318]",
  "from-[#FBBF24] to-[#FFF100] text-[#111318]"
];

export default async function ContactPage() {
  const locale = await getLocale();
  const t = contactLocalized[locale];
  const c = common[locale];
  const people = contactPeopleLocalized[locale];
  const names = countryNames[locale];
  const offices = [
    ["Ceuta", "Spain", "+34 956 00 00 21", "Calle Real 24, 51001 Ceuta"],
    ["Asuncion", "Paraguay", "+595 21 000 421", "Avenida Espana 1880, Asuncion"],
    ["Cebu City", "Philippines", "+63 32 000 1842", "IT Park, Lahug, Cebu City"]
  ];

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#111318]">
      <section className="relative overflow-hidden bg-[#111318] px-6 py-8 text-[#F7F5EF] md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#111318_0%,#173F3A_48%,#2B2340_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,245,239,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,245,239,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-16 flex items-center justify-between gap-4">
            <Link className="text-sm font-bold tracking-tight transition hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <a className="inline-flex items-center gap-2 rounded-full border border-[#FFF100]/35 bg-[#FFF100]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFF100] transition hover:bg-[#FFF100] hover:text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#FFF100]" href={`mailto:${contactEmail}`}>
                {t.navCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <header className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#5EEAD4]">{t.label}</p>
            <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-8 max-w-4xl text-lg font-semibold leading-8 text-[#F7F5EF]/72 md:text-xl">{t.heroBody}</p>
          </header>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <section className="border border-[#111318]/10 bg-white p-6 shadow-sm md:p-10" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title" className="text-3xl font-bold tracking-tight md:text-5xl">{t.formTitle}</h2>
            <form action={`mailto:${contactEmail}`} className="mt-8 grid gap-6" encType="text/plain" method="post">
              <div className="grid gap-5 md:grid-cols-2">
                <TextInput label={t.name} name="name" placeholder={t.placeholders[0]} required />
                <TextInput label={t.email} name="email" placeholder={t.placeholders[1]} required type="email" />
                <TextInput label={t.company} name="company" placeholder={t.placeholders[2]} />
                <TextInput label={t.phone} name="phone" placeholder={t.placeholders[3]} type="tel" />
              </div>

              <fieldset>
                <legend className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#111318]/52">{t.topic}</legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {(t.topics as string[]).map((topic) => (
                    <label className="cursor-pointer rounded-full border border-[#111318]/12 bg-[#F7F5EF] px-4 py-3 text-sm font-bold text-[#111318]/76 transition hover:border-[#0F766E] hover:text-[#0F766E] has-[:checked]:border-[#0F766E] has-[:checked]:bg-[#0F766E] has-[:checked]:text-white" key={topic}>
                      <input className="sr-only" name="topic" type="radio" value={topic} />
                      {topic}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#111318]/52">{t.message}</span>
                <textarea className="min-h-44 border border-[#111318]/12 bg-[#F7F5EF] px-5 py-5 text-base font-medium text-[#111318] outline-none transition placeholder:text-[#111318]/36 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/24" name="message" placeholder={t.placeholders[4]} required />
              </label>

              <label className="grid gap-3 border border-dashed border-[#111318]/20 bg-[#F7F5EF] p-5">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#111318]/52">
                  <Paperclip className="h-4 w-4" />
                  {t.attachment}
                </span>
                <input className="text-sm font-semibold text-[#111318]/72 file:mr-4 file:rounded-full file:border-0 file:bg-[#111318] file:px-4 file:py-2 file:text-sm file:font-bold file:text-white" name="attachment" type="file" />
                <span className="text-xs font-semibold leading-5 text-[#111318]/52">{t.attachmentHint}</span>
              </label>

              <div>
                <p className="text-xs font-semibold leading-6 text-[#111318]/50">{t.consent}</p>
                <button className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-[#111318] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2" type="submit">
                  <Send className="h-5 w-5" />
                  {t.send}
                </button>
              </div>
            </form>
          </section>

          <aside className="grid gap-5">
            <section className="border border-[#111318]/10 bg-[#FFF100] p-7">
              <h2 className="text-2xl font-bold tracking-tight">{t.infoTitle}</h2>
              <div className="mt-6 grid gap-4">
                <InfoLine icon={Mail} label={t.emailTitle} value={contactEmail} href={`mailto:${contactEmail}`} />
                <InfoLine icon={Phone} label={t.phoneTitle} value="+34 956 00 00 21" href="tel:+34956000021" />
                <InfoLine icon={Building2} label={t.officeTitle} value="Ceuta, Asuncion, Cebu City" />
              </div>
            </section>

            <section className="border border-[#111318]/10 bg-[#111318] p-7 text-[#F7F5EF]">
              <h2 className="text-2xl font-bold tracking-tight">{t.peopleTitle}</h2>
              <div className="mt-6 grid gap-4">
                {people.map(([name, role, body], index) => (
                  <article className="flex gap-4 border border-[#F7F5EF]/12 bg-[#F7F5EF]/[0.06] p-4" key={name}>
                    <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br ${avatarTones[index] ?? avatarTones[0]}`}>
                      <UserRound className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">{name}</h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">{role}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#F7F5EF]/60">{body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section className="bg-[#E7EEE9] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0F766E]">{t.mapTitle}</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{t.officeTitle}</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#111318]/64">{t.mapBody}</p>

            <div className="mt-8 grid gap-4">
              {offices.map(([city, country, phone, address]) => (
                <article className="border border-[#111318]/10 bg-white p-5" key={city}>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0F766E]" />
                    <div>
                      <h3 className="text-lg font-bold">{city}</h3>
                      <p className="text-sm font-semibold text-[#111318]/52">{names[country] ?? country}</p>
                      <p className="mt-3 text-sm font-semibold text-[#111318]/70">{address}</p>
                      <a className="mt-2 inline-flex text-sm font-bold text-[#0F766E] transition hover:text-[#111318]" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="min-h-[520px] overflow-hidden border border-[#111318]/10 bg-white shadow-sm">
            <iframe
              allowFullScreen
              className="h-full min-h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ceuta%20Spain%7CAsuncion%20Paraguay%7CCebu%20City%20Philippines&output=embed"
              title="SaaSolution office map"
            />
          </div>
        </div>
      </section>

      <StandardFooterLinks locale={locale} />
      <footer className="border-t border-black/10 bg-[#fff100] py-8 text-center text-sm text-black/80">{c.footer}</footer>
    </main>
  );
}

function TextInput({ label, name, placeholder, required = false, type = "text" }: { label: string; name: string; placeholder: string; required?: boolean; type?: string }) {
  return (
    <label className="grid gap-3">
      <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#111318]/52">{label}</span>
      <input className="h-14 border border-[#111318]/12 bg-[#F7F5EF] px-5 text-base font-medium text-[#111318] outline-none transition placeholder:text-[#111318]/36 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/24" name={name} placeholder={placeholder} required={required} type={type} />
    </label>
  );
}

function InfoLine({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <>
      <Icon className="h-5 w-5 text-[#111318]" />
      <span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-[#111318]/54">{label}</span>
        <span className="mt-1 block text-base font-bold text-[#111318]">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="flex items-start gap-3 transition hover:translate-x-0.5" href={href}>
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3">{content}</div>;
}
