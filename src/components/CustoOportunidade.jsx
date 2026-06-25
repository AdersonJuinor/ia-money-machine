import React from 'react';

export default function CustoOportunidade() {
  return (
    <section className="section-wrapper text-center">
      <h2 className="text-3xl md:text-5xl font-black mb-4">Quanto custa a sua teimosia de não usar IA?</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">Fazer as coisas do jeito antigo é um dreno silencioso de dinheiro na sua conta bancária.</p>
      <div className="table-container custom-table">
        <table>
          <thead>
            <tr className="bg-gray-900/60">
              <th>Despesa de Operação Padrão</th>
              <th>Custo Tradicional</th>
              <th>Com o Nosso Sistema</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contratar Agências / Copywriters Freelancers</td>
              <td className="text-red-400 font-bold">R$ 2.500 /mês</td>
              <td className="text-neon font-bold">R$ 0</td>
            </tr>
            <tr>
              <td>Tempo Perdido Criando Conteúdo e Estratégia</td>
              <td className="text-red-400 font-bold">25 Horas /semana</td>
              <td className="text-neon font-bold">12 Minutos</td>
            </tr>
            <tr>
              <td>Validação de Criativos e Ofertas Erradas</td>
              <td className="text-red-400 font-bold">R$ 1.200 /teste</td>
              <td className="text-neon font-bold">Modelagem de Dados Precisa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}