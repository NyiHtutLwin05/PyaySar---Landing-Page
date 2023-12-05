import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import DrawerUI from "../../components/Drawer";
import { GlobalIconLg } from "../../constants/Icons";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
const HeroTablet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("left");
  const [isArrowDown, setArrow] = useState(true);

  // const handleClick = () => {
  //   setArrow((p) => !p);
  // };
  const { t } = useTranslation();
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-around mt-4 ">
          <div className="w-8 h-8 border border-black rounded-full"></div>
          <div className="flex gap-3">
            <div className="flex ">
              <div className="flex items-center gap-[8px] text-center align-sub">
                <div className="flex gap-2">
                  <GlobalIconLg />
                  <select
                    className="text-xs font-medium leading-7 md:text-sm"
                    onChange={handleLanguageChange}
                  >
                    <option value="en">{t("nav.language.english")}</option>
                    <option value="mm">{t("nav.language.myanmar")}</option>
                  </select>
                </div>
                {/* <div className="">
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
                </div> */}
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
