// LIBRARIES
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

// COMPONENTS
import { useUserDataStore } from "components/stores/userDataStore";
import NeffreyLogo from "components/svgs/neffreyLogo";
import IfAuth from "components/hooks/ifAuth";

// FC
const Header = () => {
  const { user } = useUserDataStore();
  return (
    <div
      // Row Container
      className="flex w-full items-center justify-between border-b-4 border-solid border-neutral bg-gradient-to-r from-secondary-focus via-primary to-success px-5 py-2 shadow-xl"
    >
      <Link href="/" passHref>
        <div
          // Logo Container
          className="h-12 w-12 cursor-pointer fill-white"
        >
          <NeffreyLogo />
        </div>
      </Link>

      <div
        // MENU
        className="flex items-center justify-end gap-5"
      >
        <Link href={"/"} passHref>
          <div className="cursor-pointer text-lg font-semibold uppercase tracking-wider text-primary-content">
            Chores
          </div>
        </Link>
        <Link href={"/stats"} passHref>
          <div className="cursor-pointer text-lg font-semibold uppercase tracking-wider text-primary-content">
            Stats
          </div>
        </Link>
        {
          // ACCOUNT / LOGIN BUTTON
          IfAuth(
            <Link href="/account" passHref>
              <div className="cursor-pointer font-semibold uppercase tracking-wider text-primary-content">
                {user?.name ? user.name : "Account"}
              </div>
            </Link>,
            <button
              className="btn btn-accent text-lg font-semibold uppercase tracking-wider text-accent-content "
              onClick={() => signIn("google")}
            >
              Login
            </button>
          )
        }
      </div>
    </div>
  );
};
export default Header;
