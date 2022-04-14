import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";

const Button2 = () => {
  return (
    <div className="ml-10 flex justify-center mt-10">
      <button className="bg-bil text-til px-8 py-3 border-[1px] border-tid rounded-full font-700 flex items-center text-2 hover:border-1 hover:bg-bid hover:text-tid ">
        <AiOutlineFolderAdd className="text-primary" />
        <span className="ml-2">Create</span>
      </button>
    </div>
  );
};

export default Button2;
