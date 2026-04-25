import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Roz Clancy | NJ Casting Director",
  description:
    "Meet Roz Clancy — experienced casting director and CEO of Roz Clancy Casting & Productions. Decades of casting experience in NJ and PA for commercial, film, TV, and theater.",
};

const credentials = [
  "Listed on Backstage Casting Director Database",
  "Registered with NYCastings",
  "Casting Directors List verified professional",
  "SAG-AFTRA compatible submissions",
  "In-house production team (camera, hair & makeup)",
  "Talent range: Babies through seniors",
  "Serving NJ & PA since the 1990s",
];

const noBS = [
  {
    heading: "We don't string people along.",
    body: "If you're not right for a project, you'll hear it directly. Roz believes honesty accelerates careers faster than flattery.",
  },
  {
    heading: "We only work with committed talent.",
    body: "No half-measures. If you're not prepared to put in the work, we're not the right fit. That goes for acting classes, auditions, and submissions alike.",
  },
  {
    heading: "We deliver for productions.",
    body: "Directors and producers trust Roz because she doesn't waste their time. Every submission is intentional and qualified.",
  },
  {
    heading: "We grow careers, not egos.",
    body: "The goal is to get you booked — not to sell you unnecessary services or inflate your expectations. Real results for real professionals.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse at 40% 50%, #1a1505 0%, #0D0D0D 70%)",
          borderBottom: "1px solid #2A2A2A",
        }}
        className="section-padding"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.25em", fontSize: "11px" }}
              className="font-semibold uppercase"
            >
              About Roz
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            The Casting Director
            <br />
            <span style={{ color: "#C9A84C" }}>Who Tells It Straight</span>
          </h1>
          <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} className="mb-6" />
          <p style={{ color: "#9A9A9A" }} className="text-lg max-w-2xl leading-relaxed">
            Decades of experience casting commercial, film, TV, voiceover, and theater talent
            across New Jersey and Pennsylvania.
          </p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section style={{ background: "#111111" }} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2">
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  aspectRatio: "3/4",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "radial-gradient(ellipse at center, #2a2005 0%, #0D0D0D 100%)",
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "#C9A84C",
                      fontSize: "80px",
                      fontWeight: 700,
                      opacity: 0.25,
                      lineHeight: 1,
                    }}
                  >
                    RC
                  </span>
                  <span
                    style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.2em" }}
                    className="uppercase"
                  >
                    Photo Coming Soon
                  </span>
                </div>
              </div>

              {/* Credentials list */}
              <div
                style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", padding: "1.5rem" }}
                className="mt-4"
              >
                <h3
                  style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                  className="font-semibold uppercase mb-4"
                >
                  Credentials &amp; Affiliations
                </h3>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span style={{ color: "#C9A84C", marginTop: "3px" }} className="text-xs">✓</span>
                      <span style={{ color: "#9A9A9A" }} className="text-sm">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-3">
              <span
                style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
                className="font-semibold uppercase block mb-3"
              >
                Biography
              </span>
              <h2
                style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                className="text-3xl font-bold mb-4"
              >
                Roz Clancy
              </h2>
              <p style={{ color: "#C9A84C" }} className="text-sm font-medium uppercase tracking-wide mb-6">
                CEO &amp; Casting Director — Roz Clancy Casting &amp; Productions
              </p>

              <div className="space-y-5" style={{ color: "#9A9A9A" }}>
                <p className="leading-relaxed">
                  Based in Ewing Township, New Jersey, Roz Clancy has spent decades at the center
                  of the NJ/PA entertainment industry. As both a casting director and the founder
                  of the California Modeling, Acting &amp; Finishing School, she brings a rare
                  dual perspective: what productions need from their talent, and what talent needs
                  to be competitive.
                </p>
                <p className="leading-relaxed">
                  Roz&apos;s casting expertise spans the full range of media — commercial, film,
                  television, voiceover, animation, industrial/corporate video, and live theater.
                  Her talent roster covers every age group, from babies and children to seniors,
                  and every experience level, from first-time actors to seasoned union professionals.
                </p>
                <p className="leading-relaxed">
                  With an in-house production team that includes a full camera crew and hair &amp;
                  makeup department, Roz Clancy Casting &amp; Productions is also equipped to
                  support productions beyond casting — including trailer production and custom
                  monologue writing for actors preparing for major auditions.
                </p>
                <p className="leading-relaxed">
                  Roz is listed on Backstage, NYCastings, the Casting Directors List, and
                  other industry databases. Her submissions are professional, intentional, and
                  built on her personal assessment of each actor&apos;s readiness and fit.
                </p>
              </div>

              <blockquote
                style={{
                  borderLeft: "3px solid #C9A84C",
                  paddingLeft: "1.5rem",
                  margin: "2.5rem 0",
                }}
              >
                <p
                  style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                  className="text-xl italic leading-relaxed"
                >
                  &ldquo;Roz doesn&apos;t have time for half-measures —
                  and neither should you.&rdquo;
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  style={{ background: "#C9A84C", color: "#0D0D0D" }}
                  className="px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200"
                >
                  Our Services
                </Link>
                <Link
                  href="/talent-submission"
                  style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
                  className="px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-200"
                >
                  Submit Your Headshot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No BS Philosophy */}
      <section style={{ background: "#0D0D0D" }} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
              className="font-semibold uppercase block mb-3"
            >
              The Approach
            </span>
            <h2
              style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              The No BS Philosophy
            </h2>
            <div style={{ width: "48px", height: "2px", background: "#C9A84C", margin: "0 auto" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noBS.map(({ heading, body }) => (
              <div
                key={heading}
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  borderLeft: "3px solid #C9A84C",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                  className="text-xl font-semibold mb-3"
                >
                  {heading}
                </h3>
                <p style={{ color: "#9A9A9A" }} className="text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: "#111111", borderTop: "1px solid #2A2A2A" }}
        className="py-16"
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Work Together?
          </h2>
          <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed mb-8">
            If you&apos;re serious about your career in the NJ/PA entertainment market, Roz
            Clancy Casting is the place to start. Review our submission guidelines and
            take the first step.
          </p>
          <Link
            href="/talent-submission"
            style={{ background: "#C9A84C", color: "#0D0D0D" }}
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200 inline-block"
          >
            Submission Guidelines
          </Link>
        </div>
      </section>
    </>
  );
}
