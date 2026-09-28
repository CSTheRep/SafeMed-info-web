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
    brand: "text-[#A94444] bg-[#F7E3E3] border-[#E8A3A3]",
    teal: "text-[#A94444] bg-[#F7E3E3] border-[#E8A3A3]",
    purple: "text-[#8E44AD] bg-[#F4ECF7] border-[#D7BDE2]",
    amber: "text-[#B7791F] bg-[#FEFCBF] border-[#F6E05E]"
  };

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {tag && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border mb-4 ${tagColorStyles[tagColor] || tagColorStyles.brand}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#302B2B] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#6B6260] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
