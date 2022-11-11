import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Speakers = () => (
  <section
    id="pembicara"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[65%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        Pembicara <br className="sm:block hidden" />{" "}
        SEMNASIF 2022
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p
          className={`${styles.paragraph} text-left`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, excepturi? Inventore dignissimos quos voluptatem doloribus?
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Speakers;
