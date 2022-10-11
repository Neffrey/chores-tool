// LIBRARIES
import React from "react";
import { trpc } from "utils/trpc";

// COMPONENTS
import { useUserDataStore } from "components/stores/userDataStore";

// FC
const AllChoresTable = () => {
  // STORE
  const allChores = useUserDataStore((state) => state.allChores);
  const setAllChores = useUserDataStore((state) => state.setAllChores);

  //tRPC
  const { isLoading: allChoresisLoading } = trpc.useQuery(
    ["public.getAllChores"],
    {
      onSuccess: (data) => {
        setAllChores(data);
      },
    }
  );

  return allChoresisLoading || allChores?.length === 0 ? (
    <div className="text-lg text-base-content">No Chores Found. Add one :D</div>
  ) : (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 text-lg font-semibold uppercase">Name</div>
      <div className="col-span-1 text-lg font-semibold uppercase">
        Difficult
      </div>
      {allChores &&
        allChores?.map((chore) => (
          <React.Fragment key={chore.id}>
            <div className="col-span-2 text-lg">{chore.name}</div>
            <div className="text-lg">{chore.isDifficult ? "Yes" : "No"}</div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default AllChoresTable;
