import { useState } from 'react';
import { MinusIcon, PlusIcon } from '../../constants/Icons';
import PropTypes from 'prop-types';
import './style.css';

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => (
  <div
    className={`flex flex-col justify-center mb-2 shadow-2 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray transition-max-h duration-300 ${
      isOpen
        ? ' border-opacity-100 h-[230px] sm:h-[300px] lg:h-[200px]'
        : 'border-opacity-0 h-[75px] md:h-[100px]'
    }`}
  >
    <div
      className='flex items-center justify-between cursor-pointer'
      onClick={() => onToggle(id)}
    >
      <div className='text-sm sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-9 text-neutral-800 font-SGmedium'>
        {title}
      </div>
      <div
        className={`w-[23.6px] sm:w-[37px] h-[29px] sm:h-[45px] rounded-sm sm:rounded-md flex justify-center items-center p-1 ${
          isOpen ? 'bg-black' : 'border border-gray'
        }`}
      >
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
    </div>

    <div
      className={`text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-7 text-neutral-600 overflow-hidden font-SGregular ${
        isOpen ? 'w-full h-auto mt-5 md:mt-8 me-8' : 'hidden'
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
      {items?.map((item) => (
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
