import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

import { BiWorld } from "react-icons/bi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import DrawerUI from "./Drawer";
const HeroTablet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("left");
  const [isArrowDown, setArrow] = useState(true);

  const handleClick = () => {
    setArrow((p) => !p);
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-around mt-4 ">
          <div className="w-12 h-12 border-black rounded-full  border-1"></div>
          <div className="flex gap-6 ">
            <div className="flex gap-4 ">
              <div className="flex items-center gap-2 text-center  align-sub">
                <BiWorld className="text-xl " />
                <p className="select-none  font-spacegrocksemibold">English</p>
                {isArrowDown ? (
                  <RiArrowDownSLine
                    className={`cursor-pointer text-xl  transition-transform duration-300 transform ease-in ${
                      isArrowDown ? "rotate-0" : "rotate-180"
                    }`}
                    onClick={handleClick}
                  />
                ) : (
                  <RiArrowUpSLine
                    className={`cursor-pointer text-xl transition-transform duration-300 transform ease-in ${
                      isArrowDown ? "rotate-180" : "rotate-0"
                    } `}
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>

            <DrawerUI
              onOpenProp={onOpen}
              placementProp={placement}
              onCloseProp={onClose}
              isOpenProp={isOpen}
              btnRefProp={btnRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTablet;
