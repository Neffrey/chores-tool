// LIBRARIES
import { signIn } from "next-auth/react";

// COMPONENTS
import UserAuthed from "components/hooks/userAuthed";

// FC
const LoginBtn = () => {
  return UserAuthed(
    // AUTHED
    <div className="">Hello to you account holder</div>,
    // UNAUTHED
    <button className="btn btn-accent" onClick={() => signIn("google")}>
      Login
    </button>
  );
};

export default LoginBtn;
