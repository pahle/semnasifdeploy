import React from "react";
import { useTimer } from "react-timer-hook";
import styles from "../style";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-16 rounded-xl`}
    >
      <div
        className={`flex-1 flex justify-center md:justify-center items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[50px] text-[30px] xs:leading-[53px] leading-[43px] text-black">
          {days}
        </h4>
        <div className="font-poppins font-normal xs:text-[30px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          <p className={`${days < 2 ? "hidden" : "block"}`}>
            Days
          </p>
          <p
            className={`${days >= 2 ? "hidden" : "block"}`}
          >
            Day
          </p>
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center md:justify-center items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[50px] text-[30px] xs:leading-[53px] leading-[43px] text-black">
          {hours}
        </h4>
        <div className="font-poppins font-normal xs:text-[30px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          <p
            className={`${hours < 2 ? "hidden" : "block"}`}
          >
            Hours
          </p>
          <p
            className={`${hours >= 2 ? "hidden" : "block"}`}
          >
            Hour
          </p>
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center md:justify-center items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[50px] text-[30px] xs:leading-[53px] leading-[43px] text-black">
          {minutes}
        </h4>
        <div className="font-poppins font-normal xs:text-[30px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          <p
            className={`${
              minutes < 2 ? "hidden" : "block"
            }`}
          >
            Minutes
          </p>
          <p
            className={`${
              minutes >= 2 ? "hidden" : "block"
            }`}
          >
            Minute
          </p>
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center md:justify-center items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[50px] text-[30px] xs:leading-[53px] leading-[43px] text-black">
          {seconds}
        </h4>

        <div className="font-poppins font-normal xs:text-[30px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          <p
            className={`${
              seconds < 2 ? "hidden" : "block"
            }`}
          >
            Seconds
          </p>
          <p
            className={`${
              seconds >= 2 ? "hidden" : "block"
            }`}
          >
            Second
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const time = new Date("2022-12-17");
  time.setSeconds(time.getSeconds()); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
