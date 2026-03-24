import { WidePanel } from "@/components/cards";
import { Section } from "@/components/section";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Replace this with your real business details"
      description="Because this starter is static, contact details are hardcoded for now. Update them directly in this file."
    >
      <WidePanel>
        <div className="contact-grid">
          <div>
            <h3>Acube Management</h3>
            <p>Email: your-email@example.com</p>
            <p>Phone: +61 ...</p>
            <p>Location: Australia</p>
          </div>
          <div>
            <h3>Suggested next upgrade</h3>
            <p>
              Once the site is approved, you can add a contact form using
              Supabase, Formspree, Netlify Forms, or another lightweight backend.
            </p>
          </div>
        </div>
      </WidePanel>
    </Section>
  );
}
