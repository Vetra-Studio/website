import ContactForm from "@/components/Contact-Us/form";
import ContactInfo from "@/components/Contact-Us/info";
import WhyContactUs from "@/components/Contact-Us/choice";

export default function Information() {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24">
      
      {/* Block 1: Form e Info con Bordo e Separatore */}
      <div className="relative w-full min-h-screen bg-bg-dark border-[3px] border-stroke-primary overflow-hidden">
        {/* Separatore */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] lg:w-[2px] lg:h-[80%] bg-stroke-secondary/50 pointer-events-none" />

        {/* Grid Form + Info */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 p-6 md:p-12 min-h-screen items-start">
          <div className="flex justify-start items-start w-full">
            <ContactForm />
          </div>

          <div className="flex justify-start items-start w-full">
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Block 2: Sezione "Perché" completamente esterna e indipendente */}
      <WhyContactUs />

    </div>
  );
}