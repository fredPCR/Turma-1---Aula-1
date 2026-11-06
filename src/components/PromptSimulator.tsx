import React, { useState } from 'react';
import { PROMPT_PRESETS } from '../data/pcrPresets';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Terminal, 
  Play, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const PromptSimulator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('ouvidoria-resposta');
  
  // Custom prompt builder state
  const currentPreset = PROMPT_PRESETS.find(p => p.id === selectedPresetId) || PROMPT_PRESETS[0];
  const [roleText, setRoleText] = useState(currentPreset.role);
  const [taskText, setTaskText] = useState(currentPreset.task);
  const [rules, setRules] = useState<string[]>(currentPreset.rules);
  const [newRuleInput, setNewRuleInput] = useState('');
  
  const [isCopied, setIsCopied] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(currentPreset.sampleOutput);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  // When changing presets, update state
  const handleSelectPreset = (id: string) => {
    setSelectedPresetId(id);
    const preset = PROMPT_PRESETS.find(p => p.id === id);
    if (preset) {
      setRoleText(preset.role);
      setTaskText(preset.task);
      setRules([...preset.rules]);
      setSimulatedResponse(preset.sampleOutput);
    }
  };

  const handleAddRule = () => {
    if (!newRuleInput.trim()) return;
    setRules(prev => [...prev, newRuleInput.trim()]);
    setNewRuleInput('');
  };

  const handleRemoveRule = (index: number) => {
    setRules(prev => prev.filter((_, i) => i !== index));
  };

  const assembledPrompt = `# PAPEL
${roleText}

# TAREFA
${taskText}

# REGRAS
${rules.map(r => `- ${r}`).join('\n')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(assembledPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setSimulatedResponse(currentPreset.sampleOutput);
      setIsSimulating(false);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Introduction box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
            <span>Metodologia do Módulo de Prompts</span>
            <span aria-hidden="true">·</span>
            <span>Estrutura com Markdown</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Laboratório Interativo de Prompts da PCR
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Monte instruções estruturadas usando os 3 blocos recomendados: <strong className="text-slate-900 font-mono"># PAPEL</strong>, <strong className="text-slate-900 font-mono"># TAREFA</strong> e <strong className="text-slate-900 font-mono"># REGRAS</strong>. Teste respostas simuladas para diferentes secretarias e compare com comandos vagos.
          </p>
        </div>

        {/* Quick presets bar */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
            Selecione um caso real do serviço público:
          </span>
          <div className="flex flex-wrap gap-2">
            {PROMPT_PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p.id)}
                className={`text-xs px-3.5 py-2 rounded-xl border font-medium transition-all ${
                  selectedPresetId === p.id
                    ? 'bg-sky-600 text-white border-sky-600 font-semibold shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 2-column studio layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left column: Structured Prompt Form */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-600" />
              <span>Composição dos 3 Blocos</span>
            </h4>
            <button
              onClick={() => handleSelectPreset(selectedPresetId)}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
              title="Restaurar valores do modelo selecionado"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar</span>
            </button>
          </div>

          {/* Section 1: Papel */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
              1. # PAPEL (Quem a IA deve ser?)
            </label>
            <textarea
              value={roleText}
              onChange={(e) => setRoleText(e.target.value)}
              rows={2}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white font-sans transition-colors resize-none"
              placeholder="Ex: Atue como assistente administrativo da Prefeitura..."
            />
          </div>

          {/* Section 2: Tarefa */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
              2. # TAREFA (O que ela deve executar?)
            </label>
            <textarea
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white font-sans transition-colors resize-none"
              placeholder="Ex: Resuma o memorando abaixo em tópicos concisos..."
            />
          </div>

          {/* Section 3: Regras */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
                3. # REGRAS (Limites, formato e restrições)
              </label>
              <span className="text-[11px] text-slate-400 font-mono">{rules.length} regras ativas</span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700"
                >
                  <span className="leading-snug truncate">- {rule}</span>
                  <button
                    onClick={() => handleRemoveRule(idx)}
                    className="text-slate-400 hover:text-rose-600 p-0.5 text-xs font-bold"
                    title="Remover regra"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Add new rule */}
            <div className="flex gap-2 pt-1">
              <input
                type="text"
                value={newRuleInput}
                onChange={(e) => setNewRuleInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddRule()}
                placeholder="Adicionar nova regra (Ex: Limitar a 2 parágrafos)..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white"
              />
              <button
                onClick={handleAddRule}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs rounded-xl font-medium transition-colors"
              >
                + Adicionar
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-95 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Gerando resposta...' : 'Simular Resposta da IA'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-colors"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Prompt Copiado!' : 'Copiar Prompt Formatado'}</span>
            </button>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="ml-auto text-xs text-sky-700 hover:underline font-medium"
            >
              {showComparison ? 'Ocultar Comparação' : 'Ver Antes vs Depois'}
            </button>
          </div>
        </div>

        {/* Right column: Markdown Prompt View & Simulated Response */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Assembled Markdown Code Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xs space-y-2 text-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-mono text-sky-400 font-semibold">prompt_gerado.md</span>
              <span className="text-[11px] text-slate-400">Pronto para colar no Gemini / ChatGPT</span>
            </div>
            
            <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {assembledPrompt}
            </pre>
          </div>

          {/* Simulated AI Output */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Resultado Gerado pelo Gemini (Simulação)</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                Padrão Prefeitura do Recife
              </span>
            </div>

            {isSimulating ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <div className="w-7 h-7 rounded-full border-2 border-sky-600 border-t-transparent animate-spin" />
                <span className="text-xs text-slate-500 font-medium">Processando instruções, papéis e regras...</span>
              </div>
            ) : simulatedResponse ? (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto font-sans">
                {simulatedResponse}
              </div>
            ) : (
              <div className="py-8 text-center text-xs text-slate-400">
                Clique em "Simular Resposta da IA" para visualizar como o Gemini interpretará seu prompt.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Drawer (Antes vs Depois) */}
      {showComparison && (
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900">
              Comparação Didática: Por que a estrutura de Markdown importa?
            </h4>
            <span className="text-xs text-slate-500">Exemplo real do serviço público</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bad Prompt */}
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Prompt Amador / Vago (Sem estrutura)</span>
              </div>
              <p className="font-mono text-xs text-rose-900 bg-white p-2.5 rounded border border-rose-200">
                "Resume aí esse negócio do asfalto pra mandar pro munícipe."
              </p>
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-rose-800">O que a IA costuma entregar:</p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Texto genérico, informal, sem protocolo, com termos que a Prefeitura não usa ("olá querido cidadão"), sem encaminhamento para o órgão técnico competente e correndo risco de inventar prazos.
                </p>
              </div>
            </div>

            {/* Good Prompt */}
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Prompt Eficiente PCR (Com # Papel, # Tarefa, # Regras)</span>
              </div>
              <p className="font-mono text-xs text-emerald-900 bg-white p-2.5 rounded border border-emerald-200">
                # PAPEL: Ouvidoria PCR / # TAREFA: Minuta de resposta / # REGRAS: Formal, citar Emlurb, sem LGPD
              </p>
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-emerald-800">O que a IA entrega:</p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Documento pronto para uso institucional, tom cortês, protocolo padronizado, menção correta à Emlurb e total proteção contra vazamento de dados de cidadãos.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
