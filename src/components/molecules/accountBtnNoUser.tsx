// LIBRARIES
import React from "react";
import Link from "next/link";

// COMPONENTS
import ResponsiveImage from "components/atoms/responsiveImage";

// FC
const AccountBtnNoUser = () => {
  return (
    <div className="flex w-full justify-end items-center">
      <div className="flex justify-center text-base text-base-100 whitespace-nowrap">
        <Link className="cursor-pointer" href="/account">Login</Link>
        <div className="p-1" />
        <span>or</span>
        <div className="p-1" />
        <Link className="cursor-pointer" href="/account">Sign Up</Link>
      </div>
      <Link href="/account" passHref>
        <ResponsiveImage
          aspectRatio="2/3"
          alt="Neffrey Spinning Poi at Konnexion festival Idaho"
          className="max-w-xs overflow-hidden rounded-lg bg-center shadow-xl lg:col-start-2 lg:row-start-1 lg:max-w-xs"
          src="/konnexion.jpg"
          unit="vw"
          width={20}
        />
      </Link>
    </div>
  );
};
export default AccountBtnNoUser;
