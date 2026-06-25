import React from 'react';
import { bibliotecaPrompts } from '../data/landingData';

export default function Biblioteca() {
  return (
    <section className="section-wrapper">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-12">O Arsenal Completo do IA Money Machine</h2>
      <div className="grid-3">
        {bibliotecaPrompts.map((item, i) => (
          <div key={i} className="p-6 border border-gray-900 rounded-xl bg-gray-950/20">
            <h4 className="font-bold text-white mb-2 text-lg">{item.titulo}</h4>
            <p className="text-xs text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}