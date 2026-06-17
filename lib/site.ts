import type { Metadata } from "next";

export const siteUrl = "https://SaaSolution.es";

export const seoLanguages = ["en", "es", "ar", "pt", "fr", "de"] as const;
export type SeoLanguage = (typeof seoLanguages)[number];

export const languageLabels: Record<SeoLanguage, string> = {
  en: "English",
  es: "Espanol",
  ar: "Arabic",
  pt: "Portugues",
  fr: "Francais",
  de: "Deutsch"
};

export const languageMetadata: Record<SeoLanguage, { title: string; description: string }> = {
  en: {
    title: "SaaSolutions SL | AI software, automation and enterprise SaaS from Spain",
    description:
      "SaaSolutions SL is a global, AI-first software and automation company headquartered in Ceuta, Spain, building international SaaS solutions, government platforms and smart building systems — including its upcoming hospitality platforms hospitalityOS, HospitalityOps and HospitalityTV, currently being prepared for launch."
  },
  es: {
    title: "SaaSolutions SL | Software IA, automatizacion y SaaS empresarial en Espana",
    description:
      "SaaSolutions SL es una empresa global AI-first de software y automatizacion con sede en Ceuta, Espana, que construye soluciones SaaS internacionales, plataformas publicas y edificios inteligentes, incluidas sus proximas plataformas de hosteleria hospitalityOS, HospitalityOps y HospitalityTV, en preparacion para su lanzamiento."
  },
  ar: {
    title: "SaaSolutions SL | برمجيات الذكاء الاصطناعي والأتمتة من إسبانيا",
    description:
      "SaaSolutions SL شركة عالمية للبرمجيات والأتمتة تعتمد على الذكاء الاصطناعي من سبتة، إسبانيا، تبني حلول SaaS دولية ومنصات حكومية ومبانٍ ذكية، بما في ذلك منصات الضيافة القادمة hospitalityOS وHospitalityOps وHospitalityTV التي يجري تجهيزها للإطلاق قريبًا."
  },
  pt: {
    title: "SaaSolutions SL | Software de IA, automacao e SaaS empresarial na Espanha",
    description:
      "A SaaSolutions SL e uma empresa global AI-first de software e automacao em Ceuta, Espanha, criando solucoes SaaS internacionais, plataformas governamentais e edificios inteligentes, incluindo as suas proximas plataformas de hospitalidade hospitalityOS, HospitalityOps e HospitalityTV, em preparacao para o lancamento."
  },
  fr: {
    title: "SaaSolutions SL | Logiciels IA, automatisation et SaaS d'entreprise en Espagne",
    description:
      "SaaSolutions SL est une societe logicielle AI-first mondiale basee a Ceuta, Espagne, qui construit des solutions SaaS internationales, des plateformes gouvernementales et smart building, dont ses prochaines plateformes hotelieres hospitalityOS, HospitalityOps et HospitalityTV, en cours de preparation pour leur lancement."
  },
  de: {
    title: "SaaSolutions SL | KI-Software, Automatisierung und Enterprise SaaS aus Spanien",
    description:
      "SaaSolutions SL ist ein globales AI-first Software- und Automatisierungsunternehmen mit Sitz in Ceuta, Spanien, das internationale SaaS-Losungen, Regierungsplattformen und Smart Buildings baut — darunter die kommenden Hospitality-Plattformen hospitalityOS, HospitalityOps und HospitalityTV, die derzeit fur den Launch vorbereitet werden."
  }
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Regions", href: "/#regions" },
  { label: "Contact", href: "/contact" }
] as const;

export const services = [
  {
    slug: "ai-first-platforms",
    title: "AI-First Platforms",
    eyebrow: "LLM systems, agents and automation",
    description:
      "Custom AI platforms that combine private data, workflow automation, human review, analytics and secure cloud infrastructure for real business operations.",
    keywords: ["AI software company Spain", "AI automation Ceuta", "custom SaaS development"]
  },
  {
    slug: "enterprise-saas",
    title: "Enterprise SaaS",
    eyebrow: "SaaS products built for scale",
    description:
      "Multi-tenant SaaS products with secure authentication, billing-ready architecture, role-based workflows, admin portals, dashboards and international growth paths.",
    keywords: ["SaaSolutions Spain", "enterprise software UAE", "South America SaaS development"]
  },
  {
    slug: "hospitality-automation",
    title: "Hospitality Automation",
    eyebrow: "Guest journeys and operator systems",
    description:
      "AI concierge systems, smart NFC guest passes, housekeeping workflows, maintenance routing and hotel operator dashboards for premium hospitality groups.",
    keywords: ["hospitality automation Africa", "AI concierge systems", "smart building software Spain"]
  },
  {
    slug: "government-platforms",
    title: "Government Digital Platforms",
    eyebrow: "Public-sector grade delivery",
    description:
      "Secure digital services for agencies, municipalities and public programs, including intake portals, case management, document workflows and bilingual citizen access.",
    keywords: ["government digital platforms", "AI automation UAE", "enterprise AI Philippines"]
  },
  {
    slug: "smart-building-systems",
    title: "Smart Building Systems",
    eyebrow: "Connected building operations",
    description:
      "Building automation software that joins access, alerts, IoT events, maintenance tasks, energy visibility and tenant service workflows in one operational layer.",
    keywords: ["smart building software Spain", "SaaS development Mediterranean", "hospitality automation Africa"]
  }
] as const;

export const products = [
  {
    slug: "hospitalityos",
    name: "hospitalityOS",
    image: "/projects/placeholders/hospitalityos.svg",
    industry: "Hospitality websites and brand platforms",
    status: "Going online soon",
    description:
      "A multilingual digital hospitality website and brand platform for modern accommodation providers, property managers and hospitality businesses. Part of the SaaSolution SL hospitality technology roadmap, currently being prepared for launch."
  },
  {
    slug: "hospitalityops",
    name: "HospitalityOps",
    image: "/projects/placeholders/hospitalityops.svg",
    industry: "Hospitality operations and field teams",
    status: "Going online soon",
    description:
      "A mobile-first operations suite for housekeeping, maintenance, inspections, lost & found, inventory, task reassignment and field team coordination. Part of the upcoming SaaSolution SL hospitality ecosystem, going online soon."
  },
  {
    slug: "hospitalitytv",
    name: "HospitalityTV",
    image: "/projects/placeholders/hospitalitytv.svg",
    industry: "Smart TV guest experience",
    status: "Going online soon",
    description:
      "A smart Android TV guest experience platform for apartments, hotels, serviced stays and short-term rentals, with in-room communication, digital concierge features, local information and service access. Currently being prepared for launch."
  },
  {
    slug: "mithaq",
    name: "Mithaq",
    image: "/projects/mithaq.png",
    industry: "Legal technology and Islamic family services",
    status: "Concept and market validation",
    description:
      "A digital Islamic prenup and will workflow designed around guided intake, compliant documents, review steps and multilingual family access."
  },
  {
    slug: "viyra",
    name: "Viyra",
    image: "/projects/viyra.png",
    industry: "Real estate, luxury brokerage and client operations",
    status: "Brand and platform buildout",
    description:
      "A premium client operating layer for property teams that need inventory, buyer journeys, content operations and international deal coordination."
  },
  {
    slug: "delicious-fitness",
    name: "Delicious Fitness",
    image: "/projects/deliciousfitness.png",
    industry: "Health, food, fitness and community commerce",
    status: "Product placeholder",
    description:
      "A social food and meal-prep product concept for creators, fitness customers and operators who need recipes, subscriptions and habit loops."
  },
  {
    slug: "smart-nfc-guest-pass",
    name: "Smart NFC Guest Pass",
    image: "/projects/smart-nfc.png",
    industry: "Hospitality, buildings and visitor management",
    status: "Prototype product track",
    description:
      "A guest access system using NFC, mobile credentials and operator dashboards for hotels, resorts, serviced apartments and controlled buildings."
  }
] as const;

export const regions = [
  {
    slug: "ceuta",
    name: "Ceuta",
    accent: "Mediterranean deep blue",
    description:
      "Ceuta is SaaSolutions SL's headquarters and strategic bridge between Spain, North Africa and Mediterranean operators. The company uses Ceuta as a base for AI automation, enterprise SaaS delivery and cross-border platform coordination."
  },
  {
    slug: "spain",
    name: "Spain",
    accent: "European trust and Mediterranean execution",
    description:
      "In Spain, SaaSolutions supports companies that need AI automation, smart building software, custom SaaS development and government-grade digital platforms with a European legal and operational foundation."
  },
  {
    slug: "africa",
    name: "Africa",
    accent: "Bronze growth corridors",
    description:
      "For African markets, SaaSolutions builds practical platforms for hospitality automation, public services, trade operations and mobile-first business workflows that can adapt across infrastructure realities."
  },
  {
    slug: "uae",
    name: "UAE",
    accent: "Gold enterprise velocity",
    description:
      "SaaSolutions serves UAE and GCC clients that need enterprise software, AI automation, hospitality systems, high-trust government workflows and premium digital platforms designed for multilingual operations."
  },
  {
    slug: "dubai",
    name: "Dubai",
    accent: "Gold, speed and premium operations",
    description:
      "Dubai is a priority market for SaaSolutions because operators there expect speed, polish and reliability. SaaSolutions can support AI concierge systems, real estate platforms, smart access and enterprise SaaS launches."
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    accent: "South American emerald",
    description:
      "Paraguay connects SaaSolutions to South American SaaS development needs, including logistics, planning tools, business automation and international teams working between Spanish and English markets."
  },
  {
    slug: "south-america",
    name: "South America",
    accent: "Emerald regional scale",
    description:
      "Across South America, SaaSolutions focuses on bilingual SaaS platforms, AI workflow automation, government service portals and business systems that can scale across countries without becoming generic."
  },
  {
    slug: "mediterranean",
    name: "Mediterranean region",
    accent: "Deep blue continuity",
    description:
      "The Mediterranean region is central to SaaSolutions' identity: Spain, North Africa, logistics, hospitality, real estate and public-sector modernization all meet in one international software strategy."
  },
  {
    slug: "philippines",
    name: "Philippines",
    accent: "Tropical neon service systems",
    description:
      "In the Philippines, SaaSolutions supports software development, enterprise AI, customer operations and Southeast Asian service teams that need clear systems, automation and global delivery discipline."
  },
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    accent: "Neon operational scale",
    description:
      "For Southeast Asia, SaaSolutions designs AI-first platforms for multilingual support, hospitality, commerce, internal operations and enterprise workflows across fast-moving regional markets."
  }
] as const;

export const faq = [
  {
    question: "Who is SaaSolutions SL?",
    answer:
      "SaaSolutions SL is an AI-first software and automation company headquartered in Ceuta, Spain, building enterprise SaaS, government platforms, hospitality automation and smart building systems."
  },
  {
    question: "Where does SaaSolutions operate?",
    answer:
      "SaaSolutions is positioned for Spain, the Mediterranean region, Africa, South America, UAE/GCC, Southeast Asia and the Philippines, with operational presence connected to Paraguay, UAE, Africa and the Philippines."
  },
  {
    question: "What does SaaSolutions build?",
    answer:
      "The company builds custom SaaS products, AI automation systems, AI concierge workflows, government-grade platforms, smart building software, hospitality automation and internal enterprise tools."
  },
  {
    question: "How can clients work with SaaSolutions?",
    answer:
      "Clients can request an enterprise consultation, start with a discovery sprint, commission a platform build, partner on a regional deployment or work with SaaSolutions as a long-term automation partner."
  }
] as const;

export function absoluteUrl(path = "/") {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternates(path = "/"): Metadata["alternates"] {
  const normalizedPath = path === "/" ? "" : path;
  return {
    canonical: absoluteUrl(normalizedPath || "/"),
    languages: {
      en: absoluteUrl(`/en${normalizedPath}`),
      es: absoluteUrl(`/es${normalizedPath}`),
      ar: absoluteUrl(`/ar${normalizedPath}`),
      pt: absoluteUrl(`/pt${normalizedPath}`),
      fr: absoluteUrl(`/fr${normalizedPath}`),
      de: absoluteUrl(`/de${normalizedPath}`),
      "x-default": absoluteUrl("/")
    }
  };
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/projects/viyra.png"
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: languageAlternates(path),
    openGraph: {
      title,
      description,
      url,
      siteName: "SaaSolutions SL",
      images: [{ url: image, width: 1200, height: 630, alt: "SaaSolutions SL international AI software company" }],
      locale: "en",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "SaaSolutions SL",
    url: siteUrl,
    description:
      "AI-first software and automation company headquartered in Ceuta, Spain, serving the Mediterranean, Africa, South America, UAE/GCC, Southeast Asia and Europe.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ceuta",
      addressCountry: "ES"
    },
    areaServed: ["Mediterranean", "Africa", "South America", "UAE/GCC", "Southeast Asia", "Europe"],
    knowsAbout: [
      "AI automation",
      "enterprise SaaS",
      "hospitality automation",
      "smart building software",
      "government digital platforms",
      "AI concierge systems",
      "custom SaaS development",
      "hospitalityOS",
      "HospitalityOps",
      "HospitalityTV"
    ],
    brand: "SaaSolutions SL"
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SaaSolutions SL",
    url: siteUrl,
    inLanguage: seoLanguages,
    publisher: { "@type": "Organization", name: "SaaSolutions SL" },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}
