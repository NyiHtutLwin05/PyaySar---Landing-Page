import { useMediaQuery } from 'react-responsive';
import ContactTablet from './Contact.tablet';
import SectionHeader from '../../components/SectionHeader';
import ContactImg from '../../assets/Images/Contact_us.webp';
import ContactForm from '../../components/ContactForm';

const App = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  // Define CSS classes for styling
  const bodyClasses =
    'font-SGmedium text-lg text-[#000000] w-[390px] text-start';

  const formOverrideClasses = {
    extends: 'md:w-[400px]',
  };

  return (
    <div id='contact' className='mx-[30px]'>
      {/* section header */}
      <SectionHeader heading='Work with Us' />
      <p className='text-xs font-SGregular lg:text-xl md:text-lg text-gray text-center'>
        Contact Us
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
              Feel free to get in touch with us if you have{' '}
              <span className='text-blue'>
                any questions, suggestions, or inquiries.
              </span>
              <br /> Our dedicated team is here to assist you. You can reach out
              to us through the contact form below
            </div>
            {/* Contact form */}
            <div className='row-span-1 col-span-1 order-3 my-auto'>
              <ContactForm
                overrideClasses={formOverrideClasses}
                btnLabel='Contact Us'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
