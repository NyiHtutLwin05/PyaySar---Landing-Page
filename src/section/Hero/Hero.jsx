import Toast from "../../components/Toast";
import HeroImg from "../../assets/Images/HeroImage.webp";
import Button from "../../components/Button/index";
import { ArrowIcon, ArrowIconSmall } from "../../constants/Icons";

// Style Classes
const btnOverrideClasses = {
  extends:
    "w-[96px] h-[35px] md:w-[197px] md:h-[50px] gap-2 md:gap-5 rounded-lg md:rounded-xl text-sm md:text-lg",
};

const btnWhiteOverrideClasses = {
  override:
    "flex md:hidden justify-center items-center w-[96px] h-[35px] gap-2 rounded-lg bg-white text-black text-sm border border-gray px-5 py-[15px]",
};
// ----
const Hero = () => {
  return (
    <>
      {/* Calling the Toast component from the Toast file for a delightful user experience */}
      <div>
        <Toast />
      </div>
      {/* Toast End */}

      <section className="flex flex-col items-center my-20 ">
        <h1 className="text-3xl md:text-5xl text-[#000000] leading-10 md:leading-14 font-SGsemibold text-center mb-8 md:mb-12 w-[359px] md:w-[864px]">
          <span className="text-blue">Stop Wasting</span>
          <br /> Your Time with Using Paper Invoice
        </h1>
        <div className="relative mb-8 md:mb-10">
          <img
            src={HeroImg}
            alt="Hero vector image"
            className=" bottom-2 right-2 w-[205px] h-[156px] md:w-[355.93px] md:h-[262.81px]"
          />
        </div>
        <p className="w-[300px] md:w-[600px] text-sm lg:text-xl md:text-lg leading-5 md:leading-7 font-medium text-[#222222] text-center mb-5">
          The invoice software improves speed and professionalism by allowing
          for branded invoice production and customization.
        </p>
        <div className="flex gap-5">
          <Button label="Login" overrideClasses={btnWhiteOverrideClasses} />
          <Button label="Invoice" overrideClasses={btnOverrideClasses}>
            <span className="hidden md:inline">
              <ArrowIcon />
            </span>
            <span className="md:hidden">
              <ArrowIconSmall />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
