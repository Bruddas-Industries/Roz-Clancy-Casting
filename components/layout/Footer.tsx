import Link from "next/link";

const services = [
  { href: "/services#commercial", label: "Commercial Casting" },
  { href: "/services#film-tv", label: "Film & TV Casting" },
  { href: "/services#voiceover", label: "Voiceover & Animation" },
  { href: "/services#corporate", label: "Corporate & Industrial" },
  { href: "/services#theater", label: "Theater Casting" },
  { href: "/services#training", label: "Acting & Modeling Training" },
  { href: "/services#production", label: "Production Services" },
];

const quickLinks = [
  { href: "/about", label: "About Roz" },
  { href: "/services", label: "Services" },
  { href: "/talent-submission", label: "Talent Submission" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#0A0A0A", borderTop: "1px solid #2A2A2A" }}
      className="pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span
                style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                className="text-xl font-bold tracking-wide uppercase"
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
            <p style={{ color: "#9A9A9A" }} className="text-sm leading-relaxed mt-3">
              New Jersey&apos;s trusted casting director for commercial, film, TV,
              voiceover, and theater. Serving NJ &amp; PA.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/RozClancyCastingProductions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roz Clancy Casting on Facebook"
                style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
                className="inline-flex items-center justify-center w-9 h-9 hover:border-[#C9A84C] transition-colors duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#C9A84C"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{ color: "#C9A84C", letterSpacing: "0.1em" }}
              className="text-xs font-semibold uppercase mb-4"
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "#9A9A9A" }}
                    className="text-sm hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{ color: "#C9A84C", letterSpacing: "0.1em" }}
              className="text-xs font-semibold uppercase mb-4"
            >
              Services
            </h3>
            <ul className="space-y-2">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "#9A9A9A" }}
                    className="text-sm hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{ color: "#C9A84C", letterSpacing: "0.1em" }}
              className="text-xs font-semibold uppercase mb-4"
            >
              Contact
            </h3>
            <ul className="space-y-3" style={{ color: "#9A9A9A" }}>
              <li className="text-sm">
                <span className="block text-xs uppercase tracking-wide mb-0.5" style={{ color: "#C9A84C" }}>
                  Address
                </span>
                206 Scotch Road, Glen Roc Plaza
                <br />
                Ewing Township, NJ 08628
              </li>
              <li className="text-sm">
                <span className="block text-xs uppercase tracking-wide mb-0.5" style={{ color: "#C9A84C" }}>
                  Phone
                </span>
                <a
                  href="tel:6097376955"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  (609) 737-6955
                </a>
              </li>
              <li className="text-sm">
                <span className="block text-xs uppercase tracking-wide mb-0.5" style={{ color: "#C9A84C" }}>
                  Email
                </span>
                <a
                  href="mailto:rozclancy@hotmail.com"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  rozclancy@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #2A2A2A" }} className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p style={{ color: "#9A9A9A" }} className="text-xs">
              &copy; {new Date().getFullYear()} Roz Clancy Casting &amp; Productions. All rights reserved.
            </p>
            <p style={{ color: "#9A9A9A" }} className="text-xs text-center md:text-right max-w-sm">
              Casting submissions accepted by mail only. No unsolicited calls or walk-ins.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
