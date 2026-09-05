import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/magicui/marquee"
import Image from "next/image"

const technologies = [
  {
    name: "Next.js",
    icon: "/tech/nextdotjs.svg",
    darkIcon: "/tech/nextdotjs-dark.svg",
  },
  {
    name: "React",
    icon: "/tech/react.svg"
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwindcss.svg"
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.svg"
  },
];

const TechCard = ({
  icon,
  darkIcon,
  name,
}: {
  icon: string
  darkIcon?: string
  name: string
}) => {
  return (
    <figure
      className="
        relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4
        bg-stroke-primary border-stroke-secondary hover:bg-stroke-primary/[.15]
      "
    >
      <div className="flex flex-row items-center gap-3">

        <Image className={darkIcon ? "block dark:hidden" : "block"} width={32} height={32} alt={name} src={icon} />

        {darkIcon && (
          <Image className="hidden dark:block" width={32} height={32} alt={name} src={darkIcon} />
        )}

        <div className="flex flex-col">
          <div className="text-sm">
            {name}
          </div>
        </div>
        
      </div>
    </figure>
  )
}

export function MarqueeTech() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="w-full [--duration:20s]">
        {technologies.map((tech) => (
          <TechCard key={tech.icon} {...tech} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
    </div>
  )
}
