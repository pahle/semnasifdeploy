import styles, { layout } from "../style";
import { semnasif1 } from "../assets";

const Welcome = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Selamat Datang di{" "}
          <br className="sm:block hidden" /> SEMNASIF 2022
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Architecto nulla error ab
          necessitatibus doloremque voluptatibus saepe ullam
          facere fuga consectetur inventore, iste ea
          provident et. Dolorum temporibus dolore corporis
          ipsa!
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={semnasif1}
          alt="semnasif"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient" />
        <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full yellow__gradient" />
      </div>
    </section>
  );
};

export default Welcome;
