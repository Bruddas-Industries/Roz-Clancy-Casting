import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #1a1505 0%, #0D0D0D 65%)",
        minHeight: "calc(100vh - 80px)",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex items-center"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#2A2A2A 1px, transparent 1px), linear-gradient(90deg, #2A2A2A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.15,
        }}
      />

      {/* Gold vertical accent line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "8%",
          top: 0,
          bottom: 0,
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, #C9A84C 30%, #C9A84C 70%, transparent)",
          opacity: 0.3,
        }}
        className="hidden xl:block"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.25em", fontSize: "11px" }}
              className="font-semibold uppercase"
            >
              Ewing, NJ &mdash; Serving NJ &amp; PA
            </span>
          </div>

          {/* Main heading */}
          <h1
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5", lineHeight: 1.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Serious Casting.{" "}
            <br />
            Serious Talent.
          </h1>

          {/* Gold accent line */}
          <p
            style={{ color: "#C9A84C", fontFamily: "var(--font-playfair)" }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold italic mb-8"
          >
            No Exceptions.
          </p>

          {/* Tagline */}
          <p
            style={{ color: "#9A9A9A", maxWidth: "560px" }}
            className="text-lg md:text-xl leading-relaxed mb-10"
          >
            New Jersey &amp; Pennsylvania&apos;s trusted casting director for commercial,
            film, TV, voiceover, and theater. We only work with talent who are
            committed to growing their career.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/talent-submission"
              style={{ background: "#C9A84C", color: "#0D0D0D" }}
              className="px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200"
            >
              Submit Your Headshot
            </Link>
            <Link
              href="/services"
              style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
              className="px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-200"
            >
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{ borderTop: "1px solid #2A2A2A" }}
            className="mt-14 pt-10 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { value: "30+", label: "Years Experience" },
              { value: "NJ & PA", label: "Region Served" },
              { value: "All Ages", label: "Babies to Seniors" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  style={{ fontFamily: "var(--font-playfair)", color: "#C9A84C" }}
                  className="text-2xl md:text-3xl font-bold"
                >
                  {value}
                </p>
                <p style={{ color: "#9A9A9A" }} className="text-xs uppercase tracking-widest mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
