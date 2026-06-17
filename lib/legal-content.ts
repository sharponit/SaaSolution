import type { Locale } from "@/lib/i18n";

export type LegalSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  note?: string;
};

export type LegalDocument = {
  badge: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const legalChrome = {
  en: {
    questions: "Questions",
    lastUpdated: "Last updated",
    updatedDate: "May 22, 2026",
    scopeLabel: "Scope",
    scope: "These pages apply to SaaSolution SL websites, IT services, software delivery, support, consulting, managed operations, and other services agreed with SaaSolution SL or its approved partners.",
    document: "Document",
    sideTitle: "Plain terms for practical IT work.",
    sideBody: "Written for general IT services. Specific signed agreements, statements of work, data processing terms, or partner contracts may add to or override these public terms."
  },
  nl: {
    questions: "Vragen",
    lastUpdated: "Laatst bijgewerkt",
    updatedDate: "22 mei 2026",
    scopeLabel: "Reikwijdte",
    scope: "Deze pagina's gelden voor SaaSolution SL websites, IT-diensten, softwareontwikkeling, support, consulting, managed operations en andere diensten die zijn afgesproken met SaaSolution SL of goedgekeurde partners.",
    document: "Document",
    sideTitle: "Heldere voorwaarden voor praktisch IT-werk.",
    sideBody: "Geschreven voor algemene IT-dienstverlening. Specifieke getekende afspraken, statements of work, verwerkersafspraken of partnercontracten kunnen deze publieke voorwaarden aanvullen of vervangen."
  },
  de: {
    questions: "Fragen",
    lastUpdated: "Zuletzt aktualisiert",
    updatedDate: "22. Mai 2026",
    scopeLabel: "Geltungsbereich",
    scope: "Diese Seiten gelten fuer SaaSolution SL Websites, IT-Dienste, Softwareentwicklung, Support, Beratung, Managed Operations und andere Leistungen, die mit SaaSolution SL oder genehmigten Partnern vereinbart wurden.",
    document: "Dokument",
    sideTitle: "Klare Bedingungen fuer praktische IT-Arbeit.",
    sideBody: "Geschrieben fuer allgemeine IT-Dienstleistungen. Spezifische unterschriebene Vereinbarungen, Statements of Work, Datenverarbeitungsbedingungen oder Partnervertraege koennen diese oeffentlichen Bedingungen ergaenzen oder ersetzen."
  },
  es: {
    questions: "Preguntas",
    lastUpdated: "Ultima actualizacion",
    updatedDate: "22 de mayo de 2026",
    scopeLabel: "Alcance",
    scope: "Estas paginas se aplican a los sitios web de SaaSolution SL, servicios IT, desarrollo de software, soporte, consultoria, operaciones gestionadas y otros servicios acordados con SaaSolution SL o sus partners aprobados.",
    document: "Documento",
    sideTitle: "Terminos claros para trabajo IT practico.",
    sideBody: "Escrito para servicios IT generales. Acuerdos firmados, statements of work, acuerdos de tratamiento de datos o contratos con partners pueden complementar o sustituir estos terminos publicos."
  }
} satisfies Record<Locale, Record<string, string>>;

export const legalDocuments = {
  terms: {
    en: {
      badge: "- Terms & Conditions",
      title: "Terms & Conditions",
      intro: "These terms define how SaaSolution SL provides general IT services, where our responsibilities start and end, and how service scope, hosting, third parties, payment, IP, and liability are handled.",
      sections: [
        {
          title: "Who these terms apply to",
          body: [
            "These Terms & Conditions apply when you access SaaSolution SL websites or purchase services from SaaSolution SL. Services may include software design and development, SaaS platforms, integrations, automation, AI workflows, support, security work, process improvement, consulting, managed operations, and related IT services.",
            "A signed proposal, statement of work, order form, master services agreement, data processing agreement, or partner agreement may contain additional terms. If there is a conflict, the signed agreement takes priority for the services covered by that agreement."
          ]
        },
        {
          title: "Service scope",
          body: [
            "SaaSolution is responsible for the services that are expressly agreed with us and paid for by the client. We are not automatically responsible for systems, hosting, infrastructure, software, domains, third-party tools, accounts, code, data, security settings, or operational processes that are outside the agreed scope.",
            "If hosting, cloud infrastructure, email, domains, monitoring, backups, third-party software, or support are not provided by SaaSolution or one of our approved partners, outages or failures in those services remain outside our responsibility unless a signed agreement says otherwise."
          ],
          note: "Example: if your website is hosted with another provider and SaaSolution is not contracted to manage that hosting, SaaSolution is not responsible for downtime caused by that provider."
        },
        {
          title: "Client responsibilities",
          bullets: [
            "Provide accurate information, access, approvals, feedback, and materials needed for the work.",
            "Keep ownership of business decisions, legal duties, credentials, accounts, and third-party subscriptions unless we agreed to manage them.",
            "Review deliverables and changes within the agreed review period.",
            "Use delivered systems lawfully and in line with documentation, licenses, security guidance, and acceptable use rules."
          ]
        },
        {
          title: "Delivery, availability, and third parties",
          body: [
            "Timelines depend on scope clarity, client availability, third-party dependencies, technical constraints, and timely decisions. Scope changes may change timing and pricing.",
            "Availability commitments only apply when stated in a signed agreement. SaaSolution is not liable for downtime, data loss, incidents, delays, or interruptions caused by providers that are not managed by SaaSolution or our approved partners."
          ]
        },
        {
          title: "AI, automation, and outputs",
          body: [
            "AI and automation outputs should be reviewed before they are used for important decisions. SaaSolution designs workflows to reduce risk, but the client remains responsible for approving business-critical use unless otherwise agreed."
          ]
        },
        {
          title: "Fees, IP, and liability",
          body: [
            "Fees, payment timing, taxes, expenses, and billing terms are set out in the applicable proposal, invoice, or agreement. Work outside scope may be quoted separately.",
            "Unless a signed agreement says otherwise, the client receives rights to final paid deliverables created specifically for that client after full payment. SaaSolution retains pre-existing tools, methods, reusable components, and know-how.",
            "To the maximum extent permitted by law, SaaSolution is not liable for indirect loss, lost profit, lost revenue, reputational harm, or consequential damages. Total liability is limited to the fees paid for the affected services as defined in the applicable agreement."
          ]
        }
      ]
    },
    nl: {
      badge: "- Algemene voorwaarden",
      title: "Algemene voorwaarden",
      intro: "Deze voorwaarden leggen uit hoe SaaSolution SL algemene IT-diensten levert, waar onze verantwoordelijkheid begint en eindigt, en hoe scope, hosting, derden, betaling, IP en aansprakelijkheid worden behandeld.",
      sections: [
        {
          title: "Voor wie deze voorwaarden gelden",
          body: [
            "Deze voorwaarden gelden wanneer je websites van SaaSolution SL gebruikt of diensten afneemt van SaaSolution SL. Diensten kunnen bestaan uit softwareontwikkeling, SaaS-platformen, integraties, automatisering, AI-workflows, support, beveiliging, procesverbetering, consulting en managed operations.",
            "Een getekende offerte, statement of work, orderformulier, master services agreement, verwerkersovereenkomst of partnerafspraak kan aanvullende voorwaarden bevatten. Bij conflict gaat de getekende afspraak voor voor de diensten waarop die afspraak ziet."
          ]
        },
        {
          title: "Scope van de dienst",
          body: [
            "SaaSolution is verantwoordelijk voor diensten die uitdrukkelijk met ons zijn afgesproken en door de klant worden betaald. Wij zijn niet automatisch verantwoordelijk voor systemen, hosting, infrastructuur, software, domeinen, tools van derden, accounts, code, data, beveiligingsinstellingen of processen buiten de afgesproken scope.",
            "Als hosting, cloud, e-mail, domeinen, monitoring, backups, software van derden of support niet door SaaSolution of een goedgekeurde partner worden geleverd, vallen storingen daarin buiten onze verantwoordelijkheid tenzij een getekende afspraak anders bepaalt."
          ],
          note: "Voorbeeld: als je website bij een andere provider staat en SaaSolution die hosting niet beheert, zijn wij niet verantwoordelijk voor downtime veroorzaakt door die provider."
        },
        {
          title: "Verantwoordelijkheden van de klant",
          bullets: [
            "Juiste informatie, toegang, goedkeuringen, feedback en materialen aanleveren.",
            "Eigen zakelijke besluiten, wettelijke plichten, credentials, accounts en externe abonnementen beheren tenzij wij dat expliciet doen.",
            "Deliverables en wijzigingen binnen de afgesproken reviewperiode beoordelen.",
            "Opgeleverde systemen rechtmatig gebruiken volgens documentatie, licenties, beveiligingsrichtlijnen en acceptabel gebruik."
          ]
        },
        {
          title: "Levering, beschikbaarheid en derden",
          body: [
            "Planning hangt af van duidelijke scope, beschikbaarheid van de klant, afhankelijkheden van derden, technische beperkingen en tijdige besluiten. Scopewijzigingen kunnen planning en prijs veranderen.",
            "Beschikbaarheidsafspraken gelden alleen als ze in een getekende afspraak staan. SaaSolution is niet aansprakelijk voor downtime, dataverlies, incidenten, vertragingen of onderbrekingen door providers die niet door SaaSolution of goedgekeurde partners worden beheerd."
          ]
        },
        {
          title: "AI, automatisering en output",
          body: [
            "Output van AI en automatisering moet worden beoordeeld voordat deze wordt gebruikt voor belangrijke beslissingen. SaaSolution beperkt risico's in workflows, maar de klant blijft verantwoordelijk voor goedkeuring van bedrijfskritisch gebruik tenzij anders afgesproken."
          ]
        },
        {
          title: "Kosten, IP en aansprakelijkheid",
          body: [
            "Kosten, betalingstermijnen, belastingen, uitgaven en facturatie staan in de offerte, factuur of overeenkomst. Werk buiten scope kan apart worden geoffreerd.",
            "Tenzij anders afgesproken ontvangt de klant na volledige betaling rechten op specifieke betaalde einddeliverables. SaaSolution behoudt bestaande tools, methoden, herbruikbare componenten en knowhow.",
            "Voor zover wettelijk toegestaan is SaaSolution niet aansprakelijk voor indirecte schade, winstderving, omzetverlies, reputatieschade of gevolgschade. Totale aansprakelijkheid is beperkt tot de betaalde vergoedingen voor de getroffen diensten zoals bepaald in de toepasselijke overeenkomst."
          ]
        }
      ]
    },
    de: {
      badge: "- Allgemeine Geschaeftsbedingungen",
      title: "Allgemeine Geschaeftsbedingungen",
      intro: "Diese Bedingungen erklaeren, wie SaaSolution SL allgemeine IT-Dienstleistungen erbringt, wo unsere Verantwortung beginnt und endet, und wie Scope, Hosting, Dritte, Zahlung, IP und Haftung behandelt werden.",
      sections: [
        { title: "Fuer wen diese Bedingungen gelten", body: ["Diese Bedingungen gelten, wenn Sie SaaSolution SL Websites nutzen oder Leistungen von SaaSolution SL beziehen. Leistungen koennen Softwareentwicklung, SaaS-Plattformen, Integrationen, Automatisierung, KI-Workflows, Support, Sicherheit, Prozessverbesserung, Beratung und Managed Operations umfassen.", "Unterschriebene Angebote, Statements of Work, Bestellformulare, Master Services Agreements, Datenverarbeitungsvertraege oder Partnervereinbarungen koennen zusaetzliche Bedingungen enthalten. Bei Konflikten geht die unterschriebene Vereinbarung fuer die betroffenen Leistungen vor."] },
        { title: "Leistungsumfang", body: ["SaaSolution ist fuer Leistungen verantwortlich, die ausdruecklich mit uns vereinbart und bezahlt wurden. Wir sind nicht automatisch verantwortlich fuer Systeme, Hosting, Infrastruktur, Software, Domains, Drittanbieter-Tools, Accounts, Code, Daten, Sicherheitseinstellungen oder Prozesse ausserhalb des vereinbarten Umfangs.", "Wenn Hosting, Cloud, E-Mail, Domains, Monitoring, Backups, Drittsoftware oder Support nicht von SaaSolution oder genehmigten Partnern bereitgestellt werden, liegen Ausfaelle dieser Dienste ausserhalb unserer Verantwortung, sofern keine unterschriebene Vereinbarung etwas anderes sagt."], note: "Beispiel: Wird Ihre Website bei einem anderen Provider gehostet und SaaSolution verwaltet dieses Hosting nicht, sind wir nicht fuer Downtime durch diesen Provider verantwortlich." },
        { title: "Pflichten des Kunden", bullets: ["Korrekte Informationen, Zugriff, Freigaben, Feedback und Materialien bereitstellen.", "Eigene Geschaeftsentscheidungen, rechtliche Pflichten, Zugangsdaten, Accounts und Drittanbieter-Abos verantworten, sofern wir sie nicht ausdruecklich verwalten.", "Deliverables und Aenderungen innerhalb der vereinbarten Prueffrist pruefen.", "Gelieferte Systeme rechtmaessig und gemaess Dokumentation, Lizenzen, Sicherheitshinweisen und Nutzungsregeln verwenden."] },
        { title: "Lieferung, Verfuegbarkeit und Dritte", body: ["Zeitplaene haengen von klarem Scope, Verfuegbarkeit des Kunden, Drittanbieter-Abhaengigkeiten, technischen Grenzen und rechtzeitigen Entscheidungen ab. Scope-Aenderungen koennen Zeitplan und Preis aendern.", "Verfuegbarkeitszusagen gelten nur, wenn sie schriftlich vereinbart sind. SaaSolution haftet nicht fuer Downtime, Datenverlust, Vorfaelle, Verzoegerungen oder Unterbrechungen durch Provider, die nicht von SaaSolution oder genehmigten Partnern verwaltet werden."] },
        { title: "KI, Automatisierung und Ergebnisse", body: ["Ergebnisse von KI und Automatisierung sollten vor wichtigen Entscheidungen geprueft werden. SaaSolution reduziert Risiken in Workflows, aber der Kunde bleibt fuer Freigaben von geschaeftskritischer Nutzung verantwortlich, sofern nichts anderes vereinbart ist."] },
        { title: "Gebuehren, IP und Haftung", body: ["Gebuehren, Zahlungsfristen, Steuern, Auslagen und Abrechnung stehen im Angebot, in der Rechnung oder Vereinbarung. Arbeit ausserhalb des Umfangs kann separat angeboten werden.", "Sofern nicht anders vereinbart, erhaelt der Kunde nach vollstaendiger Zahlung Rechte an spezifisch bezahlten Enddeliverables. SaaSolution behaelt bestehende Tools, Methoden, wiederverwendbare Komponenten und Know-how.", "Soweit gesetzlich erlaubt, haftet SaaSolution nicht fuer indirekte Schaeden, entgangenen Gewinn, Umsatzverlust, Reputationsschaeden oder Folgeschaeden. Die Gesamthaftung ist auf die gezahlten Gebuehren fuer die betroffenen Leistungen begrenzt, wie in der anwendbaren Vereinbarung definiert."] }
      ]
    },
    es: {
      badge: "- Terminos y condiciones",
      title: "Terminos y condiciones",
      intro: "Estos terminos explican como SaaSolution SL presta servicios IT generales, donde empiezan y terminan nuestras responsabilidades, y como se tratan alcance, hosting, terceros, pago, IP y responsabilidad.",
      sections: [
        { title: "A quien se aplican", body: ["Estos terminos se aplican cuando usas sitios web de SaaSolution SL o contratas servicios de SaaSolution SL. Los servicios pueden incluir desarrollo de software, plataformas SaaS, integraciones, automatizacion, flujos AI, soporte, seguridad, mejora de procesos, consultoria y operaciones gestionadas.", "Una propuesta firmada, statement of work, pedido, master services agreement, acuerdo de tratamiento de datos o contrato con partner puede incluir terminos adicionales. En caso de conflicto, el acuerdo firmado prevalece para los servicios cubiertos."] },
        { title: "Alcance del servicio", body: ["SaaSolution es responsable de los servicios expresamente acordados y pagados por el cliente. No somos automaticamente responsables de sistemas, hosting, infraestructura, software, dominios, herramientas de terceros, cuentas, codigo, datos, configuraciones de seguridad o procesos fuera del alcance acordado.", "Si hosting, cloud, email, dominios, monitorizacion, backups, software de terceros o soporte no son prestados por SaaSolution o partners aprobados, las caidas o fallos de esos servicios quedan fuera de nuestra responsabilidad salvo acuerdo firmado en contrario."], note: "Ejemplo: si tu web esta alojada con otro proveedor y SaaSolution no gestiona ese hosting, no somos responsables por downtime causado por ese proveedor." },
        { title: "Responsabilidades del cliente", bullets: ["Proporcionar informacion correcta, accesos, aprobaciones, feedback y materiales necesarios.", "Mantener responsabilidad sobre decisiones de negocio, obligaciones legales, credenciales, cuentas y suscripciones de terceros salvo que acordemos gestionarlas.", "Revisar entregables y cambios dentro del periodo de revision acordado.", "Usar los sistemas entregados legalmente y segun documentacion, licencias, guias de seguridad y reglas de uso aceptable."] },
        { title: "Entrega, disponibilidad y terceros", body: ["Los plazos dependen de claridad de alcance, disponibilidad del cliente, dependencias de terceros, limitaciones tecnicas y decisiones a tiempo. Cambios de alcance pueden modificar plazos y precio.", "Los compromisos de disponibilidad solo aplican si estan en un acuerdo firmado. SaaSolution no responde por downtime, perdida de datos, incidentes, retrasos o interrupciones causadas por proveedores no gestionados por SaaSolution o partners aprobados."] },
        { title: "AI, automatizacion y resultados", body: ["Los resultados de AI y automatizacion deben revisarse antes de usarse para decisiones importantes. SaaSolution disena flujos para reducir riesgos, pero el cliente sigue siendo responsable de aprobar usos criticos salvo acuerdo distinto."] },
        { title: "Tarifas, IP y responsabilidad", body: ["Tarifas, pagos, impuestos, gastos y facturacion se definen en la propuesta, factura o acuerdo. Trabajo fuera de alcance puede presupuestarse aparte.", "Salvo acuerdo distinto, tras pago completo el cliente recibe derechos sobre entregables finales especificos. SaaSolution conserva herramientas, metodos, componentes reutilizables y know-how preexistentes.", "Hasta donde permita la ley, SaaSolution no responde por danos indirectos, lucro cesante, perdida de ingresos, dano reputacional o danos consecuenciales. La responsabilidad total se limita a las tarifas pagadas por los servicios afectados segun el acuerdo aplicable."] }
      ]
    }
  },
  privacy: {
    en: {
      badge: "- Privacy Policy",
      title: "Privacy Policy",
      intro: "This policy explains how SaaSolution SL handles personal data for general IT services, software delivery, support, websites, project work, and business communication.",
      sections: [
        { title: "Who we are", body: ["SaaSolution SL provides IT services, software development, SaaS platforms, automation, AI workflows, support, consulting, and related technology services. This Privacy Policy explains how we process personal data when people visit our websites, contact us, use our services, apply for roles, or interact with our team.", "Depending on the situation, SaaSolution may act as a controller for our own business activities or as a processor when we process personal data on behalf of a client under a service agreement or data processing agreement."] },
        { title: "Applicable privacy standards", body: ["As a Spanish company, we design this policy around the GDPR, Spanish data protection rules including the LOPDGDD, and Spanish e-commerce and cookie rules where applicable.", "Where our services involve people or operations in other relevant jurisdictions, we also consider applicable local standards, including the Philippines Data Privacy Act of 2012 and Paraguay's personal data protection framework where relevant."] },
        { title: "Personal data we may collect", bullets: ["Contact details such as name, email, phone, company, role, and preferred contact method.", "Project and support information such as messages, tickets, attachments, technical context, screenshots, logs, device information, and issue descriptions.", "Website and usage data such as pages visited, browser type, approximate location, cookie identifiers, analytics events, and security logs.", "Business, billing, contract, recruitment, and communication records."] },
        { title: "Why we use personal data", bullets: ["To respond to requests, support tickets, and contact forms.", "To provide, secure, improve, and troubleshoot our services.", "To manage client relationships, proposals, contracts, billing, and administration.", "To deliver service notices, project updates, security notifications, and operational communications.", "To comply with legal, tax, accounting, security, and regulatory obligations."] },
        { title: "Legal bases and sharing", body: ["We process data when needed for a contract, pre-contract steps, legal obligations, legitimate interests, security, or consent where required.", "We may share data with approved providers, hosting providers, support tools, analytics providers, security services, advisers, payment or accounting providers, and partners involved in agreed services. We do not sell personal data."] },
        { title: "International transfers, retention, and rights", body: ["Because SaaSolution works internationally, data may be processed outside the country where it was collected. Where required, we use safeguards such as contractual protections, adequacy decisions, standard contractual clauses, access controls, and minimization.", "We keep data only as long as needed for the purpose collected, including legal, tax, accounting, security, support, and dispute needs.", "Depending on applicable law, you may have rights to access, correct, delete, restrict, object to, or receive a copy of your data. If we process data for a client, we may forward your request to that client or follow their instructions."] }
      ]
    },
    nl: {
      badge: "- Privacybeleid",
      title: "Privacybeleid",
      intro: "Dit beleid legt uit hoe SaaSolution SL persoonsgegevens verwerkt voor algemene IT-diensten, softwareontwikkeling, support, websites, projectwerk en zakelijke communicatie.",
      sections: [
        { title: "Wie wij zijn", body: ["SaaSolution SL levert IT-diensten, softwareontwikkeling, SaaS-platformen, automatisering, AI-workflows, support, consulting en aanverwante technologiediensten. Dit Privacybeleid legt uit hoe wij persoonsgegevens verwerken wanneer mensen onze websites bezoeken, contact opnemen, onze diensten gebruiken, solliciteren of met ons team communiceren.", "Afhankelijk van de situatie is SaaSolution verwerkingsverantwoordelijke voor eigen bedrijfsactiviteiten of verwerker wanneer wij persoonsgegevens namens een klant verwerken onder een service- of verwerkersovereenkomst."] },
        { title: "Toepasselijke privacystandaarden", body: ["Als Spaans bedrijf baseren wij dit beleid op de GDPR/AVG, Spaanse privacyregels waaronder LOPDGDD en Spaanse e-commerce- en cookieregels waar van toepassing.", "Wanneer onze diensten personen of activiteiten in andere relevante landen raken, houden wij ook rekening met lokale standaarden, zoals de Philippines Data Privacy Act 2012 en het privacykader van Paraguay waar relevant."] },
        { title: "Persoonsgegevens die wij kunnen verzamelen", bullets: ["Contactgegevens zoals naam, e-mail, telefoon, bedrijf, rol en voorkeurskanaal.", "Project- en supportinformatie zoals berichten, tickets, bijlagen, technische context, screenshots, logs, apparaatgegevens en foutbeschrijvingen.", "Website- en gebruiksdata zoals bezochte pagina's, browser, globale locatie, cookie-ID's, analytics events en beveiligingslogs.", "Zakelijke, facturatie-, contract-, recruitment- en communicatierecords."] },
        { title: "Waarom wij gegevens gebruiken", bullets: ["Om vragen, supporttickets en formulieren te beantwoorden.", "Om diensten te leveren, beveiligen, verbeteren en troubleshooten.", "Om klantrelaties, offertes, contracten, facturatie en administratie te beheren.", "Om servicemeldingen, projectupdates, beveiligingsmeldingen en operationele communicatie te sturen.", "Om te voldoen aan wettelijke, fiscale, boekhoudkundige, beveiligings- en complianceverplichtingen."] },
        { title: "Grondslagen en delen", body: ["Wij verwerken gegevens wanneer dit nodig is voor een contract, precontractuele stappen, wettelijke verplichtingen, gerechtvaardigde belangen, beveiliging of toestemming waar vereist.", "Wij kunnen gegevens delen met goedgekeurde providers, hostingpartijen, supporttools, analyticsproviders, beveiligingsdiensten, adviseurs, betaal- of boekhoudproviders en partners die betrokken zijn bij afgesproken diensten. Wij verkopen geen persoonsgegevens."] },
        { title: "Internationale doorgifte, bewaartermijn en rechten", body: ["Omdat SaaSolution internationaal werkt, kunnen gegevens buiten het land van verzameling worden verwerkt. Waar vereist gebruiken wij waarborgen zoals contractuele bescherming, adequaatheidsbesluiten, standaardcontractbepalingen, toegangscontrole en dataminimalisatie.", "Wij bewaren gegevens alleen zolang nodig voor het doel, inclusief wettelijke, fiscale, boekhoudkundige, beveiligings-, support- en geschilbehoeften.", "Afhankelijk van de wet kun je rechten hebben op inzage, correctie, verwijdering, beperking, bezwaar of dataportabiliteit. Als wij gegevens voor een klant verwerken, kunnen wij je verzoek doorsturen naar die klant of hun instructies volgen."] }
      ]
    },
    de: {
      badge: "- Datenschutzerklaerung",
      title: "Datenschutzerklaerung",
      intro: "Diese Richtlinie erklaert, wie SaaSolution SL personenbezogene Daten fuer allgemeine IT-Dienste, Softwareentwicklung, Support, Websites, Projektarbeit und Geschaeftskommunikation verarbeitet.",
      sections: [
        { title: "Wer wir sind", body: ["SaaSolution SL erbringt IT-Dienste, Softwareentwicklung, SaaS-Plattformen, Automatisierung, KI-Workflows, Support, Beratung und verwandte Technologiedienste. Diese Datenschutzerklaerung erklaert, wie wir personenbezogene Daten verarbeiten, wenn Personen unsere Websites besuchen, uns kontaktieren, Dienste nutzen, sich bewerben oder mit unserem Team interagieren.", "Je nach Situation ist SaaSolution Verantwortlicher fuer eigene Geschaeftsaktivitaeten oder Auftragsverarbeiter, wenn wir Daten im Auftrag eines Kunden verarbeiten."] },
        { title: "Anwendbare Datenschutzstandards", body: ["Als spanisches Unternehmen orientieren wir uns an DSGVO, spanischen Datenschutzregeln einschliesslich LOPDGDD und spanischen E-Commerce- und Cookie-Regeln, soweit anwendbar.", "Wenn Dienste Personen oder Taetigkeiten in anderen relevanten Rechtsraeumen betreffen, beruecksichtigen wir auch lokale Standards wie den Philippines Data Privacy Act 2012 und den Datenschutzrahmen Paraguays, soweit relevant."] },
        { title: "Daten, die wir erheben koennen", bullets: ["Kontaktdaten wie Name, E-Mail, Telefon, Unternehmen, Rolle und bevorzugter Kontaktweg.", "Projekt- und Supportdaten wie Nachrichten, Tickets, Anhaenge, technische Kontexte, Screenshots, Logs, Geraetedaten und Fehlerbeschreibungen.", "Website- und Nutzungsdaten wie besuchte Seiten, Browser, ungefaehre Standortdaten, Cookie-IDs, Analytics-Events und Security-Logs.", "Geschaefts-, Rechnungs-, Vertrags-, Recruiting- und Kommunikationsdaten."] },
        { title: "Warum wir Daten nutzen", bullets: ["Zur Beantwortung von Anfragen, Supporttickets und Formularen.", "Zur Bereitstellung, Sicherung, Verbesserung und Fehlerbehebung unserer Dienste.", "Zur Verwaltung von Kundenbeziehungen, Angeboten, Vertraegen, Abrechnung und Administration.", "Zur Uebermittlung von Servicehinweisen, Projektupdates, Security-Hinweisen und operativer Kommunikation.", "Zur Erfuellung rechtlicher, steuerlicher, buchhalterischer, sicherheitsbezogener und regulatorischer Pflichten."] },
        { title: "Rechtsgrundlagen und Weitergabe", body: ["Wir verarbeiten Daten, wenn dies fuer Vertrag, vorvertragliche Schritte, rechtliche Pflichten, berechtigte Interessen, Security oder Einwilligung erforderlich ist.", "Wir koennen Daten mit genehmigten Dienstleistern, Hosting-Providern, Supporttools, Analytics-Anbietern, Security-Diensten, Beratern, Zahlungs- oder Buchhaltungsanbietern und Partnern teilen. Wir verkaufen keine personenbezogenen Daten."] },
        { title: "Internationale Transfers, Aufbewahrung und Rechte", body: ["Da SaaSolution international arbeitet, koennen Daten ausserhalb des Erhebungslands verarbeitet werden. Soweit erforderlich nutzen wir Schutzmassnahmen wie Vertragsklauseln, Angemessenheitsbeschluesse, Standardvertragsklauseln, Zugriffskontrollen und Minimierung.", "Wir speichern Daten nur so lange, wie es fuer den Zweck erforderlich ist, einschliesslich rechtlicher, steuerlicher, buchhalterischer, Security-, Support- und Streitbeilegungszwecke.", "Je nach anwendbarem Recht koennen Rechte auf Auskunft, Berichtigung, Loeschung, Einschraenkung, Widerspruch oder Datenkopie bestehen. Wenn wir Daten fuer einen Kunden verarbeiten, koennen wir die Anfrage an diesen Kunden weiterleiten oder dessen Anweisungen folgen."] }
      ]
    },
    es: {
      badge: "- Politica de privacidad",
      title: "Politica de privacidad",
      intro: "Esta politica explica como SaaSolution SL trata datos personales para servicios IT generales, desarrollo de software, soporte, sitios web, proyectos y comunicacion comercial.",
      sections: [
        { title: "Quienes somos", body: ["SaaSolution SL presta servicios IT, desarrollo de software, plataformas SaaS, automatizacion, flujos AI, soporte, consultoria y servicios tecnologicos relacionados. Esta politica explica como tratamos datos personales cuando las personas visitan nuestros sitios, nos contactan, usan servicios, aplican a roles o interactuan con el equipo.", "Segun la situacion, SaaSolution puede actuar como responsable para sus propias actividades o como encargado cuando procesa datos por cuenta de un cliente."] },
        { title: "Normas aplicables", body: ["Como empresa espanola, disenamos esta politica alrededor del GDPR, normas espanolas de proteccion de datos incluyendo LOPDGDD, y reglas espanolas de e-commerce y cookies cuando aplican.", "Cuando nuestros servicios involucran personas u operaciones en otras jurisdicciones relevantes, tambien consideramos estandares locales como la Philippines Data Privacy Act 2012 y el marco de proteccion de datos de Paraguay cuando corresponde."] },
        { title: "Datos que podemos recopilar", bullets: ["Datos de contacto como nombre, email, telefono, empresa, rol y metodo preferido.", "Informacion de proyecto y soporte como mensajes, tickets, adjuntos, contexto tecnico, capturas, logs, dispositivo y descripcion de incidencias.", "Datos de sitio y uso como paginas visitadas, navegador, ubicacion aproximada, identificadores de cookies, eventos analytics y logs de seguridad.", "Registros comerciales, facturacion, contratos, recruiting y comunicaciones."] },
        { title: "Por que usamos datos", bullets: ["Responder solicitudes, tickets de soporte y formularios.", "Prestar, proteger, mejorar y solucionar problemas de nuestros servicios.", "Gestionar relaciones con clientes, propuestas, contratos, facturacion y administracion.", "Enviar avisos de servicio, actualizaciones de proyecto, notificaciones de seguridad y comunicaciones operativas.", "Cumplir obligaciones legales, fiscales, contables, de seguridad y regulatorias."] },
        { title: "Bases legales y cesiones", body: ["Tratamos datos cuando es necesario para contrato, pasos precontractuales, obligaciones legales, intereses legitimos, seguridad o consentimiento cuando se requiere.", "Podemos compartir datos con proveedores aprobados, hosting, herramientas de soporte, analytics, seguridad, asesores, pagos o contabilidad y partners implicados en servicios acordados. No vendemos datos personales."] },
        { title: "Transferencias, conservacion y derechos", body: ["Como SaaSolution trabaja internacionalmente, los datos pueden procesarse fuera del pais de recogida. Cuando se requiere usamos garantias como protecciones contractuales, decisiones de adecuacion, clausulas contractuales tipo, controles de acceso y minimizacion.", "Conservamos datos solo el tiempo necesario para el fin, incluyendo necesidades legales, fiscales, contables, seguridad, soporte y disputas.", "Segun la ley aplicable puedes tener derechos de acceso, rectificacion, supresion, limitacion, oposicion o copia. Si procesamos datos para un cliente, podemos remitir la solicitud a ese cliente o seguir sus instrucciones."] }
      ]
    }
  },
  cookies: {
    en: { badge: "- Cookie Policy", title: "Cookie Policy", intro: "This policy explains how SaaSolution SL websites may use cookies and similar technologies for functionality, security, analytics, preferences, and embedded services.", sections: [
      { title: "What cookies are", body: ["Cookies are small files stored on your device when you visit a website. Similar technologies include local storage, pixels, tags, and SDKs. They help websites remember settings, understand usage, improve security, and support features."] },
      { title: "How we use cookies", body: ["SaaSolution websites may use cookies for essential operation, security, performance, analytics, preferences, and where applicable marketing or embedded third-party content. Where consent is required, non-essential cookies should only be used after consent."] },
      { title: "Cookie categories", bullets: ["Essential cookies for page loading, security, routing, language selection, forms, and basic functionality.", "Preference cookies for language, region, or interface settings.", "Analytics cookies for visits, pages viewed, traffic sources, and performance.", "Marketing cookies where enabled.", "Third-party cookies from maps, videos, analytics, support widgets, or external tools."] },
      { title: "Managing cookies", body: ["You can manage cookies through your browser settings. Blocking some cookies may affect website functionality. If a consent banner or preference tool is available, you can use it to change your choices."] },
      { title: "Legal standards", body: ["For users in Spain and the EU, our approach is guided by GDPR, ePrivacy rules, the Spanish LSSI, and relevant guidance from data protection and e-commerce authorities."] }
    ] },
    nl: { badge: "- Cookiebeleid", title: "Cookiebeleid", intro: "Dit beleid legt uit hoe SaaSolution SL websites cookies en vergelijkbare technologie kunnen gebruiken voor functionaliteit, beveiliging, analytics, voorkeuren en embedded diensten.", sections: [
      { title: "Wat cookies zijn", body: ["Cookies zijn kleine bestanden die op je apparaat worden opgeslagen wanneer je een website bezoekt. Vergelijkbare technologie zijn local storage, pixels, tags en SDKs. Ze helpen instellingen onthouden, gebruik begrijpen, beveiliging verbeteren en functies ondersteunen."] },
      { title: "Hoe wij cookies gebruiken", body: ["SaaSolution websites kunnen cookies gebruiken voor noodzakelijke werking, beveiliging, performance, analytics, voorkeuren en waar van toepassing marketing of embedded content van derden. Waar toestemming nodig is, gebruiken wij niet-noodzakelijke cookies pas na toestemming."] },
      { title: "Cookiecategorieen", bullets: ["Noodzakelijke cookies voor laden, beveiliging, routing, taalkeuze, formulieren en basisfuncties.", "Voorkeurscookies voor taal, regio of interface-instellingen.", "Analytics cookies voor bezoeken, paginaweergaven, verkeersbronnen en performance.", "Marketingcookies waar ingeschakeld.", "Cookies van derden via kaarten, videos, analytics, supportwidgets of externe tools."] },
      { title: "Cookies beheren", body: ["Je kunt cookies beheren via je browserinstellingen. Sommige functies kunnen minder goed werken als cookies worden geblokkeerd. Als er een cookiebanner of voorkeurentool is, kun je daar je keuzes aanpassen."] },
      { title: "Juridische standaarden", body: ["Voor gebruikers in Spanje en de EU volgen wij GDPR/AVG, ePrivacy-regels, de Spaanse LSSI en relevante richtlijnen van privacy- en e-commerce autoriteiten."] }
    ] },
    de: { badge: "- Cookie-Richtlinie", title: "Cookie-Richtlinie", intro: "Diese Richtlinie erklaert, wie SaaSolution SL Websites Cookies und aehnliche Technologien fuer Funktionalitaet, Sicherheit, Analytics, Praeferenzen und eingebettete Dienste nutzen koennen.", sections: [
      { title: "Was Cookies sind", body: ["Cookies sind kleine Dateien, die beim Besuch einer Website auf Ihrem Geraet gespeichert werden. Aehnliche Technologien sind Local Storage, Pixel, Tags und SDKs. Sie helfen, Einstellungen zu speichern, Nutzung zu verstehen, Sicherheit zu verbessern und Funktionen zu unterstuetzen."] },
      { title: "Wie wir Cookies nutzen", body: ["SaaSolution Websites koennen Cookies fuer notwendigen Betrieb, Sicherheit, Performance, Analytics, Praeferenzen und ggf. Marketing oder eingebettete Drittinhalte nutzen. Wo Einwilligung erforderlich ist, werden nicht notwendige Cookies erst nach Einwilligung verwendet."] },
      { title: "Cookie-Kategorien", bullets: ["Notwendige Cookies fuer Laden, Sicherheit, Routing, Sprachauswahl, Formulare und Basisfunktionen.", "Praeferenz-Cookies fuer Sprache, Region oder Interface-Einstellungen.", "Analytics-Cookies fuer Besuche, Seitenaufrufe, Traffic-Quellen und Performance.", "Marketing-Cookies, soweit aktiviert.", "Drittanbieter-Cookies von Karten, Videos, Analytics, Support-Widgets oder externen Tools."] },
      { title: "Cookies verwalten", body: ["Sie koennen Cookies ueber den Browser verwalten. Einige Funktionen koennen beeintraechtigt werden, wenn Cookies blockiert sind. Falls ein Consent-Banner oder Praeferenztool verfuegbar ist, koennen Sie dort Einstellungen aendern."] },
      { title: "Rechtliche Standards", body: ["Fuer Nutzer in Spanien und der EU orientieren wir uns an DSGVO, ePrivacy-Regeln, spanischer LSSI und relevanter Aufsichtsleitlinie."] }
    ] },
    es: { badge: "- Politica de cookies", title: "Politica de cookies", intro: "Esta politica explica como los sitios de SaaSolution SL pueden usar cookies y tecnologias similares para funcionalidad, seguridad, analytics, preferencias y servicios embebidos.", sections: [
      { title: "Que son las cookies", body: ["Las cookies son pequenos archivos almacenados en tu dispositivo al visitar un sitio web. Tecnologias similares incluyen local storage, pixels, tags y SDKs. Ayudan a recordar preferencias, entender uso, mejorar seguridad y soportar funciones."] },
      { title: "Como usamos cookies", body: ["Los sitios de SaaSolution pueden usar cookies para funcionamiento esencial, seguridad, rendimiento, analytics, preferencias y, cuando aplique, marketing o contenido de terceros. Cuando se requiere consentimiento, las cookies no esenciales se usan solo tras consentimiento."] },
      { title: "Categorias", bullets: ["Cookies esenciales para carga, seguridad, routing, idioma, formularios y funciones basicas.", "Cookies de preferencias para idioma, region o interfaz.", "Cookies analytics para visitas, paginas vistas, fuentes de trafico y rendimiento.", "Cookies marketing cuando esten activadas.", "Cookies de terceros por mapas, videos, analytics, widgets de soporte o herramientas externas."] },
      { title: "Gestionar cookies", body: ["Puedes gestionar cookies desde tu navegador. Bloquear algunas cookies puede afectar funcionalidades. Si hay banner o herramienta de preferencias, puedes cambiar tus elecciones ahi."] },
      { title: "Normas legales", body: ["Para usuarios en Espana y la UE, nuestro enfoque sigue GDPR, ePrivacy, LSSI espanola y guias relevantes de autoridades de proteccion de datos y e-commerce."] }
    ] }
  },
  dpa: {
    en: { badge: "- Data Processing Agreement", title: "Data Processing Agreement", intro: "These public data processing terms explain how SaaSolution SL handles personal data when acting as a processor for client IT services.", sections: [
      { title: "Purpose and roles", body: ["This DPA applies where SaaSolution SL processes personal data on behalf of a client as part of agreed services. It supports controller-processor requirements under applicable data protection laws, including GDPR Article 28 where applicable.", "The client is usually controller for personal data in its systems, products, customers, employees, support data, or operations. SaaSolution acts as processor when processing that data under documented client instructions."] },
      { title: "Instructions and data types", body: ["SaaSolution processes client personal data only to provide agreed services, follow documented instructions, comply with law, maintain security, prevent abuse, and support delivery."], bullets: ["Client users, employees, contractors, customers, leads, or end users.", "Contact details, identifiers, access details, communication records, support tickets, logs, files, and project materials.", "Technical data needed for diagnostics, integrations, hosting, security, monitoring, backups, and support."] },
      { title: "Security and sub-processors", body: ["SaaSolution uses appropriate technical and organizational measures based on the service, risk level, contract, and data involved. Measures may include access controls, least privilege, authentication, encryption where appropriate, logging, backups, secure development practices, patching, monitoring, incident response, and confidentiality obligations.", "SaaSolution may use approved sub-processors and service providers to deliver services. Where required, they are bound by appropriate data protection obligations."] },
      { title: "Assistance, incidents, and deletion", body: ["SaaSolution will reasonably assist the client with data subject requests, security obligations, impact assessments, and consultations where required by law and within agreed scope.", "SaaSolution will notify the client without undue delay after becoming aware of a confirmed personal data breach affecting client data processed by SaaSolution, unless prohibited by law.", "At the end of services, SaaSolution will return or delete client personal data according to contract, law, technical feasibility, backup cycles, and legitimate retention needs."] },
      { title: "International transfers", body: ["Where personal data is transferred internationally, SaaSolution uses appropriate safeguards where required, such as standard contractual clauses, adequacy decisions, contractual commitments, minimization, and access controls."] }
    ] },
    nl: { badge: "- Verwerkersovereenkomst", title: "Verwerkersovereenkomst", intro: "Deze publieke verwerkersvoorwaarden leggen uit hoe SaaSolution SL persoonsgegevens behandelt wanneer wij als verwerker optreden voor IT-diensten van klanten.", sections: [
      { title: "Doel en rollen", body: ["Deze DPA geldt wanneer SaaSolution SL persoonsgegevens namens een klant verwerkt als onderdeel van afgesproken diensten. De DPA ondersteunt controller-processor vereisten onder toepasselijke privacywetgeving, waaronder GDPR/AVG artikel 28 waar van toepassing.", "De klant is meestal verwerkingsverantwoordelijke voor persoonsgegevens in eigen systemen, producten, klanten, medewerkers, supportdata of operaties. SaaSolution is verwerker wanneer wij die data volgens instructies van de klant verwerken."] },
      { title: "Instructies en datatypes", body: ["SaaSolution verwerkt klantdata alleen om afgesproken diensten te leveren, instructies te volgen, wetgeving na te leven, beveiliging te onderhouden, misbruik te voorkomen en levering te ondersteunen."], bullets: ["Gebruikers, medewerkers, contractors, klanten, leads of eindgebruikers van de klant.", "Contactgegevens, identifiers, toegangsgegevens, communicatie, supporttickets, logs, bestanden en projectmateriaal.", "Technische data voor diagnose, integraties, hosting, beveiliging, monitoring, backups en support."] },
      { title: "Beveiliging en subverwerkers", body: ["SaaSolution gebruikt passende technische en organisatorische maatregelen op basis van dienst, risico, contract en data. Maatregelen kunnen toegangscontrole, least privilege, authenticatie, encryptie waar passend, logging, backups, secure development, patching, monitoring, incident response en geheimhouding omvatten.", "SaaSolution kan goedgekeurde subverwerkers en dienstverleners gebruiken. Waar vereist worden zij gebonden aan passende privacyverplichtingen."] },
      { title: "Assistentie, incidenten en verwijdering", body: ["SaaSolution helpt redelijkerwijs met verzoeken van betrokkenen, beveiligingsverplichtingen, impact assessments en consultaties waar wettelijk vereist en binnen afgesproken scope.", "SaaSolution meldt zonder onredelijke vertraging een bevestigde datalek rond klantdata die door SaaSolution wordt verwerkt, tenzij wetgeving dit verbiedt.", "Na afloop retourneert of verwijdert SaaSolution klantdata volgens contract, wet, technische haalbaarheid, backupcycli en legitieme bewaarbehoeften."] },
      { title: "Internationale doorgifte", body: ["Bij internationale doorgifte gebruikt SaaSolution passende waarborgen waar vereist, zoals standaardcontractbepalingen, adequaatheidsbesluiten, contractuele afspraken, minimalisatie en toegangscontrole."] }
    ] },
    de: { badge: "- Datenverarbeitungsvereinbarung", title: "Datenverarbeitungsvereinbarung", intro: "Diese oeffentlichen Verarbeitungsbedingungen erklaeren, wie SaaSolution SL personenbezogene Daten verarbeitet, wenn wir als Auftragsverarbeiter fuer Kunden-IT-Dienste handeln.", sections: [
      { title: "Zweck und Rollen", body: ["Diese DPA gilt, wenn SaaSolution SL personenbezogene Daten im Auftrag eines Kunden im Rahmen vereinbarter Leistungen verarbeitet. Sie unterstuetzt Controller-Processor-Anforderungen, einschliesslich DSGVO Artikel 28 soweit anwendbar.", "Der Kunde ist meist Verantwortlicher fuer Daten in seinen Systemen, Produkten, Kunden, Mitarbeitern, Supportdaten oder Prozessen. SaaSolution handelt als Auftragsverarbeiter, wenn wir diese Daten nach dokumentierten Anweisungen verarbeiten."] },
      { title: "Anweisungen und Datentypen", body: ["SaaSolution verarbeitet Kundendaten nur zur Erbringung vereinbarter Dienste, zur Befolgung dokumentierter Anweisungen, zur Einhaltung von Recht, Sicherheit, Missbrauchsvermeidung und Servicebereitstellung."], bullets: ["Nutzer, Mitarbeiter, Auftragnehmer, Kunden, Leads oder Endnutzer des Kunden.", "Kontaktdaten, Kennungen, Zugangsdaten, Kommunikation, Supporttickets, Logs, Dateien und Projektmaterialien.", "Technische Daten fuer Diagnose, Integrationen, Hosting, Sicherheit, Monitoring, Backups und Support."] },
      { title: "Sicherheit und Unterauftragsverarbeiter", body: ["SaaSolution nutzt angemessene technische und organisatorische Massnahmen je nach Dienst, Risiko, Vertrag und Daten. Dazu koennen Zugriffskontrollen, Least Privilege, Authentifizierung, geeignete Verschluesselung, Logging, Backups, sichere Entwicklung, Patching, Monitoring, Incident Response und Vertraulichkeit gehoeren.", "SaaSolution kann genehmigte Unterauftragsverarbeiter und Dienstleister einsetzen. Soweit erforderlich, werden diese an geeignete Datenschutzpflichten gebunden."] },
      { title: "Unterstuetzung, Vorfaelle und Loeschung", body: ["SaaSolution unterstuetzt angemessen bei Betroffenenanfragen, Sicherheitspflichten, Folgenabschaetzungen und Konsultationen, soweit gesetzlich erforderlich und innerhalb des vereinbarten Umfangs.", "SaaSolution informiert den Kunden ohne unangemessene Verzoegerung ueber bestaetigte Datenschutzverletzungen betreffend von SaaSolution verarbeitete Kundendaten, sofern gesetzlich erlaubt.", "Nach Leistungsende gibt SaaSolution Kundendaten zurueck oder loescht sie gemaess Vertrag, Recht, technischer Machbarkeit, Backupzyklen und legitimen Aufbewahrungsgruenden."] },
      { title: "Internationale Transfers", body: ["Bei internationalen Transfers nutzt SaaSolution geeignete Schutzmassnahmen, soweit erforderlich, wie Standardvertragsklauseln, Angemessenheitsbeschluesse, vertragliche Verpflichtungen, Minimierung und Zugriffskontrollen."] }
    ] },
    es: { badge: "- Acuerdo de tratamiento de datos", title: "Acuerdo de tratamiento de datos", intro: "Estos terminos publicos explican como SaaSolution SL trata datos personales cuando actua como encargado para servicios IT de clientes.", sections: [
      { title: "Finalidad y roles", body: ["Este DPA aplica cuando SaaSolution SL trata datos personales por cuenta de un cliente como parte de servicios acordados. Apoya requisitos responsable-encargado bajo leyes aplicables, incluyendo articulo 28 GDPR cuando corresponda.", "El cliente normalmente es responsable de datos en sus sistemas, productos, clientes, empleados, soporte u operaciones. SaaSolution actua como encargado cuando procesa esos datos bajo instrucciones documentadas."] },
      { title: "Instrucciones y tipos de datos", body: ["SaaSolution procesa datos del cliente solo para prestar servicios acordados, seguir instrucciones, cumplir ley, mantener seguridad, prevenir abuso y apoyar la entrega."], bullets: ["Usuarios, empleados, contratistas, clientes, leads o usuarios finales del cliente.", "Datos de contacto, identificadores, accesos, comunicaciones, tickets, logs, archivos y materiales de proyecto.", "Datos tecnicos para diagnostico, integraciones, hosting, seguridad, monitorizacion, backups y soporte."] },
      { title: "Seguridad y subencargados", body: ["SaaSolution usa medidas tecnicas y organizativas adecuadas segun servicio, riesgo, contrato y datos. Pueden incluir control de acceso, least privilege, autenticacion, cifrado cuando proceda, logs, backups, desarrollo seguro, parches, monitorizacion, respuesta a incidentes y confidencialidad.", "SaaSolution puede usar subencargados y proveedores aprobados. Cuando se requiere, quedan sujetos a obligaciones adecuadas de proteccion de datos."] },
      { title: "Asistencia, incidentes y eliminacion", body: ["SaaSolution asistira razonablemente con solicitudes de interesados, obligaciones de seguridad, evaluaciones de impacto y consultas cuando la ley lo requiera y dentro del alcance acordado.", "SaaSolution notificara al cliente sin demora indebida al conocer una brecha confirmada que afecte datos del cliente procesados por SaaSolution, salvo prohibicion legal.", "Al finalizar servicios, SaaSolution devolvera o eliminara datos segun contrato, ley, viabilidad tecnica, ciclos de backup y necesidades legitimas de retencion."] },
      { title: "Transferencias internacionales", body: ["Cuando haya transferencias internacionales, SaaSolution usa garantias apropiadas cuando se requieren, como clausulas contractuales tipo, decisiones de adecuacion, compromisos contractuales, minimizacion y controles de acceso."] }
    ] }
  },
  security: {
    en: { badge: "- Security", title: "Security", intro: "This page explains how SaaSolution SL approaches security for general IT services, software delivery, support, managed operations, and client systems within agreed scope.", sections: [
      { title: "Security approach", body: ["SaaSolution treats security as part of product, process, infrastructure, and support. We design practical safeguards that fit the agreed service, risk level, client environment, and operational reality.", "Security responsibilities depend on scope. SaaSolution is responsible for security measures within services we provide or manage. Clients remain responsible for systems, hosting, providers, accounts, policies, users, and processes outside that scope."] },
      { title: "Technical safeguards", bullets: ["Access controls and least-privilege permissions.", "Authentication controls suitable for the service and risk level.", "Encryption in transit and at rest where appropriate and supported.", "Secure configuration, patching, dependency review, and environment separation where applicable.", "Logging, monitoring, backup, and recovery practices where included in scope.", "Secure development, code review, and testing appropriate to the project."] },
      { title: "Client responsibilities", body: ["Security is shared. Clients must keep credentials safe, manage internal permissions, approve access promptly, follow security guidance, maintain devices and accounts, and tell SaaSolution about relevant risks or changes.", "If a client uses third-party hosting, domains, email, infrastructure, plugins, integrations, or SaaS tools outside SaaSolution's managed scope, the security and availability of those services remain the responsibility of the client and those providers."] },
      { title: "Vulnerability reporting and incidents", body: ["If you believe you found a security issue involving SaaSolution systems or services, contact us through the Contact page or use saasupport.com for active operational concerns.", "When SaaSolution becomes aware of a suspected or confirmed incident within our scope, we assess severity, contain where possible, investigate, communicate with affected clients as appropriate, and support recovery based on the service agreement."] },
      { title: "Backups and no absolute guarantee", body: ["Backups and recovery are only included where agreed. If SaaSolution does not manage hosting, infrastructure, backups, or recovery, SaaSolution is not responsible for backup failure, data loss, or downtime in that environment.", "No system can be guaranteed perfectly secure. SaaSolution works to reduce risk, but security also depends on client practices, third-party providers, users, and changing threats."] }
    ] },
    nl: { badge: "- Beveiliging", title: "Beveiliging", intro: "Deze pagina legt uit hoe SaaSolution SL beveiliging benadert voor algemene IT-diensten, softwareontwikkeling, support, managed operations en klantsystemen binnen afgesproken scope.", sections: [
      { title: "Beveiligingsaanpak", body: ["SaaSolution ziet beveiliging als onderdeel van product, proces, infrastructuur en support. We ontwerpen praktische maatregelen die passen bij dienst, risico, klantomgeving en operationele realiteit.", "Beveiligingsverantwoordelijkheid hangt af van scope. SaaSolution is verantwoordelijk voor maatregelen binnen diensten die wij leveren of beheren. Klanten blijven verantwoordelijk voor systemen, hosting, providers, accounts, beleid, gebruikers en processen buiten die scope."] },
      { title: "Technische maatregelen", bullets: ["Toegangscontrole en least-privilege rechten.", "Authenticatie passend bij dienst en risico.", "Encryptie in transit en at rest waar passend en ondersteund.", "Veilige configuratie, patching, dependency review en omgevingsscheiding waar van toepassing.", "Logging, monitoring, backups en herstel waar opgenomen in scope.", "Secure development, code review en testing passend bij het project."] },
      { title: "Verantwoordelijkheden klant", body: ["Beveiliging is gedeeld. Klanten moeten inloggegevens veilig houden, interne rechten beheren, toegang tijdig goedkeuren, beveiligingsadvies volgen, apparaten en accounts onderhouden en relevante risico's of wijzigingen melden.", "Als een klant hosting, domeinen, e-mail, infrastructuur, plugins, integraties of SaaS-tools gebruikt buiten SaaSolution's beheerde scope, blijven beveiliging en beschikbaarheid daarvan verantwoordelijkheid van klant en providers."] },
      { title: "Kwetsbaarheden en incidenten", body: ["Als je denkt een beveiligingsprobleem te hebben gevonden in systemen of diensten van SaaSolution, gebruik Contact of saasupport.com voor actieve operationele zorgen.", "Bij een vermoed of bevestigd incident binnen onze scope beoordelen we ernst, beperken we waar mogelijk, onderzoeken we, communiceren we met getroffen klanten waar passend en ondersteunen we herstel volgens de serviceafspraak."] },
      { title: "Backups en geen absolute garantie", body: ["Backups en herstel zijn alleen inbegrepen waar afgesproken. Als SaaSolution hosting, infrastructuur, backups of herstel niet beheert, zijn wij niet verantwoordelijk voor backupfalen, dataverlies of downtime in die omgeving.", "Geen enkel systeem is perfect veilig te garanderen. SaaSolution verlaagt risico, maar beveiliging hangt ook af van klantpraktijken, derden, gebruikers en veranderende dreigingen."] }
    ] },
    de: { badge: "- Sicherheit", title: "Sicherheit", intro: "Diese Seite erklaert, wie SaaSolution SL Sicherheit fuer allgemeine IT-Dienste, Softwareentwicklung, Support, Managed Operations und Kundensysteme innerhalb des vereinbarten Umfangs behandelt.", sections: [
      { title: "Sicherheitsansatz", body: ["SaaSolution behandelt Sicherheit als Teil von Produkt, Prozess, Infrastruktur und Support. Wir entwerfen praktische Schutzmassnahmen passend zu Dienst, Risiko, Kundenumgebung und operativer Realitaet.", "Sicherheitsverantwortung haengt vom Scope ab. SaaSolution ist verantwortlich fuer Massnahmen innerhalb der Dienste, die wir liefern oder verwalten. Kunden bleiben verantwortlich fuer Systeme, Hosting, Provider, Accounts, Richtlinien, Nutzer und Prozesse ausserhalb dieses Umfangs."] },
      { title: "Technische Schutzmassnahmen", bullets: ["Zugriffskontrollen und Least-Privilege-Rechte.", "Authentifizierung passend zu Dienst und Risiko.", "Verschluesselung in Transit und at rest, soweit passend und unterstuetzt.", "Sichere Konfiguration, Patching, Dependency Review und Umgebungstrennung wo anwendbar.", "Logging, Monitoring, Backups und Recovery, soweit im Scope.", "Sichere Entwicklung, Code Review und Testing passend zum Projekt."] },
      { title: "Pflichten des Kunden", body: ["Sicherheit ist geteilt. Kunden muessen Zugangsdaten schuetzen, interne Berechtigungen verwalten, Zugriff zeitnah freigeben, Sicherheitshinweise befolgen, Geraete und Accounts pflegen und relevante Risiken oder Aenderungen melden.", "Nutzt ein Kunde Hosting, Domains, E-Mail, Infrastruktur, Plugins, Integrationen oder SaaS-Tools ausserhalb des von SaaSolution verwalteten Umfangs, bleiben Sicherheit und Verfuegbarkeit Verantwortung des Kunden und der Provider."] },
      { title: "Schwachstellen und Vorfaelle", body: ["Wenn Sie ein Sicherheitsproblem in SaaSolution Systemen oder Diensten vermuten, kontaktieren Sie uns ueber Kontakt oder saasupport.com fuer aktive operative Anliegen.", "Bei vermuteten oder bestaetigten Vorfaellen innerhalb unseres Scopes bewerten wir Schwere, begrenzen soweit moeglich, untersuchen, kommunizieren mit betroffenen Kunden angemessen und unterstuetzen Recovery nach Servicevereinbarung."] },
      { title: "Backups und keine absolute Garantie", body: ["Backups und Recovery sind nur enthalten, wenn vereinbart. Wenn SaaSolution Hosting, Infrastruktur, Backups oder Recovery nicht verwaltet, sind wir nicht verantwortlich fuer Backupfehler, Datenverlust oder Downtime in dieser Umgebung.", "Kein System kann perfekt sicher garantiert werden. SaaSolution reduziert Risiko, aber Sicherheit haengt auch von Kundenpraxis, Dritten, Nutzern und veraenderlichen Bedrohungen ab."] }
    ] },
    es: { badge: "- Seguridad", title: "Seguridad", intro: "Esta pagina explica como SaaSolution SL aborda seguridad para servicios IT generales, desarrollo de software, soporte, operaciones gestionadas y sistemas de cliente dentro del alcance acordado.", sections: [
      { title: "Enfoque de seguridad", body: ["SaaSolution trata la seguridad como parte de producto, proceso, infraestructura y soporte. Disenamos medidas practicas acordes con servicio, riesgo, entorno del cliente y realidad operativa.", "Las responsabilidades dependen del alcance. SaaSolution responde por medidas dentro de servicios que prestamos o gestionamos. Los clientes siguen responsables de sistemas, hosting, proveedores, cuentas, politicas, usuarios y procesos fuera de ese alcance."] },
      { title: "Medidas tecnicas", bullets: ["Controles de acceso y permisos de least privilege.", "Autenticacion adecuada al servicio y riesgo.", "Cifrado en transito y reposo cuando corresponda y este soportado.", "Configuracion segura, parches, revision de dependencias y separacion de entornos cuando aplique.", "Logs, monitorizacion, backups y recuperacion cuando esten incluidos en alcance.", "Desarrollo seguro, revision de codigo y pruebas adecuadas al proyecto."] },
      { title: "Responsabilidades del cliente", body: ["La seguridad es compartida. Los clientes deben proteger credenciales, gestionar permisos internos, aprobar accesos a tiempo, seguir guias de seguridad, mantener dispositivos y cuentas, e informar riesgos o cambios relevantes.", "Si el cliente usa hosting, dominios, email, infraestructura, plugins, integraciones o SaaS fuera del alcance gestionado por SaaSolution, seguridad y disponibilidad siguen siendo responsabilidad del cliente y proveedores."] },
      { title: "Vulnerabilidades e incidentes", body: ["Si crees haber encontrado un problema de seguridad en sistemas o servicios de SaaSolution, usa Contact o saasupport.com para preocupaciones operativas activas.", "Cuando SaaSolution conoce un incidente sospechado o confirmado dentro de nuestro alcance, evaluamos gravedad, contenemos cuando es posible, investigamos, comunicamos a clientes afectados cuando corresponde y apoyamos recuperacion segun el acuerdo de servicio."] },
      { title: "Backups y sin garantia absoluta", body: ["Backups y recuperacion solo estan incluidos cuando se acuerdan. Si SaaSolution no gestiona hosting, infraestructura, backups o recuperacion, no somos responsables de fallo de backup, perdida de datos o downtime en ese entorno.", "Ningun sistema puede garantizarse perfectamente seguro. SaaSolution reduce riesgo, pero seguridad tambien depende de practicas del cliente, terceros, usuarios y amenazas cambiantes."] }
    ] }
  }
} satisfies Record<string, Record<Locale, LegalDocument>>;
