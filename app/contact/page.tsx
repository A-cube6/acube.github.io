import { WidePanel } from "@/components/cards";
import { Section } from "@/components/section";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact Team"
      title="Please provide your details and we’ll put you in touch with the right person"
      description=""
    >
      <WidePanel>
        <div className="contact-grid">
          <div className="contact-details stack-gap">
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
              <h3>Contact Team</h3>
              <p>
                Fill out the short form and your enquiry will be sent straight to our
                team inbox.
              </p>
              <p>
                This static website uses a form delivery service, so the inbox owner may
                need to complete a one-time email confirmation before the form starts
                forwarding submissions.
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/mailtoacube@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_subject" value="New enquiry from Acube Management website" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden-field" tabIndex={-1} autoComplete="off" />

            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" />
            </div>

            <div className="form-field">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows={5} required />
            </div>

            <button type="submit" className="button button-primary">
              Send enquiry
            </button>
          </form>
        </div>
      </WidePanel>
    </Section>
  );
}
