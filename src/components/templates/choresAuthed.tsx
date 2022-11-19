// LIBRARIES
import { trpc } from "utils/trpc";

// COMPONENTS
import { useChoresDataStore } from "components/stores/choresDataStore";
import CompletedChoreForm from "components/organisms/completedChoreForm";
import TodoChoreForm from "components/organisms/todoChoreForm";
import SortableTable from "components/organisms/sortableTable";

// TABLE COLUMNS
const columns = [
  { title: "Date", accessor: "date", type: "date" },
  { title: "Status", accessor: "status" },
  { title: "User", accessor: "user" },
  { title: "Chore", accessor: "name", gridSpan: 2 },
  { title: "Comment", accessor: "comment", gridSpan: 4 },
  {
    title: "Difficult",
    accessor: "isDifficult",
    type: "boolean",
    justify: "center",
  },
  { title: "Points", accessor: "points", justify: "center" },
  { title: "Delete", accessor: "", type: "delete", justify: "center" },
];

// FC
const ChoresAuthed = () => {
  // STORE
  const { allChores, setAllChores, status, setStatus, deleteChore } =
    useChoresDataStore();

  //tRPC
  const { isLoading: getAllChoresIsLoading } = trpc.useQuery(
    ["user.getAllChores"],
    {
      onSuccess: (data) => {
        setAllChores(
          data.map((chore) => {
            if (chore.user.name) {
              return {
                ...chore,
                user: chore.user.name,
              };
            } else
              return {
                ...chore,
                user: null,
              };
          })
        );
      },
    }
  );
  const deleteChoreMutation = trpc.useMutation(["user.deleteChore"], {
    onSuccess: (chore) => {
      if (chore?.id) deleteChore(chore.id);
    },
  });

  // RETURN
  return (
    <>
      <div className="p-4" />
      <div className="grid w-full grid-cols-3 gap-4">
        {
          // Completed Chore Form
          status === "completed" ? (
            <>
              <div className="col-span-2 flex justify-center">
                <CompletedChoreForm />
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="flex flex-col items-center justify-center text-lg uppercase">
                  Or
                  <div className="p-2" />
                  <button
                    className="btn-primary btn-lg btn w-60"
                    onClick={() => setStatus("todo")}
                  >
                    Add a todo
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Todo Chore Form
            <>
              <div className="col-span-1 flex justify-center">
                <div className="flex flex-col items-center justify-center text-lg uppercase">
                  Or
                  <div className="p-2" />
                  <button
                    className="btn-primary btn-lg btn w-60"
                    onClick={() => setStatus("completed")}
                  >
                    Complete a chore
                  </button>
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <TodoChoreForm />
              </div>
            </>
          )
        }
      </div>
      <div className="flex items-center justify-center p-12">
        <SortableTable
          columns={columns}
          data={allChores}
          deleteMutation={deleteChoreMutation}
        />
      </div>
    </>
  );
};
export default ChoresAuthed;
