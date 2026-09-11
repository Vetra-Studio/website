// app/servizi/page.tsx

import Icon from "@/components/Icon";
import Information from "@/components/Contact-Us/information";
import WhyContactUs from "@/components/Reasons";


export default function ServiziPage({
  title = "Contattaci",
  description = "Siamo qui per ascoltarti",
  bottomDescription = "Hai in mente o vuoi maggiori informazioni sui nostri servizi? Compila il modulo o contattaci direttamente. Ti risponderemo al più presto.",
}) {
  return (
    <main className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonna Sinistra: Testi */}
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          {/* Sottotitolo / Titolo Sezione con gradiente arancione */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight
                        bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent"
                        >
            {title}
          </h1>

          {/* Descrizione grigia */}
          <p className="text-lg sm:text-xl md:text-2xl 
                        text-light-gray-text leading-relaxed"
                        >
            {description}
          </p>

          {/* Descrizione inferiore */}
          <p className="text-base sm:text-lg md:text-xl 
                        text-light-gray-text leading-relaxed
                        mb-4"
                        >
            {bottomDescription}
          </p>
        </div>

        {/* Colonna Destra: Grafica Logo con Sfocatura */}
        <div className="flex justify-center">
          <Icon />
        </div>

      </div>

      {/* Sezione Informazioni */}
      <Information />
      
      {/* Sezione "Perché" completamente esterna e indipendente */}
      <WhyContactUs 
        title="PERCHÉ CONTATTARCI"
        className= "lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        items={[
          {
            iconSrc: "/person.svg",
            title: "Consulenze gratuite",
            description: "Analizziamo le tue esigenze per offrirti la soluzione migliore.",
          },
          {
            iconSrc: "/clock.svg",
            title: "Risposta rapida",
            description: "Ti garantiamo un riscontro entro 24 ore lavorative.",
          },
          {
            iconSrc: "/experience.svg",
            title: "Preventivi chiari",
            description: "Proposte trasparenti, dettagliate e senza alcun impegno.",
          },
          {
            iconSrc: "/professional.svg",
            title: "Professionalità",
            description: "Un team di esperti qualificati al tuo fianco.",
          },
        ]}
      />

    </main>
  );
}