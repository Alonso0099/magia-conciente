type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <div className="space-y-5 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted-soft)]">
        {eyebrow}
      </p>

      <h1 className="text-4xl leading-none sm:text-5xl md:text-6xl">{title}</h1>

      {intro && (
        <p className="mx-auto max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
          {intro}
        </p>
      )}

      {children}
    </div>
  );
}
