import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

/* ─── CTA Button ─── */
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-600";

  const variants = {
    primary: "bg-stone-900 text-white hover:bg-cyan-800 active:scale-[0.98]",
    secondary: "bg-cyan-50 text-cyan-900 border border-cyan-200 hover:bg-cyan-100",
    outline: "bg-white text-stone-900 border border-stone-200 hover:border-stone-400",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs tracking-wide",
    md: "px-7 py-3 text-sm tracking-wide",
    lg: "px-9 py-4 text-sm tracking-wider",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/* ─── Section Wrapper ─── */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "stone" | "dark";
}

export function Section({ children, className = "", id, bg = "white" }: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    stone: "bg-stone-50",
    dark: "bg-stone-900 text-white",
  };

  return (
    <section id={id} className={`py-20 lg:py-28 ${backgrounds[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

/* ─── Section Header ─── */
interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeader({ tag, title, description, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-14 lg:mb-20 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {tag && (
        <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-50 border border-cyan-100 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-stone-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

/* ─── Compliance Badge ─── */
export function ComplianceBadge({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
      <ShieldCheck size={20} className="text-emerald-600 shrink-0 mt-0.5" />
      <p className="text-sm text-emerald-800 font-medium leading-relaxed">{text}</p>
    </div>
  );
}

/* ─── JSON-LD Script ─── */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── CTA Banner ─── */
export function CTABanner({
  title = "¿Listo para el siguiente paso?",
  description = "Habla con nuestro equipo sin compromiso.",
  cta = "Agendar Llamada",
  href = "/contacto",
}: {
  title?: string;
  description?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <Section bg="stone">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 mb-5">
          {title}
        </h2>
        <p className="text-lg text-stone-500 mb-10">{description}</p>
        <Button href={href} size="lg">
          {cta}
          <ArrowRight size={18} />
        </Button>
      </div>
    </Section>
  );
}
