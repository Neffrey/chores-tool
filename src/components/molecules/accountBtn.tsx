// LIBRARIES
import React from "react";

// COMPONENTS
import AccountBtnUser from "components/molecules/accountBtnUser";
import AccountBtnNoUser from "components/molecules/accountBtnNoUser";

// CONTEXTS
import { AuthStore } from "components/contexts/authStore";

// FC
const AccountBtn = () => {
  // // Context
  // const { loginUser, logoutUser, userErrorMsg, userIdToken, userName } =
  //   useContext(UserContext);
  return AuthStore((state) => state.userIdToken) ? (
    <AccountBtnUser />
  ) : (
    <AccountBtnNoUser />
  );
};
export default AccountBtn;
