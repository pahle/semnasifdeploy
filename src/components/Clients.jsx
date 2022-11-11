import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} mb-10`}>
    <div
      className={`${styles.flexCenter} flex-wrap w-full`}
    >
      {clients.map((clients) => (
        <div
          key={clients.id}
          className={`flex-1 ${styles.flexCenter} md:min-w-[192px] min-w-[150px] py-10`}
        >
          <img
            src={clients.logo}
            alt="clients"
            className="sm:w[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
