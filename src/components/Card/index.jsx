import { ArrowIconSmall } from '../../constants/Icons';
import { PropTypes } from 'prop-types';

const OverrideClasses = {
  override: '',
  extends: '',
};

const Index = ({ title, overrideClasses = OverrideClasses }) => {
  return (
    <div
      className={`flex flex-col justify-between border border-gray bg-white rounded-xl p-3 md:p-5 w-[248px] md:w-full ${overrideClasses.extends}`}
    >
      <p className='text-base md:text-2xl leading-9 font-medium'>{title}</p>
      <div className='w-[46px] h-[33px] md:h-10 rounded-xl bg-black flex justify-center items-center ms-auto'>
        <ArrowIconSmall />
      </div>
    </div>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
  overrideClasses: PropTypes.object,
};

export default Index;
