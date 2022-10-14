// LIBRARIES
import Image from "next/future/image";
import { signOut } from "next-auth/react";
import { trpc } from "utils/trpc";
import { FaImage } from "react-icons/fa";

// COMPONENTS
import { useUserDataStore } from "components/stores/UserDataStore";
import AccountDetails from "components/organisms/AccountPage/accountDetails";
import AssignedTasks from "components/organisms/AccountPage/assignedTasks";
import CompletedTasks from "components/organisms/AccountPage/completedTasks";

const AccountAuthed = () => {
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
  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;
  return (
    <div className="grid grid-cols-5 items-center p-20 ">
      <h1 className="col-span-4 text-center text-5xl font-extrabold leading-normal text-gray-700 md:text-[4rem]">
        Hello {user?.name}
      </h1>
      <div className="flex flex-col items-center justify-center gap-6">
        {user?.image ? (
          <Image
            alt={`${user?.name}'s Profile Pic`}
            src={user.image}
            width={150}
            height={150}
            className="col-span-2 rounded-md"
          />
        ) : (
          <FaImage className="text-5xl" />
        )}
        <button
          className="btn btn-primary btn-xl w-full"
          onClick={() => signOut()}
        >
          Logout
        </button>
        <label
          htmlFor="account-name-change-modal"
          className="modal-button btn w-full"
        >
          Change Name
        </label>
      </div>
      <div className="grid w-full grid-cols-3 gap-4">
        <div className="col-span-3 p-4" />
        <div
          // Main Content
          className="col-span-2 p-4"
        >
          <AssignedTasks />
          <CompletedTasks />
        </div>
      </div>
    </div>
  );
};
export default AccountAuthed;
