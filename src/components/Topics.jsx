import { card } from "../assets";
import styles, { layout } from "../style";

const Topics = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Topik - Topik<br className="sm:block hidden" />{" "}
        SEMNASIF 2022
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Architecto nulla error ab necessitatibus
        doloremque voluptatibus saepe ullam facere fuga
        consectetur inventore, iste ea provident et. Dolorum
        temporibus dolore corporis ipsa!
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      <img
        src={card}
        alt="card"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default Topics;
