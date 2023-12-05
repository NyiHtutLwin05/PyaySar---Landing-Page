import { useMediaQuery } from 'react-responsive';
import ContactForm from '../../components/ContactForm';
import NewsLetterTablet from './index.tablet';
import { ArrowIconSmall } from '../../constants/Icons';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation();

  const formOverrideClasses = {
    extends: 'md:w-[400px]',
  };

  return (
    <div className='mx-[30px] font-SGregular'>
      {isMobileOrTablet ? (
        <NewsLetterTablet />
      ) : (
        <div className='relative'>
          <div className='w-full h-[202px] md:h-[300px] bg-gray rounded-xl md:rounded-2xl'></div>

          <div className='absolute flex flex-col justify-between items-center bottom-2 right-2 w-full h-[300px] rounded-2xl bg-white border border-black p-5'>
            <div className='text-center pt-5'>
              <h1 className='text-5xl leading-13 font-bold text-black mb-5'>
                {t('newsletter.heading')}
              </h1>
              <p className='text-lg leading-6 font-medium tracking-widest'>
                {t('newsletter.subHeading')}
              </p>
            </div>

            <ContactForm
              overrideClasses={formOverrideClasses}
              btnLabel={<ArrowIconSmall />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
