import React, { useState, useEffect } from 'react';
import { MuralIdea } from '../types';
import { INITIAL_MURAL_IDEAS } from '../data/pcrPresets';
import { 
  Plus, 
  ThumbsUp, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles,
  Users
} from 'lucide-react';

export const ClassroomBoard: React.FC = () => {
  const [ideas, setIdeas] = useState<MuralIdea[]>(() => {
    const saved = localStorage.getItem('pcr_mural_ideas');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_MURAL_IDEAS;
      }
    }
    return INITIAL_MURAL_IDEAS;
  });

  // Sprint timer (10 minutes)
  const [timerSeconds, setTimerSeconds] = useState(600);
  const [timerRunning, setTimerRunning] = useState(false);

  // Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [department, setDepartment] = useState('Secretaria de Educação');
  const [currentTask, setCurrentTask] = useState('');
  const [aiOpportunity, setAiOpportunity] = useState('');
  const [category, setCategory] = useState<'Atendimento' | 'Documentos' | 'Organização' | 'Planejamento' | 'Análise'>('Organização');
  
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isCopiedReport, setIsCopiedReport] = useState(false);

  useEffect(() => {
    localStorage.setItem('pcr_mural_ideas', JSON.stringify(ideas));
  }, [ideas]);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const formatTimer = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleVote = (id: string) => {
    setIdeas(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newVoted = !item.voted;
          return {
            ...item,
            votes: newVoted ? item.votes + 1 : item.votes - 1,
            voted: newVoted
          };
        }
        return item;
      })
    );
  };

  const handleAddIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTask.trim() || !aiOpportunity.trim()) return;

    const newIdea: MuralIdea = {
      id: `idea-${Date.now()}`,
      author: author.trim() || 'Servidor(a) Participante',
      department,
      currentTask: currentTask.trim(),
      aiOpportunity: aiOpportunity.trim(),
      category,
      votes: 1,
      timestamp: 'Agora'
    };

    setIdeas(prev => [newIdea, ...prev]);
    setCurrentTask('');
    setAiOpportunity('');
    setShowAddForm(false);
  };

  const handleExportMarkdown = () => {
    const lines = [
      '# Relatório da Dinâmica de Grupo · IA no Dia a Dia (PCR)',
      '**Pergunta norteadora:** "O que você faz todos os dias durante o trabalho que poderia ser realizado de uma forma mais organizada, rápida ou consistente com o apoio da IA?"\n'
    ];

    ideas.forEach((item, idx) => {
      lines.push(`### ${idx + 1}. ${item.department} — ${item.author} (${item.category})`);
      lines.push(`- **Tarefa Atual:** ${item.currentTask}`);
      lines.push(`- **Oportunidade com IA:** ${item.aiOpportunity}`);
      lines.push(`- **Votos dos colegas:** ${item.votes}\n`);
    });

    navigator.clipboard.writeText(lines.join('\n'));
    setIsCopiedReport(true);
    setTimeout(() => setIsCopiedReport(false), 2000);
  };

  const filteredIdeas = filterCategory === 'all'
    ? ideas
    : ideas.filter(i => i.category === filterCategory);

  return (
    <div className="space-y-6">
      {/* Activity Intro Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
              <span>Atividade Prática em Sala</span>
              <span aria-hidden="true">·</span>
              <span>Construção Coletiva</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Mural da Turma: Oportunidades na Sua Rotina
            </h3>
          </div>

          {/* Activity countdown timer */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-slate-800">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>
            <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                title={timerRunning ? 'Pausar' : 'Iniciar cronômetro de 10 min'}
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(600);
                }}
                className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                title="Reiniciar 10 minutos"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-xs md:text-sm text-sky-950">
          <span className="font-semibold block mb-0.5 text-sky-900">Pergunta da dinâmica:</span>
          "O que você faz todos os dias durante o trabalho que poderia ser realizado de uma forma mais organizada, rápida ou consistente com o apoio da IA?"
        </div>

        {/* Action buttons bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? 'Cancelar' : 'Publicar Minha Ideia'}</span>
            </button>

            <button
              onClick={handleExportMarkdown}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-colors"
              title="Copiar relatório completo com todas as sugestões da turma em Markdown"
            >
              {isCopiedReport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopiedReport ? 'Relatório Copiado!' : 'Copiar Síntese da Turma'}</span>
            </button>
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs">
            {['all', 'Atendimento', 'Documentos', 'Organização', 'Planejamento', 'Análise'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  filterCategory === cat
                    ? 'bg-sky-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'Todas' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add idea form drawer */}
      {showAddForm && (
        <form onSubmit={handleAddIdea} className="bg-white border border-sky-300 rounded-2xl p-6 space-y-4 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Compartilhar Oportunidade da Sua Rotina</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Seu Nome (Opcional)
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Secretaria / Órgão
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white"
              >
                <option value="Secretaria de Educação">Secretaria de Educação</option>
                <option value="Secretaria de Saúde">Secretaria de Saúde</option>
                <option value="Secretaria de Finanças (SEFIN)">Secretaria de Finanças (SEFIN)</option>
                <option value="Ouvidoria Geral do Município">Ouvidoria Geral do Município</option>
                <option value="Emlurb (Limpeza Urbana)">Emlurb</option>
                <option value="CTTU (Trânsito e Transporte)">CTTU</option>
                <option value="Defesa Civil (COPEN)">Defesa Civil</option>
                <option value="Guarda Municipal">Guarda Municipal</option>
                <option value="Outro Órgão / Geral">Outro Órgão</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Categoria
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white"
              >
                <option value="Organização">Organização</option>
                <option value="Atendimento">Atendimento</option>
                <option value="Documentos">Documentos</option>
                <option value="Planejamento">Planejamento</option>
                <option value="Análise">Análise</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                O que você faz hoje manualmente?
              </label>
              <textarea
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                rows={3}
                required
                placeholder="Ex: Todo dia leio 30 memorandos e anoto em uma planilha quem é o responsável..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white resize-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block mb-1">
                Como a IA (Gemini) poderia apoiar?
              </label>
              <textarea
                value={aiOpportunity}
                onChange={(e) => setAiOpportunity(e.target.value)}
                rows={3}
                required
                placeholder="Ex: Extrair automaticamente data de vencimento e assunto em formato de tabela..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-xl"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-xs"
            >
              Publicar no Mural
            </button>
          </div>
        </form>
      )}

      {/* Ideas Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredIdeas.map((idea) => (
          <div
            key={idea.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 truncate max-w-[170px]">
                  {idea.department}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-sky-800 font-medium">
                  {idea.category}
                </span>
              </div>

              {/* Task vs Opportunity */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Rotina Atual:
                  </span>
                  <p className="text-slate-700 leading-relaxed font-sans">{idea.currentTask}</p>
                </div>

                <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-200">
                  <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider block mb-1">
                    Solução com IA:
                  </span>
                  <p className="text-sky-950 leading-relaxed font-sans">{idea.aiOpportunity}</p>
                </div>
              </div>
            </div>

            {/* Footer with Author and Upvoting */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="truncate max-w-[140px] text-[11px]">
                Por: <strong className="text-slate-800 font-medium">{idea.author}</strong>
              </span>

              <button
                onClick={() => handleVote(idea.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  idea.voted
                    ? 'bg-sky-600 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                title="Votar nesta oportunidade"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{idea.votes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
