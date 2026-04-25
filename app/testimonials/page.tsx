import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | What Talent & Productions Say About Roz Clancy",
  description:
    "Read what actors, models, parents, and production clients say about working with Roz Clancy Casting & Productions. Real results for committed NJ and PA talent.",
};

const testimonials = [
  {
    quote:
      "Roz doesn't waste your time or hers. She told me exactly what I needed to work on, connected me with the right projects, and within six months I had my first union booking. She's the real deal.",
    name: "M. Patterson",
    role: "Commercial Actor",
    location: "Trenton, NJ",
    initials: "MP",
    category: "Talent",
  },
  {
    quote:
      "I've worked with other casting directors before, but Roz is different. She actually remembers who you are, what your range is, and what you're working toward. That level of personal attention is rare in this industry.",
    name: "D. Fontaine",
    role: "Film & Stage Actor",
    location: "Philadelphia, PA",
    initials: "DF",
    category: "Talent",
  },
  {
    quote:
      "The training program changed how I approach auditions entirely. Practical, no-nonsense instruction that prepared me for actual industry expectations — not just what you hope auditions will be like.",
    name: "A. Reyes",
    role: "Acting & Modeling Student",
    location: "Princeton, NJ",
    initials: "AR",
    category: "Training",
  },
  {
    quote:
      "I've referred three of my clients to Roz. She's professional, thorough, and straightforward. Her submissions have led to real bookings — not callbacks that go nowhere. I trust her judgment.",
    name: "T. Weston",
    role: "Talent Manager",
    location: "NJ/NY",
    initials: "TW",
    category: "Industry",
  },
  {
    quote:
      "My daughter started training with Roz at 14. The discipline she learned — how to prepare, how to present herself, how to handle rejection — has been invaluable beyond just acting. She's a more confident, focused young woman.",
    name: "Parent of K.L.",
    role: "Parent / Student",
    location: "Hamilton, NJ",
    initials: "KL",
    category: "Training",
  },
  {
    quote:
      "We needed a casting director who understood the NJ market and didn't have a Manhattan attitude about it. Roz came through with a roster of candidates that actually matched our production's tone and budget. Extremely professional.",
    name: "Production Company",
    role: "Independent Film Producer",
    location: "New Jersey",
    initials: "PC",
    category: "Production",
  },
  {
    quote:
      "Roz helped me identify that my headshot was costing me opportunities before I even got to the audition. Her direct feedback was hard to hear but exactly right. Three months later I had new photos and two callbacks.",
    name: "J. Horowitz",
    role: "Commercial & Voice Actor",
    location: "Bucks County, PA",
    initials: "JH",
    category: "Talent",
  },
  {
    quote:
      "I appreciated that she was honest with me about my range and what the market would realistically support. That kind of honesty — as opposed to just flattery — is what builds real careers.",
    name: "S. Marchand",
    role: "Theater Actor",
    location: "Lambertville, NJ",
    initials: "SM",
    category: "Talent",
  },
];

const categories = ["All", "Talent", "Training", "Industry", "Production"];

export default function TestimonialsPage() {
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
              Client Stories
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            What Talent &amp; Clients
            <br />
            <span style={{ color: "#C9A84C" }}>Have to Say</span>
          </h1>
          <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} className="mb-6" />
          <p style={{ color: "#9A9A9A" }} className="text-lg max-w-2xl leading-relaxed">
            Real feedback from actors, students, parents, talent managers, and production
            clients who have worked with Roz Clancy Casting &amp; Productions.
          </p>
        </div>
      </section>

      {/* Category labels */}
      <section style={{ background: "#111111", borderBottom: "1px solid #2A2A2A" }} className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                style={{
                  background: cat === "All" ? "#C9A84C" : "#1A1A1A",
                  color: cat === "All" ? "#0D0D0D" : "#9A9A9A",
                  border: "1px solid #2A2A2A",
                  padding: "6px 16px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
                className="uppercase font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section style={{ background: "#0D0D0D" }} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ quote, name, role, location, initials, category }) => (
              <div
                key={name}
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Category badge */}
                <span
                  style={{
                    color: "#C9A84C",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    border: "1px solid #C9A84C",
                    padding: "3px 10px",
                    display: "inline-block",
                    alignSelf: "flex-start",
                    marginBottom: "1.25rem",
                  }}
                  className="uppercase font-semibold"
                >
                  {category}
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  style={{ color: "#D0D0D0" }}
                  className="text-sm leading-relaxed mb-6 italic flex-1"
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div style={{ width: "32px", height: "1px", background: "#C9A84C", marginBottom: "1.25rem" }} />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      background: "#2A2A2A",
                      border: "1px solid #C9A84C",
                      color: "#C9A84C",
                      fontFamily: "var(--font-playfair)",
                      width: "42px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p style={{ color: "#F5F5F5" }} className="text-sm font-semibold">
                      {name}
                    </p>
                    <p style={{ color: "#9A9A9A" }} className="text-xs mt-0.5">
                      {role} &mdash; {location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: "#9A9A9A" }} className="text-sm italic text-center mt-10">
            * Testimonials are representative. Names partially anonymized for privacy where requested.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", borderTop: "1px solid #2A2A2A" }} className="py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Add Your Story?
          </h2>
          <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed mb-8">
            If you&apos;re serious about your career in the NJ/PA market, the first
            step is submitting correctly. Review the guidelines and get started.
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
