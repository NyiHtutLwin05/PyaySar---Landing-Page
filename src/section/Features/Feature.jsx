import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import FeatureTablet from "./Feature.tablet";
import { Box, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useState } from "react";
export const listBox = [
  "PDF Generation",
  "Invoice Generation",
  "Dashboard Overview",
  "Payment Tracking",
  "Automated Calculation",
  "Customization",
  "Client Management",
  "Product and Service Catalog",
  "Finical Report",
];
const Feature = () => {
  const isMobileViewOrTablet = useBreakpointValue({
    base: true,
    lg: false,
    md: true,
  });
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    const newIndex = startIndex + itemsPerPage;
    setStartIndex(Math.min(newIndex, listBox.length - itemsPerPage));
  };

  const handlePrev = () => {
    const newIndex = startIndex - itemsPerPage;
    setStartIndex(Math.max(newIndex, 0));
  };
  return (
    <>
      {/* Tablet View  */}

      <div className="hidden md:inline lg:hidden">
        <div className="flex items-center justify-center gap-3 mt-20 text-4xl text-center lg:gap-14 md:gap-8">
          <div className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black border h-0 rounded-sm"></div>

          <div className="  text-lg lg:text-[2rem] md:text-[1rem] font-SGsemibold">
            Why <span className=" text-blue">Choose</span> Pyaysar <br />{" "}
            Ivoicing For Your Business
            <h1 className="text-xs text-title font-SGregular lg:text-xl md:text-2xl">
              Our Feature
            </h1>
          </div>

          <div className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] border-black border h-0 rounded-sm"></div>
        </div>
        <Flex align="center" justify="center" mt="2rem" gap="3">
          {listBox
            .slice(startIndex, startIndex + itemsPerPage)
            .map((item, index) => (
              <div
                key={index}
                className={`shadow-xl flex p-2 pr-3   justify-evenly w-boxfsize  border-black border rounded-0.625  h-b1`}
              >
                <div className="">
                  <p
                    className={` font-spacegrockbold font-medium font-lg tracking-wide h-20 align-middle flex items-center `}
                  >
                    {item}
                  </p>
                </div>
                <button className="self-end h-10 mt-auto mb-2 text-xl text-white bg-gray-800 btn w-14 rounded-xl font-spacrgrockregular">
                  <AiOutlineArrowRight />
                </button>
              </div>
            ))}
        </Flex>

        <div className="flex justify-center gap-4 mt-5">
          <AiOutlineLeft
            className={`cursor-pointer select-none text-3xl ${
              startIndex <= 0
                ? "text-gray-400 cursor-not-allowed"
                : " text-black"
            } rounded-xl `}
            onClick={handlePrev}
            disabled={startIndex <= 0}
          />
          <AiOutlineRight
            className={`cursor-pointer select-none text-3xl ${
              startIndex + itemsPerPage >= listBox.length
                ? "text-gray-400 cursor-not-allowed"
                : "text-black"
            } rounded-xl `}
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= listBox.length}
          />
        </div>
      </div>

      {/* Tablet view End */}
      <Box id="feature">
        {isMobileViewOrTablet ? (
          <FeatureTablet />
        ) : (
          <div className="">
            <div className="flex items-center justify-center gap-3 mt-20 text-4xl text-center lg:gap-14 md:gap-8">
              <div className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black border h-0 rounded-sm"></div>

              <div className="  text-lg lg:text-[2rem] md:text-[1rem] font-SGsemibold">
                Why <span className=" text-blue">Choose</span> Pyaysar <br />{" "}
                Ivoicing For Your Business
                <h1 className="text-xs text-title font-SGregular lg:text-xl md:text-2xl">
                  Our Feature
                </h1>
              </div>

              <div className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] border-black border h-0 rounded-sm"></div>
            </div>
            <div className="grid justify-items-center ">
              <div className=" w-[1150px] grid grid-cols-3 mt-16 mb-4 justify-items-center gap-y-7">
                {listBox.map((i, id) => {
                  let selfClass;
                  if ([0, 2].includes(id)) {
                    selfClass = "self-end";
                  } else if ([3, 5].includes(id)) {
                    selfClass = "self-center";
                  } else if ([6, 8].includes(id)) {
                    selfClass = "self-start";
                  }
                  return (
                    <div
                      key={id}
                      className={` border border-black rounded-xl flex  items-center shadow-lg   w-[16rem] ${selfClass} ${
                        [1, 4, 7].includes(id) ? "h-[13.8rem]" : "h-[12.5rem]"
                      }`}
                    >
                      <div className=" w-[15rem] flex flex-col gap-y-5">
                        <p className="flex w-64 h-20 pl-4 mt-2 text-2xl font-medium tracking-wider font-SGsemibold">
                          {i}
                        </p>
                        <div className="flex justify-end ">
                          <Button
                            colorScheme="grey"
                            className="flex w-12 h-10 mb-2 text-xl text-white bg-black rounded-xl font-SGregular"
                          >
                            {" "}
                            <AiOutlineArrowRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Box>
    </>
  );
};

export default Feature;
