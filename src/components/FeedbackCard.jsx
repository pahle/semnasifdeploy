import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex md:justify-between justify-center flex-col px-10 py-12 rounded-[20px] md:max-w-[370px] max-w-[670px] md:mr-10 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
      <img
        src={img}
        alt={name}
        className="w-[100px] h-[100px] rounded-full"
      />
      <div className="flex flex-col ml-4 mt-5">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
          {name}
        </h4>
        <p className="font-poppins font-semibold text-[16px] leading-[24px] text-primary">
          {title}
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32px] my-10">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
