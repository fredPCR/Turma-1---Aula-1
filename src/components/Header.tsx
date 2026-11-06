import React from 'react';
import { Sparkles, Terminal, MessageSquare } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); onNavigate('inicio'); }}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-xs">
            PCR
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap">
            IA no Dia a Dia <span className="text-slate-400 font-normal text-sm">· Escola de Governo</span>
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('conceito')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'conceito' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            O que é IA
          </button>

          <button
            onClick={() => onNavigate('preditiva-generativa')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'preditiva-generativa' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            Preditiva vs Generativa
          </button>

          <button
            onClick={() => onNavigate('cotidiano')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'cotidiano' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            No Cotidiano
          </button>

          <button
            onClick={() => onNavigate('colapso')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'colapso' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            Colapso de Modelos
          </button>

          <button
            onClick={() => onNavigate('lgpd')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'lgpd' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            LGPD & Ética
          </button>

          <button
            onClick={() => onNavigate('prompts')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'prompts' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            Prompts Eficientes
          </button>

          <button
            onClick={() => onNavigate('mural')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'mural' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            Mural da Turma
          </button>

          <button
            onClick={() => onNavigate('gmail')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-sky-700 ${
              activeSection === 'gmail' ? 'text-sky-700 border-b-2 border-sky-600 font-semibold' : ''
            }`}
          >
            Gemini no Gmail
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('prompts')}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-all shadow-xs whitespace-nowrap shrink-0 active:scale-95"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Simulador de Prompts</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation scrollbar */}
      <div className="lg:hidden flex overflow-x-auto scrollbar-none border-t border-slate-200 px-4 py-2 gap-3 text-xs font-medium text-slate-600 bg-slate-50">
        <button onClick={() => onNavigate('conceito')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">O que é IA</button>
        <button onClick={() => onNavigate('preditiva-generativa')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">Preditiva vs Generativa</button>
        <button onClick={() => onNavigate('cotidiano')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">Cotidiano</button>
        <button onClick={() => onNavigate('colapso')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">Colapso de Modelos</button>
        <button onClick={() => onNavigate('lgpd')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">LGPD</button>
        <button onClick={() => onNavigate('prompts')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">Prompts</button>
        <button onClick={() => onNavigate('mural')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">Mural</button>
        <button onClick={() => onNavigate('gmail')} className="whitespace-nowrap shrink-0 py-1 px-2 hover:text-sky-700">Gmail</button>
      </div>
    </header>
  );
};
