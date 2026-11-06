import React, { useState } from 'react';
import { Header } from './components/Header';
import { CourseSections } from './components/CourseSections';
import { InteractiveLab } from './components/InteractiveLab';
import { LgpdValidator } from './components/LgpdValidator';
import { PromptSimulator } from './components/PromptSimulator';
import { ClassroomBoard } from './components/ClassroomBoard';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Users, 
  Layers, 
  Mail, 
  Cpu, 
  BookOpen
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* 3-Zone Sticky Navigation Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            HERO EDITORIAL SECTION (#inicio)
           ========================================================================= */}
        <section id="inicio" className="scroll-mt-24 space-y-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wide uppercase">
                <span>Escola de Governo · Prefeitura do Recife</span>
                <span aria-hidden="true">·</span>
                <span>Aula 1</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
                  Inteligência Artificial <br className="hidden sm:inline" />
                  <span className="text-sky-600">no dia a dia</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Conhecimento humano, novas possibilidades. Um ambiente dinâmico e interativo para capacitar servidores municipais no uso consciente, produtivo e ético da IA.
                </p>
              </div>

              {/* 3 Core Impact Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-sky-700 font-bold text-sm block mb-1">☲ Mais organização</span>
                  <span className="text-xs text-slate-600 leading-snug block">
                    Estruturação de dados, automação de rotinas e síntese de processos.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-amber-700 font-bold text-sm block mb-1">⚡ Mais agilidade</span>
                  <span className="text-xs text-slate-600 leading-snug block">
                    Elaboração rápida de minutas, triagem de demandas e respostas formais.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-emerald-700 font-bold text-sm block mb-1">📈 Mais impacto</span>
                  <span className="text-xs text-slate-600 leading-snug block">
                    Atendimento humanizado, decisões embasadas e benefício direto ao cidadão.
                  </span>
                </div>
              </div>

              {/* Quick Jump Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                  Navegar por assunto:
                </span>
                
                <button
                  onClick={() => scrollToSection('conceito')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  O que é IA
                </button>
                <button
                  onClick={() => scrollToSection('preditiva-generativa')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  Preditiva vs Generativa
                </button>
                <button
                  onClick={() => scrollToSection('colapso')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  Colapso de Modelos
                </button>
                <button
                  onClick={() => scrollToSection('lgpd')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  LGPD & Ética
                </button>
                <button
                  onClick={() => scrollToSection('prompts')}
                  className="px-3 py-1.5 rounded-lg bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-bold transition-colors"
                >
                  Simulador de Prompts
                </button>
                <button
                  onClick={() => scrollToSection('mural')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  Mural da Turma
                </button>
                <button
                  onClick={() => scrollToSection('gmail')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  Gemini no Gmail
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            MÓDULO 1: O QUE É IA & OS 4 PILARES
           ========================================================================= */}
        <CourseSections />

        {/* =========================================================================
            MÓDULO 2: DA IA PREDITIVA PARA A IA GENERATIVA (#preditiva-generativa)
           ========================================================================= */}
        <section id="preditiva-generativa" className="scroll-mt-24 space-y-6">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>Módulo 2</span>
              <span aria-hidden="true">·</span>
              <span>Nivelamento Conceitual</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              Da IA Preditiva para a IA Generativa
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              A Inteligência Artificial não começou agora. Ela evoluiu de prever números, probabilidades e padrões no passado para sintetizar novas linguagens, textos, códigos e mídias. Experimente o comparador interativo abaixo com casos reais do Recife.
            </p>
          </div>

          <InteractiveLab />
        </section>

        {/* =========================================================================
            MÓDULO 6: BOAS PRÁTICAS & LGPD NO SERVIÇO PÚBLICO (#lgpd)
           ========================================================================= */}
        <section id="lgpd" className="scroll-mt-24 space-y-6">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>Módulo 6</span>
              <span aria-hidden="true">·</span>
              <span>Conformidade & Cidadania</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              8. Boas práticas e LGPD no serviço público
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              Usar a IA de forma responsável é um dever de cidadania. Mais do que saber usar a ferramenta, é indispensável saber quando, como e por que usar. Utilize o validador para auditar seus textos antes de interagir com qualquer inteligência artificial.
            </p>
          </div>

          <LgpdValidator />
        </section>

        {/* =========================================================================
            MÓDULO 7: ENGENHARIA DE PROMPTS EFICIENTES (#prompts)
           ========================================================================= */}
        <section id="prompts" className="scroll-mt-24 space-y-6">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>Módulo 7</span>
              <span aria-hidden="true">·</span>
              <span>Como Conversar com a IA</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              Prompts Eficientes e Organizados (# PAPEL, # TAREFA, # REGRAS)
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              Dê instruções claras e organize o texto usando marcas simples de Markdown. Use <code className="bg-slate-100 text-sky-800 px-1 py-0.5 rounded font-mono font-bold">#</code> para separar blocos e listas com marcadores (<code className="bg-slate-100 text-sky-800 px-1 py-0.5 rounded font-mono font-bold">-</code>) para regras e restrições.
            </p>
          </div>

          <PromptSimulator />
        </section>

        {/* =========================================================================
            MÓDULO 8: MURAL DA TURMA - ATIVIDADE RÁPIDA (#mural)
           ========================================================================= */}
        <section id="mural" className="scroll-mt-24 space-y-6">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>Módulo 8</span>
              <span aria-hidden="true">·</span>
              <span>Dinâmica de Sala de Aula</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              Atividade Rápida: Pense na sua rotina e responda
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              "O que você faz todos os dias durante o trabalho que poderia ser realizado de uma forma mais organizada, rápida ou consistente com o apoio da IA?" Compartilhe suas ideias no mural coletivo com os demais servidores.
            </p>
          </div>

          <ClassroomBoard />
        </section>

        {/* =========================================================================
            MÓDULO 9: PRÁTICA GEMINI NO GMAIL INSTITUCIONAL (#gmail)
           ========================================================================= */}
        <section id="gmail" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>Módulo 9</span>
              <span aria-hidden="true">·</span>
              <span>Próximo Passo / Parte 2</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              Prática: Gemini no Gmail Institucional
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              Hora de colocar a mão na massa no e-mail institucional da Prefeitura da Cidade do Recife! O Gemini já está conectado ao Workspace para acelerar a redação e a síntese de mensagens do dia a dia.
            </p>
          </div>

          {/* 3 Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-4xl font-extrabold text-sky-600 font-mono">1</span>
              <h3 className="text-base font-bold text-slate-900">Abra seu Gmail</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Acesse sua caixa de correio eletrônico institucional (<code className="font-mono text-sky-800">@recife.pe.gov.br</code>) no navegador de internet da sua estação de trabalho.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-4xl font-extrabold text-sky-600 font-mono">2</span>
              <h3 className="text-base font-bold text-slate-900">Clique no ícone do Gemini</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Localize o ícone com estrelas de brilho no painel lateral direito do navegador ou o botão "Ajude-me a escrever" ao redigir uma nova mensagem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-4xl font-extrabold text-sky-600 font-mono">3</span>
              <h3 className="text-base font-bold text-slate-900">Rascunhos e Resumos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pratique rascunhos de respostas corteses para munícipes, convocações internas de reuniões e resumos executivos de cadeias longas de conversas.
              </p>
            </div>
          </div>

          {/* Closing Message Banner */}
          <div className="p-8 rounded-3xl bg-sky-600 text-white text-center shadow-sm space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase opacity-80 block">
              Prefeitura da Cidade do Recife
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Obrigado pela dedicação e participação!
            </h3>
            <p className="text-sm max-w-xl mx-auto opacity-90 leading-relaxed">
              Inteligência Artificial no serviço público: mais pessoas, mais possibilidades.
            </p>
          </div>
        </section>

      </main>

      {/* Clean Civic Web Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-800">Prefeitura da Cidade do Recife</span>
            <span aria-hidden="true">·</span>
            <span>Escola de Governo e Administração Pública</span>
          </div>

          <div className="text-center sm:text-right text-slate-500">
            <span className="font-semibold text-slate-700">
              Mais conhecimento. Melhores decisões. Um serviço público ainda mais forte.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
