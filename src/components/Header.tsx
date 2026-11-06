import React from 'react';
import { TabType } from '../types';
import { Presentation, Sparkles, Terminal, Users, ShieldAlert, FolderDown, Maximize2 } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onEnterPresentationMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onEnterPresentationMode
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 font-bold text-sm">
            PCR
          </div>
          <span className="text-base font-semibold tracking-tight text-white whitespace-nowrap">
            IA no Dia a Dia <span className="text-slate-500 font-normal">· Escola de Governo</span>
          </span>
        </div>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('slides')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'slides'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Slides da Aula
          </button>
          
          <button
            onClick={() => setActiveTab('prompt-studio')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'prompt-studio'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Simulador de Prompts
          </button>

          <button
            onClick={() => setActiveTab('lab')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'lab'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Laboratório Didático
          </button>

          <button
            onClick={() => setActiveTab('mural')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'mural'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Mural da Turma
          </button>

          <button
            onClick={() => setActiveTab('lgpd')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'lgpd'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Guia LGPD
          </button>

          <button
            onClick={() => setActiveTab('materiais')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'materiais'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Materiais & PDF
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onEnterPresentationMode}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-md transition-all shadow-sm whitespace-nowrap shrink-0 active:scale-95"
            title="Abre os slides em tela cheia para apresentação durante a aula"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Modo Apresentador</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation row */}
      <div className="lg:hidden flex overflow-x-auto scrollbar-none border-t border-slate-800 px-4 py-2 gap-4 text-xs font-medium text-slate-400">
        <button
          onClick={() => setActiveTab('slides')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'slides' ? 'text-sky-400 font-semibold' : ''}`}
        >
          Slides
        </button>
        <button
          onClick={() => setActiveTab('prompt-studio')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'prompt-studio' ? 'text-sky-400 font-semibold' : ''}`}
        >
          Prompts
        </button>
        <button
          onClick={() => setActiveTab('lab')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'lab' ? 'text-sky-400 font-semibold' : ''}`}
        >
          Laboratório
        </button>
        <button
          onClick={() => setActiveTab('mural')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'mural' ? 'text-sky-400 font-semibold' : ''}`}
        >
          Mural da Turma
        </button>
        <button
          onClick={() => setActiveTab('lgpd')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'lgpd' ? 'text-sky-400 font-semibold' : ''}`}
        >
          LGPD
        </button>
        <button
          onClick={() => setActiveTab('materiais')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'materiais' ? 'text-sky-400 font-semibold' : ''}`}
        >
          Materiais
        </button>
      </div>
    </header>
  );
};
