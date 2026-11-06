import React, { useState } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { SlideDeck } from './components/SlideDeck';
import { PromptSimulator } from './components/PromptSimulator';
import { InteractiveLab } from './components/InteractiveLab';
import { ClassroomBoard } from './components/ClassroomBoard';
import { LgpdValidator } from './components/LgpdValidator';
import { MaterialsSection } from './components/MaterialsSection';
import { 
  Presentation, 
  Sparkles, 
  Cpu, 
  Users, 
  ShieldCheck, 
  FolderDown, 
  ArrowUpRight,
  FileDown
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('slides');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top 3-Zone Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onEnterPresentationMode={() => setIsPresentationMode(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Course Banner Strip */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-sky-400">CURSO DE CAPACITAÇÃO EM IA</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Escola de Governo da Prefeitura do Recife</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Aula 1: Inteligência Artificial no dia a dia
            </h1>
            <p className="text-xs text-slate-400">
              Conhecimento humano, novas possibilidades · Mais organização, mais agilidade e mais impacto.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/assets/aistudio/Aula_1__Intelig_ncia_Artificial_no_dia_a_dia__PCR__b92d2365.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
              <span>PDF Original</span>
            </a>
            
            <button
              onClick={() => setIsPresentationMode(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-sm active:scale-95"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Apresentar em Tela Cheia</span>
            </button>
          </div>
        </section>

        {/* Tab Content Panels */}
        {activeTab === 'slides' && (
          <section aria-label="Slides Interativos">
            <SlideDeck
              onNavigateToTab={(tab) => setActiveTab(tab)}
            />
          </section>
        )}

        {activeTab === 'prompt-studio' && (
          <section aria-label="Simulador de Prompts">
            <PromptSimulator />
          </section>
        )}

        {activeTab === 'lab' && (
          <section aria-label="Laboratório Didático">
            <InteractiveLab />
          </section>
        )}

        {activeTab === 'mural' && (
          <section aria-label="Mural da Turma">
            <ClassroomBoard />
          </section>
        )}

        {activeTab === 'lgpd' && (
          <section aria-label="Validador LGPD">
            <LgpdValidator />
          </section>
        )}

        {activeTab === 'materiais' && (
          <section aria-label="Materiais e PDF">
            <MaterialsSection />
          </section>
        )}
      </main>

      {/* Fullscreen Presentation Overlay Mode */}
      {isPresentationMode && (
        <SlideDeck
          isPresentationMode={true}
          onExitPresentationMode={() => setIsPresentationMode(false)}
          onNavigateToTab={(tab) => {
            setIsPresentationMode(false);
            setActiveTab(tab);
          }}
        />
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-400">Prefeitura da Cidade do Recife</span>
            <span aria-hidden="true">·</span>
            <span>Escola de Governo e Administração Pública</span>
          </div>

          <div className="text-center sm:text-right text-slate-400">
            <span className="font-medium text-slate-300">
              Mais conhecimento. Melhores decisões. Um serviço público ainda mais forte.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
