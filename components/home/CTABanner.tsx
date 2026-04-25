import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1505 0%, #0D0D0D 50%, #0D0D0D 100%)",
        borderTop: "1px solid #2A2A2A",
        borderBottom: "1px solid #2A2A2A",
      }}
      className="section-padding"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span
          style={{ color: "#C9A84C", letterSpacing: "0.25em", fontSize: "11px" }}
          className="font-semibold uppercase block mb-4"
        >
          Ready to Get Started?
        </span>

        <h2
          style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          If You&apos;re Serious About Your Career,
          <br />
          <span style={{ color: "#C9A84C" }}>We&apos;re Serious About You.</span>
        </h2>

        <div
          style={{ width: "48px", height: "2px", background: "#C9A84C", margin: "0 auto 1.5rem" }}
        />

        <p style={{ color: "#9A9A9A" }} className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Roz Clancy Casting works with talent across every medium and skill level.
          If you have the commitment, we have the connections. No shortcuts. No hype.
          Just real opportunities for real professionals.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/talent-submission"
            style={{ background: "#C9A84C", color: "#0D0D0D" }}
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200"
          >
            Submit Your Headshot
          </Link>
          <Link
            href="/contact"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
