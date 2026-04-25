import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-block font-semibold uppercase tracking-widest transition-all duration-200";

  const styles =
    variant === "primary"
      ? { background: "#C9A84C", color: "#0D0D0D" }
      : { background: "transparent", color: "#C9A84C", border: "1px solid #C9A84C" };

  const hoverClass =
    variant === "primary"
      ? "hover:bg-[#E8C97A]"
      : "hover:bg-[#C9A84C] hover:text-[#0D0D0D]";

  const classes = `${base} ${sizeClasses[size]} ${hoverClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={styles} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={styles} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={styles} className={classes}>
      {children}
    </button>
  );
}
