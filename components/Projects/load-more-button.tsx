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
      className={`group relative flex h-[60px] w-full max-w-[420px] items-center justify-center rounded-[12px] border-2 border-orange-btn-border-color bg-gradient-to-b from-orange-btn-gradient-start to-orange-btn-gradient-end px-6 transition-all duration-300 hover:scale-[1.02] hover:border-orange-gradient-start active:scale-[0.98] focus:outline-none md:h-[70px] ${className}`}
    >
      <span className="bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-[22px] font-bold text-transparent md:text-[30px] lg:text-[36px]">
        {text}
      </span>
    </button>
  );
}