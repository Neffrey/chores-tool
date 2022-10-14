// LIBRARIES
import { signIn } from "next-auth/react";
import Link from "next/link";

const AccountUnauthed = () => {
  return (
    <div className="text-md pt-4">
      {"Please "}
      <span
        className="cursor-pointer text-primary underline"
        onClick={() => signIn("google")}
      >
        Login
      </span>
      {" to access your account"}
    </div>
  );
};
export default AccountUnauthed;
