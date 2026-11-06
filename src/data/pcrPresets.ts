import { PromptTemplate, MuralIdea, LessonScheduleItem } from '../types';

export const PROMPT_PRESETS: PromptTemplate[] = [
  {
    id: 'ouvidoria-resposta',
    title: 'Resposta Cortês a Manifestação de Cidadão (Ouvidoria)',
    department: 'Ouvidoria Geral do Município',
    role: 'Atue como um analista de atendimento ao cidadão da Ouvidoria da Prefeitura da Cidade do Recife.',
    task: 'Redija uma minuta de resposta institucional para um cidadão que solicitou informações sobre o recapeamento asfáltico em sua rua.',
    rules: [
      'Tom cortês, empático e formal',
      'Máximo de 3 parágrafos claros',
      'Não inclua dados pessoais ou números de CPF/telefone do cidadão',
      'Forneça o número de protocolo no formato fictício #PCR-2026/0894',
      'Indique que a demanda foi encaminhada para a Emlurb para vistoria técnica'
    ],
    sampleOutput: `Prezado(a) cidadão(ã),

Agradecemos o seu contato com a Ouvidoria Geral da Prefeitura da Cidade do Recife e a sua valorosa contribuição para o aprimoramento da nossa cidade.

Informamos que a sua solicitação referente aos serviços de recuperação asfáltica na localidade informada foi devidamente protocolada sob o número #PCR-2026/0894 e já se encontra formalmente encaminhada à Autarquia de Manutenção e Limpeza Urbana (Emlurb). A equipe técnica competente realizará a vistoria programada no trecho indicado para inserção da demanda no cronograma de serviços operacionais.

Você pode acompanhar o andamento da sua solicitação a qualquer momento pelo portal oficial ou pelo aplicativo Conecta Recife. Permanecemos à inteira disposição para melhor atendê-lo(a).

Atenciosamente,
Ouvidoria Geral do Município | Prefeitura do Recife`
  },
  {
    id: 'resumo-oficio',
    title: 'Síntese Executiva de Ofício Intersetorial',
    department: 'Secretaria de Planejamento e Gestão',
    role: 'Atue como assessor técnico legislativo e administrativo da Prefeitura do Recife.',
    task: 'Faça um resumo executivo em tópicos do relatório técnico anexado sobre a implantação do novo polo de inovação comunitária.',
    rules: [
      'Estruture em 3 seções: Objetivo Principal, Principais Entregas e Prazos Críticos',
      'Linguagem direta e livre de jargões burocráticos excessivos',
      'Destaque valores orçamentários e impactos previstos para a comunidade',
      'Limite o resumo a no máximo 250 palavras'
    ],
    sampleOutput: `# RESUMO EXECUTIVO: NOVO POLO DE INOVAÇÃO COMUNITÁRIA

- **Objetivo Principal:** Criação de centro público de capacitação digital e economia criativa voltado a jovens da região central e periferias do Recife.
- **Principais Entregas:**
  • Reforma e adaptação de prédio histórico (3 laboratórios de informática e 1 arena maker).
  • Oferta inicial de 450 vagas em cursos de letramento em IA, programação e mídias sociais.
  • Espaço de coworking gratuito com internet de alta velocidade e suporte a microempreendedores.
- **Prazos & Recursos:**
  • Investimento estimado: R$ 1,2 milhão (recursos próprios e parcerias).
  • Conclusão da etapa de engenharia em 90 dias; início das aulas no semestre subsequente.`
  },
  {
    id: 'ata-reuniao',
    title: 'Minuta de Ata de Reunião com Ações e Responsáveis',
    department: 'Secretaria de Educação',
    role: 'Atue como secretário executivo de colegiado pedagógico da rede municipal de ensino do Recife.',
    task: 'Transforme as anotações brutas de uma reunião de alinhamento com diretores escolares em uma ata clara e acionável.',
    rules: [
      'Identifique a data, pauta central e participantes fictícios',
      'Tabela ou tópicos com Ação, Responsável e Prazo limite',
      'Mencione deliberações acordadas por consenso',
      'Mantenha texto formal e organizado'
    ],
    sampleOutput: `# ATA DE ALINHAMENTO PEDAGÓGICO - REDE MUNICIPAL DE ENSINO

**Data:** 06 de Novembro de 2026 | **Local:** Auditório Virtual SEED
**Pauta:** Cronograma de formação docente em Inteligência Artificial e ferramentas digitais.

## 1. Deliberações Principais
- Fica aprovada a realização de 4 módulos híbridos de capacitação com foco no uso ético de IA em sala de aula.
- Distribuição de guia de bolso impresso para as 320 escolas da rede municipal.

## 2. Matriz de Ações e Prazos
- **Disponibilização do cronograma no portal:** Coordenação Pedagógica | Prazo: 12/Nov
- **Validação das diretrizes de privacidade de alunos:** Procuradoria Jurídica | Prazo: 18/Nov
- **Início das oficinas práticas:** Escola de Formação de Educadores | Prazo: 25/Nov`
  },
  {
    id: 'defesa-civil-alerta',
    title: 'Comunicado de Alerta Preventivo Meteorológico',
    department: 'Defesa Civil do Recife (COPEN)',
    role: 'Atue como redator técnico da Defesa Civil da Prefeitura do Recife.',
    task: 'Elabore comunicado oficial preventivo à população em virtude de previsão de maré alta e chuvas moderadas a fortes.',
    rules: [
      'Tom preventivo, sereno e de orientação cidadã (sem gerar pânico)',
      'Instruções claras sobre o canal gratuito de emergência 0800 081 3400',
      'Recomendações objetivas para áreas de morro e pontos baixos de drenagem',
      'Texto com até 150 palavras, ideal para aplicativo Conecta Recife e redes oficiais'
    ],
    sampleOutput: `🚨 AVISO PREVENTIVO DA DEFESA CIVIL DO RECIFE

A Defesa Civil do Recife informa que há previsão de chuvas de intensidade moderada a pontualmente forte nas próximas horas, coincidindo com o pico de maré alta previsto para às 14h20.

Pedimos a atenção dos moradores, especialmente aqueles residentes em áreas de encostas e locais sujeitos a pontos de alagamento:
- Mantenha lonas plásticas devidamente afixadas nos morros.
- Evite transitar por vias alagadas em caso de precipitação contínua.
- Em caso de necessidade ou para solicitar vistorias preventivas gratuitas, acione imediatamente nossa equipe pelo 0800 081 3400 (ligação gratuita, plantão 24 horas).

Defesa Civil do Recife | Sempre com você`
  }
];

export const INITIAL_MURAL_IDEAS: MuralIdea[] = [
  {
    id: 'idea-1',
    author: 'Mariana Lima',
    department: 'Secretaria de Finanças (SEFIN)',
    currentTask: 'Triar e categorizar manualmente mais de 80 pedidos de parcelamento tributário recebidos por e-mail toda semana.',
    aiOpportunity: 'Usar o Gemini para extrair automaticamente tipo de imposto, exercício fiscal e gerar a minuta de despacho padrão para análise.',
    category: 'Organização',
    votes: 14,
    timestamp: 'Hoje, 09:12'
  },
  {
    id: 'idea-2',
    author: 'Carlos Eduardo Santos',
    department: 'Emlurb (Limpeza Urbana)',
    currentTask: 'Elaborar a escala semanal e roteiro dos caminhões de coleta a partir de reclamações abertas na Central 156.',
    aiOpportunity: 'Pedir à IA para agrupar as ocorrências por bairro (Várzea, Iputinga, Cordeiro) e estruturar uma rota lógica de vistoria.',
    category: 'Planejamento',
    votes: 21,
    timestamp: 'Hoje, 09:20'
  },
  {
    id: 'idea-3',
    author: 'Dr. Roberto Mendes',
    department: 'Secretaria de Saúde',
    currentTask: 'Resumir notas técnicas do Ministério da Saúde com mais de 40 páginas para repassar aos agentes comunitários em linguagem acessível.',
    aiOpportunity: 'Utilizar prompt estruturado com # PAPEL e # REGRAS para traduzir recomendações clínicas em cartilhas de 1 página em tópicos simples.',
    category: 'Documentos',
    votes: 18,
    timestamp: 'Hoje, 09:35'
  },
  {
    id: 'idea-4',
    author: 'Patrícia Albuquerque',
    department: 'Ouvidoria Geral',
    currentTask: 'Redigir respostas personalizadas a reclamações recorrentes sobre sinalização viária e conservação de praças.',
    aiOpportunity: 'Criar modelos de rascunhos corteses e empáticos, adaptando rapidamente aos dados específicos de cada cidadão sem violar a LGPD.',
    category: 'Atendimento',
    votes: 27,
    timestamp: 'Hoje, 09:42'
  },
  {
    id: 'idea-5',
    author: 'Vinícius Ramos',
    department: 'Secretaria de Educação',
    currentTask: 'Consolidar feedbacks de mais de 50 professores sobre a merenda escolar e material pedagógico.',
    aiOpportunity: 'Solicitar síntese temática dos pontos mais elogiados e das principais oportunidades de melhoria por distrito educacional.',
    category: 'Análise',
    votes: 12,
    timestamp: 'Hoje, 09:50'
  }
];

export const LESSON_SCHEDULE: LessonScheduleItem[] = [
  {
    time: '00:00 - 00:10',
    duration: '10 min',
    title: 'Abertura & Conexão: A Inteligência Humana',
    description: 'Acolhimento da turma, alinhamento de expectativas e reflexão sobre a evolução do conhecimento humano (Slides 1 a 2).',
    slidesRef: 'Slides 1 - 2',
    activityType: 'Exposição'
  },
  {
    time: '00:10 - 00:30',
    duration: '20 min',
    title: 'Desmistificando a IA: Preditiva vs Generativa',
    description: 'Apresentação dos 4 pilares e laboratório comparativo entre previsões estatísticas e geração de novos conteúdos (Slides 3 a 5).',
    slidesRef: 'Slides 3 - 5',
    activityType: 'Exposição'
  },
  {
    time: '00:30 - 00:45',
    duration: '15 min',
    title: 'O Fator Humano, Colapso de Modelos & LGPD',
    description: 'Debate ético: a máquina não substitui a responsabilidade humana; perigos do colapso de modelo e regras de ouro da LGPD na PCR (Slides 6 a 10).',
    slidesRef: 'Slides 6 - 10',
    activityType: 'Discussão'
  },
  {
    time: '00:45 - 01:05',
    duration: '20 min',
    title: 'Mão na Massa: A Fórmula do Prompt Eficiente',
    description: 'Estruturação de comandos com # PAPEL, # TAREFA e # REGRAS. Exercício no Simulador de Prompts e compartilhamento no Mural (Slides 11 a 12).',
    slidesRef: 'Slides 11 - 12',
    activityType: 'Prática'
  },
  {
    time: '01:05 - 01:25',
    duration: '20 min',
    title: 'Prática no Workspace: Gemini no Gmail',
    description: 'Passo a passo no e-mail institucional @recife.pe.gov.br: gerando rascunhos e sintetizando conversas longas (Slide 13).',
    slidesRef: 'Slide 13',
    activityType: 'Prática'
  },
  {
    time: '01:25 - 01:30',
    duration: '5 min',
    title: 'Fechamento, Materiais Didáticos & Próximos Passos',
    description: 'Entrega dos materiais de apoio, referências complementares e orientações para a Aula 2 (Slides 14 a 16).',
    slidesRef: 'Slides 14 - 16',
    activityType: 'Reflexão'
  }
];

export const GLOSSARY_ITEMS = [
  {
    term: 'IA Preditiva',
    definition: 'Sistemas que analisam dados históricos para calcular probabilidades, classificar informações e projetar acontecimentos futuros (ex: detecção de spam, estimativa de trânsito no Waze).'
  },
  {
    term: 'IA Generativa',
    definition: 'Tecnologia que utiliza aprendizado profundo para gerar novos conteúdos inéditos e contextuais (textos, códigos, imagens, relatórios) a partir de comandos em linguagem natural.'
  },
  {
    term: 'Prompt',
    definition: 'Instrução ou comando fornecido à IA para direcionar seu raciocínio. Um bom prompt deve conter Papel, Tarefa e Regras claras.'
  },
  {
    term: 'Colapso de Modelo (Model Collapse)',
    definition: 'Fenômeno degenerativo que ocorre quando modelos de IA são treinados recursivamente com dados sintéticos gerados por outras IAs, causando perda de diversidade, erros cumulativos e perda de nuances originais.'
  },
  {
    term: 'Alucinação',
    definition: 'Situação na qual a IA gera informações factualmente falsas com alto grau de confiança e eloquência. Exige sempre checagem crítica e validação humana.'
  },
  {
    term: 'LGPD no Setor Público',
    definition: 'Lei Geral de Proteção de Dados (Lei 13.709/2018). No uso de IA, proíbe o envio de informações de identificação direta (CPF, RG, prontuários, dados financeiros protegidos) para plataformas de terceiros sem salvaguardas institucionais.'
  }
];
