import { PropTypes } from 'prop-types';

const OverrideClasses = {
  override: '',
  extends: '',
};

const Index = ({
  label,
  overrideClasses = OverrideClasses,
  action,
  children,
}) => {
  return (
    <div>
      <button
        className={
          overrideClasses.override
            ? overrideClasses.override
            : `flex justify-center items-center bg-black text-[#FFFFFF] font-medium ${overrideClasses.extends}`
        }
        onClick={action}
      >
        {' '}
        <span>{label}</span>
        {children}
      </button>
    </div>
  );
};

Index.propTypes = {
  label: PropTypes.any.isRequired,
  overrideClasses: PropTypes.object,
  action: PropTypes.func,
  children: PropTypes.any,
};

export default Index;
