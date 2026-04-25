import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Film & TV Casting",
    description:
      "From independent films to major network productions, we cast talent at every level for all genres — drama, comedy, thriller, and beyond.",
    href: "/services#film-tv",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Commercial Casting",
    description:
      "We connect brands with the right faces, voices, and personalities. Our commercial casting experience spans local, regional, and national campaigns.",
    href: "/services#commercial",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: "Voiceover & Animation",
    description:
      "Characters, narrators, announcers — we source the voices that bring scripts and animations to life across broadcast, digital, and streaming platforms.",
    href: "/services#voiceover",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Corporate & Industrial",
    description:
      "Training videos, corporate presentations, and industrial films require reliable, professional talent. We deliver the right people every time.",
    href: "/services#corporate",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M4 20V8l8-6 8 6v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    title: "Theater Casting",
    description:
      "Stage productions demand performers with presence and technique. We cast productions across the NJ/PA region for theater companies large and small.",
    href: "/services#theater",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Acting & Modeling Training",
    description:
      "Through our California Modeling, Acting & Finishing School, we prepare talent to compete professionally — with discipline, skill, and real industry knowledge.",
    href: "/services#training",
  },
];

export default function ServicesOverview() {
  return (
    <section
      style={{ background: "#0D0D0D" }}
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What We Do"
          title="Full-Service Casting & Production"
          subtitle="From first audition to final call — we handle every facet of the casting process with precision and professionalism."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
