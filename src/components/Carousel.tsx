import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide1 from '../assets/figma/carousel-1.jpg';
import Slide2 from '../assets/figma/carousel-2.png';
import Slide3 from '../assets/figma/carousel-3.jpg';
import Slide4 from '../assets/figma/carousel-4.jpg';
import Slide5 from '../assets/figma/carousel-5.jpg';
import Slide6 from '../assets/figma/carousel-6.jpg';

export default function Carousel() {
  const carouselImages = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
      <div className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* Seta Esquerda < */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300"
          style={{ backgroundColor: 'rgb(0, 0, 0)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(38, 38, 38)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 0, 0)'}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={2.5} style={{ color: 'white' }} />
        </button>
        
        {/* Seta Direita > */}
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 ml-[95%]"
          style={{ backgroundColor: 'rgb(0, 0, 0)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(38, 38, 38)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 0, 0)'}
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={2.5} style={{ color: 'white' }} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6 sm:w-7 md:w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2 sm:w-2.5 md:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}