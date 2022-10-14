// LIBRARIES
import { useSession } from "next-auth/react";

// FC
const AuthedIfElse = (
  authed: React.ReactNode,
  unauthed: React.ReactNode | null = null
) => {
  // SESSION
  const { data: session, status } = useSession();

  return status === "authenticated" && session?.user ? authed : unauthed;
};

export default AuthedIfElse;
