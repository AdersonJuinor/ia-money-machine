import React from 'react';
import { Check, X } from 'lucide-react';

export default function Planos() {
  const recursos = [
    { nome: "Nichos Ocultos", basico: "check", pro: "check", max: "check" },
    { nome: "Ofertas Irrecusáveis", basico: "check", pro: "check", max: "check" },
    { nome: "Conteúdo Magnético", basico: "check", pro: "check", max: "check" },
    { nome: "Roteiros de Vendas", basico: "check", pro: "check", max: "check" },
    { nome: "Landing Pages", basico: "essentials", pro: "check", max: "check" },
    { nome: "Copywriting Sênior", basico: "essentials", pro: "check", max: "check" },
    { nome: "Anúncios de Alta Escala", basico: "x", pro: "check", max: "check" },
    { nome: "Funis de Vendas Inteligentes", basico: "x", pro: "check", max: "check" },
    { nome: "Automações de Processos", basico: "essentials", pro: "check", max: "check" },
    { nome: "Sistemas de SEO Avançado", basico: "essentials", pro: "check", max: "check" },
    { nome: "Arquitetura para SaaS", basico: "x", pro: "x", max: "check" },
    { nome: "Estratégias de Escala Extrema", basico: "x", pro: "x", max: "check" },
  ];

  const renderStatus = (status, isMax = false) => {
    if (status === "check") {
      return <Check size={18} className={isMax ? "status-icon-check-max" : "status-icon-check"} />;
    }
    if (status === "x") {
      return <X size={18} className="status-icon-x" />;
    }
    return <span className="badge-essentials">Essentials</span>;
  };

  return (
    <section id="oferta" className="section-wrapper">
      {/* SEÇÃO: MATRIZ COMPARATIVA (Mantendo a anterior centralizada e sem emojis) */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black">Adquira Sua Vantagem Injusta Hoje</h2>
        <p className="text-gray-400 mt-2">Escolha o seu arsenal estratégico de prompts avançados de inteligência artificial.</p>
      </div>

      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-200">Módulo</th>
              <th className="text-center font-bold text-gray-400 w-28 md:w-40">Básico</th>
              <th className="text-center font-bold text-gray-300 w-28 md:w-40">PRO</th>
              <th className="text-center font-bold text-neon bg-gray-900/30 w-28 md:w-42">PRO MAX</th>
            </tr>
          </thead>
          <tbody>
            {recursos.map((rec, index) => (
              <tr key={index}>
                <td className="font-semibold text-gray-300 text-left">{rec.nome}</td>
                <td className="text-center">{renderStatus(rec.basico)}</td>
                <td className="text-center">{renderStatus(rec.pro)}</td>
                <td className="text-center bg-gray-900/10">{renderStatus(rec.max, true)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SEGUNDA PARTE: Grid de Preços em Blocos Premium (Ajustada conforme imagem) */}
      <div className="grid-3 pricing-grid-container">
        
        {/* PLANO BÁSICO */}
        <div className="plan-wrapper text-left">
          <div className="plan-header-block">
            <h3 className="text-xl font-bold text-white mb-4">Básico</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              O básico operacional para tarefas simples cotidianas. (100 prompts + 40 essenciais).
            </p>
          </div>
          <div className="plan-price-block mb-6">
            <div className="text-xl font-black text-white"><span className="text-xs text-gray-400 font-normal">R$ 19,99 à vista</span>
            </div>
          </div>
          <button className="btn-secondary w-full">Garantir Plano Básico</button>
        </div>

        {/* PLANO PRO MAX (DESTAQUE) */}
        <div className="plan-wrapper featured text-left">
          <span className="absolute -top-3.5 left-6 bg-neon-green text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
            RECOMENDADO
          </span>
          <div className="plan-header-block">
            <h3 className="text-2xl font-black text-white mb-4">PRO MAX</h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Acesso total à biblioteca vitalícia (+300 prompts), suporte VIP e atualizações semanais (Grupo exclusivo).
            </p>
          </div>
          <div className="plan-price-block mb-6">
            <div className="text-xl font-black text-neon"><span className="text-xs text-gray-300 font-normal">R$ 59,98 à vista</span>
            </div>

          </div>
          <button className="btn-featured w-full">QUERO O ACESSO PRO MAX</button>
        </div>

        {/* PLANO PRO */}
        <div className="plan-wrapper text-left">
          <div className="plan-header-block">
            <h3 className="text-xl font-bold text-white mb-4">PRO</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Para profissionais que buscam automações e marketing padrão. (Basico + 200 prompts).
            </p>
          </div>
          <div className="plan-price-block mb-6">
            <div className="text-xl font-black text-white"><span className="text-xs text-gray-400 font-normal">R$ 39,99 à vista</span>
            </div>
          </div>
          <button className="btn-secondary w-full">Garantir Plano PRO</button>
        </div>

      </div>
    </section>
  );
}