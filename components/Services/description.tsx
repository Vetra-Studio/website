interface ServiceDescriptionProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ServiceDescription({
  title = "I nostri servizi",
  description = "Offriamo soluzioni complete per ogni esigenza. Qualità, competenza e attenzione ai dettagli ci distinguono",
  className = "",
}: ServiceDescriptionProps) {
  return (
    <div className={`flex flex-col items-start gap-4 max-w-2xl ${className}`}>
      {/* Sottotitolo / Titolo Sezione con gradiente arancione */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent leading-tight tracking-tight">
        {title}
      </h2>

      {/* Descrizione grigia */}
      <p className="text-lg sm:text-xl md:text-2xl text-light-gray-text leading-relaxed">
        {description}
      </p>
    </div>
  );
}