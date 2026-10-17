'use client';

interface LoadMoreButtonProps {
  onClick: () => void;
  className?: string;
  label?: string;
}

export default function LoadMoreButton({
  onClick,
  className = '',
  label = 'Carica altri progetti',
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
      <span className="text-gradient-orange md:text-xl lg:text-2xl">
        {label}
      </span>
    </button>
  );
}
