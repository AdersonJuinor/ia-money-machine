import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Garantia() {
  return (
    <section className="section-wrapper bg-gray-950/60 rounded-3xl border border-gray-900 p-8 md:p-12 text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <ShieldCheck size={64} className="text-neon mx-auto mb-6" />
        <h2 className="text-2xl md:text-4xl font-black mb-4">Garantia Blindada de Satisfação ou Reembolso de 100%</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Seu risco ao adquirir o **IA Money Machine** é zero. Acesse os prompts, use nos seus projetos, teste a velocidade dos resultados. Se em até 7 dias você entender que o conteúdo não vale pelo menos 10 vezes o valor cobrado, basta enviar um e-mail. Nós devolveremos todo seu dinheiro imediatamente.
        </p>
      </div>
    </section>
  );
}