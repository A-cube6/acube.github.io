import { WidePanel } from "@/components/cards";
import { Section } from "@/components/section";

export default function ClientWorkPage() {
  return (
    <Section
      eyebrow="Client work"
      title="Featured implementation"
      description="Keep this page short initially. Once the site is live, you can later expand it into a full case study format with screenshots and implementation notes."
    >
      <WidePanel>
        <div className="stack-gap">
          <span className="chip">Smile &amp; Care</span>
          <h3>smileandcare.in</h3>
          <p>
            A healthcare-focused website delivery example showing Acube
            Management&apos;s ability to present services clearly, structure a clean
            user journey, and build a future-ready digital foundation.
          </p>
          <a
            href="https://www.smileandcare.in/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Visit live site
          </a>
        </div>
      </WidePanel>
    </Section>
  );
}
