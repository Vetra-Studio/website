'use client';

interface LoadMoreButtonProps {
  onClick: () => void;
  className?: string;
}

export default function LoadMoreButton({
  onClick,
  className,
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`group relative px-6
                  flex h-15 items-center justify-center
                  rounded-xl border-2
                  btn-transparent-gradient-orange
                  transition-all duration-300
                  hover:border-orange-gradient-start
                  focus:outline-none
                  md:h-17
                  ${className}`}
    >
      <span className="text-gradient-orange md:text-3xl lg:text-4xl">
        Carica altri progetti
      </span>
    </button>
  );
}