// LIBRARIES
import React from "react";
// import { FaBars } from "react-icons/fa";

// COMPONENTS
import NeffreyLogo from "components/atoms/neffreyLogo";
import AccountBtn from "components/molecules/accountBtn";

// FC
const Header = () => {
  return (
    <div
      // Row Container
      className="flex w-full items-center justify-between border-b-4 border-solid border-neutral bg-gradient-to-r from-secondary-focus via-primary to-success px-5 py-2 shadow-xl"
    >
      <div 
      // Logo Container
      className="h-12 w-12 cursor-pointer fill-white">
        <NeffreyLogo />
      </div>

      {/*** TODO: MENU COMPONENT ***/}

      <div className="h-12 w-12 fill-white">
        <AccountBtn />
      </div>
    </div>
  );
};
export default Header;
