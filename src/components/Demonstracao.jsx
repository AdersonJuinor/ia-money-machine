import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { demonstracoes } from '../data/landingData';

export default function Demonstracao() {
  return (
    <section className="section-wrapper">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400">ENGENHARIA REVERSA DE MERCADO</span>
        <h2 className="text-3xl md:text-5xl font-black mt-2">Veja a Diferença entre um Prompt Amador e uma Resposta de Elite</h2>
      </div>
      <div className="grid-2">
        {demonstracoes.map((item, i) => (
          <div key={i} className={`card-cyber ${item.tipo === 'erro' ? 'border-red-900/30' : 'border-emerald-900/40'}`}>
            <span className={`text-xs font-bold flex items-center gap-1.5 mb-3 ${item.tipo === 'erro' ? 'text-red-400' : 'text-neon'}`}>
              {item.tipo === 'erro' ? <XCircle size={14} /> : <CheckCircle2 size={14} />} {item.titulo}
            </span>
            <div className={`code-terminal ${item.tipo === 'erro' ? '!color-red-400 opacity-60' : ''}`}>{item.comando}</div>
            <p className={`text-sm font-medium ${item.tipo === 'erro' ? 'text-gray-400' : 'text-gray-200'}`}>{item.resultado}</p>
          </div>
        ))}
      </div>
    </section>
  );
}