import styles from "../style";
import { Chrono } from "react-chrono";
import { timeline } from "../constants";

const Timeline = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        Timeline Acara <br className="sm:block hidden" />{" "}
        SEMNASIF 2022
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left`}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Corporis, excepturi? Inventore
          dignissimos quos voluptatem doloribus?
        </p>
      </div>
    </div>
    <div>
     timeline
    </div>
  </section>
);

export default Timeline;
