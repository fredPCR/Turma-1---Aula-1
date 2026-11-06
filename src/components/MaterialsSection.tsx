import React, { useState } from 'react';
import { LESSON_SCHEDULE, GLOSSARY_ITEMS } from '../data/pcrPresets';
import { 
  FileDown, 
  ExternalLink, 
  BookOpen, 
  Calendar, 
  FileText, 
  Copy, 
  Check, 
  Printer, 
  Search,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const MaterialsSection: React.FC = () => {
  const [glossaryFilter, setGlossaryFilter] = useState('');
  const [isCopiedCheatSheet, setIsCopiedCheatSheet] = useState(false);
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);

  const pdfUrl = '/assets/aistudio/Aula_1__Intelig_ncia_Artificial_no_dia_a_dia__PCR__b92d2365.pdf';

  const cheatSheetContent = `GUIA RÁPIDO DE BOLSO: PROMPTS EFICIENTES NO SERVIÇO PÚBLICO
Prefeitura da Cidade do Recife · Escola de Governo

1. ESTRUTURA RECOMENDADA (# MARKDOWN)
# PAPEL
Defina com clareza quem a IA deve incorporar.
Ex: "Você é um assistente técnico da Secretaria de Educação do Recife."

# TAREFA
Descreva a entrega exata esperada em verbos de ação.
Ex: "Resuma as 3 deliberações principais da ata de reunião em tópicos objetivos."

# REGRAS
Delimite o tom, extensão e restrições inegociáveis.
- Tom cortês, formal e impessoal
- Máximo de 3 parágrafos ou 5 tópicos acionáveis
- JAMAIS inclua CPFs, nomes ou dados de munícipes (Conforme LGPD)
- Mencione os órgãos técnicos responsáveis (ex: Emlurb, CTTU, SEFIN)

2. CHECKLIST ANTES DE ENVIAR PARA A IA:
[ ] Removi dados de identificação pessoal de cidadãos?
[ ] Deixei claro o objetivo principal da mensagem?
[ ] Especifiquei o formato de saída (tabela, tópicos, parágrafo)?

3. LEMBRETE FUNDAMENTAL:
A tecnologia substitui tarefas burocráticas repetitivas.
A avaliação crítica, empatia e a assinatura final continuam sendo 100% humanas!`;

  const handleCopyCheatSheet = () => {
    navigator.clipboard.writeText(cheatSheetContent);
    setIsCopiedCheatSheet(true);
    setTimeout(() => setIsCopiedCheatSheet(false), 2000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Guia Rápido de Prompts - PCR</title>
            <style>
              body { font-family: sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
              h1 { color: #0284c7; font-size: 20px; }
              pre { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: monospace; white-space: pre-wrap; font-size: 13px; }
            </style>
          </head>
          <body>
            <h1>IA no Dia a Dia · Prefeitura do Recife</h1>
            <pre>${cheatSheetContent}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const filteredGlossary = GLOSSARY_ITEMS.filter(item =>
    item.term.toLowerCase().includes(glossaryFilter.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossaryFilter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Materials Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-400/20 text-xs font-bold uppercase tracking-wider">
                Didática & Organização
              </span>
              <span className="text-xs text-slate-400">· Materiais de Apoio para Docente e Alunos</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Central de Materiais & Repositório Didático
            </h2>
          </div>

          {/* Download Original PDF Button */}
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Aula_1__Inteligencia_Artificial_PCR.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Baixar PDF Original da Aula</span>
            </a>

            <button
              onClick={() => setShowPdfEmbed(!showPdfEmbed)}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-xl font-medium transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>{showPdfEmbed ? 'Ocultar PDF' : 'Visualizar PDF'}</span>
            </button>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Tenha acesso ao plano de aula cronometrado (90 min), guia de bolso de prompts para impressão, glossário conceitual e links diretos para as referências acadêmicas citadas no curso.
        </p>
      </div>

      {/* Embedded PDF Viewer (if toggled) */}
      {showPdfEmbed && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold">Visualizador do Arquivo Original Anexo</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline flex items-center gap-1 text-[11px]"
            >
              <span>Abrir em aba cheia</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <iframe
            src={pdfUrl}
            title="Apresentação em PDF"
            className="w-full h-[600px] rounded-xl border border-slate-800 bg-white"
          />
        </div>
      )}

      {/* Lesson Schedule Plan (90 minutes) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sky-400" />
              <span>Plano de Aula: Roteiro Minuto a Minuto (90 min)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Sugestão de condução pedagógica para o professor durante a ministração do curso.
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Duração Total: 1h30m
          </span>
        </div>

        <div className="space-y-3">
          {LESSON_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-sky-400">{item.time}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                    {item.duration}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/40 font-medium">
                    {item.activityType}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">{item.description}</p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  {item.slidesRef}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Printable Cheat Sheet & Glossary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Printable Cheat Sheet */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Guia de Bolso de Prompts Eficientes</span>
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Imprimir Guia de Bolso"
              >
                <Printer className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleCopyCheatSheet}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                {isCopiedCheatSheet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{isCopiedCheatSheet ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[360px] overflow-y-auto">
            {cheatSheetContent}
          </div>
        </div>

        {/* Glossary */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Glossário Didático de Termos de IA</span>
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">
              {filteredGlossary.length} termos
            </span>
          </div>

          {/* Search filter */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={glossaryFilter}
              onChange={(e) => setGlossaryFilter(e.target.value)}
              placeholder="Buscar termo ou conceito (ex: Prompt, LGPD, Alucinação)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="space-y-3 max-h-[310px] overflow-y-auto pr-1">
            {filteredGlossary.map((item) => (
              <div
                key={item.term}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1"
              >
                <span className="text-xs font-bold text-sky-400 block">{item.term}</span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bibliographic References from Slide 14 */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-white">
            Referências Bibliográficas Recomendadas (Slide 14)
          </h3>
          <p className="text-xs text-slate-400">
            Fontes científicas e de pesquisa para quem desejar se aprofundar após a aula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {[
            {
              source: 'Pew Research Center (2026)',
              title: 'Artificial Intelligence and the Future of Online Content',
              desc: 'Estudo pioneiro sobre a prevalência de conteúdo gerado por IA na web (>1/3 das novas publicações).',
              url: 'https://www.pewresearch.org'
            },
            {
              source: 'OpenAI (2024)',
              title: 'Model Collapse: When AI Learns from Itself',
              desc: 'Artigo técnico sobre a degeneração de modelos treinados com dados recursivos sintéticos.',
              url: 'https://openai.com'
            },
            {
              source: 'MIT Technology Review (2024)',
              title: 'The Risk of an Internet Full of AI Content',
              desc: 'Análise aprofundada sobre a preservação da originalidade e a checagem humana de fontes.',
              url: 'https://www.technologyreview.com'
            }
          ].map((ref) => (
            <a
              key={ref.title}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  {ref.source}
                </span>
                <h4 className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {ref.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{ref.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-sky-400 font-medium">
                <span>Acessar estudo</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
