import { useState } from 'react';
import Button from '../Button';

const Index = () => {
  // Define CSS classes for styling

  const btnOverrideClasses = {
    extends:
      'w-auto lg:w-[132px] h-[26px] sm:h-9 lg:h-[46px] px-5 py-[15px] rounded-sm sm:rounded-xl text-xs sm:text-sm lg:text-base',
  };

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    // Additional logic for form submission if needed
  };

  return (
    <div>
      <form
        action='submit'
        className='flex justify-between items-center gap-2 border border-black w-auto sm:w-[370px] lg:w-[400px] h-[44px] sm:h-[54px] lg:h-[62px] rounded-xl px-2 sm:ps-5 sm:pe-3 py-2 sm:py-2.5'
      >
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email address'
          className='text-[11px] sm:text-sm lg:text-base leading-5 font-light'
        />
        <Button
          label='Contact Us'
          overrideClasses={btnOverrideClasses}
          action={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Index;
