import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section style={{ background: "#111111" }} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                aspectRatio: "4/5",
                maxHeight: "520px",
                position: "relative",
                overflow: "hidden",
              }}
              className="w-full"
            >
              {/* Cinematic placeholder with initials */}
              <div
                style={{
                  background:
                    "radial-gradient(ellipse at center, #2a2005 0%, #0D0D0D 100%)",
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "#C9A84C",
                    fontSize: "72px",
                    fontWeight: 700,
                    opacity: 0.3,
                    lineHeight: 1,
                  }}
                >
                  RC
                </span>
                <span
                  style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.2em" }}
                  className="uppercase"
                >
                  Photo Placeholder
                </span>
              </div>
            </div>

            {/* Gold accent border */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "60%",
                height: "60%",
                border: "2px solid #C9A84C",
                opacity: 0.25,
                zIndex: 0,
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
              className="font-semibold uppercase block mb-3"
            >
              About Roz
            </span>
            <h2
              style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              The Casting Director
              <br />
              Who Tells It Straight
            </h2>
            <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} className="mb-6" />

            <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed mb-6">
              Roz Clancy has spent decades building a reputation in the New Jersey and
              Pennsylvania entertainment industry as someone who delivers — for productions
              and for talent. She doesn&apos;t believe in stringing people along, padding
              portfolios, or making empty promises.
            </p>
            <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed mb-8">
              If you have the drive to improve and the discipline to show up, Roz will
              work with you. If you&apos;re looking for shortcuts, you&apos;re in the wrong place.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: "3px solid #C9A84C",
                paddingLeft: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <p
                style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                className="text-xl italic leading-relaxed"
              >
                &ldquo;We only work with people who are committed to improving,
                learning, and growing their careers. Full stop.&rdquo;
              </p>
              <footer style={{ color: "#C9A84C" }} className="text-sm font-semibold mt-3 uppercase tracking-wide">
                — Roz Clancy, Casting Director & CEO
              </footer>
            </blockquote>

            <Link
              href="/about"
              style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
              className="inline-block px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-200"
            >
              Meet Roz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
