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
      {/* Toast Section */}
      <div className="w-full ">
        {showElement && (
          <div>
            <div className="flex p-3 justify-evenly bg-blue">
              <p className="text-white text-[8px] md:text-[9px] lg:text-[14px] font-SGsemibold ">
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit
                consectetur ipsum ipsum dolor sit consectetur ipsum dolor.
              </p>
              <button onClick={handleClick} className="text-xl md:text-2xl ">
                <AiOutlineClose />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Toast Section End */}

      {/* Nav Section */}
      {/* Nav Section End */}
    </>
  );
};

export default Toast;
