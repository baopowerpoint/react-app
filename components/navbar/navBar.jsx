import React from "react";
import { SiBitcoinsv } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="flex mx-5 border-b-[0.1px] border-bid-2 justify-between items-center">
      <div className="logo  flex items-center p-5">
        <SiBitcoinsv className="text-2 text-bil w-100" />
        <p className="mx-2 text-3 text-tid">Bitcoin</p>
      </div>
      <div className="  ">
        <AiOutlineSearch className="text-3 text-tid" />
      </div>
      <div>
        <AiOutlineMenu className="text-3 text-tid" />
      </div>
    </nav>
  );
};

export default NavBar;
