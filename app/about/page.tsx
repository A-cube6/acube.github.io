import { FeatureCard } from "@/components/cards";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="A lean and practical company website"
      description="Acube Management is positioned here as a delivery-led business with focus on SAP services, medical websites, and streamlined clinic-oriented digital solutions."
    >
      <div className="two-col-grid">
        <FeatureCard
          title="Delivery-led"
          text="The positioning stays practical and implementation-oriented rather than vague or corporate-heavy."
        />
        <FeatureCard
          title="Designed to evolve"
          text="This static foundation is intentionally simple, so future additions like case studies, forms, or Supabase-backed sections remain easy to add."
        />
      </div>
    </Section>
  );
}
