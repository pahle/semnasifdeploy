import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white text-center sm:text-left text-[35px]`}>Ayo Daftar Sekarang Juga!</h2>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5 text-justify text-[14px]`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Facilis eos, doloribus ducimus placeat
        asperiores vel?
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text={"Get Started"} link={'/'}/>
    </div>
  </section>
);

export default CTA;
