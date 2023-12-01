import { PropTypes } from 'prop-types';

const OverrideClasses = {
  override: '',
  extends: '',
};

const Index = ({ heading, overrideClasses = OverrideClasses }) => {
  return (
    <div className='flex justify-between items-center'>
      <hr className='w-[56px] md:w-[157px] border border-black' />
      <h1
        className={
          overrideClasses.override
            ? overrideClasses.override
            : `text-5xl/2 sm:text-3xl md:text-5xl leading-14/2 sm:leading-10 md:leading-12 font-SGbold w-[200px] md:w-[333px] text-center text-[#000000] ${overrideClasses.extends}`
        }
      >
        {heading}
      </h1>
      <hr className='w-[56px] sm-[w-79px] md:w-[157px] border border-black' />
    </div>
  );
};

Index.propTypes = {
  heading: PropTypes.any.isRequired,
  overrideClasses: PropTypes.object,
};

export default Index;
