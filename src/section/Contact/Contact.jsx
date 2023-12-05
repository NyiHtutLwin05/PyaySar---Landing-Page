import { useMediaQuery } from 'react-responsive';
import ContactTablet from './Contact.tablet';
import SectionHeader from '../../components/SectionHeader';
import ContactImg from '../../assets/Images/Contact_us.webp';
import ContactForm from '../../components/ContactForm';
import { useTranslation } from 'react-i18next';

const App = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation();

  // Define CSS classes for styling
  const bodyClasses =
    'font-SGmedium text-lg text-[#000000] w-[390px] text-start';

  const formOverrideClasses = {
    extends: 'md:w-[400px]',
  };

  return (
    <div id='contact' className='mx-[30px]'>
      {/* section header */}
      <SectionHeader heading={t('contact.heading')} />
      <p className='text-xs font-SGregular lg:text-xl md:text-lg text-gray text-center'>
        {t('contact.subHeading')}
      </p>

      {isMobileOrTablet ? (
        <ContactTablet />
      ) : (
        <div>
          {/* Grid layout for content */}
          <div className='grid grid-rows-2 grid-cols-2 place-items-center gap-4 my-20'>
            {/* Image content */}
            <img
              src={ContactImg}
              alt='vector image'
              className='row-span-2 order-1 w-auto'
            />
            {/* Text Content */}
            <div className={`row-span-1 col-span-1 order-2 ${bodyClasses}`}>
              {t('contact.content.before')}
              <span className='text-blue'>
                {t('contact.content.blue-text')}
              </span>
              <br /> {t('contact.content.after')}
            </div>
            {/* Contact form */}
            <div className='row-span-1 col-span-1 order-3 my-auto'>
              <ContactForm
                overrideClasses={formOverrideClasses}
                btnLabel={t('contact.form.btnText')}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
