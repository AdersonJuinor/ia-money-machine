import React from 'react';
import { Cpu, Layers, Clock } from 'lucide-react';
import { pilaresCriacao } from '../data/landingData';

const icons = [<Cpu className="text-neon mb-4" size={32} />, <Layers className="text-neon mb-4" size={32} />, <Clock className="text-neon mb-4" size={32} />];

export default function CriacaoRapida() {
  return (
    <section className="section-wrapper bg-gray-950/40 border-y border-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black">O que você consegue criar em 15 minutos?</h2>
        <p className="text-gray-400 mt-2">Enquanto agências tradicionais te cobram prazos de semanas, o sistema resolve em segundos:</p>
      </div>
      <div className="grid-3">
        {pilaresCriacao.map((pilar, i) => (
          <div key={i} className="card-cyber">
            {icons[i]}
            <h3 className="text-xl font-bold mb-2">{pilar.titulo}</h3>
            <p className="text-sm text-gray-400">{pilar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}