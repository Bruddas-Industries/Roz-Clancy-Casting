"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/talent-submission", label: "Talent Submission" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{ borderBottom: "1px solid #2A2A2A", background: "#0D0D0D" }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-xl font-bold tracking-wide uppercase group-hover:text-[#C9A84C] transition-colors duration-200"
          >
            Roz Clancy
          </span>
          <span
            style={{ color: "#C9A84C", letterSpacing: "0.15em" }}
            className="text-[10px] font-medium uppercase"
          >
            Casting &amp; Productions
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: active ? "#C9A84C" : "#F5F5F5",
                    borderBottom: active
                      ? "1px solid #C9A84C"
                      : "1px solid transparent",
                  }}
                  className="text-sm font-medium tracking-wide uppercase pb-0.5 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-200"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/talent-submission"
          style={{ background: "#C9A84C", color: "#0D0D0D" }}
          className="hidden lg:inline-block px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200"
        >
          Submit Headshot
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            style={{ background: "#C9A84C" }}
            className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            style={{ background: "#C9A84C" }}
            className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            style={{ background: "#C9A84C" }}
            className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{ background: "#1A1A1A", borderTop: "1px solid #2A2A2A" }}
          className="lg:hidden px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{ color: active ? "#C9A84C" : "#F5F5F5" }}
                className="text-sm font-medium uppercase tracking-widest hover:text-[#C9A84C] transition-colors duration-200 py-2"
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/talent-submission"
            onClick={() => setMobileOpen(false)}
            style={{ background: "#C9A84C", color: "#0D0D0D" }}
            className="mt-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#E8C97A] transition-colors duration-200"
          >
            Submit Your Headshot
          </Link>
        </div>
      )}
    </header>
  );
}
