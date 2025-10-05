import React, { useState } from 'react';
import Logo from '../../public/image/logo.png';
import Menu from '../../public/icons/hamburguer.png';
import HelpIcon from '../../public/icons/interrogação.png';
import ComponentHouse from '../../public/icons/variant=house.svg'
import ComponentPeople from '../../public/icons/variant=pessoas.svg'
import ComponentPolicy from '../../public/icons/variant=policy.svg'
import ComponentPowered from '../../public/icons/powered_by.svg'

export interface INavigationBarProps {
  className?: string;
  logoSrc?: string;
}

const NavBar = ({ 
  className = 'bg-black-solid',
  logoSrc = Logo
}: INavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* NavBar Principal */}
      <div 
        className={`bg-black self-stretch shrink-0 h-[66px] relative overflow-hidden ${className}`}
        style={{ backgroundColor: '#000000' }}
      >
        {/* Logo Container */}
        <div className="px-3 flex flex-row items-center justify-center flex-wrap content-center absolute left-[61.16px] right-[61.15px] top-1/2 -translate-y-1/2 overflow-hidden">
          <img
            className="shrink-0 w-[53.23px] h-[29.98px] relative overflow-hidden object-cover"
            src={logoSrc}
            alt="Logo"
          />
        </div>

        {/* Left Button - Menu Hamburguer */}
        <button
           onClick={toggleSidebar}
  className="bg-transparent rounded-full   border-0 shadow-none p-[14px] px-4 flex flex-col items-start justify-start absolute left-3 top-1/2 -translate-y-1/2 transition-colors hover:bg-[rgb(38,38,38)] rounded" 
        >
          <div className="flex flex-row items-center justify-center flex-wrap content-center shrink-0 relative" >
            <div className="pb-[0.59px] flex flex-col items-center justify-start shrink-0 relative">
              <div className="flex flex-row items-start justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-[17.16px] h-[19px] ml-[5px] relative"
                  src={Menu}
                  alt="Left icon"
                />
              </div>
            </div>
          </div>
        </button>

        {/* Right Button - Ajuda */}
        <div 
          data-:hover="false" 
          data-variant="1" 
          className="w-[108px] h-[20px] min-h-9 ml-[82%] px-px py-[15px] mt-[10px] absolute bg-[#f3741f] rounded-full outline outline-1 outline-offset-[-1px] outline-[#f3741f] inline-flex flex-col justify-start items-start"
        >
          <div className="self-stretch inline-flex justify-center items-center flex-wrap content-center gap-1">
            <div className="w-5 h-5 bg-black rounded-full inline-flex justify-center items-center">
              <span className="text-[#f3741f] text-xs font-bold leading-none">
                <img className="mr-[5px]" src={HelpIcon} alt="" />
              </span>
            </div>
            <div className="mt-[-5px] inline-flex flex-col justify-start items-center">
              <div 
                className="text-center justify-center text-black text-xs font-bold font-['Montserrat']" 
                style={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(73, 38, 15)' }}
              >
                Ajuda
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}
        style={{ backgroundColor: '#000000' }}
      >
        {/* Logo Section */}
        <div className="py-6 flex justify-center items-center min-h-[150px]" style={{ backgroundColor: '#000000' }}>
          <img className="w-[177.48px] h-[99.98px] max-w-52 max-h-[100px] relative" src={logoSrc} alt="Logo" />
        </div>

    

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto " style={{ backgroundColor: '#000000'}} >
          <div className="flex flex-col ">
            {/* Menu Items */}
            <NavItem iconSrc={ComponentHouse} label="Home"  />
            <NavItem iconSrc={ComponentPeople} label="User Area" />
            

            {/* Section Title */}
            <div className="px-4 py-4" style={{ backgroundColor: '#000000' }}>
              <h3 className="text-sm font-normal" style={{ color: '#ffffff' }}>
                Termos e Políticas
              </h3>
            </div>

            {/* Sub Menu Items */}
            <SubNavItem iconSrc={ComponentPolicy} label=" Políticas da INTI " />
            <SubNavItem iconSrc={ComponentPolicy} label=" Termos do Organizador" />
            <SubNavItem iconSrc={ComponentPolicy} label=" Política do Organizador" />
            <SubNavItem iconSrc={ComponentPowered} label="" isPoweredBy={true} />
          </div>
        </nav>

        
      </div>
    </>
  );
};

// NavItem Component
interface NavItemProps {
  iconSrc: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ iconSrc, label }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button 
      className="w-full flex items-center transition-colors" 
      style={{ 
        backgroundColor: '#000000', 
        border: 'none', 
        outline: 'none',
        padding: '10px 5px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="min-w-10 flex justify-center items-center" style={{ marginLeft: '5px', marginRight: '5px' }}>
        <img 
          src={iconSrc} 
          alt={label} 
          className="w-[18px] h-[18px]"
          style={{
            transform: isHovered ? 'scale(1.25)' : 'scale(1)',
            transition: 'transform 200ms ease-in-out'
          }}
        />
      </div>
      <span 
        className="text-sm font-normal" 
        style={{ 
          color: '#ffffff',
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        {label}
      </span>
    </button>
  );
};

// SubNavItem Component
interface SubNavItemProps {
  iconSrc: string;
  label: string;
  isPoweredBy?: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ iconSrc, label, isPoweredBy = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button 
      className="w-full flex items-center transition-colors group" 
      style={{ 
        backgroundColor: '#000000', 
        border: 'none', 
        outline: 'none',
        padding: '10px 5px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="min-w-10 flex justify-center items-center" style={{ marginLeft: '5px', marginRight: '5px' }}>
        <img 
          src={iconSrc} 
          alt={label} 
          style={{
            width: isPoweredBy ? '100px' : '18px',
            height: isPoweredBy ? '100px' : '18px',
            transform: isHovered && !isPoweredBy ? 'scale(1.25)' : 'scale(1)',
            transition: 'transform 200ms ease-in-out'
          }}
        />
      </div>
      <span 
        className="text-sm font-normal" 
        style={{ 
          color: '#ffffff',
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default NavBar;