import Image from "next/image";

interface SculptureProps {
  className?: string;
}

export default function Icon({ className }: SculptureProps) {
  return (
    <div className={`brand-icon-stage relative flex aspect-[1516/1038] w-full max-w-[600px] items-center justify-center ${className}`}>
      <div className="absolute inset-[2%]">
        <Image
          src="/vetra-toucan-leaves-full.png"
          alt="Tucano Vetra Studio tra foglie colorate"
          fill
          sizes="(max-width: 768px) 96vw, 614px"
          className="brand-icon-image brand-icon-image--dark object-contain"
        />
        <Image
          src="/vetra-toucan-light.png"
          alt="Tucano Vetra Studio tra foglie colorate"
          fill
          sizes="(max-width: 768px) 96vw, 614px"
          className="brand-icon-image brand-icon-image--light object-contain"
        />
      </div>
    </div>
  );
}
