import { PropTypes } from 'prop-types';

const OverrideClasses = {
  override: '',
  extends: '',
};

const Index = ({ heading, overrideClasses = OverrideClasses }) => {
  return (
    <div className='flex justify-between items-center'>
      <hr className='w-[56px] md:w-[157px] text-black' />
      <h1
        className={
          overrideClasses.override
            ? overrideClasses.override
            : `text-5xl/2 md:text-5xl leading-14/2 md:leading-12 font-bold w-[200px] md:w-[333px] text-center text-[#000000] ${overrideClasses.extends}`
        }
      >
        {heading}
      </h1>
      <hr className='w-[56px] md:w-[157px] text-black' />
    </div>
  );
};

Index.propTypes = {
  heading: PropTypes.any.isRequired,
  overrideClasses: PropTypes.object,
};

export default Index;
