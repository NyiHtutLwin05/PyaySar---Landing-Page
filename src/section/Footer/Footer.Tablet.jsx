import { AppleIcon, GooglePlayIcon } from '../../constants/Icons';

const FooterTablet = () => {
  return (
    <div className='flex justify-between items-start my-20 mx-[30px]'>
      {/* navigation section */}
      <div className='max-w-[55%]'>
        <div className='flex flex-col gap-2'>
          {/* TODO: insert your logo here */}
          <div className='w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] rounded-full border border-black'></div>
          <div className='text-[#000000] mb-3 sm:flex sm:items-center gap-5'>
            {/* Brand Information */}
            <p className='text-base sm:text-lg font-SGmedium leading-6'>
              Pyaysar
            </p>
            <p className='text-sm sm:text-base leading-5 sm:leading-12 font-SGlight'>
              something are good
            </p>
          </div>
        </div>

        {/* navigation items */}
        <div className='flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-base leading-4 sm:leading-5 font-SGmedium text-black'>
          <a href='#'>Home</a>
          <a href='#features'>Features</a>
          <a href='#about'>About Us</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>

      {/* download app section */}

      <div className='max-w-[45%]'>
        <p className='text-base sm:text-lg leading-6 font-SGmedium text-center mb-2 sm:mb-3'>
          Coming Soon
        </p>
        <div>
          {/* Google Play Download Link */}
          <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-2 py-1 cursor-pointer w-auto h-12 sm:h-[57px] mb-1 sm:mb-2'>
            <GooglePlayIcon />
            <p className='text-[8px] sm:text-sm text-center'>
              Download on the <br />{' '}
              <a
                href='#'
                className='text-blue text-[8px] sm:text-base leading-4 font-SGmedium'
              >
                Google Play
              </a>
            </p>
          </div>
          {/* App Store Download Link */}
          <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-2 py-1 cursor-pointer w-auto h-12 sm:h-[57px] mb-1 sm:mb-2'>
            <AppleIcon />
            <p className='text-[8px] sm:text-sm text-center'>
              Download on the <br />{' '}
              <a
                href='#'
                className='text-blue text-[8px] sm:text-base leading-4 font-SGmedium'
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
