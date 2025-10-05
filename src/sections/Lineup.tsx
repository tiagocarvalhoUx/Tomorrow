import React from 'react';

const artists = [
  { name: 'David Guetta', image: 'https://i.scdn.co/image/ab6761610000e5ebdf51cb3369582343a4ce9b56' },
  { name: 'Martin Garrix', image: 'https://i.scdn.co/image/ab6761610000e5ebc5a729a4021c536a6b839503' },
  { name: 'Armin van Buuren', image: 'https://i.scdn.co/image/ab6761610000e5eb1c9a78363504a4294a63845a' },
  { name: 'Dimitri Vegas & Like Mike', image: 'https://i.scdn.co/image/ab6761610000e5eb933a35f035c3a7d485afc7f3' },
  { name: 'Alok', image: 'https://i.scdn.co/image/ab6761610000e5eb9c931f4ad293ed9532387231' },
  { name: 'Vintage Culture', image: 'https://i.scdn.co/image/ab6761610000e5eb8b3b3e3b3e3b3e3b3e3b3e3b' },
];

const Lineup: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">LINE-UP</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {artists.map((artist) => (
            <div key={artist.name} className="text-center">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-brand-purple"
              />
              <h3 className="text-lg font-semibold text-white">{artist.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
