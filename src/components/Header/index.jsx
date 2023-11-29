// Navbar.js
import { useState } from 'react';
import Button from '../Button';
import { HamburgerIcon, GlobalIconLg } from '../../constants/Icons';

/*style classes*/
const btnOverrideClasses = {
  extends:
    'w-[124px] h-[50px] gap-2 md:gap-5 rounded-xl text-lg hidden md:inline',
};

const Index = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='py-2 md:py-5 mx-[30px]'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          {/* todo- insert logo here */}
          <div className='w-9 h-9 md:w-12 md:h-12 border border-black rounded-full'></div>

          <div className='hidden md:flex gap-12 text-lg leading-6 text-black font-medium'>
            <a href='#'>Home</a>
            <a href='#features'>Features</a>
            <a href='#about'>About Us</a>
            <a href='#contact'>Contact</a>
          </div>
        </div>

        <div className='flex items-center gap-0 md:gap-5'>
          <div className='flex gap-2'>
            <GlobalIconLg />
            <select className='text-xs md:text-sm leading-7 font-medium'>
              <option value='en'>English</option>
              <option value='mm'>Myanmar</option>
            </select>
          </div>
          <Button label='Login' overrideClasses={btnOverrideClasses} />
          <div className='md:hidden ml-4' onClick={toggleMenu}>
            <div className='cursor-pointer'>
              <HamburgerIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Nav */}
      <div
        className={`h-auto bg-white w-full absolute top-0 py-5 px-5 left-0 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0  drop-shadow-2xl' : '-translate-y-full'
        } `}
      >
        <div className='flex justify-end mb-4'>
          <div className='cursor-pointer' onClick={toggleMenu}>
            <div className='text-xl'>&#10006;</div>
          </div>
        </div>
        <div
          className={`w-full overflow-hidden transition-height duration-300 ${
            isMenuOpen ? 'h-auto' : 'h-0'
          }`}
        >
          <div className='flex flex-col'>
            <a href='#' className='mb-2'>
              Home
            </a>
            <a href='#features' className='mb-2'>
              Features
            </a>
            <a href='#about' className='mb-2'>
              About Us
            </a>
            <a href='#contact' className='mb-2'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
