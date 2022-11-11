import React from "react";

const Button = ({ styles, link, text }) => {
  return (
    <a href={link}>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md ${styles} rounded-[10px]`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
