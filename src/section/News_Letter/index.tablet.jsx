import ContactForm from '../../components/ContactForm';
import { ArrowIconSmall } from '../../constants/Icons';

const NewsLetterTablet = () => {
  const formOverrideClasses = {
    extends:'sm:w-[511px]'
  }
  return (
    <>
      <div className='relative'>
        <div className='w-full h-[202px] sm:h-[223px] bg-gray rounded-xl md:rounded-2xl'></div>

        <div className='absolute flex flex-col justify-between items-center bottom-2 right-2 w-full h-[202px] sm:h-[223px] rounded-xl bg-white border border-black p-2.5 sm:p-5'>
          <div className='text-center pt-5'>
            <h1 className='text-5xl/2 sm:text-3xl leading-8 sm:leading-10 font-bold text-black mb-5'>
              Don’t miss out !
            </h1>
            <p className='text-sm sm:text-base leading-5 font-medium tracking-wide sm:tracking-widest'>
              Run your business with confidence
            </p>
          </div>

          <ContactForm  overrideClasses={formOverrideClasses} btnLabel={<ArrowIconSmall />}/>
        </div>
      </div>
    </>
  );
};

export default NewsLetterTablet;
