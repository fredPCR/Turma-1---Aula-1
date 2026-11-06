import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  AlertTriangle, 
  Send,
  Sliders,
  CheckCircle2,
  Info
} from 'lucide-react';

export const InteractiveLab: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'predictive-gen' | 'model-collapse' | 'gemini-gmail'>('predictive-gen');

  // --- SUB-LAB 1: Preditiva vs Generativa ---
  const scenarios = [
    {
      id: 'cttu',
      title: 'Trânsito e Semáforos (CTTU)',
      department: 'Autarquia de Trânsito e Transporte Urbano (CTTU)',
      input: 'Sensores de laço magnético e dados de GPS na Avenida Agamenon Magalhães às 18h de sexta-feira.',
      predictive: {
        name: 'Algoritmo Preditivo (A Origem)',
        output: 'Probabilidade de congestionamento: 94.2% · Tempo estimado de travessia: 38 minutos (+14 min acima da média). Ajuste automático do ciclo semafórico para 120s.',
        howItWorks: 'Calcula números e probabilidades a partir de dados históricos de tráfego.'
      },
      generative: {
        name: 'Modelo Generativo (A Revolução)',
        output: '"⚠️ Boletim CTTU: Atenção motoristas que trafegam pela Av. Agamenon Magalhães no sentido Olinda/Boa Viagem. Tráfego muito lento próximo ao Derby devido ao grande fluxo de veículos e chuva leve. Recomendamos utilizar como rota alternativa a Av. Cruz Cabugá ou Rua do Espinheiro."',
        howItWorks: 'Gera texto compreensível, adaptado para redes sociais, painéis e rádio em linguagem natural.'
      }
    },
    {
      id: 'defesa-civil',
      title: 'Prevenção de Alagamentos (Defesa Civil)',
      department: 'Defesa Civil do Recife (COPEN)',
      input: 'Previsão de 50mm de precipitação em 6 horas + Maré cheia de 2.4m no Porto do Recife às 14h.',
      predictive: {
        name: 'Algoritmo Preditivo (A Origem)',
        output: 'Risco de pontos de alagamento: ALTO (Classificação: Nível 3). Bairros em alerta crítico: Santo Amaro, Ilha do Retiro e Imbiribeira. Coeficiente de saturação do solo: 82%.',
        howItWorks: 'Cruza tábua de marés e pluviômetros históricos para emitir alerta numérico.'
      },
      generative: {
        name: 'Modelo Generativo (A Revolução)',
        output: '"COMUNICADO PREVENTIVO: Defesa Civil do Recife orienta moradores de áreas ribeirinhas e encostas a reforçarem as lonas plásticas. Nossas equipes estão em prontidão permanente. Se precisar de vistoria imediata, ligue grátis para 0800 081 3400."',
        howItWorks: 'Cria uma campanha completa com instruções passo a passo, tom empático e canais de contato acionáveis.'
      }
    },
    {
      id: 'ouvidoria',
      title: 'Triagem de Manifestações (Ouvidoria 156)',
      department: 'Central de Atendimento ao Cidadão',
      input: 'Munícipe enviou foto e texto: "Buraco enorme na calçada da Rua da Aurora perto do monumento torto."',
      predictive: {
        name: 'Algoritmo Preditivo (A Origem)',
        output: 'Categoria atribuída: Infraestrutura Viária / Pavimentação (Confiança: 98%). Órgão de destino sugerido: Emlurb. Prazo SLA padrão: 5 dias úteis.',
        howItWorks: 'Classifica o chamado em categorias predeterminadas por palavras-chave.'
      },
      generative: {
        name: 'Modelo Generativo (A Revolução)',
        output: '"Prezado cidadão, agradecemos o envio das coordenadas. Identificamos a solicitação referente à calçada da Rua da Aurora (próximo ao Monumento Torto). Já formalizamos a abertura da Ordem de Serviço #2026/8892 para a equipe de pavimentação da Emlurb. Em breve retornaremos com a conclusão da vistoria."',
        howItWorks: 'Redige resposta personalizada em linguagem acolhedora, confirmando os detalhes do munícipe.'
      }
    }
  ];

  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = scenarios[selectedScenarioIndex];

  // --- SUB-LAB 2: Colapso de Modelo ---
  const [generationStep, setGenerationStep] = useState<number>(0);

  const modelGenerations = [
    {
      generation: 0,
      title: 'Geração 0 (100% Conhecimento Humano)',
      diversity: 98,
      localNuance: 95,
      errors: 2,
      sampleText: 'O frevo pernambucano nasceu nas ruas do Recife no fim do século XIX, fruto da efervescência das bandas marciais e da rivalidade entre blocos como o Vassourinhas e o Lenhadores. No Bairro de São José, os capoeiristas abriam espaço na multidão com passos acrobáticos que deram origem ao passo do frevo, patrimônio imaterial da humanidade.',
      verdict: 'Rico em contexto histórico, referências espaciais autênticas de Recife e precisão cultural.'
    },
    {
      generation: 1,
      title: 'Geração 1 (IA treinada com 80% humano + 20% sintético)',
      diversity: 82,
      localNuance: 76,
      errors: 6,
      sampleText: 'O frevo é uma dança típica tradicional que surgiu em Recife durante o século XIX. Ele mistura passos rápidos de dança com influência de capoeiristas e blocos carnavalescos históricos como o Vassourinhas. É uma das principais manifestações da cultura brasileira e reconhecido mundialmente.',
      verdict: 'Começa a perder detalhes de bairros específicos (Bairro de São José sumiu), mas preserva o sentido central.'
    },
    {
      generation: 2,
      title: 'Geração 2 (50% sintético + 50% humano)',
      diversity: 61,
      localNuance: 48,
      errors: 15,
      sampleText: 'O frevo é um estilo cultural festivo muito animado do carnaval do nordeste brasileiro. As pessoas dançam com pequenos guarda-chuvas coloridos realizando movimentos ágeis nas ruas festivas, celebrando a grande riqueza e energia da cultura popular.',
      verdict: 'O texto se torna genérico. Palavras de efeito como "riqueza" e "energia" substituem fatos históricos.'
    },
    {
      generation: 3,
      title: 'Geração 3 (75% sintético - Degradação visível)',
      diversity: 42,
      localNuance: 22,
      errors: 34,
      sampleText: 'A manifestação cultural carnavalesca é uma celebração colorida onde indivíduos expressam alegria por meio de ritmos vibrantes e coreografias dinâmicas com adereços circenses sob um clima de celebração contínua e festiva.',
      verdict: 'Perda das palavras "Recife", "frevo" e marcos históricos. Transformou-se em jargão impessoal.'
    },
    {
      generation: 4,
      title: 'Geração 4 (90% sintético - Colapso Grave)',
      diversity: 24,
      localNuance: 8,
      errors: 58,
      sampleText: 'Este ritmo de celebração festiva comemora a festividade da celebração, proporcionando momentos festivos de união harmônica e celebrações vibrantes entre todos os participantes da festa tradicional.',
      verdict: 'Repetição circular obsessiva da raiz "festa/celebração". Erros gramaticais e vazio total de conteúdo informativo.'
    }
  ];

  const currentGen = modelGenerations[generationStep];

  // --- SUB-LAB 3: Gemini no Gmail Institucional ---
  const [gmailTopic, setGmailTopic] = useState<'resposta-oficio' | 'convocacao-reuniao' | 'resumo-thread'>('resposta-oficio');
  const [gmailTone, setGmailTone] = useState<'formal' | 'sucinto' | 'expandido'>('formal');
  const [draftGenerated, setDraftGenerated] = useState<string>(
    'Prezados colegas da Secretaria de Educação,\n\nConfirmamos o recebimento do Memorando nº 412/2026. A equipe da Escola de Governo já incluiu o módulo de IA no cronograma oficial de capacitações do segundo semestre.\n\nFicamos à disposição para alinhar os detalhes técnicos.\n\nAtenciosamente,\nCoordenação de Capacitação Digital | PCR'
  );
  const [isGeneratingGmail, setIsGeneratingGmail] = useState(false);

  const handleGenerateGmailDraft = () => {
    setIsGeneratingGmail(true);
    setTimeout(() => {
      if (gmailTopic === 'resposta-oficio') {
        if (gmailTone === 'formal') {
          setDraftGenerated(
            'Prezada Diretoria Técnica,\n\nCumprimentando-os cordialmente, acusamos o recebimento do Ofício Circular nº 89/2026. Informamos que as informações solicitadas quanto ao plano de contingência digital já foram consolidadas pelo corpo técnico desta pasta e encontram-se em anexo para as providências cabíveis.\n\nRenovamos nossos protestos de estima e consideração.\n\nAtenciosamente,\nSecretaria Executiva de Transformação Digital | PCR'
          );
        } else if (gmailTone === 'sucinto') {
          setDraftGenerated(
            'Prezada Diretoria,\n\nRecebemos o Ofício nº 89/2026. Os dados solicitados sobre o plano de contingência digital já foram consolidados e seguem anexados.\n\nÀ disposição,\nSecretaria Executiva de Transformação Digital | PCR'
          );
        } else {
          setDraftGenerated(
            'Prezada Diretoria Técnica e demais membros do colegiado,\n\nÉ com satisfação que acusamos o tempestivo recebimento do Ofício Circular nº 89/2026, pelo qual solicitam-se os subsídios referentes ao plano de contingência digital do Município do Recife.\n\nGostaríamos de destacar que as diretrizes foram minuciosamente auditadas pelas equipes de infraestrutura e segurança da informação, contemplando salvaguardas da LGPD e mecanismos de alta disponibilidade. O relatório circunstanciado segue anexo em formato PDF para apreciação.\n\nAtenciosamente,\nSecretaria Executiva de Transformação Digital | PCR'
          );
        }
      } else if (gmailTopic === 'convocacao-reuniao') {
        setDraftGenerated(
          'Prezados(as) servidores(as),\n\nConvidamos todos para a Reunião Extraordinária de Alinhamento sobre o Programa de IA no Dia a Dia, a ser realizada na próxima terça-feira, às 10h, via Google Meet institucional.\n\nPauta principal:\n1. Apresentação das diretrizes de segurança da informação;\n2. Levantamento de dúvidas das secretarias participantes;\n3. Próximas etapas do cronograma de oficinas.\n\nContamos com a pontual participação de todos.\n\nEscola de Governo da Prefeitura do Recife'
        );
      } else {
        setDraftGenerated(
          '📌 RESUMO DA CONVERSA (3 mensagens anteriores):\n\n- O setor financeiro aprovou a liberação de cotas para o curso de IA.\n- A Secretaria de Educação confirmou a reserva do auditório nos dias 14 e 15.\n- Ação pendente: Cada secretaria deve indicar 2 facilitadores até amanhã às 17h.'
        );
      }
      setIsGeneratingGmail(false);
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Sub-tabs selector */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveLabTab('predictive-gen')}
          className={`text-xs px-4 py-2 rounded-xl font-medium transition-all ${
            activeLabTab === 'predictive-gen'
              ? 'bg-sky-600 text-white font-semibold shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          1. Comparador: Preditiva vs Generativa
        </button>

        <button
          onClick={() => setActiveLabTab('model-collapse')}
          className={`text-xs px-4 py-2 rounded-xl font-medium transition-all ${
            activeLabTab === 'model-collapse'
              ? 'bg-rose-600 text-white font-semibold shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          2. Simulador de Colapso de Modelo
        </button>

        <button
          onClick={() => setActiveLabTab('gemini-gmail')}
          className={`text-xs px-4 py-2 rounded-xl font-medium transition-all ${
            activeLabTab === 'gemini-gmail'
              ? 'bg-sky-600 text-white font-semibold shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          3. Simulador: Gemini no Gmail
        </button>
      </div>

      {/* --- TAB 1: PREDITIVA VS GENERATIVA --- */}
      {activeLabTab === 'predictive-gen' && (
        <div className="space-y-6">
          {/* Scenario tabs */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
              Escolha uma situação da rotina da Prefeitura do Recife:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {scenarios.map((sc, i) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioIndex(i)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    selectedScenarioIndex === i
                      ? 'border-sky-500 bg-sky-50/60 ring-1 ring-sky-400'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-900 block">{sc.title}</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5 truncate">{sc.department}</span>
                </button>
              ))}
            </div>

            {/* Input Context */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-sky-800 block mb-1">Dados de Entrada no Sistema Municipal:</strong>
              {currentScenario.input}
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Predictive */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">A Origem</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] text-slate-600 font-mono">
                    Classificação & Probabilidade
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{currentScenario.predictive.name}</h4>
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-mono">
                  {currentScenario.predictive.output}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600">
                <strong className="text-slate-800">Como funciona: </strong>
                {currentScenario.predictive.howItWorks}
              </div>
            </div>

            {/* Generative */}
            <div className="p-6 rounded-2xl bg-sky-50/30 border border-sky-200 space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">A Revolução</span>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-[11px] text-sky-800 font-mono border border-sky-200">
                    Síntese de Nova Linguagem
                  </span>
                </div>
                <h4 className="text-lg font-bold text-sky-950">{currentScenario.generative.name}</h4>
                
                <div className="p-4 rounded-xl bg-white border border-sky-200 text-xs text-slate-800 leading-relaxed shadow-xs">
                  {currentScenario.generative.output}
                </div>
              </div>

              <div className="pt-4 border-t border-sky-200 text-xs text-sky-900">
                <strong className="text-sky-950">Como funciona: </strong>
                {currentScenario.generative.howItWorks}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: MODEL COLLAPSE --- */}
      {activeLabTab === 'model-collapse' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Conceito Científico: Model Collapse (Shumailov et al. / Nature 2024)</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              O que acontece quando IAs aprendem com conteúdos sintetizados por outras IAs?
            </h4>
            <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
              Arraste o controle de gerações recursivas abaixo para observar como a riqueza cultural local, o vocabulário do Recife e fatos históricos se degradam quando a internet passa a ser alimentada recursivamente por robôs sem novos insumos humanos originais.
            </p>
          </div>

          {/* Generation Slider */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800">Ciclo de Treinamento Recursivo:</span>
              <span className="font-mono px-2.5 py-1 rounded bg-rose-100 text-rose-800 font-bold text-xs">
                {currentGen.title}
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={4}
              step={1}
              value={generationStep}
              onChange={(e) => setGenerationStep(parseInt(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>Geração 0 (Humano)</span>
              <span>Geração 1</span>
              <span>Geração 2</span>
              <span>Geração 3</span>
              <span>Geração 4 (Colapso)</span>
            </div>
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Diversidade de Vocabulário</span>
              <span className="text-2xl font-bold text-sky-700 font-mono">{currentGen.diversity}%</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Nuance & Cultura Local (Recife)</span>
              <span className="text-2xl font-bold text-amber-600 font-mono">{currentGen.localNuance}%</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Erros & Repetições Circulares</span>
              <span className="text-2xl font-bold text-rose-600 font-mono">{currentGen.errors}%</span>
            </div>
          </div>

          {/* Degraded Text Display */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
              Texto Sintetizado pelo Modelo Nesta Fase:
            </span>
            <div className="p-4 rounded-lg bg-white border border-slate-200 text-sm text-slate-800 font-serif leading-relaxed shadow-xs">
              "{currentGen.sampleText}"
            </div>
            <div className="text-xs text-rose-900 bg-rose-50 border border-rose-200 p-3 rounded-lg">
              <strong>Diagnóstico Técnico: </strong> {currentGen.verdict}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 3: GEMINI NO GMAIL --- */}
      {activeLabTab === 'gemini-gmail' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                Simulador Prático · Workspace PCR
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1">
                Interface do Gmail Institucional com Gemini Integrado
              </h4>
            </div>
            <span className="px-3 py-1 rounded bg-slate-100 text-xs font-mono text-slate-600">
              servidor@recife.pe.gov.br
            </span>
          </div>

          {/* Simulated Workspace layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            
            {/* Left: Email composer mockup */}
            <div className="lg:col-span-8 p-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-800">Nova Mensagem</span>
                <span className="text-[11px] text-slate-400">Workspace PCR</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5">
                  <span className="text-slate-400 w-16">Para:</span>
                  <span className="text-slate-700 font-mono">secretaria.educacao@recife.pe.gov.br</span>
                </div>
                <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5">
                  <span className="text-slate-400 w-16">Assunto:</span>
                  <span className="text-slate-900 font-medium">Resposta ao Memorando nº 412/2026</span>
                </div>
              </div>

              {/* Email body preview */}
              <div className="min-h-[180px] p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">
                {isGeneratingGmail ? (
                  <div className="flex items-center gap-2 text-sky-700 py-6 justify-center">
                    <Sparkles className="w-4 h-4 animate-spin text-sky-600" />
                    <span>Gemini está redigindo seu rascunho com o tom selecionado...</span>
                  </div>
                ) : (
                  draftGenerated
                )}
              </div>

              {/* Compose action toolbar */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => alert('Mensagem enviada com sucesso no ambiente simulado!')}
                  className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar</span>
                </button>
                <span className="text-[11px] text-slate-400">
                  Rascunho salvo automaticamente
                </span>
              </div>
            </div>

            {/* Right: Gemini Sidebar panel */}
            <div className="lg:col-span-4 p-5 bg-slate-50 space-y-4">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-xs border-b border-slate-200 pb-3">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Painel Lateral do Gemini</span>
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                  1. O que deseja fazer?
                </span>
                <div className="space-y-1.5">
                  {[
                    { id: 'resposta-oficio', label: 'Rascunhar resposta a ofício' },
                    { id: 'convocacao-reuniao', label: 'Convocação para reunião' },
                    { id: 'resumo-thread', label: 'Resumir cadeia de e-mails' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setGmailTopic(t.id as any)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors ${
                        gmailTopic === t.id
                          ? 'bg-sky-100 text-sky-900 border border-sky-300 font-semibold'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block pt-2">
                  2. Ajustar Tom da Resposta:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['formal', 'sucinto', 'expandido'] as const).map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setGmailTone(tone)}
                      className={`py-1.5 text-[11px] font-medium rounded capitalize text-center transition-colors ${
                        gmailTone === tone
                          ? 'bg-sky-600 text-white font-bold'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleGenerateGmailDraft}
                  disabled={isGeneratingGmail}
                  className="w-full mt-3 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl transition-all shadow-xs active:scale-95 disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aplicar com Gemini</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
