import React from 'react';

const ticketTypes = [
  {
    name: 'Day Pass',
    description: 'Acesso para um dia do festival (Sexta, Sábado ou Domingo).',
    price: 'R$ 850',
  },
  {
    name: 'Full Madness Pass',
    description: 'Acesso para os três dias do festival. A experiência completa!',
    price: 'R$ 2.100',
  },
  {
    name: 'Comfort Pass',
    description: 'Acesso a áreas VIP exclusivas com mais conforto e serviços.',
    price: 'R$ 3.500',
  },
];

const Tickets: React.FC = () => {
  return (
    <section className="bg-brand-dark/90 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">INGRESSOS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.name}
              className="bg-gray-800/50 rounded-lg p-8 border border-brand-purple transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-brand-gold mb-4">{ticket.name}</h3>
              <p className="text-gray-300 mb-6">{ticket.description}</p>
              <p className="text-3xl font-bold text-white mb-6">{ticket.price}</p>
              <button className="bg-brand-purple hover:bg-brand-purple/80 text-white font-bold py-2 px-6 rounded-full w-full">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
