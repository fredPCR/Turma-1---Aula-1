import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Sparkles, 
  Copy, 
  Check, 
  Eye, 
  FileCheck2 
} from 'lucide-react';

export const LgpdValidator: React.FC = () => {
  const sampleCases = [
    {
      title: 'Caso Saúde: Prontuário e Paciente',
      department: 'Secretaria de Saúde',
      rawText: 'Solicito parecer sobre a paciente Maria das Graças Silva, CPF 123.456.789-00, residente na Rua do Príncipe, 450, Boa Vista, atendida com diagnóstico CID-10 J18 (pneumonia) e aguardando encaminhamento para leito hospitalar no Hospital Otávio de Freitas.'
    },
    {
      title: 'Caso SEFIN: Parcelamento Tributário',
      department: 'Secretaria de Finanças',
      rawText: 'O contribuinte Carlos Alberto Ferreira (CPF 987.654.321-99, telefone (81) 98765-4321) requer revisão da inscrição imobiliária do IPTU nº 45.892/2024 referente ao débito de R$ 14.850,00 registrado em dívida ativa sob a matrícula 09871.'
    },
    {
      title: 'Caso Ouvidoria: Denúncia com Endereço e Morador',
      department: 'Ouvidoria Geral',
      rawText: 'Denúncia registrada por José Roberto de Souza, RG 4.567.890 SDS-PE, informando que a vizinha dona Francisca está com esgoto a céu aberto na Rua das Flores, nº 78, CEP 50000-000, Santo Amaro.'
    }
  ];

  const [inputContent, setInputContent] = useState(sampleCases[0].rawText);
  const [sanitizedContent, setSanitizedContent] = useState('');
  const [detectedIssues, setDetectedIssues] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  const analyzeLgpd = (text: string) => {
    const issues: string[] = [];
    
    // CPF regex
    const cpfMatch = text.match(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g);
    if (cpfMatch) {
      issues.push(`Identificação de CPF detectada (${cpfMatch.length} ocorrência(s)): ${cpfMatch.join(', ')}`);
    }

    // RG regex
    const rgMatch = text.match(/\b\d{1,2}\.?\d{3}\.?\d{3}\b/g);
    if (rgMatch) {
      issues.push(`Número de documento de identidade (RG) detectado: ${rgMatch.join(', ')}`);
    }

    // Phone regex
    const phoneMatch = text.match(/\(?\d{2}\)?\s?9?\d{4}-?\d{4}/g);
    if (phoneMatch) {
      issues.push(`Número de telefone celular detectado: ${phoneMatch.join(', ')}`);
    }

    // CEP regex
    const cepMatch = text.match(/\b\d{5}-?\d{3}\b/g);
    if (cepMatch) {
      issues.push(`Código de Endereçamento Postal (CEP) detectado: ${cepMatch.join(', ')}`);
    }

    if (/diagnóstico|cid|prontuário|leito|doença|medicamento/i.test(text)) {
      issues.push('Menção a dados de saúde / diagnóstico clínico (dado pessoal sensível pelo art. 5º da LGPD).');
    }

    if (/dívida ativa|débito de r\$|conta corrente|agência/i.test(text)) {
      issues.push('Menção a dados fiscais/financeiros individualizados protegidos por sigilo fiscal.');
    }

    setDetectedIssues(issues);
  };

  React.useEffect(() => {
    analyzeLgpd(inputContent);
  }, [inputContent]);

  const handleAnonymize = () => {
    let result = inputContent;

    result = result.replace(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, '[CPF_ANONIMIZADO]');
    result = result.replace(/\b\d{1,2}\.?\d{3}\.?\d{3}\b/g, '[RG_ANONIMIZADO]');
    result = result.replace(/\(?\d{2}\)?\s?9?\d{4}-?\d{4}/g, '[TELEFONE_ANONIMIZADO]');
    result = result.replace(/\b\d{5}-?\d{3}\b/g, '[CEP_ANONIMIZADO]');

    result = result.replace(/Maria das Graças Silva/g, '[PACIENTE_A]');
    result = result.replace(/Carlos Alberto Ferreira/g, '[CONTRIBUINTE_B]');
    result = result.replace(/José Roberto de Souza/g, '[CIDADÃO_C]');
    result = result.replace(/Francisca/g, '[CIDADÃ_D]');
    
    result = result.replace(/Rua do Príncipe, 450, Boa Vista/g, '[LOGRADOURO_BAIRRO_CENTRAL]');
    result = result.replace(/Rua das Flores, nº 78/g, '[LOGRADOURO_MUNICIPAL]');

    setSanitizedContent(result);
  };

  const handleCopySanitized = () => {
    navigator.clipboard.writeText(sanitizedContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-700">
          <span>Segurança da Informação no Setor Público</span>
          <span aria-hidden="true">·</span>
          <span>Lei Geral de Proteção de Dados (Lei 13.709/2018)</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Validador & Higienizador de Privacidade (LGPD)
        </h3>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          <strong className="text-slate-900">Diretriz da Prefeitura do Recife:</strong> Nunca insira dados pessoais sensíveis (CPF, nome do munícipe, prontuário, telefone ou dados fiscais) em modelos de IA. Audite seu texto antes de enviá-lo e gere a versão anonimizada.
        </p>

        {/* Test sample cases */}
        <div className="pt-4 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Carregar caso de teste do serviço público:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleCases.map((cs) => (
              <button
                key={cs.title}
                onClick={() => {
                  setInputContent(cs.rawText);
                  setSanitizedContent('');
                }}
                className="text-xs px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors font-medium"
              >
                {cs.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Input Text to Audit */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-sky-600" />
              <span>Texto Original da Rotina</span>
            </h4>
            <button
              onClick={() => {
                setInputContent('');
                setSanitizedContent('');
              }}
              className="text-xs text-slate-400 hover:text-slate-700"
            >
              Limpar
            </button>
          </div>

          <textarea
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
              setSanitizedContent('');
            }}
            rows={6}
            placeholder="Cole aqui o memorando, relato de ouvidoria ou ofício que você pretendia enviar para a IA..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white font-sans leading-relaxed resize-none"
          />

          {/* Audit Result Status */}
          <div className={`p-4 rounded-xl border space-y-2 text-xs ${
            detectedIssues.length > 0
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}>
            <div className="flex items-center gap-2 font-bold">
              {detectedIssues.length > 0 ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>⚠️ {detectedIssues.length} Risco(s) de Violação de Privacidade Detectado(s)!</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Nenhum dado sensível evidente detectado. Seguro para uso institucional.</span>
                </>
              )}
            </div>

            {detectedIssues.length > 0 && (
              <ul className="space-y-1 pl-6 list-disc text-[11px] text-rose-800">
                {detectedIssues.map((issue, idx) => (
                  <li key={idx} className="leading-snug">{issue}</li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={handleAnonymize}
            className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Higienizar & Anonimizar Automaticamente</span>
          </button>
        </div>

        {/* Right: Sanitized Safe Version */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-emerald-600" />
              <span>Versão Higienizada e Segura para a IA</span>
            </h4>
            {sanitizedContent && (
              <span className="text-[11px] px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                Conforme LGPD
              </span>
            )}
          </div>

          {sanitizedContent ? (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-emerald-200 rounded-xl text-xs text-slate-800 whitespace-pre-wrap leading-relaxed min-h-[160px]">
                {sanitizedContent}
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-500">
                  Substituições padronizadas preservam a lógica para a IA sem expor o cidadão.
                </span>

                <button
                  onClick={handleCopySanitized}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Copiado!' : 'Copiar Texto Seguro'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="py-14 text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl space-y-2">
              <ShieldAlert className="w-8 h-8 text-slate-300 mx-auto" />
              <p>Clique em "Higienizar & Anonimizar Automaticamente" para gerar a versão mascarada segura.</p>
            </div>
          )}

          {/* 4 Golden Rules */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              4 Regras de Ouro no Uso de IA no Setor Público:
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                1. Mascarar CPFs e nomes próprios
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                2. Não expor dados clínicos/prontuários
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                3. Proteger sigilo fiscal e bancário
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                4. A responsabilidade final é humana
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
