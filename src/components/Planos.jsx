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

      {/* Grid de Preços com o novo espaçamento de 80px */}
      <div className="grid-3 pricing-grid-container">
        <div className="plan-wrapper text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-400">Básico</h3>
            <div className="text-3xl font-extrabold mb-6 text-white">R$ 19,99 <span className="text-xs text-gray-500 font-normal">à vista</span></div>
          </div>
          <button className="btn-secondary">Garantir Plano Básico</button>
        </div>

        <div className="plan-wrapper featured text-center">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neon-green text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">RECOMENDADO</span>
          <div>
            <h3 className="text-2xl font-black mb-2 text-white">PRO MAX</h3>
            <div className="text-4xl font-black mb-6 text-neon">R$ 59,99 <span className="text-xs text-gray-400 font-normal">à vista</span></div>
          </div>
          <button className="btn-featured">QUERO O ACESSO PRO MAX</button>
        </div>

        <div className="plan-wrapper text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-300">PRO</h3>
            <div className="text-3xl font-extrabold mb-6 text-white">R$ 39,99 <span className="text-xs text-gray-500 font-normal">à vista</span></div>
          </div>
          <button className="btn-secondary">Garantir Plano PRO</button>
        </div>
      </div>
    </section>
  );
}