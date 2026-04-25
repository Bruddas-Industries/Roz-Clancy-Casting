import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Casting, Production & Training",
  description:
    "Roz Clancy Casting & Productions offers full-service casting for commercial, film, TV, voiceover, animation, theater, and corporate video — plus acting & modeling training. Serving NJ and PA.",
};

const services = [
  {
    id: "film-tv",
    label: "Film & TV",
    title: "Film & Television Casting",
    description:
      "From independent features and short films to network television productions, Roz Clancy Casting provides experienced, prepared talent for every genre. Our deep understanding of the NJ/PA production market means we know which actors are ready for the camera — and which ones aren't.",
    details: [
      "Feature films — independent and major studio",
      "Network and cable TV productions",
      "Streaming platform content",
      "Short films and student productions",
      "All genres: drama, comedy, thriller, horror, documentary",
      "Principal roles and supporting cast",
      "Background / extras casting",
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    title: "Commercial Casting",
    description:
      "Commercial casting demands authenticity — audiences can tell the difference between someone who belongs in a spot and someone who doesn't. We match brands with the faces, personalities, and energy that connect.",
    details: [
      "Local, regional, and national ad campaigns",
      "Print advertising and catalog work",
      "Online and social media campaigns",
      "Spokesperson and brand ambassador roles",
      "Product demonstration and testimonial spots",
      "All age groups and demographics",
    ],
  },
  {
    id: "voiceover",
    label: "Voiceover",
    title: "Voiceover & Animation",
    description:
      "The right voice transforms a script. Whether you need a narrator, a character, an announcer, or an animated personality, we source talent with the range and technique to deliver across every medium.",
    details: [
      "Animated series and feature animation",
      "Commercial narration and announcer roles",
      "Audiobook recording",
      "Video game characters",
      "IVR / telephony voice talent",
      "Documentary and educational narration",
      "Broadcast and streaming promos",
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    title: "Corporate & Industrial Video",
    description:
      "Corporate productions — training videos, presentations, safety films, product launches — require reliable talent who can perform professionally on tight schedules. We deliver.",
    details: [
      "Employee training and onboarding videos",
      "Corporate communications and internal messaging",
      "Product demonstration videos",
      "Safety and compliance films",
      "Trade show and presentation content",
      "E-learning and educational media",
    ],
  },
  {
    id: "theater",
    label: "Theater",
    title: "Theater Casting",
    description:
      "Stage work demands performers with genuine presence, vocal technique, and the stamina for live performance. We cast theater productions across the NJ/PA region for companies ranging from community theaters to professional regional houses.",
    details: [
      "Musicals and plays — full productions",
      "Community and amateur theater",
      "Professional and regional theater companies",
      "Cabaret and concert performances",
      "Children's and youth theater",
      "Staged readings and workshop productions",
    ],
  },
  {
    id: "training",
    label: "Training",
    title: "Acting & Modeling Training",
    description:
      "Through the California Modeling, Acting & Finishing School, Roz Clancy offers professional training that prepares talent for real auditions, real bookings, and real careers. Not hobby classes — industry-focused instruction.",
    details: [
      "On-camera acting technique for film and TV",
      "Commercial acting and print modeling",
      "Runway and print modeling training",
      "Finishing school (poise, presentation, professionalism)",
      "Audition preparation and technique",
      "Age groups: children, teens, adults",
      "Beginner through advanced levels",
    ],
  },
  {
    id: "production",
    label: "Production",
    title: "In-House Production Services",
    description:
      "Roz Clancy Casting & Productions offers more than casting — with a full in-house production team, we can support your project from pre-production through final delivery.",
    details: [
      "Full camera crew for on-location and studio shoots",
      "Hair and makeup department",
      "Trailer production and promotional content",
      "Custom monologue writing for actor auditions",
      "Self-tape setup and assistance",
      "Production coordination for NJ/PA projects",
    ],
  },
];

export default function ServicesPage() {
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
              What We Do
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Full-Service Casting
            <br />
            <span style={{ color: "#C9A84C" }}>&amp; Productions</span>
          </h1>
          <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} className="mb-6" />
          <p style={{ color: "#9A9A9A" }} className="text-lg max-w-2xl leading-relaxed">
            From your first audition to your final booking — we handle every facet of the
            casting process with precision and professionalism. Serving NJ and PA.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-2 mt-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  color: "#9A9A9A",
                  padding: "6px 16px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
                className="uppercase font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      <div style={{ background: "#0D0D0D" }}>
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            style={{
              background: i % 2 === 0 ? "#0D0D0D" : "#111111",
              borderBottom: "1px solid #2A2A2A",
            }}
            className="section-padding"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <span
                    style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
                    className="font-semibold uppercase block mb-3"
                  >
                    Service
                  </span>
                  <h2
                    style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  >
                    {service.title}
                  </h2>
                  <div style={{ width: "40px", height: "2px", background: "#C9A84C" }} className="mb-6" />
                  <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    padding: "2rem",
                  }}
                >
                  <h3
                    style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                    className="font-semibold uppercase mb-4"
                  >
                    Includes
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span
                          style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }}
                          className="text-xs"
                        >
                          ◆
                        </span>
                        <span style={{ color: "#D0D0D0" }} className="text-sm leading-relaxed">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section
        style={{ background: "#1A1A1A", borderTop: "1px solid #2A2A2A" }}
        className="py-16"
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Need Casting for Your Production?
          </h2>
          <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed mb-8">
            Productions in the NJ/PA area can contact Roz directly to discuss your
            casting needs. For talent submissions, follow the submission guidelines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              style={{ background: "#C9A84C", color: "#0D0D0D" }}
              className="px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200 inline-block"
            >
              Contact Roz
            </Link>
            <Link
              href="/talent-submission"
              style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
              className="px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-200 inline-block"
            >
              Talent Submission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
