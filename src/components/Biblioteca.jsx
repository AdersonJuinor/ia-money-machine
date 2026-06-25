import React from 'react';
import { bibliotecaPrompts } from '../data/landingData';
import { Target, PenTool, Zap, Shield, Sparkles, Code } from 'lucide-react';

export default function Biblioteca() {
  // Array de ícones para distribuir pelos blocos dinamicamente
  const icones = [
    <Target size={22} className="text-neon" />,
    <PenTool size={22} className="text-neon" />,
    <Zap size={22} className="text-neon" />,
    <Shield size={22} className="text-neon" />,
    <Sparkles size={22} className="text-neon" />,
    <Code size={22} className="text-neon" />
  ];

  return (
    <section className="section-wrapper mb-24">
      <h2 className="text-2xl md:text-4xl font-black mb-10 text-left">
        O Arsenal Completo do IA Money Machine
      </h2>
      
      <div className="grid-3">
        {bibliotecaPrompts.map((item, i) => (
          <div key={i} className="arsenal-card">
            {/* Renderiza um ícone do array com base na posição, ou um padrão caso tenha muitos itens */}
            <div className="arsenal-icon-wrapper">
              {icones[i] || <Sparkles size={22} className="text-neon" />}
            </div>
            
            <h3 className="text-lg font-bold mb-3 text-white">
              {item.titulo}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}