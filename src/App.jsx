import React, { useState } from 'react';
import { faqs } from './data/landingData';
import { Link } from 'react-router-dom';

// Importação dos Componentes de Seção Isolados
import Hero from './components/Hero';
import Demonstracao from './components/Demonstracao';
import CriacaoRapida from './components/CriacaoRapida';
import Biblioteca from './components/Biblioteca';
import CustoOportunidade from './components/CustoOportunidade';
import Qualificadores from './components/Qualificadores';
import Planos from './components/Planos';
import Garantia from './components/Garantia';
import FAQ from './components/FAQ';

export default function App() {
  // Lógica de Estado Centralizada
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="lp-wrapper selection:bg-cyberNeon selection:text-darkBg">
      
      <Hero />
      
      <Demonstracao />
      
      <CriacaoRapida />
      
      <Biblioteca />
      
      <CustoOportunidade />
      
      <Qualificadores />
      
      <Planos />
      
      <Garantia />
      
      <FAQ 
        faqs={faqs} 
        activeFaq={activeFaq} 
        onToggle={handleFaqToggle} 
      />

{/* CTA FINAL DE CONVERSÃO EXTREMA COM LINKS LEGAIS DISCRETOS CORRIGIDOS */}
      <footer className="footer-cta">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight text-gradient">
            Daqui a um ano, você vai desejar ter começado hoje.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Cada dia de hesitação é um dia em que você trabalha mais horas do que deveria para gerar menos lucro do que poderia. Deixe os robôs assumirem o trabalho pesado hoje.
          </p>
          <a href="#oferta" className="cta-epic text-xl py-5 px-12 text-decoration-none">
            QUERO ENTRAR PARA A ERA DA VELOCIDADE
          </a>
          
          {/* Estrutura Limpa com as novas classes organizadas */}
          <div className="footer-links-container">
            <span className="footer-copyright">
              © 2026 IA Money Machine. Todos os direitos reservados.
            </span>
            <div className="footer-nav-links">
              <Link to="/blog" className="footer-link-item">Blog Corporativo</Link>
              <Link to="/contato" className="footer-link-item">Contato</Link>
              <Link to="/privacidade" className="footer-link-item">Política de Privacidade</Link>
              <Link to="/termos" className="footer-link-item">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}