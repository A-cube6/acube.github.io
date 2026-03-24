import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "panel";
}) {
  return (
    <section className={`section ${tone === "panel" ? "section-panel" : ""}`}>
      <div className="container">
        <div className="section-head">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
