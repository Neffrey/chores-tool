// LIBRARIES
import { useSession } from "next-auth/react";

// FC
const IfAuth = (
  authed: React.ReactNode,
  unauthed: React.ReactNode | null = null
) => {
  // SESSION
  const { data: session, status } = useSession();

  return status === "authenticated" && session?.user //?.role === "approved user"
    ? authed
    : unauthed;
};

export default IfAuth;
