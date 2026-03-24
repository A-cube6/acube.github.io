import type { ReactNode } from "react";

export function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="card feature-card">
      <div className="icon-chip" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="card stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

export function WidePanel({ children }: { children: ReactNode }) {
  return <div className="card wide-panel">{children}</div>;
}
