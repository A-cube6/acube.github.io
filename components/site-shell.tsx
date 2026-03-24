import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/client-work", label: "Client Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand-mark">
            <span className="brand-mark-dot" />
            <span>
              <strong>Acube Management</strong>
              <small>SAP • Medical Web • Delivery</small>
            </span>
          </Link>

          <nav className="nav-list" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Acube Management</h3>
            <p>
              Practical digital delivery for SAP services, healthcare transformation,
              and clinic-focused business systems.
            </p>
            <p>
              <a href="mailto:mailtoacube@gmail.com">mailtoacube@gmail.com</a>
            </p>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Client example</h4>
            <p>
              Smile &amp; Care dental clinic website and delivery showcase.
            </p>
            <a
              href="https://www.smileandcare.in/"
              target="_blank"
              rel="noreferrer"
            >
              Visit smileandcare.in
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
