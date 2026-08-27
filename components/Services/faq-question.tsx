'use client';

import React, { useState } from 'react';

export interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  items?: FaqItem[];
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'Quanto tempo richiede un progetto?',
    answer:
      'I tempi di realizzazione dipendono dalla complessità delle funzionalità richieste. In media, un progetto richiede tra le 3 e le 8 settimane.',
  },
  {
    id: '2',
    question: 'Offrite consulenze gratuite?',
    answer:
      'Sì, la prima sessione conoscitiva di 30 minuti è sempre gratuita e senza impegno per valutare la fattibilità del progetto.',
  },
  {
    id: '3',
    question: 'Come viene calcolato il preventivo?',
    answer:
      'Il preventivo viene formulato su misura tenendo conto del numero di funzionalità, delle integrazioni necessarie e delle tempistiche concordate.',
  },
  {
    id: '4',
    question: 'Quali aree geografiche coprite?',
    answer:
      'Lavoriamo prevalentemente da remoto con clienti in tutta Italia ed Europa, garantendo comunicazione continua tramite videochiamate e tool dedicati.',
  },
  {
    id: '5',
    question: 'Offrite garanzia sui lavori?',
    answer:
      'Certamente, tutti i nostri lavori includono una garanzia di assistenza e correzione di eventuali bug per 12 mesi dal momento della consegna.',
  },
];

export default function FaqSection({
  title = 'FAQ',
  items = DEFAULT_FAQS,
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | number | null>(null);

  const toggleItem = (id: string | number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-10">
      {/* Definizioni SVG per il gradiente dell'icona */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <linearGradient id="faq-plus-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-orange-gradient-start)" />
            <stop offset="100%" stopColor="var(--color-orange-gradient-end)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Titolo con gradiente della tua palette */}
      <h2 className="text-5xl md:text-7xl font-semibold text-center bg-gradient-to-b from-orange-gradient-start to-orange-gradient-end bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Lista FAQ */}
      <div className="w-full flex flex-col gap-5">
        {items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`bg-panel-background border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-orange-gradient-start'
                  : 'border-stroke-primary'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left text-xl md:text-2xl font-semibold text-foreground transition-colors cursor-pointer select-none"
              >
                <span className="pr-4">{item.question}</span>
                <div
                  className={`w-9 h-9 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  <svg viewBox="0 0 50 50" fill="none" className="w-full h-full block">
                    <path
                      d="M22 0H28V22H50V28H28V50H22V28H0V22H22V0Z"
                      fill="url(#faq-plus-gradient)"
                    />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="px-6 pb-6 md:px-8 md:pb-8 text-light-gray-text text-base md:text-lg leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}