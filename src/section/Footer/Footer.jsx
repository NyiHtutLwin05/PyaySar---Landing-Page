import { useMediaQuery } from 'react-responsive';
import { GooglePlayIcon, AppleIcon } from '../../constants/Icons';
import FooterTablet from './Footer.Tablet';
import FooterComponent from '../../components/Footer';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation();

  return (
    <div className='font-SGregular'>
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
                <p className='text-2xl font-SGmedium leading-8'>
                  {t('footer.navigation-section.title')}
                </p>
                <p className='text-lg leading-12 font-light'>
                  {t('footer.navigation-section.subtitle')}
                </p>
              </div>
            </div>

            {/* navigation items */}
            <div className='flex text-lg leading-6 font-SGmedium text-black w-[380px] lg:w-[421px] justify-between'>
              <a href='#'>Home</a>
              <a href='#feature'>Features</a>
              <a href='#about us'>About Us</a>
              <a href='#contact'>Contact</a>
            </div>
          </div>

          {/* download app section */}

          <div>
            <p className='text-2xl leading-8 font-SGmedium text-center mb-8'>
              {t('footer.download-app-section.title')}
            </p>
            <div className='md:flex gap-5'>
              {/* Google Play Download Link */}
              <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-[15px] py-2 cursor-pointer w-auto h-[57px] mb-1'>
                <GooglePlayIcon />
                <p className='text-[10px] lg:text-sm leading-4 font-SGmedium text-start'>
                  {t('footer.download-app-section.download-text')} <br />{' '}
                  <a
                    href='#'
                    className='text-blue text-md text-[15px] lg:text-lg leading-6'
                  >
                    Google Play
                  </a>
                </p>
              </div>
              {/* App Store Download Link */}
              <div className='flex justify-center items-center gap-2 border border-gray rounded-xl px-[15px] py-2.5 cursor-pointer w-auto h-[57px] mb-1'>
                <AppleIcon />
                <p className='text-[10px] lg:text-sm leading-4 font-SGmedium text-start'>
                  {t('footer.download-app-section.download-text')} <br />{' '}
                  <a
                    href='#'
                    className='text-blue text-[15px] lg:text-lg leading-6'
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
