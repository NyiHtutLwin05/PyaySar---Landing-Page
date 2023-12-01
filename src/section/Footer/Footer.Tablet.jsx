import { AppleIcon, GooglePlayIcon } from '../../constants/Icons';

const FooterTablet = () => {
  return (
    <div className='flex justify-between items-start my-20 mx-[30px]'>
      {/* navigation section */}
      <div>
        <div className='flex flex-col gap-2'>
          {/* TODO: insert your logo here */}
          <div className='w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] rounded-full border border-black'></div>
          <div className='text-[#000000] mb-3 sm:flex sm:items-center gap-5'>
            {/* Brand Information */}
            <p className='text-base sm:text-lg font-medium leading-6'>
              Pyaysar
            </p>
            <p className='text-sm sm:text-base leading-5 sm:leading-12 font-light'>
              something are good
            </p>
          </div>
        </div>

        {/* navigation items */}
        <div className='flex text-[11px] sm:text-base leading-4 sm:leading-5 font-medium text-black w-[180px] sm:w-[370px] justify-between'>
          <a href='#'>Home</a>
          <a href='#features'>Features</a>
          <a href='#about'>About Us</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>

      {/* download app section */}

      <div>
        <p className='text-base sm:text-lg leading-6 font-medium text-center mb-2 sm:mb-3'>
          Coming Soon
        </p>
        <div>
          {/* Google Play Download Link */}
          <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-2 py-1 cursor-pointer w-auto h-10 sm:h-[57px] mb-1 sm:mb-2'>
            <GooglePlayIcon />
            <p className='text-[8px] sm:text-[11px] text-center'>
              Download on the <br />{' '}
              <a
                href='#'
                className='text-blue text-[11px] sm:text-base leading-4 font-medium'
              >
                Google Play
              </a>
            </p>
          </div>
          {/* App Store Download Link */}
          <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-2 py-1 cursor-pointer w-auto h-10 sm:h-[57px] mb-1 sm:mb-2'>
            <AppleIcon />
            <p className='text-[8px] sm:text-[11px] text-center'>
              Download on the <br />{' '}
              <a
                href='#'
                className='text-blue text-[11px] sm:text-base leading-4 font-medium'
              >
                App Store
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTablet;
