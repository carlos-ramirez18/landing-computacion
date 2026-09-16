interface SectionTitleProps {
  title: string;
  description?: string;
  /**
   * Etiqueta corta opcional ARRIBA del título. Usar solo cuando aporta
   * orientación real (ej. distinguir dos listados similares en la misma
   * página) — no como decoración por defecto en cada sección.
   */
  kicker?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  title,
  description,
  kicker,
  align = 'left',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {kicker && <p className="mb-2 text-sm font-medium text-steel">{kicker}</p>}
      <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink/70">
          {description}
        </p>
      )}
    </div>
  );
}
