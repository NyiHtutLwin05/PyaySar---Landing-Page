import { Link } from 'react-router-dom';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
} from './../../constants/Icons';

const iconBoxClasses =
  'w-6 md:w-7 h-6 md:h-7 flex justify-center items-center border-[0.5px] border-black rounded-md';

const Index = () => {
  return (
    <div className='flex flex-col gap-5 py-5 mx-[30px]'>
      <div className='flex justify-center items-center gap-5'>
        <Link className={iconBoxClasses}>
          <TwitterIcon />
        </Link>
        <Link className={iconBoxClasses}>
          <LinkedInIcon />
        </Link>
        <Link className={iconBoxClasses}>
          <FacebookIcon />
        </Link>
      </div>

      <hr className='border border-black w-full' />

      <div className='flex flex-col justify-center items-center md:flex-row md:gap-5'>
        <p className='flex gap-7 text-sm md:text-lg leading-5 md:leading-12'>&copy; Copyright. All rights reserved.</p>
        <hr className='hidden md:inline border border-black w-5 rotate-90'/>
        <div className='flex gap-7 text-sm md:text-lg leading-5 md:leading-12 font-medium'>
          <Link>Privacy</Link>
          <Link>Terms</Link>
          <Link>Copyright</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
