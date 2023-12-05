import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
<<<<<<< HEAD
// import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import DrawerUI from "../../components/Drawer";
import { GlobalIconLg } from "../../constants/Icons";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
=======
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import DrawerUI from "../../components/Drawer";
import { GlobalIconLg } from "../../constants/Icons";

>>>>>>> d2d6a874f0e7cecd8f0eda606b8da7a5bca185ed
const HeroTablet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("left");
<<<<<<< HEAD
  // const [isArrowDown, setArrow] = useState(true);

  // const handleClick = () => {
  //   setArrow((p) => !p);
  // };
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  const { t } = useTranslation();
=======
  const [isArrowDown, setArrow] = useState(true);

  const handleClick = () => {
    setArrow((p) => !p);
  };
>>>>>>> d2d6a874f0e7cecd8f0eda606b8da7a5bca185ed
  return (
    <>
      <div>
        <div className="flex items-center justify-around mt-4 ">
          <div className="w-8 h-8 border border-black rounded-full"></div>
          <div className="flex gap-3">
            <div className="flex ">
              <div className="flex items-center gap-[8px] text-center align-sub">
<<<<<<< HEAD
                <div className="flex gap-2">
                  <GlobalIconLg />
                  <select
                    className="text-xs font-medium leading-7 md:text-sm"
                    onClick={changeLanguage}
                  >
                    <option value="en">{t("nav.language.english")}</option>
                    <option value="mm">{t("nav.language.myanmar")}</option>
                  </select>
                </div>
                {/* <div className="">
=======
                <div className="">
>>>>>>> d2d6a874f0e7cecd8f0eda606b8da7a5bca185ed
                  <GlobalIconLg />
                </div>
                <div>
                  <p className="select-none font-SGsemibold">English</p>
                </div>
                <div>
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
<<<<<<< HEAD
                </div> */}
=======
                </div>
>>>>>>> d2d6a874f0e7cecd8f0eda606b8da7a5bca185ed
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
