import React, { useState, useEffect, useRef } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { SlideRenderer } from './SlideRenderer';
import { TabType } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  LayoutGrid, 
  Play, 
  Pause, 
  RotateCcw, 
  Flame, 
  FileDown, 
  ExternalLink,
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';

interface SlideDeckProps {
  onNavigateToTab: (tab: TabType) => void;
  isPresentationMode?: boolean;
  onExitPresentationMode?: () => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({
  onNavigateToTab,
  isPresentationMode = false,
  onExitPresentationMode
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [laserActive, setLaserActive] = useState(false);
  const [laserPos, setLaserPos] = useState({ x: -100, y: -100 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Classroom timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES_DATA.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 't' || e.key === 'T' || e.key === 'o' || e.key === 'O') {
        setShowThumbnails((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && isPresentationMode && onExitPresentationMode) {
        onExitPresentationMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode, onExitPresentationMode]);

  // Laser pointer mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!laserActive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setLaserPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`space-y-4 ${isPresentationMode ? 'fixed inset-0 z-50 bg-slate-950 flex flex-col p-4' : ''}`}>
      
      {/* Top Deck Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800/90 border border-slate-700/80 px-4 py-2.5 rounded-xl text-xs text-slate-300">
        
        {/* Slide Counter & Title */}
        <div className="flex items-center gap-3">
          <span className="font-mono bg-slate-900 px-2.5 py-1 rounded text-sky-400 font-semibold">
            Slide {currentSlideIndex + 1} / {SLIDES_DATA.length}
          </span>
          <span className="font-medium text-slate-200 hidden sm:inline truncate max-w-[260px]">
            {currentSlide.title}
          </span>
        </div>

        {/* Presentation Controls */}
        <div className="flex items-center gap-2">
          {/* Laser Pointer Toggle */}
          <button
            onClick={() => setLaserActive(!laserActive)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              laserActive
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
            }`}
            title="Ativar apontador laser virtual durante a explicação"
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden md:inline">Laser</span>
          </button>

          {/* Speaker Notes Toggle */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              showNotes
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
            }`}
            title="Exibir roteiro pedagógico e perguntas para a turma (Tecla N)"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Notas do Professor</span>
          </button>

          {/* Thumbnails Drawer Toggle */}
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              showThumbnails
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700'
            }`}
            title="Ver grade de miniaturas para saltar de slide (Tecla O)"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Visão Geral</span>
          </button>

          {/* Stopwatch */}
          <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 font-mono text-[11px]">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{formatTimer(timerSeconds)}</span>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="text-slate-400 hover:text-white p-0.5"
              title={timerRunning ? 'Pausar cronômetro' : 'Iniciar cronômetro'}
            >
              {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => {
                setTimerRunning(false);
                setTimerSeconds(0);
              }}
              className="text-slate-400 hover:text-white p-0.5"
              title="Zerar cronômetro"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded bg-slate-700/60 text-slate-300 hover:bg-slate-700 transition-colors"
            title="Tela cheia (Tecla F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Exit Presentation Mode (if modal) */}
          {isPresentationMode && onExitPresentationMode && (
            <button
              onClick={onExitPresentationMode}
              className="px-2.5 py-1 bg-rose-500/80 hover:bg-rose-500 text-white rounded font-medium transition-colors"
            >
              Sair
            </button>
          )}
        </div>
      </div>

      {/* Main Slide Stage & Layout */}
      <div className={`grid grid-cols-1 ${showNotes ? 'lg:grid-cols-12' : ''} gap-4 flex-1 items-start`}>
        
        {/* Slide Canvas (16:9 aspect ratio box) */}
        <div className={`${showNotes ? 'lg:col-span-8' : 'w-full'} flex flex-col space-y-3`}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col"
          >
            {/* The Rendered Slide */}
            <SlideRenderer
              slide={currentSlide}
              onNavigateToTab={onNavigateToTab}
              interactiveMode={true}
            />

            {/* Simulated Laser Dot */}
            {laserActive && (
              <div
                className="absolute pointer-events-none w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_12px_#f43f5e] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 z-50 ring-2 ring-rose-200"
                style={{
                  left: `${laserPos.x}px`,
                  top: `${laserPos.y}px`
                }}
              />
            )}
          </div>

          {/* Slide Navigation Footbar */}
          <div className="flex items-center justify-between px-2">
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold text-slate-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            {/* Quick Progress Dots */}
            <div className="hidden sm:flex items-center gap-1.5 max-w-md overflow-x-auto py-1">
              {SLIDES_DATA.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlideIndex
                      ? 'w-6 bg-sky-400'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  title={`Slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES_DATA.length - 1))}
              disabled={currentSlideIndex === SLIDES_DATA.length - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold text-slate-950 transition-colors"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Speaker Notes Side Drawer */}
        {showNotes && (
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4 text-xs text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Roteiro do Professor</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[11px]">
                {currentSlide.speakerNotes.duration}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Objetivo Pedagógico & Condução
                </span>
                <p className="mt-1 text-slate-200 leading-relaxed text-xs">
                  {currentSlide.speakerNotes.teachingTip}
                </p>
              </div>

              {currentSlide.speakerNotes.suggestedQuestions.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                    Perguntas Provocativas para a Turma
                  </span>
                  <ul className="mt-1.5 space-y-1.5 list-disc list-inside text-slate-300 text-xs">
                    {currentSlide.speakerNotes.suggestedQuestions.map((q, i) => (
                      <li key={i} className="leading-snug">{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/40">
                <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">
                  Mensagem Chave (Takeaway)
                </span>
                <p className="mt-1 text-sky-100 font-medium leading-relaxed">
                  "{currentSlide.speakerNotes.keyTakeaway}"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails Modal/Drawer */}
      {showThumbnails && (
        <div className="p-4 bg-slate-900/95 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Navegar por Miniaturas dos Slides</h3>
            <button
              onClick={() => setShowThumbnails(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Fechar grade
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-h-60 overflow-y-auto p-1">
            {SLIDES_DATA.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setShowThumbnails(false);
                }}
                className={`flex flex-col text-left p-2 rounded-lg border transition-all ${
                  idx === currentSlideIndex
                    ? 'border-sky-400 bg-sky-950/60 ring-2 ring-sky-400'
                    : 'border-slate-800 bg-slate-800/60 hover:border-slate-600'
                }`}
              >
                <span className="font-mono text-[10px] text-slate-400">#{s.slideNumber}</span>
                <span className="text-[11px] font-semibold text-slate-200 truncate mt-1">{s.title}</span>
                <span className="text-[9px] text-slate-400 mt-0.5">{s.type}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Download of Original PDF */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 px-1">
        <div className="flex items-center gap-2">
          <span>Arquivo Original do Curso:</span>
          <a
            href="/assets/aistudio/Aula_1__Intelig_ncia_Artificial_no_dia_a_dia__PCR__b92d2365.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Baixar Apresentação em PDF (PCR)</span>
            <FileDown className="w-3.5 h-3.5" />
          </a>
        </div>
        <span className="text-[11px] text-slate-500 hidden sm:inline">
          Dica: use as setas ← → do teclado ou a Barra de Espaço para avançar os slides.
        </span>
      </div>
    </div>
  );
};
