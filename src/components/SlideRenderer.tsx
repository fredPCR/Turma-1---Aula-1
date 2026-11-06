import React, { useState } from 'react';
import { SlideContent, TabType } from '../types';
import { 
  Sparkles, 
  Search, 
  FileText, 
  SlidersHorizontal, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  Mail, 
  Calendar, 
  PieChart, 
  HelpCircle,
  TrendingDown,
  Info,
  Maximize2
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideContent;
  onNavigateToTab?: (tab: TabType) => void;
  interactiveMode?: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  onNavigateToTab,
  interactiveMode = false
}) => {
  // Local interactive states for active cards or demonstrations inside slides
  const [activeHumanRastro, setActiveHumanRastro] = useState<number | null>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [activeCotidianotask, setActiveCotidianoTask] = useState<number | null>(null);
  const [selectedPromptTab, setSelectedPromptTab] = useState<'papel' | 'tarefa' | 'regras'>('papel');

  const isDark = slide.theme === 'dark';

  return (
    <div className={`w-full h-full flex flex-col justify-between p-8 md:p-14 select-none transition-all ${
      isDark ? 'bg-[#0f172a] text-white' : 'bg-white text-slate-900'
    }`}>
      
      {/* Slide Header / Top Section */}
      <div className="space-y-3">
        {slide.kicker && (
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded ${
              isDark 
                ? 'bg-sky-500/20 text-sky-400 border border-sky-400/30' 
                : 'bg-sky-100 text-sky-700'
            }`}>
              {slide.kicker}
            </span>
          </div>
        )}

        {slide.type !== 'cover' && slide.type !== 'closing' && (
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className={`mt-2 text-sm md:text-base max-w-4xl leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {slide.subtitle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Slide Body / Main Content Area */}
      <div className="my-auto py-4">

        {/* SLIDE 1: COVER */}
        {slide.type === 'cover' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
                AULA 1
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Inteligência Artificial <br />
                <span className="text-sky-400">no dia a dia</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-light">
                Conhecimento humano, novas possibilidades
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">
                  <span className="text-sky-400">☲</span> Mais organização
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">
                  <span className="text-amber-400">⚡</span> Mais agilidade
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">
                  <span className="text-emerald-400">📈</span> Mais impacto
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 bg-gradient-to-tr from-slate-900 to-slate-800 shadow-2xl flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="relative z-10 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">Prefeitura da Cidade do Recife</span>
                  <p className="text-sm text-slate-300">
                    Capacitação oficial de servidores para o uso consciente, produtivo e ético da Inteligência Artificial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: TIMELINE / RASTROS */}
        {slide.type === 'timeline' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {[
                { title: 'Experiências', icon: Users, desc: 'Histórias orais, práticas cotidianas e saberes comunitários.' },
                { title: 'Estudos', icon: GraduationCap, desc: 'Academias, universidades e método científico formal.' },
                { title: 'Pesquisas', icon: Search, desc: 'Laboratórios, ensaios clínicos e experimentação empírica.' },
                { title: 'Livros', icon: BookOpen, desc: 'Tratados, bibliotecas e a prensa de tipos móveis de Gutenberg.' },
                { title: 'Tecnologia', icon: Cpu, desc: 'Computadores, internet e a digitalização global de dados.' }
              ].map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeHumanRastro === idx;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveHumanRastro(isSelected ? null : idx)}
                    className={`flex flex-col items-center justify-center p-5 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/80 shadow-md ring-2 ring-sky-300'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Context expander when teacher clicks */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 min-h-[64px] flex items-center">
              {activeHumanRastro !== null ? (
                <div>
                  <strong className="text-sky-700 font-semibold">Exemplo em sala: </strong>
                  {[
                    'As experiências práticas dos servidores da PCR acumuladas em décadas de atendimento ao recifense são a base que nenhum robô possui.',
                    'Os estudos teóricos de planejamento urbano que moldaram bairros como Boa Viagem, Ilha do Leite e Bairro do Recife.',
                    'As pesquisas epidemiológicas de controle de arboviroses conduzidas pela Saúde Municipal.',
                    'Documentos, cartilhas pedagógicas e diários oficiais arquivados na história da cidade.',
                    'O ecossistema digital recente: Porto Digital, Conecta Recife e modernização dos sistemas de gestão.'
                  ][activeHumanRastro]}
                </div>
              ) : (
                <span className="text-slate-500 italic">
                  💡 Dica do professor: Clique em qualquer um dos 5 pilares acima para contextualizar com a realidade da Prefeitura do Recife!
                </span>
              )}
            </div>
          </div>
        )}

        {/* SLIDE 3: 4 PILARES DA IA */}
        {slide.type === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Encontrar padrões',
                desc: 'Identificar relações em dados e informações.',
                icon: Search,
                example: 'Identificar que certas vias têm mais pedidos de capinação em épocas de chuva.'
              },
              {
                title: 'Produzir conteúdos',
                desc: 'Criar textos, ideias, resumos e explicações.',
                icon: FileText,
                example: 'Redigir uma minuta de ofício ou proposta de comunicado institucional.'
              },
              {
                title: 'Organizar informações',
                desc: 'Estruturar dados, resumir documentos e categorizar.',
                icon: SlidersHorizontal,
                example: 'Transformar 30 e-mails desorganizados em uma tabela com prazos e responsáveis.'
              },
              {
                title: 'Apoiá-las em soluções',
                desc: 'Sugerir caminhos, alternativas e formas de executar tarefas.',
                icon: Lightbulb,
                example: 'Propor 3 formatos criativos para uma campanha de vacinação infantil.'
              }
            ].map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePillar === idx;
              return (
                <div
                  key={p.title}
                  onClick={() => setActivePillar(isSelected ? null : idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/50 shadow-md ring-1 ring-sky-400'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                      {isSelected && (
                        <p className="mt-2.5 pt-2 border-t border-sky-100 text-xs text-sky-800 font-medium">
                          <strong>Aplicação na PCR:</strong> {p.example}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SLIDE 4: PREDITIVA VS GENERATIVA */}
        {slide.type === 'comparison' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">A Origem</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">IA Preditiva</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Analisa dados do passado para classificar, calcular probabilidades ou prever o futuro.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="font-semibold text-slate-900 block">Exemplos no dia a dia:</span>
                <p className="text-slate-600">
                  Filtro de Spam do e-mail, previsão do tempo, rotas do Waze/Google Maps e recomendações da Netflix.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-sky-300 bg-sky-50/50 space-y-4 shadow-sm">
              <div>
                <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">A Revolução</span>
                <h3 className="text-xl font-bold text-sky-950 mt-1">IA Generativa</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Não apenas analisa: ela usa o aprendizado para gerar novos textos, imagens, áudios e códigos.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-sky-200 text-xs text-slate-700 space-y-1">
                <span className="font-semibold text-sky-950 block">Exemplos atuais:</span>
                <p className="text-slate-600">
                  Gemini no Workspace (Gmail, Docs), ChatGPT, copilotos de e-mail e geradores de conteúdo.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 5: A IA NO COTIDIANO (6 CARDS) */}
        {slide.type === 'grid-features' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: 'Revisar textos e e-mails', icon: FileText, tip: 'Melhorar clareza, pontuação e formalidade institucional.' },
              { title: 'Resumir documentos', icon: BookOpen, tip: 'Extrair pontos críticos de pareceres e relatórios densos.' },
              { title: 'Organizar informações', icon: SlidersHorizontal, tip: 'Converter listas desordenadas em tabelas prontas.' },
              { title: 'Planejar atividades', icon: Calendar, tip: 'Montar roteiro de eventos, capacitações ou escalas.' },
              { title: 'Criar apresentações e relatórios', icon: PieChart, tip: 'Estruturar tópicos e minutas de apresentações executivas.' },
              { title: 'Buscar informações', icon: Search, tip: 'Tirar dúvidas e sintetizar conceitos de forma rápida.' }
            ].map((f, idx) => {
              const Icon = f.icon;
              const isSelected = activeCotidianotask === idx;
              return (
                <div
                  key={f.title}
                  onClick={() => setActiveCotidianoTask(isSelected ? null : idx)}
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/70 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-800 block">{f.title}</span>
                    {isSelected && (
                      <span className="text-xs text-sky-700 font-medium block mt-1">{f.tip}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SLIDE 6: SUBSTITUIR O SER HUMANO? */}
        {slide.type === 'human-ai' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-base">
                <Cpu className="w-5 h-5 text-emerald-600" />
                <span>A IA pode ajudar a...</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  'Produzir um rascunho inicial',
                  'Resumir um documento volumoso',
                  'Organizar informações dispersas',
                  'Sugerir alternativas criativas',
                  'Preparar uma resposta padrão'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl border border-sky-200 bg-sky-50/50 space-y-3">
              <div className="flex items-center gap-2 text-sky-900 font-semibold text-base">
                <Users className="w-5 h-5 text-sky-600" />
                <span>O profissional precisa...</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  'Avaliar a veracidade e checar fatos',
                  'Checar omissões importantes',
                  'Conferir contexto e tom adequado',
                  'Decidir o caminho institucional correto',
                  'Assumir a responsabilidade final'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* SLIDE 7: INTERNET LIMITADA / COLAPSO DE MODELO */}
        {slide.type === 'model-collapse' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Flow */}
            <div className="lg:col-span-6 p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-center space-y-3">
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center text-xs font-medium text-slate-700 shadow-sm">
                Conteúdo humano (livros, pesquisas, experiências)
              </div>
              <div className="flex justify-center text-slate-400">↓</div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center text-xs font-medium text-slate-700 shadow-sm">
                A IA aprende (padrões e dados)
              </div>
              <div className="flex justify-center text-slate-400">↓</div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center text-xs font-medium text-slate-700 shadow-sm">
                A IA produz (novos conteúdos)
              </div>
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-center text-xs font-medium text-rose-700">
                ↺ Parte volta aos dados de treinamento futuros
              </div>
            </div>

            {/* Model collapse card */}
            <div className="lg:col-span-6 p-6 rounded-2xl border border-rose-200 bg-rose-50/40 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Conceito Chave</span>
                <h3 className="text-xl font-extrabold text-rose-950 mt-1">COLAPSO DE MODELO</h3>
                <p className="text-xs text-rose-800 mt-1">O que isso pode causar?</p>
              </div>

              <div className="space-y-2 text-sm text-slate-800">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span><strong>Perda de diversidade</strong> de informações</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span><strong>Repetição e amplificação</strong> de erros</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span><strong>Conteúdos cada vez menos originais</strong> e homogêneos</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 8: DADOS E ESTATÍSTICA PEW RESEARCH */}
        {slide.type === 'data-stats' && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/60 text-sm text-sky-950 leading-relaxed">
              <strong className="font-semibold">Dado da Pesquisa Pew Research Center (ago/2026):</strong> Identificou sinais de autoria ou edição por IA em cerca de <span className="font-bold underline text-sky-800">10% das páginas em inglês</span> analisadas. Entre as páginas publicadas após o lançamento do ChatGPT, a proporção foi <span className="font-bold underline text-sky-800">superior a 1/3</span>.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs shrink-0">
                  !
                </div>
                <span className="text-sm font-medium text-slate-800">Mais conteúdo em menos tempo.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                  !
                </div>
                <span className="text-sm font-medium text-slate-800">Nem todo conteúdo é confiável.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs shrink-0">
                  !
                </div>
                <span className="text-sm font-medium text-slate-800">Pode ser reutilizado por outros sistemas.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                  !
                </div>
                <span className="text-sm font-medium text-slate-800">A diversidade das fontes continua essencial.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 text-white text-center text-sm font-medium">
              Saber verificar informações é cada vez mais necessário.
            </div>
          </div>
        )}

        {/* SLIDE 9: PAPEL DO SER HUMANO CONTINUA ESSENCIAL */}
        {slide.type === 'human-role' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { title: 'Definir objetivos', icon: '🎯' },
                { title: 'Avaliar respostas', icon: '✓' },
                { title: 'Considerar contexto', icon: '🧭' },
                { title: 'Agir com ética', icon: '⚖️' },
                { title: 'Assumir responsabilidades', icon: '👤' }
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-slate-200 bg-white text-center flex flex-col items-center justify-center space-y-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-semibold text-slate-800 leading-snug">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-sky-600 text-white text-center shadow-md">
              <p className="text-lg md:text-xl font-bold tracking-tight">
                Tecnologia é ferramenta. O propósito é humano.
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 10: BOAS PRÁTICAS NO SERVIÇO PÚBLICO */}
        {slide.type === 'best-practices' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">Verifique informações</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sempre valide dados e fatos antes de aplicar na rotina de trabalho.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/30 space-y-1.5">
                <h3 className="text-base font-bold text-rose-950">Respeite a LGPD</h3>
                <p className="text-xs text-rose-800 leading-relaxed">
                  Nunca insira dados sensíveis, CPF ou nomes de cidadãos nos chats públicos.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">Ética Pública</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Respeite as normas e a conduta ética da administração pública municipal.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">Julgamento Crítico</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use a IA como aliada, não como substituta da sua avaliação técnica.
                </p>
              </div>
            </div>

            <div className="text-center text-xs md:text-sm font-semibold text-sky-800 py-2">
              Mais do que usar a ferramenta, é importante saber quando, como e por que usar.
            </div>
          </div>
        )}

        {/* SLIDE 11: PROMPTS EFICIENTES E ORGANIZADOS */}
        {slide.type === 'prompt-guide' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 space-y-3 flex flex-col justify-center">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-sm font-bold text-sky-900">1. Defina o Papel e o Objetivo</h4>
                <p className="text-xs text-slate-600 mt-0.5">Ex: "Atue como assistente administrativo e revise este e-mail..."</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-sm font-bold text-sky-900">2. Use Marcadores de Título (#)</h4>
                <p className="text-xs text-slate-600 mt-0.5">Use # Título para separar instruções de textos anexados.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-sm font-bold text-sky-900">3. Liste em Tópicos (- ou *)</h4>
                <p className="text-xs text-slate-600 mt-0.5">Tópicos ajudam a IA a entender critérios sem misturar ideias.</p>
              </div>
            </div>

            <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs shadow-xl space-y-3 flex flex-col justify-center">
              <div className="text-slate-400 text-[11px] font-sans font-semibold tracking-wider uppercase">
                EXEMPLO DE PROMPT ORGANIZADO:
              </div>
              <div className="space-y-2 text-slate-200 leading-relaxed">
                <p className="text-sky-400 font-bold"># PAPEL</p>
                <p className="pl-2">Você é um assistente da Prefeitura.</p>
                
                <p className="text-sky-400 font-bold mt-2"># TAREFA</p>
                <p className="pl-2">Resuma a mensagem para um e-mail institucional.</p>
                
                <p className="text-sky-400 font-bold mt-2"># REGRAS</p>
                <p className="pl-2 text-slate-300">- Tom cortês e formal</p>
                <p className="pl-2 text-slate-300">- Máximo de 3 parágrafos</p>
                <p className="pl-2 text-slate-300">- Não inclua dados pessoais</p>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 12: ATIVIDADE RÁPIDA */}
        {slide.type === 'quick-activity' && (
          <div className="space-y-6">
            <div className="p-8 md:p-10 rounded-2xl border-2 border-dashed border-sky-400 bg-sky-50/40 text-center">
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-sky-950 max-w-3xl mx-auto leading-snug">
                "O que você faz todos os dias durante o trabalho que poderia ser realizado de uma forma mais organizada, rápida ou consistente com o apoio da IA?"
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-700 font-medium text-sm">
              <span className="text-sky-500">🗣️</span>
              <span>Vamos compartilhar algumas ideias com o grupo!</span>
            </div>
          </div>
        )}

        {/* SLIDE 13: GEMINI NO GMAIL */}
        {slide.type === 'gemini-gmail' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: '1',
                title: 'Abra seu Gmail',
                desc: 'Abra seu Gmail institucional da Prefeitura no navegador da estação de trabalho.'
              },
              {
                step: '2',
                title: 'Clique no Gemini',
                desc: 'Clique no ícone com brilhos do Gemini no painel lateral direito da tela.'
              },
              {
                step: '3',
                title: 'Pratique',
                desc: 'Testaremos rascunhos de e-mails formais e resumos de cadeias de mensagens.'
              }
            ].map((st) => (
              <div key={st.step} className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
                <span className="text-3xl font-extrabold text-sky-600 block">{st.step}</span>
                <h3 className="text-base font-bold text-slate-900">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* SLIDE 14: REFERÊNCIAS */}
        {slide.type === 'references' && (
          <div className="space-y-3">
            {[
              {
                source: 'Pew Research Center',
                title: 'Artificial Intelligence and the Future of Online Content (2026)',
                url: 'https://www.pewresearch.org'
              },
              {
                source: 'OpenAI',
                title: 'Model Collapse: When AI Learns from Itself (2024)',
                url: 'https://openai.com'
              },
              {
                source: 'MIT Technology Review',
                title: 'The risk of an internet full of AI content (2024)',
                url: 'https://www.technologyreview.com'
              }
            ].map((ref) => (
              <a
                key={ref.title}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-sm transition-all group"
              >
                <div>
                  <span className="text-xs font-bold text-slate-800 block">{ref.source}</span>
                  <span className="text-xs text-slate-500 mt-0.5 block">{ref.title}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </a>
            ))}
          </div>
        )}

        {/* SLIDE 15: OBRIGADO */}
        {slide.type === 'closing' && (
          <div className="text-center space-y-6 max-w-2xl mx-auto py-8">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Obrigado!
            </h1>
            <p className="text-base md:text-lg text-slate-300">
              Agora vamos abrir nosso e-mail institucional e começar a explorar o Gemini no Gmail!
            </p>
            <div className="p-4 rounded-2xl bg-sky-950/60 border border-sky-500/40 text-sky-300 font-semibold text-sm">
              Inteligência Artificial no serviço público: mais pessoas, mais possibilidades.
            </div>
          </div>
        )}

        {/* SLIDE 16: CRÉDITOS */}
        {slide.type === 'credits' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <span className="text-xs font-bold text-slate-700 block uppercase">Créditos de Imagens & Recursos Didáticos</span>
              <p className="text-xs text-slate-600">
                Imagens institucionais sob licença educacional e acervo oficial da Prefeitura da Cidade do Recife.
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 font-mono">
                Arquivo fonte: Aula_1__Intelig_ncia_Artificial_no_dia_a_dia__PCR__b92d2365.pdf
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide Footer */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-200/40 text-xs">
        <div className="flex items-center gap-3">
          <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Prefeitura do Recife
          </span>
          {slide.targetTab && onNavigateToTab && (
            <button
              onClick={() => onNavigateToTab(slide.targetTab!)}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 text-[11px] font-semibold transition-colors"
            >
              <span>{slide.interactiveActionLabel || 'Abrir Interativo'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

        <span className={`hidden md:inline ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
          Mais conhecimento. Melhores decisões. Um serviço público ainda mais forte.
        </span>

        <span className={`font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {slide.slideNumber} / 16
        </span>
      </div>
    </div>
  );
};
