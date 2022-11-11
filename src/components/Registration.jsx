import styles from "../style";
import Button from "./Button";

const Registration = () => (
  <section
    id="registrasi"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[65%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        Informasi Pendaftaran{" "}
        <br className="sm:block hidden" /> SEMNASIF 2022
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p
          className={`${styles.paragraph} text-left`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sint deleniti cupiditate rem nobis hic?
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center md:justify-around w-full feedback-container relative z-[1]">
      <div className="flex md:justify-between justify-center flex-col px-10 py-12 rounded-[20px] md:min-w-[450px] min-w-[370px] my-5 bg-black-gradient-2">
        <div>
          <h4 className="font-poppins font-semibold text-[20px] text-white">
            Registrasi Pemakalah
          </h4>
          <div>
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Mahasiswa
            </p>
            <ul>
              <li className="font-poppins font-normal text-dimWhite">
                Tanpa Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  GRATIS
                </span>
              </li>
              <li className="font-poppins font-normal text-dimWhite">
                Dengan Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 250,000,-
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Umum
            </p>
            <ul>
              <li className="font-poppins font-normal text-dimWhite">
                Tanpa Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 100,000,-
                </span>
              </li>
              <li className="font-poppins font-normal text-dimWhite">
                Dengan Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 350,000,-
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <h4 className="font-poppins font-semibold text-[20px] text-white">
            Bundling
          </h4>
          <div>
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Mahasiswa (10 Paper)
            </p>
            <ul>
              <li className="font-poppins font-normal text-dimWhite">
                Tanpa Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  GRATIS
                </span>
              </li>
              <li className="font-poppins font-normal text-dimWhite">
                Dengan Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 250,000,-
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-poppins font-semibold text-[18px] my-2 text-gradient">
              Umum (5 Paper)
            </p>
            <ul>
              <li className="font-poppins font-normal text-dimWhite">
                Tanpa Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 100,000,-
                </span>
              </li>
              <li className="font-poppins font-normal text-dimWhite">
                Dengan Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 350,000,-
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button styles='mt-10' link={'//www.google.com'} text={'Registrasi'}/>
        </div>
      </div>
      <div className="flex md:justify-between justify-center flex-col px-10 py-12 rounded-[20px] md:min-w-[450px] min-w-[370px] my-5 bg-black-gradient-2 border-2">
        <div>
          <h4 className="font-poppins font-semibold text-[20px] text-white">
            Registrasi Non Pemakalah
          </h4>
          <div className="my-2">
            <ul>
              <li className="font-poppins font-normal text-dimWhite">
                Tanpa Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  GRATIS
                </span>
              </li>
              <li className="font-poppins font-normal text-dimWhite">
                Dengan Prosiding Cetak :{" "}
                <span className="font-semibold text-gradient">
                  Rp. 250,000,-
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button styles='mt-10' link={'//www.google.com'} text={'Registrasi'}/>
        </div>
      </div>
    </div>
  </section>
);

export default Registration;
