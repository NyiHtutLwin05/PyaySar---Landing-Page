import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Toast = () => {
  const [showElement, setShowElement] = useState(true);
  const handleClick = () => {
    localStorage.setItem("hideElement", "true");
    setShowElement(false);
  };
  useEffect(() => {
    const hideElement = localStorage.getItem("hideElement") === "true";
    if (hideElement) {
      setShowElement(true);
    }
  }, []);
  return (
    <>
      {showElement && (
        <div>
          <div className="flex justify-around p-2 bg-Primary">
            <p className=" text-white font-spacrgrockregular text-[3px] lg:text-lg md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo
              quas, veritatis impedi
            </p>
            <button onClick={handleClick} className="text-2xl ">
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
