import React, { useState, useEffect } from 'react';
import HouseIcon from "../../public/icons/house.png";
import ContrastLightIcon from "../../public/icons/Link-claro.png";
import ContrastDarkIcon from "../../public/icons/Link-escuro.png";

interface AccessibilityToolbarProps {
  onFontSizeIncrease?: () => void;
  onFontSizeDecrease?: () => void;
  onContrastToggle?: (isDark: boolean) => void;
  onMenuToggle?: () => void;
}

const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  onFontSizeIncrease,
  onFontSizeDecrease,
  onContrastToggle,
}) => {
  const [isDarkContrast, setIsDarkContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(100);

  // Aplica mudanças de contraste no body
  useEffect(() => {
    if (isDarkContrast) {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#FFFFFF';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#000000';
    }
  }, [isDarkContrast]);

  // Aplica mudanças no tamanho da fonte
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const handleContrastToggle = (isDark: boolean) => {
    setIsDarkContrast(isDark);
    onContrastToggle?.(isDark);
  };

  const handleFontIncrease = () => {
    setFontSize(prev => Math.min(prev + 10, 150)); // Máximo 150%
    onFontSizeIncrease?.();
  };

  const handleFontDecrease = () => {
    setFontSize(prev => Math.max(prev - 10, 80)); // Mínimo 80%
    onFontSizeDecrease?.();
  };

  return (
    <div 
      className="w-full text-white flex items-center justify-between px-4 py-2 h-12 border-b border-[white]"
      style={{ backgroundColor: '#000000', borderBottom: '1px solid #262626' }}
    >
      {/* Left Section - Menu and Home Page */}
      <div className="flex items-center gap-6">
        {/* Home Page */}
        <div className="flex items-center gap-3">
          {/* Home Icon */}
          <img 
            src={HouseIcon}
            alt="Home"
            className="w-[20px] h-[15px] ml-[10px]"
          />
          <span className="text-sm text-[#FFFFFF]  leading-none ml-[5px]" style={{ fontFamily: 'Montserrat', fontSize: '14px' }}>
            Ir para página inicial
          </span>
        </div>
      </div>

      {/* Right Section - Accessibility Controls */}
      <div className="flex items-center gap-8 mr-[15px]">
        {/* Contrast Control */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#FFFFFF]  leading-none mr-[5px]" style={{ fontFamily: 'Montserrat', fontSize: '14px' }}>Contraste:</span>
          <div className="flex gap-3">
            {/* Light Contrast Button */}
            <button
              onClick={() => handleContrastToggle(false)}
              className={`mr-[8px] flex items-center justify-center transition-all ${
                !isDarkContrast ? 'ring-2 ring-white ring-offset-1 ring-offset-transparent' : ''
              }`}
              aria-label="Contraste claro"
              style={{ background: 'transparent', border: 'none', padding: 0 }}
            >
              <img 
                src={ContrastLightIcon}
                alt="Contraste claro"
                className="w-full h-full"
              />
            </button>

            {/* Dark Contrast Button */}
            <button
              onClick={() => handleContrastToggle(true)}
              className={`mr-[8px] flex items-center justify-center transition-all ${
                isDarkContrast ? 'ring-2 ring-white ring-offset-1 ring-offset-transparent' : ''
              }`}
              aria-label="Contraste escuro"
              style={{ background: 'transparent', border: 'none', padding: 0 }}
            >
              <img 
                src={ContrastDarkIcon}
                alt="Contraste escuro"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        {/* Font Size Increase */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleFontIncrease}
            disabled={fontSize >= 150}
            className="mr-[8px] w-6 h-6 bg-gray-200 text-black rounded-full flex items-center justify-center text-xs font-bold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Aumentar tamanho da fonte"
            style={{ fontFamily: 'Montserrat' }}
          >
            A+
          </button>
          <span className=" text-sm text-[#FFFFFF]  leading-none " style={{ fontFamily: 'Montserrat', fontSize: '14px' }}>
           Aumentar Fonte:
          </span>
        </div>

        {/* Font Size Decrease */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleFontDecrease}
            disabled={fontSize <= 80}
            className="ml-[8px] w-6 h-6 bg-gray-200 text-black rounded-full flex items-center justify-center text-xs font-bold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Diminuir tamanho da fonte"
            style={{ fontFamily: 'Montserrat' }}
          >
            A-
          </button>
          <span className="text-sm text-[#FFFFFF]  leading-none ml-[5px]" style={{ fontFamily: 'Montserrat', fontSize: '14px' }}>
            Diminuir Fonte
          </span>
        </div>
      </div>
    </div>
    
  );
};

export default AccessibilityToolbar;