

interface EventCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  soldOut?: boolean;
}

function EventCard({
  category,
  title,
  description,
  image,
  soldOut = false
}: EventCardProps) {
  return (
    <div className="w-full mt-[40px] max-w-[250px] gap-8 max-h-[1500px] sm:w-[280px] mx-auto sm:mx-0">
      <div className="bg-zinc-200 rounded-[20px] overflow-hidden border-2 border-white hover:border-8 hover:scale-110 hover:z-50 transition-all duration-300 cursor-pointer relative h-[400px] mt-6 sm:mt-[60px] sm:ml-[40px]">
        {/* Image Container */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[180px] object-cover"
          />

          {/* Sold Out Badge */}
          {soldOut && (
            <div className="w-[120px] h-[120px] absolute left-[-10px] top-[-10px] overflow-hidden">
              <div className="w-[110px] pt-2.5 pb-3 absolute left-[-26px] top-[45px] origin-top-left -rotate-45 bg-black shadow-lg flex justify-center items-center">
                <div className="text-center text-white text-sm font-bold uppercase leading-none">
                  Esgotado
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 bg-zinc-900">
          <h3 className="text-white text-[16px] font-bold mb-3 leading-tight">
            {category}
          </h3>
          <h4 className="text-white text-sm text-[13px] font-semibold mb-3 leading-snug">
            {title}
          </h4>
          <p className="text-gray-300 text-[13px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EventCardsDemo() {
  const events = [
    {
      category: "DAY PASS",
      title: "Day Pass, Day Comfort Pass e Day Pass N°1 Exclusive",
      description: "Acesso ao Tomorrowland Brasil na Sexta, Sábado ou Domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/4dd77a7eef6de9ee965c673a0682278ea97ac74ca459fc23bbc97031180fb203.jpg",
      soldOut: false
    },
    {
      category: "FULL MADNESS",
      title: "Full Madness Pass, Full Madness Comfort Pass e Full Madness Pass N°1 Exclusive",
      description: "Acesso ao Tomorrowland Brasil na Sexta, Sábado e Domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/9f8cd5a4d61a93586a22c81448bd7b7b4eabf2c348bb23b6b4c22fceac3f004b.jpg",
      soldOut: false
    },
    {
      category: "DREAMVILLE - MAGNIFICENT GREENS",
      title: "Magnificent Greens Package, Magnificent Greens Comfort Package e Magnificent Greens N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira e acesso ao Tomorrowland Brasil de sexta a domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/77760fb957b705c3b82cf4ef579b905a34f2a8f97c510bf4138dc54d9e2dd5fc.jpg",
      soldOut: false
    },
    {
      category: "DREAMVILLE - VIDA NOVA @ MAGNIFICENT GREENS 2P",
      title: "Vida Nova 2P Package, Vida Nova 2P Comfort Package e Vida Nova 2P N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira para duas pessoas com uma barraca pronta, e acesso ao Tomorrowland Brasil de sexta a domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/a04f171c8a930793d15d228de1abd8369bc920e7978fe9b264b653a8ed1b2ad6.jpg",
      soldOut: true
    },
    {
      category: "DREAMVILLE - EASY TENT 2P",
      title: "Easy Tent 2P Package, Easy Tent 2P Comfort Package e Easy Tent 2P N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira para duas pessoas com uma barraca, e acesso ao Tomorrowland Brasil de sexta a domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/e95c1059155198f2f6b180083833015db12ccdb5018068b9d5e8246e8eb5eea9.jpg",
      soldOut: true
    },
    {
      category: "DREAMVILLE - SOLARIS 2P",
      title: "Solaris 2P Package, Solaris 2P Comfort Package e Solaris 2P N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira para duas pessoas com uma barraca glamping, e acesso ao Tomorrowland Brasil de sexta a domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/1dd70c63a376fea4ef83968ad6944ce2c0f1dc1b9959f890440641fafc640bd4.jpg",
      soldOut: true
    },
    {
      category: "DREAMVILLE - LUNA 2P",
      title: "Luna 2P Package, Luna 2P Comfort Package e Luna 2P N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira para duas pessoas com uma barraca glamping, e acesso ao Tomorrowland Brasil de sexta a domingo",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/b7077aaf94b97cccb6d561f6557d76cd6da2063fd08f3d9ff4a83c019bb96072.jpg",
      soldOut: true
    },
    {
      category: "DREAMVILLE - GRANDE 4P",
      title: "Grande 4P Package, Grande 4P Comfort Package e Grande 4P N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira para quatro pessoas com uma barraca glamping, e acesso ao Tomorrowland Brasil de sexta a domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/df60fc8493463d413318ab0af44a098bd1df93777b73a6828a4fe3a6ae3c4eeb.jpg",
      soldOut: true
    },
    {
      category: "DREAMVILLE - ASTERA 2P",
      title: "Astera 2P Package, Astera 2P Comfort Package e Astera 2P N°1 Package",
      description:
        "Acesso ao DreamVille (área de camping) de quinta a segunda-feira para duas pessoas em uma acomodação de Alto Padrão, e acesso ao Tomorrowland Brasil de sexta a domingo.",
      image:
        "https://cooltours.s3.sa-east-1.amazonaws.com/images/preview/24052c39108109afc16b961013a7f398072adcc55f62ed54df84d31bb7407745.jpg",
      soldOut: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mobile/tablet com Tailwind, Desktop com inline style */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-[repeat(3,1fr)]"
          style={{
            // somente aplica no desktop
            ...(typeof window !== "undefined" && window.innerWidth >= 1024
              ? { gridTemplateColumns: "repeat(3, 1fr)" }
              : {})
          }}
        >
          {events.map((event, index) => (
            <EventCard
              key={index}
              category={event.category}
              title={event.title}
              description={event.description}
              image={event.image}
              soldOut={event.soldOut}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
