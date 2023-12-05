import { useTranslation } from "react-i18next";
import aboutImg1 from "../../assets/Images/Big Shoes - Discussion (1) 1.webp";
import aboutImg2 from "../../assets/Images/Big Shoes - Discussion (1) 2.webp";
const About = () => {
  const { t } = useTranslation();
  const contentHTML = t("about.part1");
  const contentHTML2 = t("about.part2");
  return (
    <>
      <div className="my-20 mb-6 " id="about us">
        <div className="flex items-center justify-center gap-3 mt-20 text-4xl text-center lg:gap-14 md:gap-8">
          <hr className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black  h-0 rounded-sm" />

          <div className=" lg:w-80 md:w-64">
            <p className=" text-lg lg:text-[2rem] md:text-[1rem] font-SGsemibold">
              {t("about.MakingInvoicing")}
              <br />
              {t("about.Effortless")}
            </p>
            <h1 className="text-xs text-title font-SGregular lg:text-xl md:text-lg">
              {t("about.Title")}
            </h1>
          </div>

          <hr className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black  h-0 rounded-sm" />
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col items-center justify-center w-[300px] lg:w-[900px] md:w-auto  lg:flex-row md:flex-row ">
            <div className="w-auto p-5 lg:w-[600px] md:w-[400px]">
              {" "}
              <h1 className="text-xl font-SGsemibold md:text-3xl sm:text-2xl">
                At Pyaysar
              </h1>
              <p
                className="mt-6 text-xs font-SGsemibold lg:text-lg md:text-lg"
                dangerouslySetInnerHTML={{ __html: contentHTML }}
              ></p>
            </div>

            <div className="flex self-end">
              <img src={aboutImg1} alt="" className=" w-28 lg:w-auto md:w-44" />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col w-[300px] lg:w-[900px] md:w-auto items-center justify-center p-2 mt-0 lg:flex-row md:flex-row lg:mt-9 md:mt:6">
            <div className="flex self-end">
              <img
                src={aboutImg2}
                alt=""
                className="hidden w-40 lg:block md:inline lg:w-auto md:w-48"
              />
            </div>

            <div className="flex-col justify-center w-[300px] lg:w-[900px] md:w-[400px]">
              {" "}
              <h1 className="text-xl font-SGsemibold md:text-3xl sm:text-2xl">
                Our Mission: <br className="lg:hidden md:hidden " /> Making
                Invoicing Effortless
              </h1>
              <p
                className="mt-6 text-xs font-SGsemibold lg:text-lg md:text-lg"
                dangerouslySetInnerHTML={{ __html: contentHTML2 }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
