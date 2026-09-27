import React from 'react';

/**
 * Reusable editorial Section Heading component
 */
export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = false,
  tagColor = "brand" // brand | teal | purple | amber
}) {
  const tagColorStyles = {
    brand: "text-brand-400 bg-brand-500/10 border-brand-500/20",
    teal: "text-tealAccent-400 bg-tealAccent-500/10 border-tealAccent-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  };

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {tag && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border mb-4 ${tagColorStyles[tagColor] || tagColorStyles.brand}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
