import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="glow-effect" />
      <div className="badge-premium">
        <Flame size={14} className="text-neon animate-pulse" /> A VANTAGEM INJUSTA QUE OS SEUS CONCORRENTES DETESTARIAM QUE VOCÊ TIVESSE
      </div>
      <h1 className="main-headline text-gradient">
        Não lute contra a Inteligência Artificial. Faça ela criar o seu <span className="text-neon">Império de Lucro Automático</span>.
      </h1>
      <p className="main-subheadline">
        Pare de perder semanas travado tentando descobrir o que escrever. Copie e cole os exatos sistemas algorítmicos avançados que grandes players usam para fabricar negócios, anúncios milionários e páginas de vendas em minutos.
      </p>
      <div>
        <a href="#oferta" className="cta-epic">
          QUERO ACESSO IMEDIATO À VANTAGEM INJUSTA
          <ArrowRight size={20} />
        </a>
        <p className="text-xs text-gray-500 mt-4">Pagamento Único • Acesso Vitalício Imediato • Risco Zero Garantido</p>
      </div>
    </section>
  );
}