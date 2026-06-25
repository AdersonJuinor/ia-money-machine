import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Qualificadores() {
  return (
    <section className="section-wrapper grid-2 gap-8">
      <div className="qualifier-box yes">
        <h3 className="text-xl font-bold text-neon flex items-center gap-2 mb-4"><CheckCircle2 /> Para quem é feito esse sistema:</h3>
        <ul className="space-y-3 text-sm text-gray-300 list-none p-0">
          <li>• **Freelancers** que querem escalar o número de clientes sem estourar o tempo de entrega.</li>
          <li>• **Infoprodutores e Afiliados** que precisam validar ofertas e páginas de vendas rápido.</li>
          <li>• **Donos de Agências** buscando reduzir o custo de folha de pagamento multiplicando a produtividade.</li>
          <li>• **Criadores de Conteúdo** exaustos de sofrer com o bloqueio criativo da tela em branco.</li>
        </ul>
      </div>
      <div className="qualifier-box no">
        <h3 className="text-xl font-bold text-red-400 flex items-center gap-2 mb-4"><AlertTriangle /> Quem deve fechar essa página agora:</h3>
        <ul className="space-y-3 text-sm text-gray-400 list-none p-0">
          <li>• Pessoas em busca de botões mágicos que geram dinheiro sem nenhum esforço ou clique.</li>
          <li>• Colecionadores de arquivos digitais que compram, guardam na pasta e nunca abrem para executar.</li>
          <li>• Quem prefere continuar reclamando da falta de tempo em vez de delegar processos para robôs.</li>
        </ul>
      </div>
    </section>
  );
}