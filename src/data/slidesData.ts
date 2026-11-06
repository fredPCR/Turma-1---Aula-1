import { SlideContent } from '../types';

export const SLIDES_DATA: SlideContent[] = [
  {
    id: 1,
    slideNumber: 1,
    title: 'Inteligência Artificial no dia a dia',
    subtitle: 'Conhecimento humano, novas possibilidades',
    kicker: 'AULA 1 · PREFEITURA DO RECIFE',
    theme: 'dark',
    type: 'cover',
    speakerNotes: {
      duration: '5 a 8 minutos',
      teachingTip: 'Dê as boas-vindas aos servidores. Enfatize que o objetivo desta aula não é transformar ninguém em programador, mas capacitar cada servidor a utilizar a IA como parceira inteligente em suas rotinas de trabalho.',
      suggestedQuestions: [
        'Quem aqui já usou alguma ferramenta de IA no trabalho ou na vida pessoal?',
        'Qual o sentimento predominante quando ouvimos falar de IA: curiosidade, ceticismo ou receio?'
      ],
      keyTakeaway: 'A IA é um amplificador da inteligência humana, gerando mais organização, agilidade e impacto na ponta para o cidadão do Recife.'
    }
  },
  {
    id: 2,
    slideNumber: 2,
    title: '1. A inteligência humana deixou rastros',
    subtitle: 'Ao longo da história, aprendemos uns com os outros, registramos experiências, compartilhamos descobertas e criamos ferramentas para ampliar nossas capacidades.',
    theme: 'light',
    type: 'timeline',
    speakerNotes: {
      duration: '4 a 6 minutos',
      teachingTip: 'Mostre como a IA não surgiu do nada: ela é o reflexo de milhares de anos de produção textual, científica e cultural acumulada pela humanidade. Sem o ser humano, não há dados para a IA aprender.',
      suggestedQuestions: [
        'Por que podemos dizer que a IA é um espelho da produção humana?',
        'O que acontece se pararmos de produzir novos conhecimentos?'
      ],
      keyTakeaway: 'Toda IA generativa se alimenta do conhecimento acumulado pelas pessoas ao longo de séculos.'
    }
  },
  {
    id: 3,
    slideNumber: 3,
    title: '2. Então, o que é Inteligência Artificial?',
    subtitle: 'É uma tecnologia que permite aos computadores aprenderem padrões, compreenderem linguagem, gerarem conteúdos e apoiarem a resolução de problemas.',
    theme: 'light',
    type: 'pillars',
    speakerNotes: {
      duration: '6 a 8 minutos',
      teachingTip: 'Desmistifique a ideia de "mágica" ou "consciência". Explique que se trata de reconhecimento estatístico de padrões e processamento de linguagem natural.',
      suggestedQuestions: [
        'Qual desses 4 pilares você mais sente falta de apoio na sua rotina hoje?',
        'Organizar informações ou produzir conteúdos toma mais do seu tempo útil?'
      ],
      keyTakeaway: 'A IA atua em quatro eixos fundamentais: Padrões, Organização, Criação e Resolução de Problemas.'
    }
  },
  {
    id: 4,
    slideNumber: 4,
    title: 'Da IA Preditiva para a IA Generativa',
    kicker: 'NIVELAMENTO CONCEITUAL',
    subtitle: 'A Inteligência Artificial não começou agora. Ela evoluiu de prever dados para criar novos conteúdos.',
    theme: 'light',
    type: 'comparison',
    interactiveActionLabel: 'Abrir Comparador Interativo',
    targetTab: 'lab',
    speakerNotes: {
      duration: '8 a 10 minutos',
      teachingTip: 'Faça o paralelo prático: já usávamos IA preditiva há anos sem perceber (Waze calculando tempo para Boa Viagem, filtro de spam no e-mail, Netflix recomendando filmes). A virada com a IA generativa é que agora ela produz linguagem inédita.',
      suggestedQuestions: [
        'Alguém lembra de quando o corretor ortográfico só apontava o erro sem conseguir reescrever a frase inteira?',
        'No serviço público, onde já usávamos previsões automáticas antes do ChatGPT?'
      ],
      keyTakeaway: 'Preditiva calcula probabilidades e classifica com base no passado; Generativa sintetiza novas linguagens, imagens, códigos e soluções.'
    }
  },
  {
    id: 5,
    slideNumber: 5,
    title: '3. A IA no cotidiano',
    subtitle: 'Ela já pode apoiar muitas tarefas que fazemos todos os dias no serviço público e na vida pessoal.',
    theme: 'light',
    type: 'grid-features',
    speakerNotes: {
      duration: '6 a 8 minutos',
      teachingTip: 'Passe por cada um dos 6 blocos com exemplos concretos do Recife: resumo de processos da SEFIN, elaboração de comunicados da Saúde, estruturação de atas na Educação.',
      suggestedQuestions: [
        'Quanto tempo da sua semana você gasta revisando textos ou redigindo o mesmo tipo de resposta institucional?',
        'Como seria ter um assistente para fazer a primeira versão de uma ata ou plano de trabalho?'
      ],
      keyTakeaway: 'A IA brilha nas tarefas repetitivas de primeiro rascunho, liberando o servidor para o pensamento crítico e atendimento empático.'
    }
  },
  {
    id: 6,
    slideNumber: 6,
    title: '4. A IA vai substituir o ser humano?',
    subtitle: 'A tecnologia substitui tarefas. O trabalho humano vai além delas.',
    theme: 'light',
    type: 'human-ai',
    speakerNotes: {
      duration: '8 a 10 minutos',
      teachingTip: 'Momento de tranquilizar e conscientizar. A IA gera o rascunho; o ser humano é o responsável civil, ético e legal pela validação. Quem decide o caminho e assume a responsabilidade é sempre o servidor público.',
      suggestedQuestions: [
        'Se uma IA errar uma informação em um ofício que você assinou, de quem é a responsabilidade?',
        'Quais aspectos do atendimento ao cidadão nenhuma máquina é capaz de reproduzir?'
      ],
      keyTakeaway: 'A máquina substitui etapas burocráticas; a empatia, o julgamento de valor, a ética e a assinatura final pertencem exclusivamente ao ser humano.'
    }
  },
  {
    id: 7,
    slideNumber: 7,
    title: '5. A internet está ficando limitada?',
    subtitle: 'Quando a IA produz cada vez mais conteúdos, parte deles pode voltar para a internet e ser usado para treinar outros modelos.',
    theme: 'light',
    type: 'model-collapse',
    interactiveActionLabel: 'Simular Colapso de Modelo',
    targetTab: 'lab',
    speakerNotes: {
      duration: '8 a 10 minutos',
      teachingTip: 'Explique o conceito de "Model Collapse" (Colapso de Modelo). Quando IAs treinam em dados sintéticos gerados por outras IAs, perde-se a cauda longa de dados, a singularidade cultural (ex: expressões e realidades recifenses) e os erros se multiplicam.',
      suggestedQuestions: [
        'O que acontece com a cultura local se os modelos só se alimentarem de textos padronizados e genéricos?',
        'Por que a produção humana original tornou-se ainda mais valiosa?'
      ],
      keyTakeaway: 'O conhecimento original humano é insubstituível para evitar a degeneração e pasteurização dos modelos de IA.'
    }
  },
  {
    id: 8,
    slideNumber: 8,
    title: '6. O que significa uma internet com cada vez mais conteúdo artificial?',
    subtitle: 'Uma pesquisa do Pew Research Center (ago/2026) identificou sinais de autoria ou edição por IA em cerca de 10% das páginas em inglês analisadas. Entre as páginas publicadas após o lançamento do ChatGPT, a proporção foi superior a 1/3.',
    theme: 'light',
    type: 'data-stats',
    speakerNotes: {
      duration: '6 a 8 minutos',
      teachingTip: 'Destaque o dado alarmante: mais de 33% do conteúdo novo na web já possui intervenção de IA. Como servidores públicos, a habilidade de checar fatos e verificar fontes oficiais é questão de segurança institucional.',
      suggestedQuestions: [
        'Como vocês costumam checar se uma notícia ou dado compartilhado em grupos de trabalho é real?',
        'Quais os riscos de confiar cegamente em resumos automáticos sem conferir a fonte primária?'
      ],
      keyTakeaway: 'Saber verificar e cruzar informações tornou-se a competência mais crítica do servidor no século XXI.'
    }
  },
  {
    id: 9,
    slideNumber: 9,
    title: '7. O papel do ser humano continua essencial',
    subtitle: 'A IA pode gerar respostas, mas quem dá sentido ao que importa é você.',
    theme: 'light',
    type: 'human-role',
    speakerNotes: {
      duration: '6 a 8 minutos',
      teachingTip: 'Revisite os 5 pilares: Definir objetivos, Avaliar respostas, Considerar contexto, Agir com ética, Assumir responsabilidades. Frise a máxima: "Tecnologia é ferramenta. O propósito é humano."',
      suggestedQuestions: [
        'A IA sabe qual a prioridade da comunidade dos Coelhos ou de Casa Amarela hoje? Ou quem precisa definir a prioridade é a gestão pública?',
        'O que significa "considerar contexto" no atendimento a um munícipe vulnerável?'
      ],
      keyTakeaway: 'A máquina processa probabilidades; o servidor público entrega propósito, justiça e sensibilidade social.'
    }
  },
  {
    id: 10,
    slideNumber: 10,
    title: '8. Boas práticas no serviço público',
    subtitle: 'Usar a IA de forma responsável também é uma questão de cidadania e de qualidade no serviço público.',
    theme: 'light',
    type: 'best-practices',
    interactiveActionLabel: 'Abrir Validador LGPD',
    targetTab: 'lgpd',
    speakerNotes: {
      duration: '8 a 10 minutos',
      teachingTip: 'Ponto inegociável da aula: LGPD no setor público. NUNCA colar CPF, nome de munícipes, prontuários, dados tributários confidenciais ou senhas em chats de IA comercial. Use sempre dados anonimizados.',
      suggestedQuestions: [
        'Se você precisar resumir um caso de ouvidoria, como deve tratar o texto antes de enviar para a IA?',
        'Qual o procedimento correto ao identificar um dado sensível em um documento?'
      ],
      keyTakeaway: 'Mais do que usar a ferramenta, é indispensável saber quando, como e por que usar, blindando a privacidade do cidadão.'
    }
  },
  {
    id: 11,
    slideNumber: 11,
    title: 'Prompts Eficientes e Organizados',
    kicker: 'COMO CONVERSAR COM A IA',
    subtitle: 'Dê instruções claras e organize o texto usando marcas simples (Markdown).',
    theme: 'light',
    type: 'prompt-guide',
    interactiveActionLabel: 'Experimentar no Simulador de Prompts',
    targetTab: 'prompt-studio',
    speakerNotes: {
      duration: '10 a 12 minutos',
      teachingTip: 'Apresente a fórmula clássica dos 3 blocos: # PAPEL (quem a IA deve ser), # TAREFA (o que ela deve executar com precisão), # REGRAS (tom, tamanho, restrições e o que NÃO fazer). É a chave para respostas de alto nível.',
      suggestedQuestions: [
        'Qual a diferença entre pedir "escreva um ofício" e fornecer o papel, a tarefa e as regras?',
        'Por que o uso de tópicos (-) e hashtags (#) ajuda tanto a IA a não se perder?'
      ],
      keyTakeaway: 'A qualidade da resposta da IA é diretamente proporcional à clareza e estrutura do seu prompt.'
    }
  },
  {
    id: 12,
    slideNumber: 12,
    title: 'Pense na sua rotina e responda:',
    kicker: 'ATIVIDADE RÁPIDA · PARTICIPAÇÃO DA TURMA',
    subtitle: '"O que você faz todos os dias durante o trabalho que poderia ser realizado de uma forma mais organizada, rápida ou consistente com o apoio da IA?"',
    theme: 'light',
    type: 'quick-activity',
    interactiveActionLabel: 'Abrir Mural da Turma',
    targetTab: 'mural',
    speakerNotes: {
      duration: '10 a 15 minutos',
      teachingTip: 'Abra a rodada de participação! Convide 3 a 5 servidores de áreas diferentes (ex: saúde, educação, finanças, administrativo) a compartilharem suas dores diárias de rotina.',
      suggestedQuestions: [
        'Quem aqui digita relatórios repetitivos toda sexta-feira?',
        'Quem recebe dezenas de mensagens e precisa tabular informações manualmente?'
      ],
      keyTakeaway: 'Compartilhar ideias em grupo estimula a identificação imediata de casos de uso práticos no ambiente de trabalho.'
    }
  },
  {
    id: 13,
    slideNumber: 13,
    title: 'Prática: Gemini no Gmail',
    kicker: 'PRÓXIMO PASSO · PARTE 2',
    subtitle: 'Hora de colocar a mão na massa no e-mail institucional da Prefeitura do Recife!',
    theme: 'light',
    type: 'gemini-gmail',
    interactiveActionLabel: 'Abrir Simulador do Gmail',
    targetTab: 'lab',
    speakerNotes: {
      duration: '15 a 20 minutos',
      teachingTip: 'Guie os alunos passo a passo: 1) Abrir o Gmail institucional da PCR no navegador; 2) Localizar a estrelinha do Gemini no painel lateral direito; 3) Testar rascunhos de e-mails formais e resumos de conversas longas.',
      suggestedQuestions: [
        'Conseguiram localizar o ícone do Gemini na barra lateral direita do Gmail?',
        'Como o resumo gerado pelo Gemini se compara com a leitura manual dos 10 e-mails anteriores?'
      ],
      keyTakeaway: 'A IA já está integrada às ferramentas que usamos diariamente no Workspace da Prefeitura do Recife.'
    }
  },
  {
    id: 14,
    slideNumber: 14,
    title: '10. Para continuar',
    subtitle: 'Se quiser se aprofundar, confira estas referências recomendadas para estudo:',
    theme: 'light',
    type: 'references',
    interactiveActionLabel: 'Ver Materiais & Links',
    targetTab: 'materiais',
    speakerNotes: {
      duration: '4 a 5 minutos',
      teachingTip: 'Apresente os estudos de ponta citados: a pesquisa do Pew Research Center de 2026, o paper da OpenAI sobre Model Collapse e a matéria aprofundada da MIT Technology Review.',
      suggestedQuestions: [
        'Vocês gostariam de receber o link desses artigos traduzidos para aprofundamento?',
        'Quem tem interesse em participar do grupo de estudos continuados em IA da Escola de Governo?'
      ],
      keyTakeaway: 'O ecossistema de IA muda rapidamente; manter o hábito de consultar fontes idôneas é essencial.'
    }
  },
  {
    id: 15,
    slideNumber: 15,
    title: 'Obrigado!',
    subtitle: 'Agora vamos abrir nosso e-mail institucional e começar a explorar o Gemini no Gmail!',
    kicker: 'PREFEITURA DA CIDADE DO RECIFE',
    theme: 'dark',
    type: 'closing',
    speakerNotes: {
      duration: '3 a 5 minutos',
      teachingTip: 'Encerre com entusiasmo e reforço positivo. Agradeça a dedicação de todos e reitere a frase lema: "Inteligência Artificial no serviço público: mais pessoas, mais possibilidades."',
      suggestedQuestions: [
        'Qual o principal aprendizado que você leva desta primeira aula para aplicar amanhã?',
        'Qual a primeira tarefa da sua rotina que você vai tentar realizar com auxílio do Gemini?'
      ],
      keyTakeaway: 'A tecnologia é um meio; a entrega de um serviço público mais humano e eficiente é o nosso fim.'
    }
  },
  {
    id: 16,
    slideNumber: 16,
    title: 'Fontes & Créditos Institucionais',
    subtitle: 'Materiais didáticos, referências visuais e diretrizes do Programa de Capacitação em IA da PCR.',
    theme: 'light',
    type: 'credits',
    speakerNotes: {
      duration: '2 minutos',
      teachingTip: 'Transparência de fontes e autoria do material. Mencione a fonte das imagens de apoio e os créditos ao time pedagógico da Prefeitura do Recife.',
      suggestedQuestions: [],
      keyTakeaway: 'Compromisso com o uso ético, creditado e transparente de conteúdos no ambiente governamental.'
    }
  }
];
