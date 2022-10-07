// LIBRARIES
import React from "react";
import Link from "next/link";

// CONTEXTS
import { AuthStore } from "components/contexts/authStore";

// COMPONENTS
import ResponsiveImage from "components/atoms/responsiveImage";

// FC
const HeaderAccountUser = () => {
  const userName = AuthStore((state) => state.userName);
  return (
    <div className="flex w-full justify-end">
      <Link href="/account" passHref>
        <div className="text-semibold cursor-pointer text-base text-base-100">
          {`${userName || "Neffrey"}'s Account`}
        </div>
      </Link>
      <div className="h-5 w-5">
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
    </div>
  );
};
export default HeaderAccountUser;
