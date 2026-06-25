import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Termos() {
  return (
    <div className="lp-wrapper">
      <article className="section-wrapper max-w-3xl text-gray-300 leading-relaxed space-y-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4 text-decoration-none"><ArrowLeft size={16} /> Voltar</Link>
        <h1 className="text-3xl md:text-5xl font-black text-gradient">Termos de Uso</h1>
        <p className="text-xs text-gray-500">Última atualização: Junho de 2026</p>
        
        <h2>1. Condições de Uso</h2>
        <p>Ao adquirir ou utilizar a biblioteca de engenharia de prompts do IA Money Machine, você concorda integralmente com as condições estipuladas neste termo. O uso dos comandos é estritamente pessoal e intransferível.</p>
        
        <h2>2. Direitos Autorais</h2>
        <p>Toda a estrutura lógica, engenharia reversa e organização textual dos prompts contidos no produto são de propriedade exclusiva. É expressamente proibida a revenda, sublicenciamento, redistribuição ou compartilhamento público do material sob pena de sanções cíveis e criminais.</p>
        
        <h2>3. Limitação de Responsabilidade</h2>
        <p>Os prompts servem como ferramentas de otimização de velocidade operacional. Os resultados financeiros dependem exclusivamente da capacidade de execução de mercado do usuário, não havendo qualquer promessa ou garantia de lucros fixos ou faturamento automático por parte dos criadores.</p>
        
        <h2>4. Política de Reembolso</h2>
        <p>Asseguramos uma garantia incondicional de reembolso total em até 7 dias após a confirmação da compra. A solicitação deve ser feita exclusivamente através dos nossos canais de suporte oficiais dentro do prazo legal.</p>
      </article>
    </div>
  );
}