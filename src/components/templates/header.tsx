// LIBRARIES
import React from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

// COMPONENTS
import NeffreyLogo from "components/svgs/neffreyLogo";

// FC
const Header = () => {
  const { data: session, status } = useSession();
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

      {/*** TODO: MENU COMPONENT ***/}
      <div className="flex items-center justify-end gap-5 text-lg text-primary-content">
        <Link href="/chores">chores</Link>
        <Link href="/users">users</Link>
        {status === "authenticated" && session?.user?.id && (
          <button className="btn btn-accent" onClick={() => signIn("google")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
