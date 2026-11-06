export type TabType = 'slides' | 'prompt-studio' | 'lab' | 'mural' | 'lgpd' | 'materiais';

export interface SlideContent {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  kicker?: string;
  theme?: 'dark' | 'light';
  speakerNotes: {
    duration: string;
    teachingTip: string;
    suggestedQuestions: string[];
    keyTakeaway: string;
  };
  type: 
    | 'cover'
    | 'timeline'
    | 'pillars'
    | 'comparison'
    | 'grid-features'
    | 'human-ai'
    | 'model-collapse'
    | 'data-stats'
    | 'human-role'
    | 'best-practices'
    | 'prompt-guide'
    | 'quick-activity'
    | 'gemini-gmail'
    | 'references'
    | 'closing'
    | 'credits';
  interactiveActionLabel?: string;
  targetTab?: TabType;
}

export interface PromptTemplate {
  id: string;
  title: string;
  department: string;
  role: string;
  task: string;
  rules: string[];
  sampleOutput: string;
}

export interface MuralIdea {
  id: string;
  author: string;
  department: string;
  currentTask: string;
  aiOpportunity: string;
  category: 'Atendimento' | 'Documentos' | 'Organização' | 'Planejamento' | 'Análise';
  votes: number;
  timestamp: string;
  voted?: boolean;
}

export interface LessonScheduleItem {
  time: string;
  duration: string;
  title: string;
  description: string;
  slidesRef: string;
  activityType: 'Exposição' | 'Discussão' | 'Prática' | 'Reflexão';
}
