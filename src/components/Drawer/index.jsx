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
import { HamburgerIcon } from "@chakra-ui/icons";

const DrawerUI = ({
  onOpenProp,
  placementProp = "left",
  onCloseProp,
  isOpenProp,
  btnRefProp,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon
        onClick={onOpen}
        ref={btnRef}
        className="text-3xl cursor-pointer "
      />

      <Drawer placement={placementProp} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            className=" font-spacegrockbold"
          >
            Pyay Sar
          </DrawerHeader>
          <DrawerBody className="flex flex-col gap-2 mt-4 font-spacegrocksemibold">
            <Link>Home</Link> <br />
            <Link>Feature</Link>
            <br />
            <Link>About Us</Link>
            <br />
            <Link>Contact</Link>
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
