import React, { useState } from 'react';
import SearchIcon from "../../public/icons/variant=lupa.svg";
import FlagIcon from "../../public/icons/flag-brasil.svg";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="w-full px-4 sm:px-[30px] pt-5 pb-2.5 bg-black flex justify-center items-center ml-[20px] mt-[20px] mb-[20px] " >
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2" >
        
        {/* Search Input with Flag Inside */}
        <div className="flex-1 relative bg-black rounded-[3px] shadow-[0px_2px_1px_-1px_rgba(#E1E1E1),0px_1px_1px_0px_rgba(#E1E1E1),0px_1px_3px_0px_rgba(0,0,0,0.20)] overflow-hidden flex items-stretch"  >
          
          {/* Flag/Language Selector Button - Inside Search Bar on the Left */}
          <button 
            className="flex-shrink-0 px-3 bg-black hover:bg-[#E1E1E1] transition-colors border-none inline-flex items-center gap-2"
            aria-label="Selecionar idioma" style={{  background: ' #000000' }} 
          >
            {/* Flag Icon */}
            <img 
              src={FlagIcon} 
              alt="Flag" 
              className="w-5 h-5 object-contain"
            />
            
            {/* Dropdown Arrow */}
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-transparent border-t-[#696969]"  />
          </button>

          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar Eventos"
            className="flex-1 py-[7px] px-3 pr-12 text-base font-normal font-['Montserrat',sans-serif] text-[#FFFFFF] placeholder-[#969696] outline-none bg-black border-0"  style={{  background: ' #000000', caretColor: 'white' }}
          />
          
          {/* Search Icon */}
          <button 
            className="border-0 bg-transparent ml-[95%] absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
            aria-label="Buscar"
          >
            <img 
              src={SearchIcon} 
              alt="Search" 
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;