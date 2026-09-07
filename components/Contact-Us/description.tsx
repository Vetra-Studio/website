interface WorksDescriptionProps {
  title?: string;
  description?: string;
  bottomDescription?: string;
  className?: string;
}

export default function WorksDescription({
  title = "Contattaci",
  description = "Siamo qui per ascoltarti",
  bottomDescription = "Hai in mente o vuoi maggiori informazioni sui nostri servizi? Compila il modulo o contattaci direttamente. Ti risponderemo al più presto.",
  className = "",
}: WorksDescriptionProps) {
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

      {/* Descrizione inferiore */}
      <p className="text-base sm:text-lg md:text-xl text-light-gray-text leading-relaxed">
        {bottomDescription}
      </p>
    </div>
  );
}