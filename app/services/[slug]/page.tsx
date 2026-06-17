import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/app/page";
import { createMetadata, services } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return createMetadata({
    title: `${service.title} | SaaSolutions SL`,
    description: `${service.description} SaaSolutions SL delivers ${service.title.toLowerCase()} for Spain, UAE/GCC, Africa, South America and Southeast Asia.`,
    path: `/services/${service.slug}`
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@type": "Organization", name: "SaaSolutions SL", url: "https://SaaSolution.es" },
            areaServed: ["Spain", "Mediterranean", "Africa", "South America", "UAE/GCC", "Southeast Asia", "Europe"]
          })
        }}
      />
      <section className="relative overflow-hidden px-5 py-8 md:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,42,79,0.72),rgba(7,10,15,0)_46%),linear-gradient(315deg,rgba(22,163,74,0.18),rgba(7,10,15,0)_38%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-white/62 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D6B46A]" href="/#services">
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>
          <header className="py-20">
            <p className="text-xs font-black uppercase tracking-[0.36em] text-[#65E4C3]">{service.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">{service.title} by SaaSolutions SL.</h1>
            <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-white/68">{service.description}</p>
          </header>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1018] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Built for international deployment</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Discovery and platform architecture before code.",
              "Secure cloud delivery with roles, auditability and performance targets.",
              "Localization, multilingual content, analytics and conversion paths from the start."
            ].map((item) => (
              <article className="border border-white/10 bg-white/[0.04] p-6" key={item}>
                <CheckCircle2 className="h-6 w-6 text-[#D6B46A]" />
                <p className="mt-5 text-sm font-semibold leading-6 text-white/68">{item}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-black">SEO focus</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.keywords.map((keyword) => (
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/62" key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
          <Link className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D6B46A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#070A0F] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white" href="/contact">
            Discuss this service
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
