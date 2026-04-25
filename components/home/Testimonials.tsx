import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Roz doesn't waste your time or hers. She told me exactly what I needed to work on, connected me with the right projects, and within six months I had my first union booking. She's the real deal.",
    name: "M. Patterson",
    role: "Commercial Actor, NJ",
    initials: "MP",
  },
  {
    quote:
      "I've worked with other casting directors before, but Roz is different. She actually remembers who you are, what your range is, and what you're working toward. That level of attention is rare.",
    name: "D. Fontaine",
    role: "Film & Stage Actor, PA",
    initials: "DF",
  },
  {
    quote:
      "The training program through Roz's school changed how I approach auditions entirely. Practical, no-nonsense instruction that prepared me for actual industry expectations.",
    name: "A. Reyes",
    role: "Acting & Modeling Student, NJ",
    initials: "AR",
  },
  {
    quote:
      "I've referred three of my clients to Roz. She's professional, thorough, and straightforward. Her submissions have led to real bookings — not callbacks that go nowhere.",
    name: "T. Weston",
    role: "Talent Manager, NJ/NY",
    initials: "TW",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#0D0D0D" }} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="What Talent & Clients Say"
          subtitle="Don't take our word for it — here's what people who've worked with Roz have to say."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map(({ quote, name, role, initials }) => (
            <div
              key={name}
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                padding: "2rem",
              }}
            >
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
                className="text-sm leading-relaxed mb-6 italic"
              >
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    background: "#2A2A2A",
                    border: "1px solid #C9A84C",
                    color: "#C9A84C",
                    fontFamily: "var(--font-playfair)",
                    width: "40px",
                    height: "40px",
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
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p style={{ color: "#9A9A9A" }} className="text-sm mb-4 italic">
            * Testimonials shown are representative examples. Names partially anonymized for privacy.
          </p>
          <Link
            href="/testimonials"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
            className="inline-block px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-200"
          >
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
