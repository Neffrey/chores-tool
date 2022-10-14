// LIBRARIES
import { signIn } from "next-auth/react";

// COMPONENTS
import AuthedIfElse from "components/hooks/authedIfElse";

// FC
const LoginBtn = () => {
  return AuthedIfElse(
    // AUTHED
    <div className="">Hello to you account holder</div>,
    // UNAUTHED
    <button className="btn btn-accent" onClick={() => signIn("google")}>
      Login
    </button>
  );
};

export default LoginBtn;
