import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Link, Button } from "@chakra-ui/react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { GlobalIconLg } from "../../constants/Icons";
import DrawerUI from "../Drawer";
import HeroTablet from "../../section/Hero/Hero.tablet";

const Toast = () => {
  // The 'MenuItems' array contains the labels for the navigation menu.
  const MenuItems = ["Home", "Feature", "About Us", "Contact"];
  // ----

  // allows users to hide the Toast by updating the state and storing
  const [showElement, setShowElement] = useState(true);
  const handleClickToast = () => {
    localStorage.setItem("hideElement", "true");
    setShowElement(false);
  };
  // ----

  // If the flag is set to 'true', it ensures that the Toast element is initially shown.
  useEffect(() => {
    const hideElement = localStorage.getItem("hideElement") === "true";
    if (hideElement) {
      setShowElement(true);
    }
  }, []);
  // ----

  // This state is used to dynamically toggle the arrow direction
  const [isArrowDown, setArrow] = useState(true);
  const handleClick = () => {
    setArrow((p) => !p);
  };
  // ----

  // The 'handleScroll' function facilitates smooth scrolling to a specified section.
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  // ----

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
              <button
                onClick={handleClickToast}
                className="text-xl md:text-2xl "
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Toast Section End */}

      {/* Nav Section */}
      <div className="block  lg:hidden">
        <HeroTablet />
      </div>
      <div className="py-2 mx-[30px]  lg:flex justify-center hidden ">
        <div className="flex items-center justify-around text-center w-[80%] ">
          <div className="flex items-center gap-10">
            <div className="w-12 h-12 border border-black rounded-full"></div>
            {MenuItems.map((i, id) => (
              <li key={id} className="list-none">
                <ul
                  key={id}
                  className="cursor-pointer select-none font-SGmedium md:hidden lg:block"
                >
                  <Link
                    as="button"
                    onClick={() => handleScroll(i.toLowerCase())}
                  >
                    {" "}
                    {i}
                  </Link>
                </ul>
              </li>
            ))}
          </div>
          <div className="flex items-center gap-5 ">
            <div className="flex items-center gap-2 text-center align-sub">
              <GlobalIconLg />
              <p className="select-none font-SGregular">English</p>
              {isArrowDown ? (
                <RiArrowDownSLine
                  className={`cursor-pointer text-2xl  transition-transform duration-300 transform ease-in ${
                    isArrowDown ? "rotate-0" : "rotate-180"
                  }`}
                  onClick={handleClick}
                />
              ) : (
                <RiArrowUpSLine
                  className={`cursor-pointer text-2xl transition-transform duration-300 transform ease-in ${
                    isArrowDown ? "rotate-180" : "rotate-0"
                  } `}
                  onClick={handleClick}
                />
              )}
            </div>
            <Button className="w-24 h-10 text-white bg-black rounded-md font-SGsemibold lg:flex md:hidden sm:hidden">
              Login
            </Button>
            <div className="lg:hidden">
              <DrawerUI />
            </div>
          </div>
        </div>
      </div>

      {/* Nav Section End */}
    </>
  );
};

export default Toast;
