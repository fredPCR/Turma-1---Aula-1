import React, { useState } from 'react';
import { PROMPT_PRESETS } from '../data/pcrPresets';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Terminal, 
  Play, 
  FileText, 
  Send, 
  Layers, 
  RotateCcw,
  ShieldCheck,
  Building,
  CheckCircle2,
  XCircle,
  HelpCircle
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
      // Find preset sample or generate simulated response
      const output = currentPreset.sampleOutput;
      setSimulatedResponse(output);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* Introduction banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-400/20 text-xs font-bold uppercase tracking-wider">
              Metodologia do Slide 11
            </span>
            <span className="text-xs text-slate-400">· Prompts Eficientes e Organizados</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Laboratório de Prompts da Prefeitura do Recife
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Monte prompts estruturados usando marcas simples de Markdown (<code className="text-sky-300 font-mono"># PAPEL</code>, <code className="text-sky-300 font-mono"># TAREFA</code> e <code className="text-sky-300 font-mono"># REGRAS</code>). Teste respostas realistas para diferentes secretarias e compare a diferença brutal entre um comando amador e um comando profissional.
          </p>
        </div>

        {/* Quick presets bar */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-400 block mb-3 uppercase tracking-wider">
            Casos de Uso Prontos para o Serviço Público:
          </span>
          <div className="flex flex-wrap gap-2">
            {PROMPT_PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                  selectedPresetId === p.id
                    ? 'bg-sky-500 text-slate-950 border-sky-400 font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
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
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Estrutura do Prompt</span>
            </h3>
            <button
              onClick={() => handleSelectPreset(selectedPresetId)}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
              title="Restaurar valores do modelo selecionado"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar</span>
            </button>
          </div>

          {/* Section 1: Papel */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              1. # PAPEL (Quem a IA deve ser?)
            </label>
            <textarea
              value={roleText}
              onChange={(e) => setRoleText(e.target.value)}
              rows={2}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-sans transition-colors resize-none"
              placeholder="Ex: Atue como assistente administrativo da Prefeitura..."
            />
          </div>

          {/* Section 2: Tarefa */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              2. # TAREFA (O que ela deve executar?)
            </label>
            <textarea
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              rows={3}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-sans transition-colors resize-none"
              placeholder="Ex: Resuma o memorando abaixo em tópicos concisos..."
            />
          </div>

          {/* Section 3: Regras */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                3. # REGRAS (Limites, formato e restrições)
              </label>
              <span className="text-[11px] text-slate-400">{rules.length} regras ativas</span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                >
                  <span className="leading-snug truncate">- {rule}</span>
                  <button
                    onClick={() => handleRemoveRule(idx)}
                    className="text-slate-500 hover:text-rose-400 p-1 text-xs"
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
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
              />
              <button
                onClick={handleAddRule}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-xl font-medium transition-colors"
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
              className="flex items-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl text-xs font-semibold transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Gerando resposta...' : 'Simular Resposta da IA'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-colors"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Prompt Copiado!' : 'Copiar Prompt Formatado'}</span>
            </button>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="ml-auto text-xs text-sky-400 hover:underline"
            >
              {showComparison ? 'Ocultar Comparação' : 'Ver Antes vs Depois'}
            </button>
          </div>
        </div>

        {/* Right column: Markdown Prompt View & Simulated Response */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Assembled Markdown Code Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-900">
              <span className="font-mono text-sky-400 font-semibold">prompt_final.md</span>
              <span className="text-[11px] text-slate-500">Pronto para colar no Gemini / ChatGPT</span>
            </div>
            
            <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {assembledPrompt}
            </pre>
          </div>

          {/* Simulated AI Output */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Resultado Gerado pelo Gemini (Simulação)</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                Padrão Prefeitura do Recife
              </span>
            </div>

            {isSimulating ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
                <span className="text-xs text-slate-400 font-medium">Processando instruções, papéis e regras...</span>
              </div>
            ) : simulatedResponse ? (
              <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto font-sans">
                {simulatedResponse}
              </div>
            ) : (
              <div className="py-8 text-center text-xs text-slate-500">
                Clique em "Simular Resposta da IA" para visualizar como o Gemini interpretará seu prompt.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Drawer (Antes vs Depois) */}
      {showComparison && (
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white">
              Comparação Didática: Por que a estrutura de Markdown importa?
            </h4>
            <span className="text-xs text-slate-400">Exemplo real do serviço público</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bad Prompt */}
            <div className="p-4 rounded-xl border border-rose-900/60 bg-rose-950/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs">
                <XCircle className="w-4 h-4" />
                <span>Prompt Amador / Vago (Sem estrutura)</span>
              </div>
              <p className="font-mono text-xs text-rose-200 bg-black/40 p-2.5 rounded border border-rose-900/30">
                "Resume aí esse negócio do asfalto pra mandar pro munícipe."
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-rose-300">O que a IA costuma entregar:</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Texto genérico, informal, sem protocolo, com termos que a Prefeitura não usa ("olá querido cidadão"), sem encaminhamento para o órgão técnico competente e correndo risco de inventar prazos.
                </p>
              </div>
            </div>

            {/* Good Prompt */}
            <div className="p-4 rounded-xl border border-emerald-900/60 bg-emerald-950/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Prompt Eficiente PCR (Com # Papel, # Tarefa, # Regras)</span>
              </div>
              <p className="font-mono text-xs text-emerald-200 bg-black/40 p-2.5 rounded border border-emerald-900/30">
                # PAPEL: Ouvidoria PCR / # TAREFA: Minuta de resposta / # REGRAS: Formal, citar Emlurb, sem LGPD
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-emerald-300">O que a IA entrega:</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
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
