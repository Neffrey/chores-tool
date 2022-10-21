// LIBRARIES
import { trpc } from "utils/trpc";

// COMPONENTS
import { useUserDataStore } from "components/stores/userDataStore";
import CompletedChoreForm from "components/organisms/completedChoreForm";
import AllChoresTable from "components/molecules/allChoresTable";

// FC
const ChoresAuthed = () => {
  // STORE
  const { setUser } = useUserDataStore();

  // tRPC
  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = trpc.useQuery(["user.getUser"], {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  // RETURN
  if (userError) return <div>error</div>;
  if (userIsLoading) return <div>loading</div>;
  if (userData)
    return (
      <>
        <div className="p-4" />
        <CompletedChoreForm />
        <div className="p-4" />
        <AllChoresTable />
      </>
    );
  return <></>;
};
export default ChoresAuthed;
