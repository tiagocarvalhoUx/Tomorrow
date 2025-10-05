import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://www.billboard.com/wp-content/uploads/2023/03/tomorrowland-2022-rudgr-1-1-1-1.jpg?w=1024')" }}
    >
      <div className="bg-black/50 p-10 rounded-lg">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
          TOMORROWLAND
        </h1>
        <p className="text-2xl text-brand-gold mt-4">11-13 OUTUBRO 2025</p>
        <p className="text-xl text-white mt-2">SÃO PAULO, BRASIL</p>
        <button className="mt-8 bg-brand-purple hover:bg-brand-purple/80 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300">
          QUERO MEU INGRESSO
        </button>
      </div>
    </section>
  );
};

export default Hero;
