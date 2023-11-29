import { useState } from 'react';
import { CloseIcon } from '../../constants/Icons';

const Topbar = () => {
  const [closeTopBar, setCloseTopBar] = useState(false);
  const handleTopBarClose = () => {
    setCloseTopBar(true);
  };

  if (!closeTopBar) {
    return (
      <div className=' bg-blue text-white px-2 md:py-2 w-full'>
        <div className='max-w-[1040px] mx-auto flex justify-between items-center'>
          <p className='text-xs leading-9 font-medium md:hidden'>
            Lorem ipsum dolor sit amet consectetur ipsum dolor sit consectetur
            ipsum.
          </p>
          <p className='text-sm leading-9 font-medium hidden md:inline'>
            Lorem ipsum dolor sit amet consectetur ipsum dolor sit consectetur
            ipsum ipsum dolor sit consectetur ipsum dolor.
          </p>
          <div onClick={handleTopBarClose} className='cursor-pointer'>
            <CloseIcon />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Topbar;
