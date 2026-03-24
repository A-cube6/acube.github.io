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
          title="SAP Services"
          text="Support for implementation, enhancements, functional and technical delivery, and practical problem solving around SAP-focused business needs."
        />
        <FeatureCard
          title="Medical Website Business"
          text="Website design and delivery for clinics and medical businesses that need a clean, premium public presence with simple maintenance."
        />
        <FeatureCard
          title="Clinic Simplistic Management"
          text="Digital structure thinking for appointment-oriented and clinic-facing businesses where operational simplicity matters."
        />
      </div>
    </Section>
  );
}
