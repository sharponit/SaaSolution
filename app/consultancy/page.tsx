import type { Metadata } from 'next';
import Link from 'next/link';
import { DriveLanguageSwitcher } from '../i18n/language-provider';
import { BookingLink } from './booking-link';

export const metadata: Metadata = {
  title: 'IT Consultancy & Custom Software Engineering in Ceuta | SaaSolution',
  description: 'Technology-independent IT consultancy, secure custom software, cybersecurity, multilingual web development and managed infrastructure for Ceuta, Spain and international organisations.',
  keywords: ['IT consultancy Ceuta', 'software development Ceuta', 'custom software engineering', 'cybersecurity consultancy', 'secure web development', 'digital transformation', 'multilingual website development', 'SEO AEO GEO', 'WordPress development Ceuta', 'Drupal development Ceuta'],
  alternates: { canonical: '/consultancy' },
  openGraph: {
    title: 'Strategic IT Consultancy & Secure Software Engineering | SaaSolution',
    description: 'Secure digital ecosystems, engineered around your business and supported for the long term.',
    url: '/consultancy',
    siteName: 'SaaSolutions SL',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Strategic IT Consultancy | SaaSolution', description: 'Technology-independent consultancy and secure software engineering from Ceuta, Spain.' },
};

const pillars = [
  ['01', 'In-house software engineering', 'Core software designed and maintained by the people responsible for its long-term direction.'],
  ['02', 'Cybersecurity by design', 'Security decisions begin with the architecture and continue through delivery and maintenance.'],
  ['03', 'Rapid digital delivery', 'Structured milestones turn an approved brief into a working preview quickly and transparently.'],
  ['04', 'User-centred design', 'Powerful systems with public and administrative experiences people can understand.'],
  ['05', 'Multilingual experiences', 'Consistent digital journeys for local, national and international audiences.'],
  ['06', 'Intelligent discoverability', 'SEO, AEO and GEO built into content structure and technical delivery.'],
  ['07', 'Long-term continuity', 'Managed technical care that keeps software secure, useful and ready to evolve.'],
];

const securityGroups = [
  ['Secure software engineering', ['Secure development lifecycle', 'Security-focused code review', 'Secure authentication and authorisation', 'Role-based access and least privilege', 'Input, session and secrets management']],
  ['Software supply chain', ['Carefully selected dependencies', 'Vulnerability and advisory monitoring', 'Centralised patch management', 'Controlled release cycles', 'Reduction of unnecessary dependencies']],
  ['Infrastructure security', ['Infrastructure hardening', 'Environment and database access controls', 'Encryption in transit', 'Centralised logging and monitoring', 'Incident detection and response capabilities']],
  ['Operational resilience', ['Automated backup policies', 'Recovery and disaster planning', 'Controlled production deployments', 'Rollback capabilities', 'Production and non-production separation']],
];

const journey = [
  ['01', 'Discovery & strategic consultation', 'Together', 'We agree business goals, audiences, functionality, integrations, languages, accessibility, security and project scope.'],
  ['02', 'Brand & design direction', 'Customer approval', 'We review brand assets and references, then establish a visual direction that reflects the business.'],
  ['03', 'Content strategy', 'Customer choice', 'Use customer-provided content or ask SaaSolution to prepare professional copy. All edited or created content requires customer approval.'],
  ['04', 'SEO, AEO & GEO strategy', 'SaaSolution', 'Search, answer and generative discovery requirements shape semantics, content, metadata and structured data from the start.'],
  ['05', 'Working preview', 'Milestone', 'For standard website projects, the first working preview targets three business days after approval and receipt of initial materials.'],
  ['06', 'Review, QA & acceptance', 'Together', 'Responsive, accessibility, functional, security and content checks lead to a documented customer approval checkpoint.'],
  ['07', 'Production & continuity', 'SaaSolution', 'A controlled release is followed by documentation, optional training and the agreed technical maintenance service.'],
];

const comparison = [
  ['Software architecture', 'Predefined templates and platform architecture', 'Custom-engineered around business requirements where appropriate'],
  ['Dependencies', 'Potentially extensive plugin and theme ecosystems', 'Carefully selected and centrally managed dependencies'],
  ['Cybersecurity', 'Depends on configuration and ongoing maintenance', 'Integrated through the agreed development and maintenance lifecycle'],
  ['Technology selection', 'May be restricted to one preferred platform', 'Technology-independent, with a preference for in-house development'],
  ['Administration', 'May include unnecessary or complex functionality', 'Workflows tailored to the responsibilities of real users'],
  ['Integrations', 'Standard platform or plugin integrations', 'Custom and native integrations where appropriate'],
  ['Delivery', 'Varies by provider and scope', 'Visible milestones and defined customer approval checkpoints'],
  ['Discoverability', 'May be handled as a separate service', 'SEO, AEO and GEO integrated into the agreed website scope'],
  ['Handover', 'Documentation varies by agreement', 'Digital user documentation included with every website delivery'],
];

const lifecycle = ['Strategic consultancy', 'Requirements analysis', 'Software architecture', 'Brand & content strategy', 'In-house development', 'Security assessment', 'Quality assurance', 'Customer acceptance', 'Production deployment', 'Documentation & handover', 'Optional personal training', 'Infrastructure management', 'Continuous monitoring', 'Security patching', 'Technical maintenance', 'Continuous improvement'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Strategic IT consultancy and custom software engineering',
  provider: { '@type': 'Organization', name: 'SaaSolutions SL', url: 'https://saasolution.es' },
  areaServed: ['Ceuta', 'Spain', 'International'],
  serviceType: ['IT consultancy', 'Custom software development', 'Cybersecurity consultancy', 'Multilingual web development', 'Managed IT infrastructure'],
  url: 'https://saasolution.es/consultancy',
  description: 'Technology-independent consultancy and secure software engineering for businesses, public institutions and enterprise organisations.',
};

function SectionHeading({ number, kicker, title, intro }: { number: string; kicker: string; title: string; intro?: string }) {
  return <header className="consult-heading"><span>{number}</span><div><p>{kicker}</p><h2>{title}</h2>{intro && <div>{intro}</div>}</div></header>;
}

export default function ConsultancyPage() {
  return (
    <main className="consult-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="consult-nav">
        <Link href="/" className="consult-brand" aria-label="SaaSolutions home">SaaSolutions <sup>SL</sup></Link>
        <nav aria-label="Consultancy page navigation"><a href="#approach">Approach</a><a href="#delivery">Delivery</a><a href="#security">Security</a><a href="#contact">Contact</a></nav>
        <DriveLanguageSwitcher compact />
      </header>

      <section className="consult-hero">
        <div className="consult-hero-copy">
          <p className="consult-kicker">Strategic consultancy · Software engineering · Cybersecurity</p>
          <h1>We don&apos;t just build websites.<br /><em>We engineer secure digital ecosystems.</em></h1>
          <p>SaaSolution combines in-house software engineering, cybersecurity and strategic IT consultancy to build secure, scalable and sustainable digital solutions.</p>
          <div className="consult-actions"><BookingLink className="consult-button primary">Schedule a strategic consultation <span>↗</span></BookingLink><a className="consult-button secondary" href="#delivery">Discover our development process <span>↓</span></a></div>
        </div>
        <aside className="consult-hero-proof" aria-label="Consultancy highlights">
          <div><strong>19+</strong><span>years of professional IT experience brought by the founder</span></div>
          <div><strong>Ceuta</strong><span>built for Spain, designed for international markets</span></div>
          <p>Powerful technology. Intuitive experiences. Secure by design. Built for your business.</p>
        </aside>
      </section>

      <section className="consult-pillars" id="approach" aria-labelledby="pillars-title">
        <SectionHeading number="01" kicker="Why SaaSolution" title="One technology partner. Seven commitments." intro="Our work joins commercial clarity, engineering discipline and long-term technical responsibility." />
        <div className="pillar-grid" id="pillars-title">{pillars.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="consult-split consult-tech">
        <SectionHeading number="02" kicker="Technology independence" title="The right technology for your business. Not the other way around." />
        <div className="consult-prose"><p>Custom software is our preferred approach, but it is not the only answer. We select technology around requirements, objectives, existing infrastructure, security, user experience, scalability, integrations, total cost of ownership and maintainability.</p><p>Where it serves the business, we can implement, maintain or integrate WordPress, Drupal, an existing customer CMS, a headless CMS, hybrid architecture, enterprise systems or a fully custom solution. Established platforms can be professionally managed, secure and user-friendly.</p><div className="tag-list" aria-label="Supported approaches"><span>Custom software</span><span>WordPress</span><span>Drupal</span><span>Headless CMS</span><span>Hybrid systems</span><span>Enterprise integrations</span></div></div>
      </section>

      <section className="consult-dark consult-engineering">
        <SectionHeading number="03" kicker="In-house software engineering" title="Engineered in-house. Built for your business." intro="Direct access to the engineering expertise responsible for your solution." />
        <div className="engineering-grid"><div><h3>Control where it matters</h3><p>Our preferred approach reduces reliance on unnecessary plugins and disconnected vendors while retaining carefully chosen frameworks, libraries, APIs and infrastructure.</p></div><ul><li>Custom architecture and business functionality</li><li>Controlled dependencies and release cycles</li><li>Native integrations with the SaaSolution ecosystem</li><li>Scalable, maintainable software</li><li>Integration with existing business processes</li><li>Continuous technical development</li></ul><div className="engineering-result"><span>The commercial advantage</span><p>Your software can evolve with the business, while maintenance, integrations and future functionality remain coordinated through one technical relationship.</p></div></div>
      </section>

      <section className="consult-security" id="security">
        <SectionHeading number="04" kicker="Cybersecurity by design" title="Security is not an add-on. It is part of our architecture." intro="Cybersecurity begins with the first architectural decision and continues throughout the software lifecycle." />
        <p className="security-note">Widely used components can expose many organisations when vulnerabilities remain unpatched. Custom software is not automatically secure; risk is reduced through disciplined engineering, controlled dependencies and proactive maintenance.</p>
        <div className="security-grid">{securityGroups.map(([title,items]) => <article key={title as string}><span aria-hidden="true">＋</span><h3>{title as string}</h3><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <p className="scope-note">Capabilities depend on the selected architecture and service agreement. No system can guarantee absolute protection against cyberattacks.</p>
        <BookingLink className="consult-inline-link">Discuss your security requirements ↗</BookingLink>
      </section>

      <section className="consult-ux">
        <SectionHeading number="05" kicker="UI, UX & content management" title="Advanced technology. Effortless experience." intro="Powerful behind the scenes. Simple in your hands." />
        <div className="ux-grid"><article><span>Public-facing experience</span><h3>Clear paths for every visitor.</h3><ul><li>Intuitive navigation and responsive layouts</li><li>Fast, accessible and mobile-first interfaces</li><li>Consistent multilingual journeys</li><li>Clear calls to action and friendly forms</li></ul></article><article><span>Administrative experience</span><h3>Built for the people running the business.</h3><ul><li>Clean dashboards and contextual guidance</li><li>Simple text, media and multilingual management</li><li>Preview, drafts and understandable validation</li><li>Role-based access with safeguards for critical functions</li></ul></article></div>
        <p className="consult-callout">Authorised users can manage everyday business content without programming knowledge. Source code, infrastructure, databases, security, dependencies and deployments remain protected technical responsibilities.</p>
      </section>

      <section className="consult-comparison" aria-labelledby="comparison-title">
        <SectionHeading number="06" kicker="A fair comparison" title="Managed engineering, where the project needs it." intro="Platforms such as WordPress and Drupal can also be professionally managed. The difference is how the architecture, lifecycle and customer experience are governed." />
        <div className="comparison-wrap" tabIndex={0} aria-label="Scrollable implementation comparison"><table id="comparison-title"><caption>Typical template-driven implementation compared with SaaSolution&apos;s preferred managed engineering approach</caption><thead><tr><th scope="col">Category</th><th scope="col">Typical approach</th><th scope="col">SaaSolution approach</th></tr></thead><tbody>{comparison.map(([category,typical,ours]) => <tr key={category}><th scope="row">{category}</th><td>{typical}</td><td>{ours}</td></tr>)}</tbody></table></div>
      </section>

      <section className="consult-delivery" id="delivery">
        <SectionHeading number="07" kicker="Rapid digital delivery" title="From concept to launch in as little as two weeks." intro="Structured development, direct collaboration and in-house engineering create short, visible delivery cycles without compromising security, accessibility, quality assurance or customer acceptance." />
        <div className="milestone-grid"><article><strong>3</strong><span>Business days</span><h3>Your first working website preview.</h3><p>Following project approval and receipt of the required initial materials.</p></article><article><strong>10</strong><span>Business days</span><h3>Target production launch.</h3><p>For standard website projects with agreed scope and timely customer approvals.</p></article><article><strong>5</strong><span>Languages</span><h3>Built for Ceuta. Ready for the world.</h3><p>Spanish · English · Dutch · French · Arabic</p></article></div>
        <div className="delivery-conditions"><p>Delivery targets apply to standard website projects after requirements and design direction are agreed, initial materials are received and development is authorised. Complex enterprise software follows a scope-appropriate plan.</p><BookingLink className="consult-button primary">Start your digital transformation <span>↗</span></BookingLink></div>
      </section>

      <section className="consult-journey">
        <SectionHeading number="08" kicker="Customer development journey" title="Your vision. Our engineering. Complete transparency." intro="You stay involved through defined responsibilities, milestones and approval checkpoints." />
        <ol className="journey-list">{journey.map(([n,title,owner,text]) => <li key={n}><span>{n}</span><div><small>{owner}</small><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
      </section>

      <section className="consult-discovery">
        <SectionHeading number="09" kicker="SEO, AEO & GEO" title="Discoverable by people, search engines and AI systems." intro="Online discoverability is part of the agreed website development process—not an afterthought." />
        <div className="discovery-grid"><article><span>SEO</span><h3>Search engine optimisation</h3><p>Semantic HTML, metadata, structured data, internal linking, performance, local and multilingual signals help traditional search engines understand the site.</p></article><article><span>AEO</span><h3>Answer engine optimisation</h3><p>Clear questions, concise factual explanations and accessible information help systems provide useful direct answers.</p></article><article><span>GEO</span><h3>Generative engine optimisation</h3><p>Consistent entities, machine-readable facts and authoritative public content improve interpretability for AI-powered discovery.</p></article></div><p className="scope-note">Optimisation supports discoverability but cannot guarantee rankings or inclusion in generated answers.</p>
      </section>

      <section className="consult-dark consult-dtap">
        <SectionHeading number="10" kicker="Managed infrastructure" title="Controlled from development to production." intro="Environment separation and controls are applied according to the actual architecture and selected service agreement." />
        <ol className="dtap-flow" aria-label="Development, testing, acceptance and production flow"><li><span>01</span><h3>Development</h3><p>New functionality, controlled changes and developer testing.</p></li><li><span>02</span><h3>Testing</h3><p>Functional, integration, regression and security validation.</p></li><li><span>03</span><h3>Acceptance</h3><p>Customer review, pre-production validation and release approval.</p></li><li><span>04</span><h3>Production</h3><p>Controlled deployment, monitoring and technical continuity.</p></li></ol>
        <details className="consult-details"><summary>Explore infrastructure capabilities <span>＋</span></summary><div><p>Where the project requires them: production and non-production isolation, database separation, environment-specific access, centralised logging, infrastructure and performance monitoring, secure configuration, backups, rollback and disaster recovery planning.</p><p>Four workflow stages do not necessarily mean four dedicated physical environments or databases for every small-business website.</p></div></details>
      </section>

      <section className="consult-lifecycle">
        <SectionHeading number="11" kicker="Complete software lifecycle" title="From the first line of code to long-term operational excellence." intro="Delivery begins the relationship; it does not end it." />
        <ol className="lifecycle-grid">{lifecycle.map((item,index) => <li key={item}><span>{String(index + 1).padStart(2,'0')}</span>{item}</li>)}</ol>
        <p className="consult-callout">Long-term support creates value through security, reliability, performance, maintainability and continuity—without artificial lock-in. Customer data ownership, applicable intellectual property terms, reasonable portability and documented transitions remain important.</p>
      </section>

      <section className="consult-responsibilities">
        <SectionHeading number="12" kicker="Clear responsibilities" title="We manage the technology. You manage your business." />
        <div className="responsibility-grid"><article><span>Customer</span><h3>Business & content</h3><ul><li>Business information, products and services</li><li>Images, opening hours and announcements</li><li>Day-to-day content management</li><li>Approval of published information</li><li>Appropriate use of authorised accounts</li></ul></article><article><span>SaaSolution</span><h3>Technology</h3><ul><li>Architecture and controlled deployments</li><li>Cybersecurity and dependency management</li><li>Infrastructure, monitoring and backups</li><li>Technical maintenance and troubleshooting</li><li>According to the agreed service package</li></ul></article><article className="included-card"><span>Included</span><h3>Digital user documentation</h3><p>Clear guidance for everyday website administration is included with every website delivery.</p></article><article><span>Optional & separately paid</span><h3>Additional services</h3><ul><li>Personal training and content assistance</li><li>New content or translations</li><li>Additional functionality and integrations</li><li>Design changes beyond agreed maintenance</li></ul></article></div>
      </section>

      <section className="consult-ecosystem">
        <SectionHeading number="13" kicker="SaaSolution ecosystem" title="Connected software without disconnected thinking." intro="Customers can expand as their business grows without unnecessarily replacing systems that already work." />
        <div className="ecosystem-links"><a href="https://rsviponline.com" target="_blank" rel="noopener">RSViP Online <span>↗</span></a><Link href="/connectgrid">Connection Grid <span>↗</span></Link><Link href="/drive">SaaSolution Drive <span>↗</span></Link><a href="https://hospitalityos.es/en" target="_blank" rel="noopener">hospitalityOS <span>↗</span></a><a href="https://hospitalitytv.es/en" target="_blank" rel="noopener">HospitalityTV <span>↗</span></a></div><p>Native integrations, unified experiences and centralised technical management are available where appropriate. Products are not automatically included in a consultancy or website package.</p>
      </section>

      <section className="consult-markets">
        <article className="market-smb"><span>Small business modernisation</span><h2>Enterprise-grade engineering. Accessible to ambitious businesses.</h2><p>Professional websites, appointment systems, portals, automation, multilingual experiences and intuitive administration for retailers, self-employed professionals, restaurants, hospitality and local service businesses.</p><ul><li>Rapid, transparent delivery milestones</li><li>SEO and AI discovery optimisation</li><li>Included documentation and optional training</li><li>Secure hosting and technical continuity options</li></ul><BookingLink>Let&apos;s modernise your business ↗</BookingLink></article>
        <article className="market-enterprise"><span>Public sector & enterprise</span><h2>Technology built for organisations that cannot compromise on trust.</h2><p>Custom engineering for organisations with complex requirements, guided by digital sovereignty, GDPR-aware architecture, transparent governance, operational resilience, data portability and sustainable infrastructure.</p><p>SaaSolutions SL is a technology company established in Ceuta with international ambitions. We intend to contribute to local transformation, expertise, innovation and future employment without claiming government contracts, partnerships, accreditations or independently verified certifications.</p><BookingLink>Discuss your requirements ↗</BookingLink></article>
      </section>

      <section className="consult-final" id="contact">
        <p>Long-term technology partnership</p><h2>Your business deserves more than a website.<br /><em>It deserves a technology partner.</em></h2><div><p>Build your digital future with a partner that understands software engineering, cybersecurity, rapid development and long-term operational excellence.</p><strong>We manage the technical complexity so you can focus on running your business.</strong></div><div className="consult-actions"><BookingLink className="consult-button primary">Schedule your initial consultation <span>↗</span></BookingLink><Link className="consult-button secondary" href="/#work">Explore our technology solutions <span>↗</span></Link></div>
      </section>

      <footer className="consult-footer"><Link href="/">SaaSolutions SL</Link><p>Strategic consultancy · Secure software engineering · Ceuta, Spain</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="mailto:hello@saasolution.es">Contact</a></div></footer>
    </main>
  );
}
