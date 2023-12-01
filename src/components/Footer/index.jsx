import {
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
} from './../../constants/Icons';

const iconBoxClasses =
  'w-6 sm:w-7 h-6 sm:h-7 flex justify-center items-center border-[0.5px] border-black rounded-md';

const Index = () => {
  return (
    <div className='flex flex-col gap-5 py-5 mx-[30px] font-SGregular'>
      <div className='flex justify-center items-center gap-5'>
        <a className={iconBoxClasses}>
          <TwitterIcon />
        </a>
        <a className={iconBoxClasses}>
          <LinkedInIcon />
        </a>
        <a className={iconBoxClasses}>
          <FacebookIcon />
        </a>
      </div>

      <hr className='border border-black w-full' />

      <div className='flex flex-col justify-center items-center sm:flex-row sm:gap-5 text-sm sm:text-base md:text-lg leading-5 sm:leading-12'>
        <p className='flex gap-7'>&copy; Copyright. All rights reserved.</p>
        <hr className='hidden sm:inline border border-black w-5 rotate-90' />
        <div className='flex gap-7 font-medium'>
          <a>Privacy</a>
          <a>Terms</a>
          <a>Copyright</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
