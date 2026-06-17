import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Boxes, ShieldCheck, Workflow } from "lucide-react";
import { SiteFooter } from "@/app/page";
import { createMetadata, products } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return createMetadata({
    title: `${product.name} by SaaSolutions SL | ${product.industry}`,
    description: `${product.description} Product track by SaaSolutions SL for ${product.industry}.`,
    path: `/products/${product.slug}`,
    image: product.image
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: product.industry,
            operatingSystem: "Web",
            description: product.description,
            creator: { "@type": "Organization", name: "SaaSolutions SL", url: "https://SaaSolution.es" }
          })
        }}
      />
      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-white/62 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D6B46A]" href="/#products">
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>
          <div className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[16/11] overflow-hidden border border-white/10 bg-white/[0.04]">
              <Image alt={`${product.name} product preview`} className="object-cover" fill priority sizes="(min-width: 1024px) 45vw, 100vw" src={product.image} />
            </div>
            <header>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-[#65E4C3]">{product.status}</p>
              <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight md:text-7xl">{product.name}</h1>
              <p className="mt-5 text-lg font-black text-[#D6B46A]">{product.industry}</p>
              <p className="mt-7 text-lg font-semibold leading-8 text-white/68">{product.description}</p>
              <Link className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D6B46A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#070A0F] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white" href="/contact">
                Request product consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </header>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1018] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            [Boxes, "Product posture", "A SaaSolutions product track with room for market-specific workflows, compliance and integration requirements."],
            [Workflow, "Workflow layer", "Designed to connect users, operators, dashboards, notifications, access and business logic."],
            [ShieldCheck, "Enterprise path", "Can be hardened for roles, audit trails, secure deployment and international expansion."]
          ].map(([Icon, title, body]) => (
            <article className="border border-white/10 bg-white/[0.04] p-6" key={title as string}>
              <Icon className="h-7 w-7 text-[#65E4C3]" />
              <h2 className="mt-5 text-2xl font-black">{title as string}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/62">{body as string}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
