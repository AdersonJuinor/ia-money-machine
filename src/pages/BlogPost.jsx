import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { artigosBlog } from '../data/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const artigo = artigosBlog.find(a => a.slug === slug);

  if (!artigo) {
    return (
      <div className="lp-wrapper flex items-center justify-center text-center p-12">
        <div>
          <h1 className="text-2xl font-bold mb-4">Artigo não localizado.</h1>
          <Link to="/blog" className="text-neon">Voltar ao Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lp-wrapper">
      <div className="section-wrapper max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 text-decoration-none"><ArrowLeft size={16} /> Voltar para o Blog</Link>
        
        {/* Renderização Semântica HTML5 Nativa Otimizada para SEO */}
        <article 
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: artigo.conteudo }} 
        />

        {/* CTA Crítico de Conversão de Tráfego Orgânico */}
        <div className="card-cyber border-[#00F59B]/20 bg-gradient-to-r from-gray-950 to-[#0D131F] mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Pare de Copiar Prompts Amadores de Redes Sociais</h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6">Tenha acesso imediato ao acervo completo de comandos de engenharia reversa que criam negócios e geram lucros reais.</p>
          <Link to="/" className="btn-featured !w-auto inline-flex items-center gap-2 px-6">
            Acessar Biblioteca IA Money Machine <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}