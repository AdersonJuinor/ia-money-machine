import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacidade() {
  return (
    <div className="lp-wrapper">
      <article className="section-wrapper max-w-3xl text-gray-300 leading-relaxed space-y-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4 text-decoration-none"><ArrowLeft size={16} /> Voltar</Link>
        <h1 className="text-3xl md:text-5xl font-black text-gradient">Política de Privacidade</h1>
        <p className="text-xs text-gray-500">Última atualização: Junho de 2026</p>
        
        <h2>1. Coleta de Dados</h2>
        <p>Coletamos informações estritamente necessárias para o fornecimento do acesso aos produtos e processamento de pagamentos. Isso inclui seu nome, endereço de e-mail e dados fornecidos espontaneamente em nossos formulários de contato.</p>
        
        <h2>2. Cookies e Rastreamento</h2>
        <p>Utilizamos cookies essenciais para manter sua sessão ativa e analisar métricas de tráfego de maneira anônima, visando otimizar a velocidade de carregamento e a experiência do usuário dentro da nossa plataforma.</p>
        
        <h2>3. Analytics</h2>
        <p>Este site utiliza ferramentas de análise de terceiros (como Google Analytics) para entender o comportamento de navegação agregado. Nenhuma informação de identificação pessoal identificável é compartilhada ou exposta nessas análises.</p>
        
        <h2>4. Armazenamento de Informações</h2>
        <p>Seus dados permanecem armazenados em servidores de nuvem altamente seguros, em estrita conformidade com os princípios estabelecidos pela Lei Geral de Proteção de Dados (LGPD). Seus dados nunca serão vendidos ou compartilhados com terceiros para fins de publicidade.</p>
        
        <h2>5. Direitos do Usuário</h2>
        <p>Você possui o direito legal de solicitar a exclusão definitiva, retificação ou acesso aos seus dados pessoais a qualquer momento. Para exercer este direito, entre em contato direto com nosso encarregado de dados através do e-mail de suporte.</p>
      </article>
    </div>
  );
}