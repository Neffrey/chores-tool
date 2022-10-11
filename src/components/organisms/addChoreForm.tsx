// LIBRARIES
import { trpc } from "utils/trpc";
import { Chore } from "@prisma/client";

// COMPONENTS
import { useAddChoreFormStore } from "components/stores/addChoreFormStore";
import { useUserDataStore } from "components/stores/userDataStore";

// FC
const AddChoreForm = () => {
  // STORE
  // UserDataStore
  const allChores = useUserDataStore((state) => state.allChores);
  const setAllChores = useUserDataStore((state) => state.setAllChores);

  // AddChoreFormStore
  const nameInput = useAddChoreFormStore((state) => state.nameInput);
  const setNameInput = useAddChoreFormStore((state) => state.setNameInput);
  const isDifficult = useAddChoreFormStore((state) => state.isDifficult);
  const toggleIsDifficult = useAddChoreFormStore(
    (state) => state.toggleIsDifficult
  );

  //tRPC
  const addChoreToAllChores = (newChore: Chore) => {
    return allChores
      ? setAllChores([...allChores, newChore])
      : setAllChores([newChore]);
  };
  const addChore = trpc.useMutation(["public.addChore"], {
    onSuccess(newChore) {
      addChoreToAllChores(newChore);
    },
  });

  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center">
      <div className="col-span-2 flex min-w-full flex-col items-start justify-center">
        <label htmlFor="addChoreName" className="uppercase tracking-widest">
          Chore Name
        </label>
        <div className="p-1" />
        <input
          name="addChoreName"
          type="text"
          value={nameInput}
          className="w-full min-w-full rounded-md border-2 border-primary p-2 text-black"
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>
      <div className="grid min-w-full grid-cols-2 pt-5">
        <div className="flex items-end justify-center">
          <label className="label cursor-pointer p-2">
            <input
              type="checkbox"
              checked={isDifficult}
              onChange={toggleIsDifficult}
              className="checkbox checkbox-lg"
            />
            <div className="p-2" />
            <span className="text-lg uppercase">Difficult Chore</span>
          </label>
        </div>
        <button
          className="btn btn-primary btn-lg w-full"
          onClick={() => {
            addChore.mutate({
              name: nameInput,
              isDifficult: isDifficult,
            });
          }}
        >
          Add Chore
        </button>
      </div>
    </div>
  );
};

export default AddChoreForm;
