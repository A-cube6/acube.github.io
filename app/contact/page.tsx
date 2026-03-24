import { WidePanel } from "@/components/cards";
import { Section } from "@/components/section";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact Us"
      title="Please provide your details and we’ll put you in touch with the right person"
      description=""
    >
      <WidePanel>
        <div className="contact-grid">
          <div>
            <h3>Australia</h3>
            <p>
              <a href="mailto:mailtoacube@gmail.com" className="text-link">
                mailtoacube@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:0424664131" className="text-link">
                0424664131
              </a>
            </p>
          </div>
          <div>
            <h3>Contact prompt</h3>
            <p>
              Please provide your details and we&apos;ll put you in touch with the
              right person.
            </p>
          </div>
        </div>
      </WidePanel>
    </Section>
  );
}
