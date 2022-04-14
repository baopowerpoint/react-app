import React from "react";
import { BiRocket } from "react-icons/bi";

const Button1 = () => {
  return (
    <div className="flex justify-center mt-10">
      <button className="bg-transparent text-tid px-8 py-3 border-[1px] border-tid rounded-full font-700 flex items-center text-2 hover:border-0 hover:bg-bil hover:text-til ">
        <BiRocket />
        <span className="ml-2">Explore</span>
      </button>
    </div>
  );
};

export default Button1;
