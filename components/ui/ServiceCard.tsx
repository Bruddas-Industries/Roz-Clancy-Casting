import Link from "next/link";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const inner = (
    <div
      style={{
        background: "#1A1A1A",
        border: "1px solid #2A2A2A",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      className="p-8 h-full flex flex-col group hover:border-[#C9A84C]"
    >
      <div
        style={{ color: "#C9A84C" }}
        className="mb-5 text-3xl"
      >
        {icon}
      </div>
      <h3
        style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
        className="text-xl font-semibold mb-3 group-hover:text-[#C9A84C] transition-colors duration-200"
      >
        {title}
      </h3>
      <p style={{ color: "#9A9A9A" }} className="text-sm leading-relaxed flex-1">
        {description}
      </p>
      {href && (
        <div className="mt-6">
          <span
            style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
            className="uppercase font-semibold group-hover:underline"
          >
            Learn More →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{inner}</Link>;
  }

  return <div className="h-full">{inner}</div>;
}
