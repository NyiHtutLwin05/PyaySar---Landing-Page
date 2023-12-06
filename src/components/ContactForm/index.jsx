import { useState } from 'react';
import Button from '../Button';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

const OverrideClasses = {
  override: '',
  extends: '',
};

const Index = ({ overrideClasses = OverrideClasses, btnLabel }) => {
  const {t} = useTranslation();
  // Define CSS classes for styling
  const btnOverrideClasses = {
    extends:
      'w-auto h-[26px] sm:h-9 lg:h-[46px] px-2 md:px-5 py-[15px] rounded-sm sm:rounded-xl text-[8px] sm:text-sm lg:text-base',
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
        className={
          overrideClasses.override
            ? overrideClasses.override
            : `flex justify-between items-center border border-black w-auto h-[44px] sm:h-[54px] lg:h-[62px] rounded-xl px-2 sm:ps-5 sm:pe-3 py-2 sm:py-2.5 ${overrideClasses.extends}`
        }
      >
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('contact.form.label')}
          className='text-[8px] sm:text-sm lg:text-base leading-5 font-light w-[120px] sm:w-[180px] lg:w-[60%]'
        />
        <Button
          label={btnLabel}
          overrideClasses={btnOverrideClasses}
          action={handleSubmit}
        />
      </form>
    </div>
  );
};

Index.propTypes = {
  overrideClasses: PropTypes.object,
  btnLabel: PropTypes.any.isRequired,
};

export default Index;
