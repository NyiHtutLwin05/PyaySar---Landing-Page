import { useState } from 'react';
import { MinusIcon, PlusIcon } from '../../constants/Icons';
import PropTypes from 'prop-types';
import './style.css';

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => (
  <div
    className={`mb-2 shadow-2 rounded-2xl md:rounded-3xl p-5 md:p-8 ${
      isOpen ? 'border border-gray' : ''
    }`}
  >
    <div
      className='flex items-center justify-between cursor-pointer'
      onClick={() => onToggle(id)}
    >
      <div className='text-sm md:text-xl leading-6 md:leading-9 text-neutral-800 font-satoshi font-medium'>
        {title}
      </div>
      <div
        className={`w-[23.6px] md:w-[37px] h-[29px] md:h-[45px] rounded-sm md:rounded-md flex justify-center items-center transition-all duration-300 p-1 ${
          isOpen ? 'bg-black' : 'border border-gray'
        }`}
      >
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
    </div>

    <div
      className={`text-sm md:text-lg leading-5 md:leading-7 text-neutral-600 transition-all duration-500 overflow-hidden font-satoshi ${
        isOpen ? 'w-full h-auto mt-8' : 'h-0'
      }`}
    >
      {content}
    </div>
  </div>
);

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Index = ({ items = [] }) => {
  const [openItemId, setOpenItemId] = useState(1);

  const handleToggle = (itemId) => {
    setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          onToggle={handleToggle}
          isOpen={item.id === openItemId}
          {...item}
        />
      ))}
    </>
  );
};

Index.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Index;
