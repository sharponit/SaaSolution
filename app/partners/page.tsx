import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { StandardFooterLinks } from "@/components/ui/standard-footer-links";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { common, partnersContent } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";

const budgets = ["< $10k", "$10k - $50k", "$50k - $150k", "$150k+"];

export default async function PartnersPage() {
  const locale = await getLocale();
  const t = partnersContent[locale];
  const c = common[locale];
  const steps = (t.steps as string[][]).map(([title, body]) => ({ title, body }));
  const projectTypes = t.projectTypes as string[];

  return (
    <main className="min-h-screen bg-[#10211F] text-[#F8F1E7]">
      <section className="relative overflow-hidden px-6 py-8 md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(20,184,166,0.28),transparent_34%),radial-gradient(circle_at_14%_74%,rgba(245,158,11,0.2),transparent_34%),linear-gradient(135deg,#10211F_0%,#173F3A_46%,#2C2416_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,241,231,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,241,231,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-12 flex items-center justify-between">
            <Link className="text-sm font-bold tracking-tight text-[#F8F1E7] transition hover:text-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" href="/">
              SaaSolution SL
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} tone="dark" />
              <a className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FBBF24] transition hover:bg-[#F59E0B] hover:text-[#10211F] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" href="mailto:SLsaasolution@gmail.com">
                <Mail className="h-4 w-4" />
                {c.emailUs}
              </a>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <section aria-labelledby="partner-title" className="lg:sticky lg:top-10">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#FBBF24]">{t.startProject}</p>
              <h1 id="partner-title" className="mt-7 max-w-xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                {t.titleA}<span className="italic text-[#FBBF24]">{t.titleB}</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg font-semibold leading-8 text-[#F8F1E7]/76">
                {t.body}
              </p>

              <div className="mt-12 divide-y divide-[#F8F1E7]/12 border-y border-[#F8F1E7]/12">
                {steps.map((step) => (
                  <div className="flex gap-4 py-5" key={step.title}>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2DD4BF]" />
                    <div>
                      <h2 className="text-base font-bold">{step.title}</h2>
                      <p className="mt-1 text-sm font-medium text-[#F8F1E7]/58">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="mt-12 rounded-2xl border border-[#F8F1E7]/14 bg-[#173F3A]/72 p-6 shadow-[0_30px_100px_rgba(20,184,166,0.18)] backdrop-blur">
                <p className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#FBBF24]">
                  <Sparkles className="h-4 w-4" />
                  {t.signal}
                </p>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#F8F1E7]/84">
                  {t.signalBody}
                </p>
                <form action="mailto:SLsaasolution@gmail.com" className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]" encType="text/plain" method="post">
                  <label className="sr-only" htmlFor="newsletter-email">{t.workEmail}</label>
                  <input className="h-12 rounded-full border border-[#F8F1E7]/16 bg-[#10211F]/82 px-5 text-sm text-[#F8F1E7] outline-none transition placeholder:text-[#F8F1E7]/38 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30" id="newsletter-email" name="newsletter_email" placeholder={t.emailPlaceholder as string} type="email" />
                  <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F8F1E7] px-6 text-sm font-bold text-[#10211F] transition hover:bg-[#FBBF24] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" type="submit">
                    <ArrowRight className="h-4 w-4" />
                    {t.subscribe}
                  </button>
                </form>
              </aside>
            </section>

            <section aria-labelledby="project-form-title" className="rounded-[28px] border border-[#F8F1E7]/14 bg-[#F8F1E7]/[0.075] p-6 shadow-[0_40px_140px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-10">
              <h2 id="project-form-title" className="sr-only">{t.formTitle}</h2>
              <form action="mailto:SLsaasolution@gmail.com" className="grid gap-7" encType="text/plain" method="post">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F1E7]/54">{t.name}</span>
                    <input className="h-14 rounded-xl border border-[#F8F1E7]/16 bg-[#10211F]/76 px-5 text-base text-[#F8F1E7] outline-none transition placeholder:text-[#F8F1E7]/34 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/28" name="name" placeholder="Jane Doe" required />
                  </label>
                  <label className="grid gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F1E7]/54">{t.workEmail}</span>
                    <input className="h-14 rounded-xl border border-[#F8F1E7]/16 bg-[#10211F]/76 px-5 text-base text-[#F8F1E7] outline-none transition placeholder:text-[#F8F1E7]/34 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/28" name="email" placeholder="jane@company.com" required type="email" />
                  </label>
                </div>

                <label className="grid gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F1E7]/54">{t.company}</span>
                  <input className="h-14 rounded-xl border border-[#F8F1E7]/16 bg-[#10211F]/76 px-5 text-base text-[#F8F1E7] outline-none transition placeholder:text-[#F8F1E7]/34 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/28" name="company" placeholder="Company name" />
                </label>

                <fieldset>
                  <legend className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F1E7]/54">{t.projectType}</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {projectTypes.map((type) => (
                      <label className="cursor-pointer rounded-full border border-[#F8F1E7]/16 bg-[#10211F]/45 px-5 py-3 text-sm font-bold text-[#F8F1E7]/84 transition hover:border-[#F59E0B] hover:text-[#FBBF24] has-[:checked]:border-[#F59E0B] has-[:checked]:bg-[#F59E0B] has-[:checked]:text-[#10211F]" key={type}>
                        <input className="sr-only" name="project_types" type="checkbox" value={type} />
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F1E7]/54">{t.budget}</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {budgets.map((budget) => (
                      <label className="cursor-pointer rounded-full border border-[#F8F1E7]/16 bg-[#10211F]/45 px-5 py-3 text-sm font-bold text-[#F8F1E7]/84 transition hover:border-[#2DD4BF] hover:text-[#5EEAD4] has-[:checked]:border-[#2DD4BF] has-[:checked]:bg-[#2DD4BF] has-[:checked]:text-[#10211F]" key={budget}>
                        <input className="sr-only" name="budget" type="radio" value={budget} />
                        {budget}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="grid gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F1E7]/54">{t.message}</span>
                  <textarea className="min-h-40 rounded-xl border border-[#F8F1E7]/16 bg-[#10211F]/76 px-5 py-5 text-base text-[#F8F1E7] outline-none transition placeholder:text-[#F8F1E7]/34 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/28" name="message" placeholder={t.messagePlaceholder as string} required />
                </label>

                <div>
                  <p className="font-mono text-xs leading-6 text-[#F8F1E7]/46">
                    {t.consent}
                  </p>
                  <button className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-8 py-4 text-base font-bold text-[#10211F] shadow-[0_0_52px_rgba(245,158,11,0.32)] transition hover:scale-[1.02] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#10211F]" type="submit">
                    <ArrowRight className="h-5 w-5" />
                    {t.send}
                  </button>
                </div>
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
