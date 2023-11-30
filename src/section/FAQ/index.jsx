import { FAQs } from '../../data';
import Accordion from '../../components/Accordion';
import SectionHeader from '../../components/SectionHeader';

const FAQ = () => {
  return (
    <div className='mx-[30px]'>
      {/* section */}
      <SectionHeader heading='FAQ' />
      <p className='mx-auto text-center text-gray text-base md:text-lg leading-5 sm:leading-12 font-light w-[150px] sm:w-auto'>
        Frequently Asked Questions
      </p>
      <div className='my-8'>
        <Accordion items={FAQs} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
