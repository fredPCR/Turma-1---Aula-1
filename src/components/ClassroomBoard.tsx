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
  Download, 
  Copy, 
  Check, 
  Filter, 
  Sparkles,
  Users,
  MessageSquare
} from 'lucide-react';

export const ClassroomBoard: React.FC = () => {
  // Load ideas from local storage or defaults
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

  // New idea form modal or inline state
  const [showAddForm, setShowAddForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [department, setDepartment] = useState('Secretaria de Educação');
  const [currentTask, setCurrentTask] = useState('');
  const [aiOpportunity, setAiOpportunity] = useState('');
  const [category, setCategory] = useState<'Atendimento' | 'Documentos' | 'Organização' | 'Planejamento' | 'Análise'>('Organização');
  
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isCopiedReport, setIsCopiedReport] = useState(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('pcr_mural_ideas', JSON.stringify(ideas));
  }, [ideas]);

  // Sprint timer
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
    <div className="space-y-8">
      {/* Activity Intro Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-400/20 text-xs font-bold uppercase tracking-wider">
                Slide 12 · Atividade Rápida
              </span>
              <span className="text-xs text-slate-400">· Participação Ativa da Turma</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Mural da Turma: Pense na sua rotina e compartilhe
            </h2>
          </div>

          {/* Activity countdown timer */}
          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-sky-400">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>
            <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-1 rounded hover:bg-slate-800 text-slate-300 transition-colors"
                title={timerRunning ? 'Pausar' : 'Iniciar cronômetro de 10 min'}
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(600);
                }}
                className="p-1 rounded hover:bg-slate-800 text-slate-300 transition-colors"
                title="Reiniciar 10 minutos"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 text-xs md:text-sm text-sky-200">
          <span className="font-semibold block mb-0.5 text-sky-100">Desafio para cada participante:</span>
          "O que você faz todos os dias durante o trabalho que poderia ser realizado de uma forma mais organizada, rápida ou consistente com o apoio da IA?"
        </div>

        {/* Action buttons bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-1.5 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl text-xs font-semibold transition-all shadow-md active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? 'Cancelar Cadastro' : 'Publicar Nova Ideia'}</span>
            </button>

            <button
              onClick={handleExportMarkdown}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-colors"
              title="Copiar relatório completo com todas as sugestões da turma em Markdown"
            >
              {isCopiedReport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopiedReport ? 'Relatório Copiado!' : 'Exportar Relatório da Aula'}</span>
            </button>
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            {['all', 'Atendimento', 'Documentos', 'Organização', 'Planejamento', 'Análise'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  filterCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
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
        <form onSubmit={handleAddIdea} className="bg-slate-900 border border-sky-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Compartilhar Oportunidade da Sua Rotina</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Seu Nome (Opcional)
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Secretaria / Órgão
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
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
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Categoria
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
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
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                O que você faz hoje manualmente?
              </label>
              <textarea
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                rows={3}
                required
                placeholder="Ex: Todo dia leio 30 memorandos e anoto em uma planilha quem é o responsável..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-sky-500 resize-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                Como a IA (Gemini) poderia apoiar?
              </label>
              <textarea
                value={aiOpportunity}
                onChange={(e) => setAiOpportunity(e.target.value)}
                rows={3}
                required
                placeholder="Ex: Extrair automaticamente data de vencimento e assunto em formato de tabela..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-sky-500 resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold rounded-xl shadow-md"
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
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-sm group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 truncate max-w-[170px]">
                  {idea.department}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-sky-400 font-mono">
                  {idea.category}
                </span>
              </div>

              {/* Task vs Opportunity */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Rotina Atual:
                  </span>
                  <p className="text-slate-300 leading-relaxed font-sans">{idea.currentTask}</p>
                </div>

                <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-900/50">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    Solução com IA:
                  </span>
                  <p className="text-sky-100 leading-relaxed font-sans">{idea.aiOpportunity}</p>
                </div>
              </div>
            </div>

            {/* Footer with Author and Upvoting */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="truncate max-w-[140px] text-[11px] text-slate-400">
                Por: <strong className="text-slate-300 font-medium">{idea.author}</strong>
              </span>

              <button
                onClick={() => handleVote(idea.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  idea.voted
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
