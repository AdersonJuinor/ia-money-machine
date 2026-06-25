import React from 'react';

export default function Planos() {
  return (
    <section id="oferta" className="section-wrapper">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black">Adquira Sua Vantagem Injusta Hoje</h2>
        <p className="text-gray-400 mt-2">Escolha o seu arsenal estratégico de prompts avançados de inteligência artificial.</p>
      </div>
      <div className="grid-3">
        <div className="plan-wrapper">
          <div>
            <h3 className="text-xl font-bold mb-1">📦 Básico</h3>
            <p className="text-xs text-gray-400 mb-6">O básico operacional para tarefas simples cotidianas.</p>
            <div className="text-3xl font-extrabold mb-6 text-white"><span className="text-xs text-gray-500 font-normal">R$19,99 à vista</span></div>
          </div>
          <button className="btn-secondary">Garantir Plano Básico</button>
        </div>

        <div className="plan-wrapper featured">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neon-green text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">RECOMENDADO</span>
          <div>
            <h3 className="text-2xl font-black mb-1 text-white">👑 PRO MAX</h3>
            <p className="text-xs text-gray-300 mb-6">Acesso total à biblioteca vitalícia (+500 prompts), suporte VIP e atualizações semanais.</p>
            <div className="text-4xl font-black mb-6 text-neon"><span className="text-xs text-gray-400 font-normal">R$59,99 à vista</span></div>
          </div>
          <button className="btn-featured">QUERO O ACESSO PRO MAX</button>
        </div>

        <div className="plan-wrapper">
          <div>
            <h3 className="text-xl font-bold mb-1">🚀 PRO</h3>
            <p className="text-xs text-gray-400 mb-6">Para profissionais que buscam automações e marketing padrão.</p>
            <div className="text-3xl font-extrabold mb-6 text-white"><span className="text-xs text-gray-500 font-normal">R$39,99 à vista</span></div>
          </div>
          <button className="btn-secondary">Garantir Plano PRO</button>
        </div>
      </div>
    </section>
  );
}