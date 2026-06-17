export const locales = ["es", "en", "nl", "de"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  nl: "Nederlands",
  de: "Deutsch"
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export const countryNames: Record<Locale, Record<string, string>> = {
  es: { Spain: "España", Paraguay: "Paraguay", Philippines: "Filipinas" },
  en: { Spain: "Spain", Paraguay: "Paraguay", Philippines: "Philippines" },
  nl: { Spain: "Spanje", Paraguay: "Paraguay", Philippines: "Filipijnen" },
  de: { Spain: "Spanien", Paraguay: "Paraguay", Philippines: "Philippinen" }
};

export const common = {
  es: {
    footer: "© 2026 SaaSolution SL. Una empresa de Paradox FZCO. Todos los derechos reservados.",
    emailUs: "Escríbenos",
    language: "Idioma",
    languageNote: "Idioma detectado automáticamente por ubicación, navegador o dominio."
  },
  en: {
    footer: "© 2026 SaaSolution SL. A Paradox FZCO company. All rights reserved.",
    emailUs: "Email us",
    language: "Language",
    languageNote: "Language is detected automatically from location, browser, or domain."
  },
  nl: {
    footer: "© 2026 SaaSolution SL. Een bedrijf van Paradox FZCO. Alle rechten voorbehouden.",
    emailUs: "Mail ons",
    language: "Taal",
    languageNote: "Taal wordt automatisch gekozen via locatie, browser of domein."
  },
  de: {
    footer: "© 2026 SaaSolution SL. Ein Unternehmen von Paradox FZCO. Alle Rechte vorbehalten.",
    emailUs: "E-Mail senden",
    language: "Sprache",
    languageNote: "Die Sprache wird automatisch über Standort, Browser oder Domain erkannt."
  }
} satisfies Record<Locale, Record<string, string>>;

export const homeContent = {
  es: {
    heroSubtitle: "Software que mueve resultados.",
    showcaseTitle: "Vitrina de proyectos de SaaSolution SL",
    ecosystem: "Ecosistema de productos en vivo",
    featuredSystem: "Sistema destacado",
    productLayer: "Capa operativa de producto",
    chips: ["IA de flujos", "Automatización", "Paneles"],
    projectTags: {
      hospitalityOS: "Web hotelera y plataforma de marca multilingüe",
      HospitalityOps: "Operaciones: limpieza, mantenimiento y equipos de campo",
      HospitalityTV: "Experiencia del huésped en Smart TV",
      Mithaq: "Prenupcial y testamento islámico digital",
      Viyra: "Automatización internacional de flujos",
      "Smart NFC Guest Pass": "Acceso digital de invitados",
      "Delicious Fitness": "Comida social y meal prep"
    }
  },
  en: {
    heroSubtitle: "AI software, automation and enterprise SaaS from Ceuta for international markets.",
    showcaseTitle: "SaaSolutions SL platform map",
    ecosystem: "International AI-first ecosystem",
    featuredSystem: "Featured operating layer",
    productLayer: "Enterprise SaaS, automation and smart systems",
    chips: ["Applied AI", "Digital government", "Smart buildings"],
    projectTags: {
      hospitalityOS: "Multilingual digital hospitality website and brand platform",
      HospitalityOps: "Operations: housekeeping, maintenance and field teams",
      HospitalityTV: "Smart TV guest experience",
      Mithaq: "Digital Islamic Prenup & Will",
      Viyra: "International workflow automation",
      "Smart NFC Guest Pass": "Digital Guest Access",
      "Delicious Fitness": "Social Food & Meal Prep"
    }
  },
  nl: {
    heroSubtitle: "Software die merkbaar verschil maakt.",
    showcaseTitle: "SaaSolution SL projectoverzicht",
    ecosystem: "Live productecosysteem",
    featuredSystem: "Uitgelicht systeem",
    productLayer: "Operationele productlaag",
    chips: ["Workflow-AI", "Automatisering", "Dashboards"],
    projectTags: {
      hospitalityOS: "Meertalige digitale hospitality-website en merkplatform",
      HospitalityOps: "Operations: housekeeping, onderhoud en veldteams",
      HospitalityTV: "Smart-TV gastervaring",
      Mithaq: "Digitaal islamitisch huwelijkscontract en testament",
      Viyra: "Internationale workflowautomatisering",
      "Smart NFC Guest Pass": "Digitale gasttoegang",
      "Delicious Fitness": "Social food en maaltijdvoorbereiding"
    }
  },
  de: {
    heroSubtitle: "Software, die Ergebnisse bewegt.",
    showcaseTitle: "SaaSolution SL Projektübersicht",
    ecosystem: "Live-Produktökosystem",
    featuredSystem: "Ausgewähltes System",
    productLayer: "Produktbetriebsebene",
    chips: ["Workflow-KI", "Automatisierung", "Dashboards"],
    projectTags: {
      hospitalityOS: "Mehrsprachige digitale Hospitality-Website und Markenplattform",
      HospitalityOps: "Operations: Housekeeping, Wartung und Außendienst",
      HospitalityTV: "Smart-TV-Gästeerlebnis",
      Mithaq: "Digitaler islamischer Ehevertrag und Testament",
      Viyra: "Internationale Workflow-Automatisierung",
      "Smart NFC Guest Pass": "Digitaler Gästezugang",
      "Delicious Fitness": "Social Food und Meal Prep"
    }
  }
} satisfies Record<Locale, {
  heroSubtitle: string;
  showcaseTitle: string;
  ecosystem: string;
  featuredSystem: string;
  productLayer: string;
  chips: string[];
  projectTags: Record<string, string>;
}>;

export const platformsContent = {
  es: {
    label: "- Próximas plataformas",
    title: "Próximas plataformas de SaaSolution SL",
    intro: "Un ecosistema de tecnología hotelera que se está preparando actualmente para su lanzamiento — parte de la hoja de ruta de tecnología hotelera de SaaSolution SL. Tres productos conectados, disponibles muy pronto.",
    status: "Disponible muy pronto",
    cta: "Ver detalles",
    cards: [
      { slug: "hospitalityos", name: "hospitalityOS", tagline: "Plataforma de hospitalidad digital", text: "Sitio web hotelero y plataforma de marca multilingüe para alojamientos modernos, gestores de propiedades y empresas del sector hospitalidad." },
      { slug: "hospitalityops", name: "HospitalityOps", tagline: "Suite de operaciones", text: "App operativa para limpieza, mantenimiento, inspecciones, objetos perdidos, inventario y coordinación de equipos de campo." },
      { slug: "hospitalitytv", name: "HospitalityTV", tagline: "Experiencia del huésped en Smart TV", text: "Experiencia del huésped en Smart TV para comunicación en la habitación, conserjería digital, información local y acceso a servicios." }
    ]
  },
  en: {
    label: "- Upcoming platforms",
    title: "Upcoming SaaSolution SL Platforms",
    intro: "A dedicated hospitality technology ecosystem currently being prepared for launch — part of the SaaSolution SL hospitality technology roadmap. Three connected products, going online soon.",
    status: "Going online soon",
    cta: "View details",
    cards: [
      { slug: "hospitalityos", name: "hospitalityOS", tagline: "Digital hospitality platform", text: "A multilingual digital hospitality website and brand platform for modern accommodation providers, property managers and hospitality businesses." },
      { slug: "hospitalityops", name: "HospitalityOps", tagline: "Operations suite", text: "A mobile-first operations app for housekeeping, maintenance, inspections, lost & found, inventory and field team coordination." },
      { slug: "hospitalitytv", name: "HospitalityTV", tagline: "Smart TV guest experience", text: "A smart Android TV guest experience for in-room communication, digital concierge features, local information and service access." }
    ]
  },
  nl: {
    label: "- Aankomende platforms",
    title: "Aankomende SaaSolution SL platforms",
    intro: "Een toegewijd hospitality-technologie-ecosysteem dat momenteel wordt voorbereid op de lancering — onderdeel van de hospitality-technologieroadmap van SaaSolution SL. Drie verbonden producten, binnenkort online.",
    status: "Binnenkort online",
    cta: "Bekijk details",
    cards: [
      { slug: "hospitalityos", name: "hospitalityOS", tagline: "Digitaal hospitality-platform", text: "Een meertalige digitale hospitality-website en merkplatform voor moderne accommodatieaanbieders, vastgoedbeheerders en hospitality-ondernemingen." },
      { slug: "hospitalityops", name: "HospitalityOps", tagline: "Operationele suite", text: "Een mobile-first operationele app voor housekeeping, onderhoud, inspecties, gevonden voorwerpen, inventaris en coördinatie van veldteams." },
      { slug: "hospitalitytv", name: "HospitalityTV", tagline: "Smart-TV gastervaring", text: "Een smart Android TV-gastervaring voor communicatie op de kamer, digitale conciërgefuncties, lokale informatie en toegang tot diensten." }
    ]
  },
  de: {
    label: "- Kommende Plattformen",
    title: "Kommende SaaSolution SL Plattformen",
    intro: "Ein dediziertes Hospitality-Technologie-Ökosystem, das derzeit für den Launch vorbereitet wird — Teil der Hospitality-Technologie-Roadmap von SaaSolution SL. Drei vernetzte Produkte, bald online.",
    status: "Bald online",
    cta: "Details ansehen",
    cards: [
      { slug: "hospitalityos", name: "hospitalityOS", tagline: "Digitale Hospitality-Plattform", text: "Eine mehrsprachige digitale Hospitality-Website und Markenplattform für moderne Beherbergungsbetriebe, Property Manager und Hospitality-Unternehmen." },
      { slug: "hospitalityops", name: "HospitalityOps", tagline: "Betriebs-Suite", text: "Eine mobile-first Betriebs-App für Housekeeping, Wartung, Inspektionen, Fundbüro, Inventar und die Koordination von Außendienstteams." },
      { slug: "hospitalitytv", name: "HospitalityTV", tagline: "Smart-TV-Gästeerlebnis", text: "Ein smartes Android-TV-Gästeerlebnis für Zimmerkommunikation, digitale Concierge-Funktionen, lokale Informationen und Servicezugang." }
    ]
  }
} satisfies Record<Locale, {
  label: string;
  title: string;
  intro: string;
  status: string;
  cta: string;
  cards: { slug: string; name: string; tagline: string; text: string }[];
}>;

export const storyContent = {
  es: {
    methodLabel: "- Método SaaSolutions",
    partnerCta: "Colabora con nosotros",
    supportRunning: "El soporte actual se gestiona desde",
    supportOnCall: "El soporte de guardia está en",
    readingLocalTime: "Leyendo hora local...",
    active: "Activo",
    onCall: "Guardia",
    presenceLabel: "- Presencia global",
    officesTitle: "Tres oficinas.",
    officesBody: "El soporte sigue a la oficina cuya jornada local está activa ahora.",
    followSun: "Follow-the-sun - soporte 24/7",
    coverageLabel: "- Cobertura de 24 horas visualizada",
    supportCountry: "País de soporte actual",
    localTime: "hora local",
    slides: [
      ["Sobre SaaSolutions", "Somos SaaSolutions: un estudio de ingenieros y diseñadores que lanza productos cinematográficos para empresas ambiciosas. Desde comercio hasta agentes IA y hardware conectado, construimos lo que tus clientes no dejan de comentar."],
      ["Plataformas AI-first", "Creamos software que combina automatización, arquitectura cloud moderna y flujos de trabajo impulsados por IA."],
      ["Cómo convertimos un brief\nen un lanzamiento destacado.", "El Método SaaSolutions"],
      ["Siete productos.\nUna obsesión por el oficio.", "Cada línea de código, cada pixel y cada interacción están diseñados para que tus clientes sientan algo. Esto es lo que estamos lanzando ahora, incluidas nuestras próximas plataformas hoteleras hospitalityOS, HospitalityOps y HospitalityTV."],
      ["Colabora con nosotros", "Estamos abiertos a alianzas, pilotos y despliegues internacionales con empresas, gobiernos, operadores y partners tecnológicos."]
    ],
    methodSteps: [
      ["Descubrir", "Auditamos, entrevistamos y ponemos a prueba el brief. Sales con claridad, no con una presentación más."],
      ["Diseñar", "Prototipos de alta fidelidad conectados a datos reales. Cada interacción se defiende con investigación."],
      ["Construir", "Demos semanales. Despliegues en producción desde la primera semana. Sin grandes sorpresas finales."],
      ["Escalar", "Seguimos como partner: rendimiento, crecimiento y expansión a nuevos mercados."]
    ]
  },
  en: {
    methodLabel: "- The SaaSolutions Method",
    partnerCta: "Partner with us",
    supportRunning: "Current support is running from",
    supportOnCall: "Current support is on-call from",
    readingLocalTime: "Reading local time...",
    active: "Active",
    onCall: "On-call",
    presenceLabel: "- Global Presence",
    officesTitle: "Ceuta headquarters. International operating rhythm.",
    officesBody: "SaaSolutions is headquartered in Ceuta, Spain, with operational presence connected to Paraguay, the Philippines and wider international markets.",
    followSun: "Follow-the-sun - 24/7 support",
    coverageLabel: "- 24-hour coverage, visualized",
    supportCountry: "Current support country",
    localTime: "local time",
    slides: [
      ["About SaaSolutions", "SaaSolutions SL is an AI-first software and automation company headquartered in Ceuta, Spain. We build premium SaaS platforms, AI workflows and operational systems for companies, governments and international operators."],
      ["AI-First Platforms", "We create software that combines applied AI, secure cloud architecture, automation and elegant product design for Spain, Africa, South America, UAE/GCC and Southeast Asia."],
      ["How we turn a brief\ninto a deployed platform.", "The SaaSolutions Method"],
      ["Seven products.\nOne obsession with craft.", "hospitalityOS, HospitalityOps, HospitalityTV, Mithaq, Viyra, Delicious Fitness and Smart NFC Guest Pass are product tracks shaped around hospitality, guest experience, operations, real estate, legal workflows and commerce. The hospitality platforms are going online soon."],
      ["Partner With Us", "We are open to partnerships, pilots and enterprise deployments with hospitality groups, real estate operators, public-sector teams, GCC partners, African markets, South American companies and Southeast Asian delivery teams."]
    ],
    methodSteps: [
      ["Discover", "We map the business model, users, compliance context, AI opportunities and regional requirements before a single sprint begins."],
      ["Design", "We prototype the workflows, dashboards, data model and conversion paths so the product feels premium and operationally real."],
      ["Build", "We ship production-grade SaaS, automation and integrations with clear demos, measurable progress and deployment discipline."],
      ["Scale", "We stay close after launch: performance, security, localization, analytics and expansion into new markets."]
    ]
  },
  nl: {
    methodLabel: "- De SaaSolutions methode",
    partnerCta: "Werk met ons samen",
    supportRunning: "Huidige support draait vanuit",
    supportOnCall: "Huidige support is stand-by vanuit",
    readingLocalTime: "Lokale tijd lezen...",
    active: "Actief",
    onCall: "Stand-by",
    presenceLabel: "- Wereldwijde aanwezigheid",
    officesTitle: "Drie kantoren.",
    officesBody: "Support volgt het kantoor waarvan de lokale werkdag nu actief is.",
    followSun: "Follow-the-sun - 24/7 support",
    coverageLabel: "- 24-uurs dekking in beeld",
    supportCountry: "Huidig supportland",
    localTime: "lokale tijd",
    slides: [
      ["Over SaaSolutions", "Wij zijn SaaSolutions: een studio van engineers en designers die filmische producten bouwen voor ambitieuze bedrijven. Van commerce tot AI-agenten en connected hardware: wij bouwen wat klanten blijven bespreken."],
      ["AI-first platforms", "We maken software die automatisering, moderne cloudarchitectuur en AI-gedreven workflows combineert."],
      ["Hoe we een briefing\nomzetten in doorbraak.", "De SaaSolutions methode"],
      ["Zeven producten.\nEen obsessie voor vakwerk.", "Elke regel code, elke pixel en elke interactie is gemaakt om klanten iets te laten voelen. Dit bouwen we nu, inclusief onze aankomende hospitality-platforms hospitalityOS, HospitalityOps en HospitalityTV."],
      ["Werk met ons samen", "We staan open voor partnerships, pilots en internationale uitrol met bedrijven, overheden, operators en technologiepartners."]
    ],
    methodSteps: [
      ["Ontdekken", "We auditen, interviewen en testen je briefing. Je krijgt helderheid, geen extra slidedeck."],
      ["Ontwerpen", "High-fidelity prototypes met echte data. Elke interactie wordt onderbouwd met onderzoek."],
      ["Bouwen", "Wekelijkse demo's. Productie-deploys vanaf week een. Geen grote onthulling aan het einde."],
      ["Schalen", "We blijven partner voor performance, groei en uitbreiding naar nieuwe markten."]
    ]
  },
  de: {
    methodLabel: "- Die SaaSolutions Methode",
    partnerCta: "Mit uns arbeiten",
    supportRunning: "Aktueller Support läuft aus",
    supportOnCall: "Aktueller Bereitschaftssupport aus",
    readingLocalTime: "Lokale Zeit wird gelesen...",
    active: "Aktiv",
    onCall: "Bereitschaft",
    presenceLabel: "- Globale Präsenz",
    officesTitle: "Drei Büros.",
    officesBody: "Der Support folgt dem Büro, dessen lokaler Arbeitstag gerade aktiv ist.",
    followSun: "Follow-the-sun - 24/7 Support",
    coverageLabel: "- 24-Stunden-Abdeckung visualisiert",
    supportCountry: "Aktuelles Support-Land",
    localTime: "Ortszeit",
    slides: [
      ["Über SaaSolutions", "Wir sind SaaSolutions: ein Studio aus Engineers und Designern, das cineastische Produkte für ambitionierte Unternehmen liefert. Von Commerce über KI-Agenten bis zu vernetzter Hardware bauen wir Dinge, über die Kunden sprechen."],
      ["AI-first Plattformen", "Wir entwickeln Software, die Automatisierung, moderne Cloud-Architektur und KI-gestützte Workflows verbindet."],
      ["Wie wir ein Briefing\nin einen Durchbruch verwandeln.", "Die SaaSolutions Methode"],
      ["Sieben Produkte.\nEine Obsession für Handwerk.", "Jede Codezeile, jeder Pixel und jede Interaktion ist darauf ausgelegt, bei Kunden Wirkung zu erzeugen. Das liefern wir gerade, darunter unsere kommenden Hospitality-Plattformen hospitalityOS, HospitalityOps und HospitalityTV."],
      ["Mit uns arbeiten", "Wir sind offen für Partnerschaften, Piloten und internationale Deployments mit Unternehmen, Regierungen, Betreibern und Technologiepartnern."]
    ],
    methodSteps: [
      ["Entdecken", "Wir auditieren, interviewen und prüfen dein Briefing. Am Ende steht Klarheit statt Foliensatz."],
      ["Designen", "High-Fidelity-Prototypen mit echten Daten. Jede Interaktion ist durch Research begründet."],
      ["Bauen", "Wöchentliche Demos. Produktiv-Deployments ab Woche eins. Keine große Überraschung am Ende."],
      ["Skalieren", "Wir bleiben Partner für Performance, Growth-Loops und Expansion in neue Märkte."]
    ]
  }
} satisfies Record<Locale, Record<string, string | string[][]>>;

export const footerContent = {
  es: {
    headline: "Software práctico para mercados internacionales.",
    body: "SaaSolutions construye y opera productos de software prácticos para empresas, gobiernos y mercados internacionales.",
    aria: "Enlaces de pie de página",
    groups: [
      ["Empresa", ["Sobre nosotros", "Misión y visión", "Carreras / Vacantes", "Partners", "Contacto"]],
      ["Productos", ["hospitalityOS", "HospitalityOps", "HospitalityTV", "Mithaq", "Smart NFC Guest Pass"]],
      ["Recursos", ["Blog", "Centro de ayuda", "Documentación", "API", "Soporte"]],
      ["Legal", ["Privacidad", "Términos y condiciones", "Cookies", "Acuerdo de procesamiento de datos", "Seguridad"]],
      ["Social", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  },
  en: {
    headline: "AI-first software for international markets.",
    body: "SaaSolutions builds enterprise SaaS, automation platforms, hospitality systems and government-grade digital products from Ceuta, Spain.",
    aria: "Footer links",
    groups: [
      ["Company", ["About", "Mission & Vision", "Careers / Vacancies", "Partners", "Contact"]],
      ["Products", ["hospitalityOS", "HospitalityOps", "HospitalityTV", "Mithaq", "Smart NFC Guest Pass"]],
      ["Resources", ["Blog", "Help Center", "Documentation", "API", "Support"]],
      ["Legal", ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Data Processing Agreement", "Security"]],
      ["Social", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  },
  nl: {
    headline: "Praktische software voor internationale markten.",
    body: "SaaSolutions bouwt en beheert praktische softwareproducten voor bedrijven, overheden en internationale markten.",
    aria: "Footerlinks",
    groups: [
      ["Bedrijf", ["Over ons", "Missie en visie", "Carrières / Vacatures", "Partners", "Contact"]],
      ["Producten", ["hospitalityOS", "HospitalityOps", "HospitalityTV", "Mithaq", "Smart NFC Guest Pass"]],
      ["Resources", ["Blog", "Helpcentrum", "Documentatie", "API", "Support"]],
      ["Juridisch", ["Privacybeleid", "Voorwaarden", "Cookiebeleid", "Verwerkersovereenkomst", "Beveiliging"]],
      ["Sociaal", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  },
  de: {
    headline: "Praktische Software für internationale Märkte.",
    body: "SaaSolutions entwickelt und betreibt praktische Softwareprodukte für Unternehmen, Regierungen und internationale Märkte.",
    aria: "Footer-Links",
    groups: [
      ["Unternehmen", ["Über uns", "Mission und Vision", "Karriere / Stellen", "Partner", "Kontakt"]],
      ["Produkte", ["hospitalityOS", "HospitalityOps", "HospitalityTV", "Mithaq", "Smart NFC Guest Pass"]],
      ["Ressourcen", ["Blog", "Hilfezentrum", "Dokumentation", "API", "Support"]],
      ["Rechtliches", ["Datenschutz", "AGB", "Cookie-Richtlinie", "Auftragsverarbeitung", "Sicherheit"]],
      ["Social", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  }
} satisfies Record<Locale, { headline: string; body: string; aria: string; groups: [string, string[]][] }>;

export const aboutContent = {
  es: {
    label: "- Sobre SaaSolution SL",
    navCta: "Hablar con nosotros",
    heroTitle: "SaaSolution existe para convertir ideas utiles en software que la gente usa de verdad.",
    heroBody: "SaaSolution SL es un estudio de producto que disena, construye y opera plataformas SaaS, automatizaciones con IA y sistemas digitales para mercados internacionales. El nombre une lo que hacemos y como pensamos: software como servicio, convertido en una solucion completa para empresas, gobiernos, operadores y fundadores que necesitan avanzar rapido sin perder calidad.",
    meaningTitle: "Que significa SaaSolution",
    meaningBody: "SaaSolution significa que una buena herramienta no termina en el codigo. Incluye estrategia, diseno, infraestructura, datos, automatizacion, soporte y mejora continua. Construimos productos que resuelven problemas reales, se pueden operar en produccion y pueden crecer a traves de paises, equipos y casos de uso.",
    originTitle: "Por que fue creada",
    originBody: "SaaSolution fue creada para cerrar la distancia entre una idea ambiciosa y un producto listo para el mercado. Muchas organizaciones tienen oportunidades claras, pero se frenan por equipos aislados, proveedores lentos, prototipos que nunca llegan a produccion o tecnologia que no se adapta a la operacion diaria. Nacimos para reunir estrategia, ingenieria y ejecucion en un solo equipo responsable.",
    beliefsTitle: "Lo que defendemos",
    beliefs: [
      ["Claridad antes que ruido", "Empezamos entendiendo el problema, el usuario y el resultado de negocio antes de escribir una linea de codigo."],
      ["Producto sobre presentacion", "Preferimos demos reales, sistemas vivos y mejoras medibles a documentos que no cambian la realidad del usuario."],
      ["Automatizacion con criterio", "Usamos IA y automatizacion donde reducen friccion, aceleran decisiones y hacen que los equipos trabajen mejor."],
      ["Alcance internacional", "Disenamos para multiples mercados, idiomas, zonas horarias y modelos operativos desde el inicio."]
    ],
    creationTitle: "La razon de fondo",
    creationBody: "SaaSolution fue creada porque el software moderno debe ser mas que una pagina bonita o una app aislada. Debe conectar procesos, simplificar decisiones, abrir nuevos ingresos y dar a los equipos una forma mas inteligente de trabajar. Nuestra mision es construir esa capa practica de tecnologia para organizaciones que quieren moverse con ambicion y precision.",
    stats: [["SaaS", "Productos preparados para operar y escalar"], ["AI", "Automatizaciones aplicadas a flujos reales"], ["Global", "Equipos y soporte pensados para mercados internacionales"]],
    ctaTitle: "Construimos con socios que tienen una mision clara.",
    ctaBody: "Si tienes una plataforma, operacion o idea que necesita convertirse en producto real, SaaSolution puede ayudarte a darle forma, lanzarla y hacerla crecer.",
    ctaButton: "Empezar un proyecto"
  },
  en: {
    label: "- About SaaSolution SL",
    navCta: "Talk to us",
    heroTitle: "SaaSolution exists to turn useful ideas into software people actually use.",
    heroBody: "SaaSolution SL is a product studio that designs, builds, and operates SaaS platforms, AI automations, and digital systems for international markets. The name combines what we build and how we think: software as a service, shaped into a complete solution for companies, governments, operators, and founders that need to move fast without losing quality.",
    meaningTitle: "What SaaSolution stands for",
    meaningBody: "SaaSolution means a strong tool does not stop at code. It includes strategy, design, infrastructure, data, automation, support, and continuous improvement. We build products that solve real problems, can be operated in production, and can grow across countries, teams, and use cases.",
    originTitle: "Why it was created",
    originBody: "SaaSolution was created to close the distance between an ambitious idea and a market-ready product. Many organizations see clear opportunities, but get slowed down by isolated teams, slow vendors, prototypes that never reach production, or technology that does not fit daily operations. We were formed to bring strategy, engineering, and execution into one accountable team.",
    beliefsTitle: "What we stand for",
    beliefs: [
      ["Clarity before noise", "We start by understanding the problem, the user, and the business outcome before writing a line of code."],
      ["Product over presentation", "We prefer real demos, live systems, and measurable improvement over documents that do not change the user's reality."],
      ["Automation with judgment", "We use AI and automation where they reduce friction, accelerate decisions, and help teams work better."],
      ["International reach", "We design for multiple markets, languages, time zones, and operating models from the beginning."]
    ],
    creationTitle: "The deeper reason",
    creationBody: "SaaSolution was created because modern software should be more than a beautiful page or an isolated app. It should connect processes, simplify decisions, open new revenue, and give teams a smarter way to work. Our mission is to build that practical technology layer for organizations that want to move with ambition and precision.",
    stats: [["SaaS", "Products prepared to operate and scale"], ["AI", "Automation applied to real workflows"], ["Global", "Teams and support shaped for international markets"]],
    ctaTitle: "We build with partners who have a clear mission.",
    ctaBody: "If you have a platform, operation, or idea that needs to become a real product, SaaSolution can help shape it, launch it, and grow it.",
    ctaButton: "Start a project"
  },
  nl: {
    label: "- Over SaaSolution SL",
    navCta: "Praat met ons",
    heroTitle: "SaaSolution bestaat om nuttige ideeen om te zetten in software die mensen echt gebruiken.",
    heroBody: "SaaSolution SL is een productstudio die SaaS-platformen, AI-automatisering en digitale systemen ontwerpt, bouwt en beheert voor internationale markten. De naam combineert wat we bouwen en hoe we denken: software as a service, uitgewerkt tot een complete oplossing voor bedrijven, overheden, operators en founders die snel willen bewegen zonder kwaliteit te verliezen.",
    meaningTitle: "Waar SaaSolution voor staat",
    meaningBody: "SaaSolution betekent dat een sterke tool niet stopt bij code. Het gaat ook om strategie, design, infrastructuur, data, automatisering, support en voortdurende verbetering. We bouwen producten die echte problemen oplossen, in productie beheerd kunnen worden en kunnen groeien over landen, teams en use cases heen.",
    originTitle: "Waarom het is opgericht",
    originBody: "SaaSolution is opgericht om de afstand tussen een ambitieuze idee en een marktklaar product te verkleinen. Veel organisaties zien duidelijke kansen, maar worden vertraagd door losse teams, trage leveranciers, prototypes die nooit productie bereiken of technologie die niet past bij de dagelijkse operatie. We brengen strategie, engineering en uitvoering samen in een verantwoordelijk team.",
    beliefsTitle: "Waar we voor staan",
    beliefs: [
      ["Duidelijkheid voor ruis", "We beginnen met het probleem, de gebruiker en het bedrijfsresultaat voordat we code schrijven."],
      ["Product boven presentatie", "We kiezen voor echte demos, levende systemen en meetbare verbetering boven documenten die niets veranderen."],
      ["Automatisering met oordeel", "We gebruiken AI en automatisering waar ze frictie verminderen, beslissingen versnellen en teams beter laten werken."],
      ["Internationaal bereik", "We ontwerpen vanaf het begin voor meerdere markten, talen, tijdzones en operationele modellen."]
    ],
    creationTitle: "De diepere reden",
    creationBody: "SaaSolution is opgericht omdat moderne software meer moet zijn dan een mooie pagina of een losse app. Het moet processen verbinden, beslissingen eenvoudiger maken, nieuwe omzet openen en teams slimmer laten werken. Onze missie is die praktische technologielaag te bouwen voor organisaties die ambitieus en precies willen bewegen.",
    stats: [["SaaS", "Producten klaar om te beheren en schalen"], ["AI", "Automatisering toegepast op echte workflows"], ["Global", "Teams en support voor internationale markten"]],
    ctaTitle: "We bouwen met partners die een duidelijke missie hebben.",
    ctaBody: "Heb je een platform, operatie of idee dat een echt product moet worden, dan kan SaaSolution helpen het vorm te geven, te lanceren en te laten groeien.",
    ctaButton: "Start een project"
  },
  de: {
    label: "- Uber SaaSolution SL",
    navCta: "Mit uns sprechen",
    heroTitle: "SaaSolution verwandelt nutzliche Ideen in Software, die Menschen wirklich verwenden.",
    heroBody: "SaaSolution SL ist ein Produktstudio, das SaaS-Plattformen, KI-Automatisierung und digitale Systeme fur internationale Markte entwickelt und betreibt. Der Name verbindet, was wir bauen, mit unserer Denkweise: Software as a Service, geformt zu einer kompletten Losung fur Unternehmen, Regierungen, Betreiber und Founder, die schnell vorankommen wollen, ohne Qualitat zu verlieren.",
    meaningTitle: "Wofur SaaSolution steht",
    meaningBody: "SaaSolution bedeutet, dass ein starkes Werkzeug nicht beim Code endet. Es umfasst Strategie, Design, Infrastruktur, Daten, Automatisierung, Support und kontinuierliche Verbesserung. Wir bauen Produkte, die echte Probleme losen, in Produktion betrieben werden konnen und uber Lander, Teams und Anwendungsfalle wachsen.",
    originTitle: "Warum es gegrundet wurde",
    originBody: "SaaSolution wurde gegrundet, um die Distanz zwischen einer ambitionierten Idee und einem marktreifen Produkt zu schliessen. Viele Organisationen sehen klare Chancen, werden aber durch isolierte Teams, langsame Anbieter, Prototypen ohne Produktionsreife oder Technologie gebremst, die nicht zur taglichen Arbeit passt. Wir verbinden Strategie, Engineering und Umsetzung in einem verantwortlichen Team.",
    beliefsTitle: "Wofur wir stehen",
    beliefs: [
      ["Klarheit vor Larm", "Wir verstehen zuerst Problem, Nutzer und Geschaftsziel, bevor wir eine Zeile Code schreiben."],
      ["Produkt vor Prasentation", "Wir bevorzugen echte Demos, live Systeme und messbare Verbesserung statt Dokumente ohne Wirkung."],
      ["Automatisierung mit Urteil", "Wir nutzen KI und Automatisierung dort, wo sie Reibung reduzieren, Entscheidungen beschleunigen und Teams besser machen."],
      ["Internationale Reichweite", "Wir planen von Beginn an fur mehrere Markte, Sprachen, Zeitzonen und Betriebsmodelle."]
    ],
    creationTitle: "Der tiefere Grund",
    creationBody: "SaaSolution wurde geschaffen, weil moderne Software mehr sein sollte als eine schone Seite oder eine isolierte App. Sie sollte Prozesse verbinden, Entscheidungen vereinfachen, neue Umsatze ermoglichen und Teams intelligenter arbeiten lassen. Unsere Mission ist es, diese praktische Technologieschicht fur Organisationen zu bauen, die ambitioniert und prazise handeln wollen.",
    stats: [["SaaS", "Produkte bereit fur Betrieb und Skalierung"], ["AI", "Automatisierung fur echte Workflows"], ["Global", "Teams und Support fur internationale Markte"]],
    ctaTitle: "Wir bauen mit Partnern, die eine klare Mission haben.",
    ctaBody: "Wenn du eine Plattform, Operation oder Idee hast, die zu einem echten Produkt werden soll, kann SaaSolution sie formen, launchen und wachsen lassen.",
    ctaButton: "Projekt starten"
  }
} satisfies Record<Locale, {
  label: string;
  navCta: string;
  heroTitle: string;
  heroBody: string;
  meaningTitle: string;
  meaningBody: string;
  originTitle: string;
  originBody: string;
  beliefsTitle: string;
  beliefs: string[][];
  creationTitle: string;
  creationBody: string;
  stats: string[][];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}>;

const missionVisionEnglish = {
  label: "- Mission & Vision",
  navCta: "Contact us",
  heroTitle: "One partner for the systems, risks, processes, and surprises that stand between you and progress.",
  heroBody: "SaaSolution was built for clients who do not want a stack of vendors, tickets, meetings, and half-owned responsibilities. With 23 years of hardware, software, security, and process knowledge behind our work, we look at the full operating reality: the product, the people, the devices, the data, the threats, the workflow, and the business pressure around it.",
  promiseTitle: "Our mission",
  promiseBody: "Our mission is to be the practical technology partner that helps organizations solve problems from the inside and the outside at the same time. We understand how systems behave in the real world, where hardware fails, software slows teams down, security creates risk, and process debt quietly becomes expensive. We bring those layers together so clients can make clearer decisions and ship stronger solutions.",
  visionTitle: "Our vision",
  visionBody: "Our vision is a world where companies do not need to choose between speed, security, reliability, and imagination. We want SaaSolution to be the partner clients call when the problem is complex, unclear, urgent, or stuck between departments. The answer might be a platform, an automation, a security redesign, a process change, a hardware integration, or something nobody has named yet.",
  founderTitle: "Built on 23 years of cross-domain experience",
  founderBody: "That experience matters because real business trouble rarely lives in one box. A software issue may be a process issue. A security concern may be a people issue. A hardware limitation may be a product strategy issue. We think inside the box when standards, compliance, and proven engineering matter. We think outside the box when the obvious answer is too slow, too narrow, or too fragile.",
  pillarsTitle: "How we become the only partner you need",
  pillars: [
    ["Hardware to cloud", "We can reason from physical devices and connected systems through APIs, dashboards, infrastructure, and support operations."],
    ["Security by design", "We treat security as part of architecture and process, not as a final checklist after the product is already exposed."],
    ["Process clarity", "We map how work really moves through teams, then remove friction with software, automation, and better operating habits."],
    ["Product execution", "We design, build, deploy, and improve practical systems instead of leaving clients with ideas that never become production tools."],
    ["Inside the box", "We respect constraints, budgets, compliance, legacy systems, and the daily reality your people already work inside."],
    ["Outside the box", "We challenge assumptions when a better path needs a new workflow, a new interface, or a different way to combine technology."]
  ],
  closingTitle: "The result: fewer handoffs, fewer blind spots, more ownership.",
  closingBody: "When SaaSolution works with a client, we do not only ask what needs to be built. We ask what needs to stop breaking, what needs to become simpler, what risk needs to disappear, and what future capability the organization should gain. That is why we aim to be the partner that can stay with you from first diagnosis to long-term operation.",
  ctaButton: "Start the conversation"
};

export const missionVisionContent = {
  es: missionVisionEnglish,
  en: missionVisionEnglish,
  nl: missionVisionEnglish,
  de: missionVisionEnglish
} satisfies Record<Locale, {
  label: string;
  navCta: string;
  heroTitle: string;
  heroBody: string;
  promiseTitle: string;
  promiseBody: string;
  visionTitle: string;
  visionBody: string;
  founderTitle: string;
  founderBody: string;
  pillarsTitle: string;
  pillars: string[][];
  closingTitle: string;
  closingBody: string;
  ctaButton: string;
}>;

const contactEnglish = {
  label: "- Contact",
  navCta: "Email info",
  heroTitle: "Tell us what is happening. We will help you turn it into a clear next move.",
  heroBody: "Use the form for product questions, technical problems, security concerns, partnerships, hiring, or anything that needs a steady technical partner. The form opens an email draft to info@saasolution.com with your request.",
  formTitle: "Send a request",
  name: "Full name",
  email: "Email",
  company: "Company",
  phone: "Phone",
  topic: "Topic",
  message: "Request",
  attachment: "Attachment",
  attachmentHint: "Select a file here, then attach it to the email draft before sending. Browser mailto forms cannot attach files automatically.",
  placeholders: ["Jane Doe", "jane@company.com", "Company name", "+34 600 000 000", "What do you need help with?"],
  topics: ["Product build", "Support request", "Security review", "Hardware integration", "Process improvement", "Partnership"],
  consent: "By sending, you agree that SaaSolution may contact you about this request.",
  send: "Open email draft",
  infoTitle: "Direct contact",
  phoneTitle: "Phone",
  emailTitle: "Email",
  officeTitle: "Offices",
  mapTitle: "Office map",
  mapBody: "Current map pins use temporary central office locations in Ceuta, Asuncion, and Cebu City.",
  peopleTitle: "People you may hear from",
  people: [
    ["Othman El Haddouti", "Founder / Systems Partner", "Hardware, software, security, and process strategy."],
    ["Maya Torres", "Client Operations", "First response, scheduling, and project intake."],
    ["Jonas Vermeer", "Technical Lead", "Architecture, integrations, and delivery planning."]
  ],
  offices: [
    ["Ceuta", "Spain", "+34 956 00 00 21", "Calle Real 24, 51001 Ceuta"],
    ["Asuncion", "Paraguay", "+595 21 000 421", "Avenida Espana 1880, Asuncion"],
    ["Cebu City", "Philippines", "+63 32 000 1842", "IT Park, Lahug, Cebu City"]
  ]
};

export const contactContent = {
  es: contactEnglish,
  en: contactEnglish,
  nl: contactEnglish,
  de: contactEnglish
} satisfies Record<Locale, {
  label: string;
  navCta: string;
  heroTitle: string;
  heroBody: string;
  formTitle: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  topic: string;
  message: string;
  attachment: string;
  attachmentHint: string;
  placeholders: string[];
  topics: string[];
  consent: string;
  send: string;
  infoTitle: string;
  phoneTitle: string;
  emailTitle: string;
  officeTitle: string;
  mapTitle: string;
  mapBody: string;
  peopleTitle: string;
  people: string[][];
  offices: string[][];
}>;

export const partnersContent = {
  es: {
    startProject: "- Empezar un proyecto",
    titleA: "Construyamos algo ",
    titleB: "digno de conversación.",
    body: "Cuéntanos el producto que tienes en mente. Te responderá un fundador, no un bot comercial, en un día hábil.",
    signal: "La señal - mensual",
    signalBody: "Un email útil al mes. Lanzamientos, experimentos y herramientas que no dejamos de usar. Sin relleno.",
    subscribe: "Suscribirse",
    emailPlaceholder: "tu@empresa.com",
    formTitle: "Formulario para empezar un proyecto",
    name: "Tu nombre",
    workEmail: "Email de trabajo",
    company: "Empresa (opcional)",
    projectType: "Tipo de proyecto",
    budget: "Presupuesto (opcional)",
    message: "Cuéntanos sobre ello",
    messagePlaceholder: "¿Qué estás construyendo? ¿Para quién? ¿Cuál es la fecha límite?",
    consent: "Al enviar, aceptas que te contactemos sobre tu consulta.",
    send: "Enviar mensaje",
    projectTypes: ["Plataforma web", "App móvil", "Agente IA", "Hardware + web", "Sistema de diseño", "Otro"],
    steps: [["Llamada de descubrimiento", "30 min, gratis, sin pitch"], ["Propuesta", "Alcance y precio en 5 días hábiles"], ["Kickoff", "Demos semanales desde la primera semana"]]
  },
  en: {
    startProject: "- Start a project",
    titleA: "Let's build something ",
    titleB: "worth talking about.",
    body: "Tell us about the product you have in mind. You'll hear back from a founder, not a sales bot, within one business day.",
    signal: "The signal - monthly",
    signalBody: "One sharp email a month. Product launches, experiments, and tools we can't stop using. No fluff.",
    subscribe: "Subscribe",
    emailPlaceholder: "you@company.com",
    formTitle: "Start a project form",
    name: "Your name",
    workEmail: "Work email",
    company: "Company (optional)",
    projectType: "Project type",
    budget: "Budget (optional)",
    message: "Tell us about it",
    messagePlaceholder: "What are you building? Who is it for? What's the deadline?",
    consent: "By submitting, you agree to be contacted about your inquiry.",
    send: "Send message",
    projectTypes: ["Web Platform", "Mobile App", "AI Agent", "Hardware + Web", "Design System", "Other"],
    steps: [["Discovery call", "30 min, free, no pitch"], ["Proposal", "Scoped and priced in 5 business days"], ["Kickoff", "Weekly demos from week one"]]
  },
  nl: {
    startProject: "- Start een project",
    titleA: "Laten we iets bouwen ",
    titleB: "waar mensen over praten.",
    body: "Vertel ons over het product dat je in gedachten hebt. Binnen een werkdag hoor je van een founder, niet van een salesbot.",
    signal: "Het signaal - maandelijks",
    signalBody: "Een scherpe mail per maand. Lanceringen, experimenten en tools die we blijven gebruiken. Geen opvulling.",
    subscribe: "Inschrijven",
    emailPlaceholder: "jij@bedrijf.com",
    formTitle: "Projectformulier",
    name: "Je naam",
    workEmail: "Werkmail",
    company: "Bedrijf (optioneel)",
    projectType: "Projecttype",
    budget: "Budget (optioneel)",
    message: "Vertel ons erover",
    messagePlaceholder: "Wat bouw je? Voor wie? Wat is de deadline?",
    consent: "Door te verzenden ga je akkoord dat we contact opnemen over je aanvraag.",
    send: "Bericht sturen",
    projectTypes: ["Webplatform", "Mobiele app", "AI-agent", "Hardware + web", "Designsysteem", "Anders"],
    steps: [["Kennismakingsgesprek", "30 min, gratis, geen pitch"], ["Voorstel", "Omvang en prijs binnen 5 werkdagen"], ["Start", "Wekelijkse demo's vanaf week een"]]
  },
  de: {
    startProject: "- Projekt starten",
    titleA: "Lass uns etwas bauen, ",
    titleB: "über das man spricht.",
    body: "Erzähl uns von deinem Produkt. Innerhalb eines Arbeitstags meldet sich ein Founder, kein Sales-Bot.",
    signal: "Das Signal - monatlich",
    signalBody: "Eine starke Mail pro Monat. Launches, Experimente und Tools, die wir ständig nutzen. Kein Füllmaterial.",
    subscribe: "Abonnieren",
    emailPlaceholder: "du@firma.com",
    formTitle: "Projektformular",
    name: "Dein Name",
    workEmail: "Arbeits-E-Mail",
    company: "Unternehmen (optional)",
    projectType: "Projekttyp",
    budget: "Budget (optional)",
    message: "Erzähl uns davon",
    messagePlaceholder: "Was baust du? Für wen? Was ist die Deadline?",
    consent: "Mit dem Absenden stimmst du zu, dass wir dich zu deiner Anfrage kontaktieren.",
    send: "Nachricht senden",
    projectTypes: ["Webplattform", "Mobile App", "KI-Agent", "Hardware + Web", "Designsystem", "Andere"],
    steps: [["Kennenlerngespraech", "30 Min., kostenlos, kein Pitch"], ["Angebot", "Umfang und Preis in 5 Arbeitstagen"], ["Start", "Woechentliche Demos ab Woche eins"]]
  }
} satisfies Record<Locale, Record<string, string | string[] | string[][]>>;

export const careersContent = {
  es: {
    openApplication: "Solicitud abierta",
    capabilitiesLabel: "- Capacidades",
    heroTitle: "Un estudio full-stack.",
    heroKicker: "Un equipo. Todas las disciplinas.",
    heroBody: "No pasamos el trabajo entre silos. Diseñadores, ingenieros y estrategas se sientan en la misma mesa para que tu producto salga sin compromisos.",
    vacanciesLabel: "- Vacantes",
    vacanciesTitle: "Contratamos en tres ubicaciones.",
    vacanciesBody: "Estamos formando tres pods de producto: Ceuta HQ, Asunción y Cebu City. Cada ubicación tendrá tres desarrolladores full-stack y un lead. Ceuta HQ también aloja el puesto de HR y operaciones.",
    detailsCta: "Ver más detalles",
    totals: ["Vacantes full-stack", "Engineering leads", "HR admin en Ceuta HQ"],
    capabilityItems: [
      ["Plataformas web y móviles", "React, Next.js y apps nativas de producción, diseñadas para escalar y encantar."],
      ["Agentes IA y automatización", "Flujos LLM, agentes de voz y copilotos internos que se lanzan de verdad."],
      ["Estrategia de producto", "De descubrimiento 0-a-1 a lanzamiento con sprints lean que comprimen trimestres en semanas."],
      ["Sistemas de diseño", "UI kits con motion y tokens para mantener tu marca consistente en cada superficie."],
      ["Cloud y DevOps", "Infraestructura segura y observable en AWS, GCP y edge."],
      ["Growth engineering", "Experimentos A/B, analytics y conversión integrados en cada release."]
    ],
    roles: {
      fullStack: ["Desarrollador Full-Stack", "Ingeniería", "Construye features, integraciones, paneles y sistemas internos en el portfolio de SaaSolutions."],
      lead: ["Engineering Lead", "Liderazgo", "Responsable del ritmo de entrega, calidad de código, dirección técnica y mentoría del pod."],
      hr: ["HR & Operations Admin", "Operaciones HQ", "Gestiona recruiting, onboarding, documentación HR y operaciones de personas desde Ceuta HQ."]
    },
    locations: {
      ceuta: ["Sede global", "Híbrido / horario Europa"],
      asuncion: ["Hub Americas", "Híbrido / horario LATAM"],
      cebu: ["Hub soporte APAC", "Híbrido / horario APAC"]
    }
  },
  en: {
    openApplication: "Open application",
    capabilitiesLabel: "- Capabilities",
    heroTitle: "A full-stack studio.",
    heroKicker: "One team. Every discipline.",
    heroBody: "We don't hand off between silos. Designers, engineers, and strategists sit at the same table, so your product ships without compromise.",
    vacanciesLabel: "- Vacancies",
    vacanciesTitle: "Hiring across three locations.",
    vacanciesBody: "We are building three focused product pods: Ceuta HQ, Asuncion, and Cebu City. Every location gets three full-stack developers and one lead. Ceuta HQ also hosts the HR and operations admin role.",
    detailsCta: "Check for more details",
    totals: ["Full-stack vacancies", "Engineering leads", "Ceuta HQ HR admin"],
    capabilityItems: [
      ["Web & Mobile Platforms", "Production-grade React, Next.js, and native apps engineered for scale and designed for delight."],
      ["AI Agents & Automation", "Custom LLM workflows, voice agents, and internal copilots that actually ship, not demos."],
      ["Product Strategy", "From 0-to-1 discovery to launch, we run lean sprints that compress quarters into weeks."],
      ["Design Systems", "Motion-rich, token-driven UI kits that keep your brand consistent across every surface."],
      ["Cloud & DevOps", "Secure, observable infrastructure across AWS, GCP, and the edge, built to sleep through 3AM."],
      ["Growth Engineering", "A/B experiments, analytics pipelines, and conversion optimization wired into every release."]
    ],
    roles: {
      fullStack: ["Full-Stack Developer", "Engineering", "Build product features, integrations, dashboards, and internal systems across the SaaSolutions product portfolio."],
      lead: ["Engineering Lead", "Leadership", "Own delivery rhythm, code quality, technical direction, and mentoring for the local engineering pod."],
      hr: ["HR & Operations Admin", "HQ Operations", "Handle recruiting coordination, onboarding, HR paperwork, team records, and cross-office people operations from Ceuta HQ."]
    },
    locations: {
      ceuta: ["Global Headquarters", "Hybrid / Europe hours"],
      asuncion: ["Americas Hub", "Hybrid / LATAM hours"],
      cebu: ["APAC Support Hub", "Hybrid / APAC hours"]
    }
  },
  nl: {
    openApplication: "Open sollicitatie",
    capabilitiesLabel: "- Mogelijkheden",
    heroTitle: "Een full-stack studio.",
    heroKicker: "Eén team. Elke discipline.",
    heroBody: "We dragen niet over tussen silo's. Designers, engineers en strategen zitten aan dezelfde tafel, zodat je product zonder compromis live gaat.",
    vacanciesLabel: "- Vacatures",
    vacanciesTitle: "We werven op drie locaties.",
    vacanciesBody: "We bouwen drie productpods: Ceuta HQ, Asuncion en Cebu City. Elke locatie krijgt drie full-stack developers en een lead. Ceuta HQ heeft ook de HR- en operationsrol.",
    detailsCta: "Meer details bekijken",
    totals: ["Full-stack vacatures", "Engineering leads", "Ceuta HQ HR admin"],
    capabilityItems: [
      ["Web- en mobiele platformen", "Productiewaardige React, Next.js en native apps, gebouwd voor schaal en gebruiksplezier."],
      ["AI-agenten en automatisering", "LLM-workflows, voice agents en interne copilots die echt live gaan."],
      ["Productstrategie", "Van 0-naar-1 discovery tot launch met lean sprints die kwartalen in weken persen."],
      ["Designsystemen", "UI kits met motion en tokens die je merk consistent houden."],
      ["Cloud en DevOps", "Veilige, observeerbare infrastructuur op AWS, GCP en edge."],
      ["Growth engineering", "A/B-experimenten, analytics en conversie-optimalisatie in elke release."]
    ],
    roles: {
      fullStack: ["Full-stack developer", "Engineering", "Bouw features, integraties, dashboards en interne systemen voor het SaaSolutions portfolio."],
      lead: ["Engineering lead", "Leiderschap", "Eigenaarschap over ritme, codekwaliteit, technische richting en mentoring van de lokale pod."],
      hr: ["HR- en operationsbeheerder", "HQ-operaties", "Beheer werving, onboarding, HR-documentatie en people operations vanuit Ceuta HQ."]
    },
    locations: {
      ceuta: ["Wereldwijde hoofdzetel", "Hybride / Europese uren"],
      asuncion: ["Americas Hub", "Hybride / LATAM-uren"],
      cebu: ["APAC Support Hub", "Hybride / APAC-uren"]
    }
  },
  de: {
    openApplication: "Initiativbewerbung",
    capabilitiesLabel: "- Fähigkeiten",
    heroTitle: "Ein Full-Stack-Studio.",
    heroKicker: "Ein Team. Jede Disziplin.",
    heroBody: "Wir übergeben nicht zwischen Silos. Designer, Engineers und Strategen sitzen am selben Tisch, damit dein Produkt ohne Kompromisse live geht.",
    vacanciesLabel: "- Stellen",
    vacanciesTitle: "Wir stellen an drei Standorten ein.",
    vacanciesBody: "Wir bauen drei fokussierte Produktpods: Ceuta HQ, Asuncion und Cebu City. Jeder Standort bekommt drei Full-Stack Developer und einen Lead. Ceuta HQ hostet zusätzlich HR und Operations.",
    detailsCta: "Mehr Details ansehen",
    totals: ["Full-Stack-Stellen", "Engineering Leads", "Ceuta HQ HR Admin"],
    capabilityItems: [
      ["Web- und Mobile-Plattformen", "Produktionsreife React-, Next.js- und native Apps, gebaut für Skalierung und starke UX."],
      ["KI-Agenten und Automatisierung", "LLM-Workflows, Voice Agents und interne Copilots, die wirklich live gehen."],
      ["Produktstrategie", "Von 0-zu-1 Discovery bis Launch mit Lean Sprints, die Quartale auf Wochen verkürzen."],
      ["Designsysteme", "Motion- und tokenbasierte UI Kits für konsistente Markenauftritte."],
      ["Cloud und DevOps", "Sichere, beobachtbare Infrastruktur auf AWS, GCP und Edge."],
      ["Growth Engineering", "A/B-Experimente, Analytics und Conversion-Optimierung in jedem Release."]
    ],
    roles: {
      fullStack: ["Full-Stack-Entwickler", "Engineering", "Baue Features, Integrationen, Dashboards und interne Systeme im SaaSolutions Portfolio."],
      lead: ["Engineering Lead", "Leitung", "Verantworte Lieferrhythmus, Codequalität, technische Richtung und Mentoring des lokalen Pods."],
      hr: ["HR- und Operations-Admin", "HQ-Operations", "Koordiniere Recruiting, Onboarding, HR-Unterlagen und People Operations aus Ceuta HQ."]
    },
    locations: {
      ceuta: ["Globale Zentrale", "Hybrid / Europa-Zeiten"],
      asuncion: ["Americas Hub", "Hybrid / LATAM-Zeiten"],
      cebu: ["APAC Support Hub", "Hybrid / APAC-Zeiten"]
    }
  }
} satisfies Record<Locale, {
  openApplication: string;
  capabilitiesLabel: string;
  heroTitle: string;
  heroKicker: string;
  heroBody: string;
  vacanciesLabel: string;
  vacanciesTitle: string;
  vacanciesBody: string;
  detailsCta: string;
  totals: string[];
  capabilityItems: string[][];
  roles: Record<string, string[]>;
  locations: Record<string, string[]>;
}>;

export const rolePageContent = {
  es: {
    back: "Volver a carreras",
    emailApplication: "Enviar solicitud",
    roleDetails: "- Detalles del puesto",
    sections: ["Qué harás", "Perfil ideal", "Beneficios"],
    workHours: "Horario",
    requirements: "Requisitos",
    compensation: "Compensación y beneficios",
    applyNow: "- Solicita ahora",
    sendProfile: "Envía tu perfil.",
    applyBody: "Añade tus datos y sube tu CV. El formulario estático abre un borrador de email para SaaSolution SL; adjunta el CV seleccionado antes de enviarlo.",
    fullName: "Nombre completo",
    email: "Email",
    portfolio: "LinkedIn o portfolio",
    currentLocation: "Ubicación actual",
    resumeUpload: "Subir CV",
    resumeHint: "PDF, DOC o DOCX preferido.",
    why: "¿Por qué este puesto?",
    whyPlaceholder: "Cuéntanos qué has construido, cuáles son tus fortalezas y por qué encaja este puesto.",
    sendApplication: "Enviar solicitud",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "Ciudad, país"]
  },
  en: {
    back: "Back to careers",
    emailApplication: "Email application",
    roleDetails: "- Role details",
    sections: ["What you will do", "Who fits well", "Benefits"],
    workHours: "Work hours",
    requirements: "Requirements",
    compensation: "Compensation & benefits",
    applyNow: "- Apply now",
    sendProfile: "Send your profile.",
    applyBody: "Add your details and upload your resume. The current static form opens an email draft to SaaSolution SL; attach the selected resume file before sending.",
    fullName: "Full name",
    email: "Email",
    portfolio: "LinkedIn or portfolio",
    currentLocation: "Current location",
    resumeUpload: "Resume upload",
    resumeHint: "PDF, DOC, or DOCX preferred.",
    why: "Why this role?",
    whyPlaceholder: "Tell us what you have built, what you are strong at, and why this role fits.",
    sendApplication: "Send application",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "City, country"]
  },
  nl: {
    back: "Terug naar carrières",
    emailApplication: "Sollicitatie mailen",
    roleDetails: "- Functiedetails",
    sections: ["Wat je gaat doen", "Wie goed past", "Voordelen"],
    workHours: "Werkuren",
    requirements: "Vereisten",
    compensation: "Vergoeding en voordelen",
    applyNow: "- Solliciteer nu",
    sendProfile: "Stuur je profiel.",
    applyBody: "Vul je gegevens in en upload je cv. Dit statische formulier opent een e-mailconcept voor SaaSolution SL; voeg het gekozen cv-bestand toe voordat je verzendt.",
    fullName: "Volledige naam",
    email: "E-mail",
    portfolio: "LinkedIn of portfolio",
    currentLocation: "Huidige locatie",
    resumeUpload: "Cv uploaden",
    resumeHint: "PDF, DOC of DOCX heeft de voorkeur.",
    why: "Waarom deze rol?",
    whyPlaceholder: "Vertel wat je hebt gebouwd, waar je sterk in bent en waarom deze rol past.",
    sendApplication: "Sollicitatie versturen",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "Stad, land"]
  },
  de: {
    back: "Zurück zu Karriere",
    emailApplication: "Bewerbung mailen",
    roleDetails: "- Rollendetails",
    sections: ["Was du tun wirst", "Wer gut passt", "Benefits"],
    workHours: "Arbeitszeiten",
    requirements: "Anforderungen",
    compensation: "Vergütung und Benefits",
    applyNow: "- Jetzt bewerben",
    sendProfile: "Sende dein Profil.",
    applyBody: "Füge deine Daten hinzu und lade deinen Lebenslauf hoch. Das statische Formular öffnet einen E-Mail-Entwurf an SaaSolution SL; hänge die ausgewählte Datei vor dem Senden an.",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    portfolio: "LinkedIn oder Portfolio",
    currentLocation: "Aktueller Standort",
    resumeUpload: "Lebenslauf hochladen",
    resumeHint: "PDF, DOC oder DOCX bevorzugt.",
    why: "Warum diese Rolle?",
    whyPlaceholder: "Erzähl uns, was du gebaut hast, worin du stark bist und warum diese Rolle passt.",
    sendApplication: "Bewerbung senden",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "Stadt, Land"]
  }
} satisfies Record<Locale, Record<string, string | string[]>>;

export const shareContent = {
  es: {
    title: "Compartir esta vacante",
    body: "Envía este puesto a un candidato, partner o alguien de tu red.",
    share: "Compartir",
    text: "Este puesto de SaaSolution SL podría encajar bien:"
  },
  en: {
    title: "Share this vacancy",
    body: "Send this role to a candidate, partner, or someone in your network.",
    share: "Share",
    text: "This SaaSolution SL role could be a strong fit:"
  },
  nl: {
    title: "Deel deze vacature",
    body: "Stuur deze rol naar een kandidaat, partner of iemand in je netwerk.",
    share: "Delen",
    text: "Deze rol bij SaaSolution SL kan goed passen:"
  },
  de: {
    title: "Diese Stelle teilen",
    body: "Sende diese Rolle an Kandidaten, Partner oder jemanden aus deinem Netzwerk.",
    share: "Teilen",
    text: "Diese Rolle bei SaaSolution SL könnte gut passen:"
  }
} satisfies Record<Locale, Record<string, string>>;
