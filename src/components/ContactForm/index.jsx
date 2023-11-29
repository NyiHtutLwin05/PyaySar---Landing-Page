import { useState } from 'react';
import Button from '../Button';

const Index = () => {
  // Define CSS classes for styling

  const btnOverrideClasses = {
    extends:
      'w-auto h-[26px] md:w-[132px] md:h-[46px] px-5 py-[15px] rounded-sm md:rounded-xl text-xs md:text-base',
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
        className='flex justify-between items-center gap-2 border border-black w-auto md:w-[424px] h-[44px] md:h-[62px] rounded-xl px-2 md:ps-5 md:pe-3 py-2 md:py-2.5'
      >
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email address'
          className='text-[11px] md:text-base leading-5 font-light'
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
