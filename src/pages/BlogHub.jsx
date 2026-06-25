import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { artigosBlog } from '../data/blogData';

export default function BlogHub() {
  return (
    <div className="lp-wrapper">
      <section className="section-wrapper">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 text-decoration-none"><ArrowLeft size={16} /> Voltar</Link>
        <h1 className="text-3xl md:text-6xl font-black mb-4 text-gradient">Mina de Conhecimento</h1>
        <p className="text-gray-400 mb-12 max-w-xl">Artigos técnicos aprofundados sobre inteligência artificial avançada, geração de receita e engenharia de contexto para SEO.</p>
        
        <div className="grid-3">
          {artigosBlog.map((artigo) => (
            <div key={artigo.slug} className="card-cyber flex flex-col justify-between">
              <div>
                <span className="text-xs text-gray-500 flex items-center gap-1.5 mb-3"><Calendar size={12} /> Junho, 2026</span>
                <h2 className="text-xl font-bold mb-3 text-white line-clamp-2">{artigo.titulo}</h2>
                <p className="text-sm text-gray-400 line-clamp-3 mb-6">{artigo.description}</p>
              </div>
              <Link to={`/blog/${artigo.slug}`} className="text-neon font-bold text-sm text-decoration-none inline-flex items-center gap-1 hover:underline">
                Ler Artigo Completo →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}