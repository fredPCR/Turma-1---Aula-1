import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Search, 
  BookOpen, 
  Cpu, 
  FileText, 
  SlidersHorizontal, 
  Lightbulb, 
  Calendar, 
  PieChart, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  ExternalLink,
  ShieldCheck,
  Check,
  TrendingDown,
  Info
} from 'lucide-react';
import { GLOSSARY_ITEMS } from '../data/pcrPresets';

export const CourseSections: React.FC = () => {
  // State for interactive features in Module 1 & 2
  const [activeRastro, setActiveRastro] = useState<number | null>(0);
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeCotidiano, setActiveCotidiano] = useState<number | null>(null);
  const [glossaryFilter, setGlossaryFilter] = useState('');

  const filteredGlossary = GLOSSARY_ITEMS.filter(item =>
    item.term.toLowerCase().includes(glossaryFilter.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossaryFilter.toLowerCase())
  );

  return (
    <div className="space-y-16 lg:space-y-24">
      
      {/* =========================================================================
          MÓDULO 1: O QUE É IA & OS 4 PILARES (#conceito)
         ========================================================================= */}
      <section id="conceito" className="scroll-mt-24 space-y-8">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <span>Módulo 1</span>
            <span aria-hidden="true">·</span>
            <span>Fundamentos & Evolução</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            1. A inteligência humana deixou rastros
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Ao longo da história, aprendemos uns com os outros, registramos experiências, compartilhamos descobertas e criamos ferramentas para ampliar nossas capacidades. A IA não surgiu do nada: ela é o espelho de séculos de conhecimento humano acumulado.
          </p>
        </div>

        {/* 5 Rastros Históricos interativos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {[
            { 
              title: 'Experiências', 
              icon: Users, 
              desc: 'Práticas cotidianas acumuladas em décadas de serviço público municipal no Recife.',
              historical: 'Saberes orais, resolução empírica de problemas urbanos e atendimento humanizado.'
            },
            { 
              title: 'Estudos', 
              icon: GraduationCap, 
              desc: 'Academias, universidades e método científico formal que subsidiam políticas públicas.',
              historical: 'Planejamento urbano que estruturou os bairros e saneamento da capital pernambucana.'
            },
            { 
              title: 'Pesquisas', 
              icon: Search, 
              desc: 'Laboratórios, dados epidemiológicos e monitoramento preventivo da Defesa Civil.',
              historical: 'Séries históricas pluviométricas e mapeamento geotécnico de encostas.'
            },
            { 
              title: 'Livros', 
              icon: BookOpen, 
              desc: 'Leis orgânicas, diários oficiais, cartilhas de formação e memória administrativa.',
              historical: 'A imprensa e a digitalização de documentos públicos preservados nos arquivos.'
            },
            { 
              title: 'Tecnologia', 
              icon: Cpu, 
              desc: 'Computadores, internet, Conecta Recife e infraestrutura de dados moderna.',
              historical: 'A revolução digital do Porto Digital e a integração de serviços ao cidadão.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeRastro === idx;
            return (
              <button
                key={item.title}
                onClick={() => setActiveRastro(idx)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50/70 shadow-xs ring-1 ring-sky-400'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-sky-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 block">{item.title}</span>
                </div>
                <span className="text-[11px] text-slate-500 mt-2 block leading-relaxed">{item.desc}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Callout */}
        {activeRastro !== null && (
          <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
            <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Conexão com a realidade da Prefeitura do Recife: </strong>
              {[
                'A sabedoria prática dos servidores municipais na ponta é o conhecimento insubstituível que alimenta as diretrizes que a IA apenas sintetiza.',
                'Os planos diretores e os estudos acadêmicos sobre a bacia hidrográfica do Capibaribe fundamentam as decisões tomadas pela gestão.',
                'Os dados históricos de pluviometria e risco de deslizamento são a matéria-prima dos algoritmos da Defesa Civil.',
                'O acervo documental e normativo da Prefeitura garante o princípio da legalidade e impessoalidade em qualquer resposta administrativa.',
                'O ecossistema de inovação do Recife posiciona a cidade na vanguarda da transformação digital no Nordeste.'
              ][activeRastro]}
            </div>
          </div>
        )}

        {/* Sub-tópico: O que é Inteligência Artificial (Os 4 Pilares) */}
        <div className="pt-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">
              2. Então, o que é Inteligência Artificial?
            </h3>
            <p className="text-xs text-slate-600">
              É uma tecnologia que permite aos computadores aprenderem padrões, compreenderem linguagem natural, gerarem conteúdos e apoiarem a resolução de problemas complexos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Encontrar padrões',
                desc: 'Identificar relações em dados, séries históricas e grandes volumes de informações.',
                icon: Search,
                example: 'Detectar bairros com maior incidência de chamados para manutenção preventiva de drenagem.'
              },
              {
                title: 'Organizar informações',
                desc: 'Estruturar dados dispersos, resumir relatórios e categorizar solicitações em tabelas.',
                icon: SlidersHorizontal,
                example: 'Converter 40 e-mails de secretarias em uma matriz com responsável, prazo e deliberação.'
              },
              {
                title: 'Produzir conteúdos',
                desc: 'Criar minutas de ofícios, resumos executivos, explicações didáticas e comunicados.',
                icon: FileText,
                example: 'Elaborar a primeira versão de uma resposta formal a um questionamento da Ouvidoria.'
              },
              {
                title: 'Apoiar soluções',
                desc: 'Sugerir caminhos, alternativas metodológicas e otimizar rotinas burocráticas.',
                icon: Lightbulb,
                example: 'Propor três formatos didáticos diferentes para uma oficina de conscientização em saúde.'
              }
            ].map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePillar === idx;
              return (
                <div
                  key={p.title}
                  onClick={() => setActivePillar(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-sky-500 bg-white shadow-md ring-1 ring-sky-300'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-sky-800">
                    <strong>Exemplo prático:</strong> {p.example}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MÓDULO 3: A IA NO COTIDIANO (#cotidiano)
         ========================================================================= */}
      <section id="cotidiano" className="scroll-mt-24 space-y-8">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <span>Módulo 3</span>
            <span aria-hidden="true">·</span>
            <span>Aplicações na Gestão Pública</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            3. A IA no cotidiano do serviço público
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            A IA generativa já pode apoiar dezenas de tarefas diárias realizadas por servidores municipais, reduzindo o tempo gasto em etapas burocráticas repetitivas para priorizar o atendimento humano de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Revisar textos e e-mails',
              icon: FileText,
              before: 'Servidor gasta 40 minutos revisando concordância, pontuação e tom formal de um relatório extenso.',
              after: 'A IA sugere ajustes imediatos de clareza, coesão textual e adequação à norma padrão da PCR.'
            },
            {
              title: 'Resumir documentos',
              icon: BookOpen,
              before: 'Leitura manual demorada de pareceres jurídicos ou notas técnicas de 50 páginas.',
              after: 'A IA sintetiza os 4 pontos resolutivos, destacando prazos, responsabilidades e valores.'
            },
            {
              title: 'Organizar informações',
              icon: SlidersHorizontal,
              before: 'Despachos e anotações soltas espalhadas em dezenas de mensagens de chat ou e-mails.',
              after: 'Transformação imediata dos dados soltos em tabelas prontas com colunas padronizadas.'
            },
            {
              title: 'Planejar atividades',
              icon: Calendar,
              before: 'Montagem manual do cronograma de eventos, escalas de plantão ou grade de oficinas.',
              after: 'Geração de roteiros estruturados com horários, dinâmicas e materiais de apoio sugeridos.'
            },
            {
              title: 'Criar apresentações e relatórios',
              icon: PieChart,
              before: 'Dificuldade para estruturar do zero a ordem de tópicos de uma apresentação para a secretaria.',
              after: 'Rascunho de pauta com objetivos, introdução, dados e conclusões em minutos.'
            },
            {
              title: 'Buscar informações',
              icon: Search,
              before: 'Busca fragmentada de conceitos ou normas técnicas em múltiplas fontes desordenadas.',
              after: 'Esclarecimento rápido de termos, com apoio na formulação de perguntas assertivas.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = activeCotidiano === idx;
            return (
              <div
                key={item.title}
                onClick={() => setActiveCotidiano(isExpanded ? null : idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
                  isExpanded ? 'border-sky-500 shadow-md ring-1 ring-sky-300' : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <span className="text-[11px] text-slate-400">Clique para ver o Antes vs Depois</span>
                  </div>
                </div>

                {isExpanded ? (
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-100 text-rose-900">
                      <strong>Rotina Anterior:</strong> {item.before}
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-900">
                      <strong>Com apoio da IA:</strong> {item.after}
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.after}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          MÓDULO 4: O PAPEL HUMANO & ÉTICA (#humano)
         ========================================================================= */}
      <section id="humano" className="scroll-mt-24 space-y-8">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <span>Módulo 4</span>
            <span aria-hidden="true">·</span>
            <span>O Fator Humano</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            4. A IA vai substituir o ser humano?
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            <strong className="text-slate-900">"A tecnologia substitui tarefas. O trabalho humano vai além delas."</strong> A IA é uma geradora de rascunhos rápidos; quem confere precisão, contexto, empatia e assume a responsabilidade pública é sempre a servidora e o servidor.
          </p>
        </div>

        {/* Split Table: A IA ajuda vs O profissional precisa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Cpu className="w-5 h-5 text-emerald-600" />
              <span>A IA pode ajudar a...</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {[
                'Produzir um rascunho inicial em segundos',
                'Resumir um documento longo e identificar termos-chave',
                'Organizar informações dispersas em tabelas e tópicos',
                'Sugerir alternativas criativas para formulação de campanhas',
                'Preparar uma resposta padrão ou checklist operacional'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-300 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-sky-900 font-bold text-sm">
              <Users className="w-5 h-5 text-sky-600" />
              <span>O profissional precisa...</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {[
                'Avaliar a veracidade e cruzar com dados oficiais da PCR',
                'Checar omissões importantes que o modelo não captou',
                'Conferir o contexto e garantir o tom adequado ao cidadão',
                'Decidir o caminho técnico e jurídico adequado',
                'Assumir a responsabilidade e assinar o documento final'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5 Pilares do Ser Humano */}
        <div className="bg-sky-50/50 border border-sky-200 rounded-2xl p-6 lg:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
              Princípio Fundamental
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              O papel do ser humano continua essencial
            </h3>
            <p className="text-xs text-slate-600">
              A IA pode gerar respostas, mas quem dá sentido ao que importa é você.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { title: 'Definir objetivos', icon: '🎯', desc: 'Saber onde queremos chegar e qual a dor do cidadão.' },
              { title: 'Avaliar respostas', icon: '✓', desc: 'Checar com rigor factual antes de aplicar na rotina.' },
              { title: 'Considerar contexto', icon: '🧭', desc: 'Entender a sensibilidade das comunidades do Recife.' },
              { title: 'Agir com ética', icon: '⚖️', desc: 'Seguir a probidade administrativa e o respeito ao bem público.' },
              { title: 'Assumir responsabilidades', icon: '👤', desc: 'A autoria e o compromisso civil são 100% humanos.' }
            ].map((p) => (
              <div key={p.title} className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-2 shadow-xs">
                <span className="text-2xl block">{p.icon}</span>
                <span className="text-xs font-bold text-slate-900 block leading-tight">{p.title}</span>
                <span className="text-[11px] text-slate-500 block leading-snug">{p.desc}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-sky-600 text-white text-center shadow-xs">
            <span className="text-base font-bold tracking-tight">
              Tecnologia é ferramenta. O propósito é humano.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MÓDULO 5: DADOS DA WEB & ESTATÍSTICA (#colapso)
         ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <span>Módulo 5</span>
            <span aria-hidden="true">·</span>
            <span>O Ecossistema da Informação</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            6. O que significa uma internet com cada vez mais conteúdo artificial?
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Com a explosão de geradores automáticos, a internet está sendo inundada por textos sintéticos, tornando a checagem crítica a principal competência do servidor no século XXI.
          </p>
        </div>

        {/* Pew Research Data Box */}
        <div className="p-5 rounded-2xl bg-white border border-sky-300 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
            <span>Pesquisa Pew Research Center (ago/2026)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            Identificou sinais de autoria ou edição por IA em cerca de <strong className="text-sky-700 underline font-semibold">10% das páginas em inglês</strong> analisadas em toda a web. Entre as páginas publicadas após o lançamento do ChatGPT, a proporção foi <strong className="text-sky-700 underline font-semibold">superior a 1/3 (mais de 33%)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-xs shrink-0">
              ⚡
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Mais conteúdo em menos tempo</span>
              <span className="text-[11px] text-slate-500">Aceleração inédita na produção de textos e mídias.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs shrink-0">
              ⚠️
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Nem todo conteúdo é confiável</span>
              <span className="text-[11px] text-slate-500">Risco crescente de alucinações e fatos incorretos.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-xs shrink-0">
              🔄
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Pode ser reutilizado por outros sistemas</span>
              <span className="text-[11px] text-slate-500">Robôs aprendem com robôs se não houver dados novos.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0">
              📚
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">A diversidade de fontes continua essencial</span>
              <span className="text-[11px] text-slate-500">Cruzar canais oficiais e documentos primários.</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-white text-center text-xs sm:text-sm font-semibold shadow-xs">
          Saber verificar informações é cada vez mais necessário.
        </div>
      </section>

      {/* =========================================================================
          MÓDULO 10: GLOSSÁRIO & REFERÊNCIAS BIBLIOGRÁFICAS
         ========================================================================= */}
      <section className="space-y-8 border-t border-slate-200 pt-12">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <span>Material Complementar</span>
            <span aria-hidden="true">·</span>
            <span>Glossário & Leituras</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Glossário Didático de Termos de IA
          </h2>
          <p className="text-xs text-slate-600">
            Principais conceitos e jargões traduzidos de forma descomplicada para o servidor.
          </p>
        </div>

        {/* Glossary Search */}
        <div className="space-y-4">
          <input
            type="text"
            value={glossaryFilter}
            onChange={(e) => setGlossaryFilter(e.target.value)}
            placeholder="Filtrar termo (ex: Prompt, LGPD, Alucinação, Preditiva)..."
            className="w-full max-w-md bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 shadow-xs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGlossary.map((item) => (
              <div key={item.term} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <span className="text-xs font-bold text-sky-800 block">{item.term}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-slate-900">
            Referências Citadas no Curso (Para Continuar os Estudos)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                source: 'Pew Research Center (2026)',
                title: 'Artificial Intelligence and the Future of Online Content',
                desc: 'Análise quantitativa do crescimento de conteúdos gerados por IA.',
                url: 'https://www.pewresearch.org'
              },
              {
                source: 'OpenAI (2024)',
                title: 'Model Collapse: When AI Learns from Itself',
                desc: 'Pesquisa sobre os efeitos do treino recursivo em dados sintéticos.',
                url: 'https://openai.com'
              },
              {
                source: 'MIT Technology Review (2024)',
                title: 'The Risk of an Internet Full of AI Content',
                desc: 'Discussão sobre a perda de originalidade e integridade das fontes.',
                url: 'https://www.technologyreview.com'
              }
            ].map((ref) => (
              <a
                key={ref.title}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-400 transition-all flex flex-col justify-between space-y-2 group shadow-xs"
              >
                <div>
                  <span className="text-[11px] font-bold text-sky-700 block">{ref.source}</span>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-sky-700 transition-colors mt-0.5">
                    {ref.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{ref.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-sky-700 font-semibold pt-1">
                  <span>Acessar artigo</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
