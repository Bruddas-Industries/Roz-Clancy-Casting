type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {label && (
        <span
          style={{ color: "#C9A84C", letterSpacing: "0.2em" }}
          className="text-xs font-semibold uppercase mb-3"
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          color: light ? "#F5F5F5" : "#F5F5F5",
        }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
      >
        {title}
      </h2>
      <div
        style={{
          width: "48px",
          height: "2px",
          background: "#C9A84C",
          marginTop: "1rem",
          marginBottom: subtitle ? "1.25rem" : "0",
        }}
      />
      {subtitle && (
        <p
          style={{ color: "#9A9A9A" }}
          className="text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
