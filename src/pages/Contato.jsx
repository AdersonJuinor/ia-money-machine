import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Globe } from 'lucide-react';

export default function Contato() {
  // Estados para capturar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // CONFIGURAÇÃO: Insira seu número de WhatsApp com DDD (apenas números, inclua o 55 do Brasil)
    const numeroWhats = "554888417748"; 
    
    // Quebras de linha e organização para o texto do WhatsApp
    const textoFormato = `*Novo Contato - IA Money Machine*\n\n` +
                         `*Nome:* ${nome}\n` +
                         `*E-mail:* ${email}\n\n` +
                         `*Mensagem:* ${mensagem}`;
    
    // Gera a URL segura codificando os caracteres especiais e espaços
    const urlLink = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${encodeURIComponent(textoFormato)}`;
    
    // Redireciona o usuário para o WhatsApp em uma nova aba
    window.open(urlLink, '_blank');
  };

  return (
    <div className="lp-wrapper">
      <section className="section-wrapper max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 text-decoration-none">
          <ArrowLeft size={16} /> Voltar para a página principal
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-black mb-2 text-gradient">Entre em Contato</h1>
        <p className="text-gray-400 mb-8">Dúvidas sobre os planos ou suporte corporativo? Mande sua mensagem e feche direto pelo WhatsApp.</p>
        
        <form onSubmit={handleSubmit} className="contact-form-box">
          <div className="form-group">
            <label className="form-label">Nome</label>
            <input 
              type="text" 
              required 
              className="form-input" 
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">E-mail</label>
            <input 
              type="email" 
              required 
              className="form-input" 
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Mensagem</label>
            <textarea 
              rows="5" 
              required 
              className="form-input" 
              placeholder="Como podemos te ajudar?" 
              style={{ resize: 'vertical' }}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>
          
          <button type="submit" className="btn-featured w-full">
            Iniciar Conversa no WhatsApp
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-neon" /> 
            <span>suporte@iamoneymachine.com</span>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 contact-footer-link">
            <Globe size={16} className="text-neon" /> 
            <span>@iamoneymachine</span>
          </a>
        </div>
      </section>
    </div>
  );
}