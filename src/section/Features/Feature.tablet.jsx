import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { Button, Box } from "@chakra-ui/react";
import { listBox } from "./Feature";

const FeatureTablet = () => {
  const [currentI, setCurrentI] = useState(0);
  const next = () => {
    setCurrentI((next) => (next + 1) % listBox.length);
  };
  const prev = () => {
    setCurrentI((prev) => (prev - 1 + listBox.length) % listBox.length);
  };
  return (
    <>
      {/* Mobile View */}
      <div className="inline md:hidden lg:hidden">
        <div className="flex items-center justify-center gap-3 mt-20 text-4xl text-center lg:gap-14 md:gap-8">
          <hr className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black  h-0 rounded-sm" />

          <div className=" text-sm lg:text-[2rem] md:text-[1rem] font-SGsemibold">
            Why <span className=" text-blue">Choose</span> Pyaysar <br />{" "}
            Ivoicing For Your Business
            <h1 className="text-xs text-title font-SGregular lg:text-xl md:text-2xl">
              Our Feature
            </h1>
          </div>

          <hr className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black  h-0 rounded-sm" />
        </div>
        <Flex align="center" justify="center" mt="2rem">
          <AiOutlineLeft
            className={` ${
              currentI === 0 ? "invisible" : "visible"
            } cursor-pointer select-none text-5xl `}
            onClick={prev}
          />

          {listBox.map((i, id) => (
            <>
              <Flex align="center" key={id}>
                <div
                  key={id}
                  className={`shadow-lg ${
                    id === currentI ? "active" : "hidden"
                  } flex flex-col gap-y-10    w-[13rem]  border-black border rounded-lg  h-[12rem]`}
                >
                  <p className="flex items-center h-20 pl-2 text-xl font-medium tracking-wide align-middle font-SGsemibold">
                    {i}
                  </p>
                  <div className="flex select-none cursor-pointer justify-end w-[11rem] ">
                    <Button
                      colorScheme="grey"
                      className="flex w-12 h-10 mb-2 text-xl text-white bg-black select-none rounded-xl font-SGregular"
                    >
                      {" "}
                      <AiOutlineArrowRight />
                    </Button>
                  </div>
                </div>
              </Flex>
            </>
          ))}
          <AiOutlineRight
            className={`cursor-pointer select-none text-5xl ${
              currentI === listBox.length - 1 ? "invisible" : "visible"
            } `}
            onClick={next}
          />
        </Flex>
      </div>
      {/* Mobile View End */}
    </>
  );
};

export default FeatureTablet;
