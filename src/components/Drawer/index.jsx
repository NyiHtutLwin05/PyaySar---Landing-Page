// From Drawer UI
import PropTypes from "prop-types";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "../../constants/Icons";

import { useTranslation } from "react-i18next";


const DrawerUI = ({
  onOpenProp,
  placementProp,
  onCloseProp,
  isOpenProp,
  btnRefProp,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("left");

  const { t } = useTranslation();


  return (
    <>
      <div onClick={onOpen} ref={btnRef} className="text-3xl cursor-pointer ">
        <HamburgerIcon />
      </div>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className=" font-SGsemibold">
            Pyay Sar
          </DrawerHeader>
          <DrawerBody className="flex flex-col gap-2 mt-4 font-SGsemibold">

            <Link href="">{t("nav.navitem.home")}</Link> <br />
            <Link href="">{t("nav.navitem.feature")}</Link>

            <Link>Home</Link> <br />
            <Link>Feature</Link>

            <br />
            <Link>{t("nav.navitem.about")}</Link>
            <br />
            <Link>{t("nav.navitem.contact")}</Link>
            <br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

DrawerUI.propTypes = {
  onOpenProp: PropTypes.func.isRequired,
  placementProp: PropTypes.string,
  onCloseProp: PropTypes.func, // Add appropriate PropTypes validation
  isOpenProp: PropTypes.bool.isRequired,
  btnRefProp: PropTypes.object.isRequired,
};

export default DrawerUI;
