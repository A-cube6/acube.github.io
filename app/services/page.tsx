import { FeatureCard } from "@/components/cards";
import { Section } from "@/components/section";

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="What Acube Management does"
      description="This page is written as a static company profile. You can later expand each block with process diagrams, screenshots, and solution pages."
    >
      <div className="three-col-grid">
        <FeatureCard
          title="SAP Consulting"
          text="Support for consulting, implementation, enhancements, functional and technical delivery, and practical problem solving around SAP-led transformation needs."
        />
        <FeatureCard
          title="Healthcare system transformation"
          text="Website and digital transformation solutions for clinics and healthcare businesses that need a clean, premium public presence with simple maintenance."
        />
        <FeatureCard
          title="Clinic management softwares"
          text="Digital structure thinking, clinic software uplift, and operational simplification for appointment-oriented healthcare businesses."
        />
      </div>
    </Section>
  );
}
