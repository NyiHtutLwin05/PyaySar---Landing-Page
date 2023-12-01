import aboutImg1 from "../../assets/Images/Big Shoes - Discussion (1) 1.webp";
import aboutImg2 from "../../assets/Images/Big Shoes - Discussion (1) 2.webp";
const About = () => {
  return (
    <>
      <div className="my-20 mb-6 " id="about us">
        <div className="flex items-center justify-center gap-3 mt-20 text-4xl text-center lg:gap-14 md:gap-8">
          <hr className=" w-[3rem] lg:w-[9.5rem] md:w-[8rem] bg-black border-black  h-0 rounded-sm" />

          <div className=" lg:w-80 md:w-64">
            <p className=" text-lg lg:text-[2rem] md:text-[1rem] font-SGsemibold">
              Making Invoicing
              <br />
              Effortless
            </p>
            <h1 className="text-xs text-title font-SGregular lg:text-xl md:text-lg">
              About Us
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
              <p className="mt-6 text-xs font-SGsemibold lg:text-lg md:text-lg">
                we understand the importance of{" "}
                <span className=" text-blue">efficient</span> and{" "}
                <span className=" text-blue"> hassle-free </span>{" "}
                <span className=" text-blue"> invoicing </span>for your
                business. <br />
                We are dedicated to simplifying your invoicing processes,
                allowing you to focus on what matters most – growing your
                business.
              </p>
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
              <p className="mt-6 text-xs font-SGsemibold lg:text-lg md:text-lg">
                Our mission is to provide you with a{" "}
                <span className=" text-blue">
                  comprehensive and user-friendly{" "}
                </span>{" "}
                invoicing solution. <br /> Whether you&apos; re a{" "}
                <span className=" text-blue">
                  {" "}
                  small business owner, a freelancer
                </span>
                , or part of a larger enterprise, our services are designed to
                meet your unique invoicing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
