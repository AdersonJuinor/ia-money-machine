import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ faqs, activeFaq, onToggle }) {
  return (
    <section className="faq-container">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-12 flex items-center justify-center gap-3">
        <HelpCircle className="text-purple-500" /> Respostas Diretas Para Suas Dúvidas
      </h2>
      <div>
        {faqs.map((item, index) => (
          <div key={index} className="accordion-item">
            <button onClick={() => onToggle(index)} className="accordion-btn">
              <span>{item.q}</span>
              {activeFaq === index ? <ChevronUp size={18} className="text-neon" /> : <ChevronDown size={18} />}
            </button>
            {activeFaq === index && (
              <div className="accordion-panel anim-fade">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}