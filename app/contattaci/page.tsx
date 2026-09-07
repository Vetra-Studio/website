// app/servizi/page.tsx

import Description from "@/components/Contact-Us/description";
import Sculpture from "@/components/Icon";
import ResponsiveImage from "@/components/Contact-Us/information";


export default function ServiziPage() {
  return (
    <main className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonna Sinistra: Testi */}
        <Description />

        {/* Colonna Destra: Grafica Logo con Sfocatura */}
        <div className="flex justify-center">
          <Sculpture />
        </div>

      </div>

      {/* Sezione Informazioni */}
      <ResponsiveImage />

    </main>
  );
}