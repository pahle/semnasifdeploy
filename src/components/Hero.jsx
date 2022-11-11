import styles from "../style";
import { upn, robot3 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="beranda"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[10px] px-4 bg-gray-gradient rounded-[10px] mb-2">
        <img
          src={upn}
          alt="upn"
          className="md:w-[40px] md:h-[40px] w-[30px] h-[30px] my-1"
        />

        <p className="font-poppins font-normal text-white md:text-[18px] text-[12px] ml-2">
          <span className="">
            Universitas Pembangunan Nasional "Veteran"
          </span>{" "}
          <span className="">Yogyakarta</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          SEMINAR NASIONAL{" "}
          <br className="sm:block hidden" />
          <span className="text-gradient">INFORMATIKA</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-primary ss:leading-[100px] leading-[75px] w-full">
        2022
      </h1>
      <p
        className={`font-poppins font-normal text-justify text-primary text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Illum molestiae qui hic ratione iusto magni
        beatae repellendus quod repellat accusamus sit sequi
        quis, tempore perspiciatis et commodi delectus cum
        aspernatur.
      </p>
    </div>
    <div
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <img
        src={robot3}
        alt="robot arm"
        className="w-[90%] h-[85%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-40 blue__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 yellow__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
