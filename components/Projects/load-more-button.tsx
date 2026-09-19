'use client';

interface LoadMoreButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
}

export default function LoadMoreButton({
  onClick,
  text = 'Carica altri progetti',
  className = '',
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`group relative items-center justify-center
                  flex h-15 w-full max-w-xs px-6
                  sm:max-w-md  
                  rounded-xl border-2 btn-transparent-gradient-orange
                  transition-all duration-300 hover:scale-[1] hover:border-orange-gradient-start active:scale-[1] focus:outline-none md:h-17.5 
                  ${className}`}
    >
      <span className="text-gradient-orange md:text-[30px] lg:text-[36px]">
        {text}
      </span>
    </button>
  );
}