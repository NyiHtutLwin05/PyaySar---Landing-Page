import { useMediaQuery } from 'react-responsive';
import { GooglePlayIcon, AppleIcon } from '../../constants/Icons';
import FooterTablet from './Footer.Tablet';
import FooterComponent from '../../components/Footer';

const Footer = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='text-SGregular'>
      {isMobileOrTablet ? (
        <FooterTablet />
      ) : (
        <div className='flex justify-between items-center my-20 mx-[30px]'>
          {/* navigation section */}
          <div>
            <div className='flex flex-row gap-5 mb-2'>
              {/* TODO: insert your logo here */}
              <div className='w-[68px] h-[68px] rounded-full border border-black'></div>
              <div className='text-[#000000] mb-3'>
                {/* Brand Information */}
                <p className='text-2xl font-medium leading-8'>Pyaysar</p>
                <p className='text-lg leading-12 font-light'>
                  something are good
                </p>
              </div>
            </div>

            {/* navigation items */}
            <div className='flex text-lg leading-6 font-SGregular text-black w-[421px] justify-between'>
              <a href='#'>Home</a>
              <a href='#features'>Features</a>
              <a href='#about'>About Us</a>
              <a href='#contact'>Contact</a>
            </div>
          </div>

          {/* download app section */}

          <div>
            <p className='text-2xl leading-8 font-SGregular text-center mb-8'>
              Coming Soon
            </p>
            <div className='md:flex gap-5'>
              {/* Google Play Download Link */}
              <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-[15px] py-2.5 cursor-pointer w-[175px] h-[57px] mb-1'>
                <GooglePlayIcon />
                <p className='text-sm leading-4 font-normal text-start'>
                  Download on the <br />{' '}
                  <a
                    href='#'
                    className='text-blue text-lg leading-6 font-medium'
                  >
                    Google Play
                  </a>
                </p>
              </div>
              {/* App Store Download Link */}
              <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-[15px] py-2.5 cursor-pointer w-[175px] h-[57px] mb-1'>
                <AppleIcon />
                <p className='text-sm leading-4 font-normal text-start'>
                  Download on the <br />{' '}
                  <a
                    href='#'
                    className='text-blue text-lg leading-6 font-SGmedium'
                  >
                    App Store
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterComponent />
    </div>
  );
};

export default Footer;
