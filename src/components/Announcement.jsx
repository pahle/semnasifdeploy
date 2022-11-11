import styles from "../style";
import Button from "./Button";

const Announcement = () => (
  <section
    id="pengumuman"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2
        className={`font-poppins font-semibold xs:text-[35px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full text-white text-center`}
      >
        Pengumuman
      </h2>
      <p
        className={`${styles.paragraph} text-white text-justify text-[14px] sm:text-[18px] sm:px-0 px-5 sm:pb-0 pb-4 sm:mt-5 mt-0  `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe sequi dolorum atque excepturi modi,
        adipisci ratione fugit expedita. Consectetur
        praesentium eum ratione odio nulla adipisci incidunt
        molestiae sequi neque nesciunt.
      </p>
    </div>
  </section>
);

export default Announcement;
