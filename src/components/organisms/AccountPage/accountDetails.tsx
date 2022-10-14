// LIBRARIES
import { trpc } from "utils/trpc";

// COMPONENTS
import { useUserDataStore } from "components/stores/UserDataStore";
import AccountNameChangeModal from "components/organisms/AccountPage/accountNameChangeModal";

// FC
const AccountDetails = () => {
  // STORE
  const user = useUserDataStore((state) => state.user);
  const setUser = useUserDataStore((state) => state.setUser);

  // tRPC
  const {
    data: userData,
    isLoading,
    error,
  } = trpc.useQuery(["user.getUser"], {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  // RETURN
  if (error) return <div>Oops an error occured.</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col items-center justify-center">
      <div>Account Details</div>
      <button onClick={() => console.log({ userData })}>Log UserData</button>
      <AccountNameChangeModal user={user} />
      <button onClick={() => console.log({ userData })}>Log UserData</button>
    </div>
  );
};

export default AccountDetails;
