import ContactImg from '../../assets/Images/Contact_us.webp';
import ContactForm from '../../components/ContactForm';

const ContactTablet = () => {
  // Define CSS classes for styling
  const bodyClasses =
    'text-sm sm:text-base leading-5 sm:leading-7 font-medium text-[#000000] w-[270px] sm:w-full text-center sm:text-start';

  const formOverrideClasses = {
    extends: 'sm:w-[350px]',
  };

  return (
    <div id='contact' className='mx-[30px]'>
      {/* Grid layout for content */}
      <div className='grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 place-items-center gap-2 sm:gap-4 my-10 sm:my-16 mb-20'>
        {/* Image content */}
        <img
          src={ContactImg}
          alt='vector image'
          className='sm:row-span-2 order-2 sm:order-1 w-[150px] sm:w-auto'
        />
        {/* Text Content */}
        <div
          className={`sm:row-span-1 sm:col-span-1 order-1 sm:order-2 ${bodyClasses}`}
        >
          Feel free to get in touch with us if you have{' '}
          <span className='text-blue font-medium'>
            any questions, suggestions, or inquiries.
          </span>
          <br /> Our dedicated team is here to assist you. You can reach out to
          us through the contact form below
        </div>
        {/* Contact form */}
        <div className='sm:row-span-1 sm:col-span-1 order-3 my-auto'>
          <ContactForm
            overrideClasses={formOverrideClasses}
            btnLabel='Contact Us'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactTablet;
