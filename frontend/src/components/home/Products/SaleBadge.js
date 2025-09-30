import React from "react";

const SaleBadge = ({ text }) => {
  return (
    <div className="bg-red-500 w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-red-700 duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default SaleBadge;