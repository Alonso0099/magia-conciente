type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionIntroProps) {
  return (
    <div className={centered ? "space-y-4 text-center" : "space-y-4"}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl">{title}</h2>

      {description && (
       <p
            className={`text-sm leading-7 text-white/70 sm:text-base md:text-lg ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}