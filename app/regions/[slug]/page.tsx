import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Globe2 } from "lucide-react";
import { SiteFooter } from "@/app/page";
import { createMetadata, organizationSchema, regions, services } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) notFound();

  return createMetadata({
    title: `SaaSolutions SL in ${region.name} | AI automation and enterprise SaaS`,
    description: `${region.description} SaaSolutions builds AI automation, enterprise SaaS and digital platforms for ${region.name}.`,
    path: `/regions/${region.slug}`
  });
}

export default async function RegionPage({ params }: PageProps) {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) notFound();

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema(),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://SaaSolution.es" },
                { "@type": "ListItem", position: 2, name: "Regions", item: "https://SaaSolution.es/#regions" },
                { "@type": "ListItem", position: 3, name: region.name, item: `https://SaaSolution.es/regions/${region.slug}` }
              ]
            }
          ])
        }}
      />
      <section className="relative overflow-hidden px-5 py-8 md:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,42,79,0.72),rgba(7,10,15,0)_46%),linear-gradient(315deg,rgba(214,180,106,0.2),rgba(7,10,15,0)_38%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-white/62 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D6B46A]" href="/#regions">
            <ArrowLeft className="h-4 w-4" />
            Back to regions
          </Link>
          <header className="py-20">
            <p className="text-xs font-black uppercase tracking-[0.36em] text-[#65E4C3]">{region.accent}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">AI automation and enterprise SaaS for {region.name}.</h1>
            <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-white/68">{region.description}</p>
          </header>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1018] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            ["Market fit", `${region.name} needs software that respects language, regulation, customer expectations and local operating pace.`],
            ["SaaSolutions role", "We act as AI automation partner, enterprise SaaS builder and implementation team for serious platforms."],
            ["Delivery model", "Discovery, architecture, prototype, production build, security hardening and long-term optimization."]
          ].map(([title, body]) => (
            <article className="border border-white/10 bg-white/[0.04] p-6" key={title}>
              <Globe2 className="h-6 w-6 text-[#D6B46A]" />
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/62">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Relevant services for {region.name}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Link className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#65E4C3]/60 focus:outline-none focus:ring-2 focus:ring-[#65E4C3]" href={`/services/${service.slug}`} key={service.slug}>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#65E4C3]">{service.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/62">{service.description}</p>
              </Link>
            ))}
          </div>
          <Link className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D6B46A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#070A0F] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white" href="/contact">
            Discuss {region.name} deployment
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
