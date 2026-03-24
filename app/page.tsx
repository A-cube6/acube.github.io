import Link from "next/link";
import { FeatureCard, StatCard, WidePanel } from "@/components/cards";
import { Section } from "@/components/section";

const services = [
  {
    title: "SAP Services",
    text: "Implementation support, enhancements, integration thinking, and practical business-aligned SAP delivery.",
  },
  {
    title: "Medical Website Solutions",
    text: "Premium, modern websites for clinics and healthcare businesses with a simple, trustworthy user experience.",
  },
  {
    title: "Clinic Simplified Management",
    text: "Lean digital workflows, service design, and scalable website foundations for clinics and healthcare operators.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Official website starter</span>
            <h1>Build business systems that actually work.</h1>
            <p className="hero-copy">
              Acube Management delivers SAP services, medical website
              solutions, and streamlined digital delivery for clinic-focused
              businesses.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="button button-primary">
                Explore services
              </Link>
              <Link href="/client-work" className="button button-secondary">
                View client work
              </Link>
            </div>
          </div>

          <div className="hero-panel card">
            <p className="hero-panel-label">Core focus</p>
            <ul className="hero-list">
              <li>SAP consulting and delivery support</li>
              <li>Medical website business solutions</li>
              <li>Clinic systems and digital presence</li>
              <li>Featured client work: Smile &amp; Care</li>
            </ul>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What we do"
        title="Three focused service pillars"
        description="Keep the homepage sharp and business-oriented. You can later expand each pillar into detailed service pages or case studies."
      >
        <div className="three-col-grid">
          {services.map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Client work"
        title="A live implementation example"
        description="Use this section to highlight real work and create instant trust for visitors who want proof of execution."
        tone="panel"
      >
        <WidePanel>
          <div className="split-panel">
            <div>
              <span className="chip">Smile &amp; Care</span>
              <h3>Dental clinic website and operational delivery showcase</h3>
              <p>
                Smile &amp; Care demonstrates Acube Management&apos;s ability to
                build a premium clinic-facing website with clear service
                positioning, structured content, and future-ready business flow.
              </p>
              <a
                href="https://www.smileandcare.in/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open live client site
              </a>
            </div>

            <div className="mini-stats">
              <StatCard label="Site type" value="Clinic website" />
              <StatCard label="Delivery style" value="Lean + scalable" />
              <StatCard label="Pattern" value="Modern static-first" />
            </div>
          </div>
        </WidePanel>
      </Section>

      <Section
        eyebrow="Why Acube"
        title="Practical delivery over decorative promises"
        description="This website is intentionally simple. It positions the business clearly and stays easy to maintain as a static build."
      >
        <div className="two-col-grid">
          <FeatureCard
            title="Business-first approach"
            text="The website focuses on what the company delivers, not on filler copy or unnecessary effects."
          />
          <FeatureCard
            title="Built for future expansion"
            text="You can later plug in contact flows, Supabase-backed content, case studies, and other backend features."
          />
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="Ready for GitHub Pages first, custom domain later"
        description="This starter is structured to run locally in VS Code, deploy through GitHub Actions, and then be switched to your domain when you are ready."
      >
        <div className="cta-band">
          <div>
            <h3>Start with a clean foundation.</h3>
            <p>
              Edit the content, push to your public repo, enable GitHub Pages,
              and connect the custom domain when the site is approved.
            </p>
          </div>
          <Link href="/contact" className="button button-primary">
            Edit contact section
          </Link>
        </div>
      </Section>
    </>
  );
}
