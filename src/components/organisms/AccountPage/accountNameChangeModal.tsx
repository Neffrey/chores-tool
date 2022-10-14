// LIBRARIES
import { FC } from "react";
import { User } from "next-auth";
import { trpc } from "utils/trpc";
import * as z from "zod";

// COMPONENTS
import { useNameChangeFormStore } from "components/stores/nameChangeFormStore";
import { useUserDataStore } from "components/stores/UserDataStore";

// PROPS
interface AccountNameChangeModalProps {
  user: User | null | undefined;
}

// FC
const AccountNameChangeModal: FC<AccountNameChangeModalProps> = ({ user }) => {
  // STATE
  // NameChangeFormStore
  const nameInput = useNameChangeFormStore((state) => state.nameInput);
  const setNameInput = useNameChangeFormStore((state) => state.setNameInput);
  const nameError = useNameChangeFormStore((state) => state.nameError);
  const setNameError = useNameChangeFormStore((state) => state.setNameError);
  const formError = useNameChangeFormStore((state) => state.formError);
  const setFormError = useNameChangeFormStore((state) => state.setFormError);
  // UserDataStore
  const setUser = useUserDataStore((state) => state.setUser);

  // VALIDATION
  const nameSchema = z.string().min(2).max(20);

  // tRPC
  const changeName = trpc.useMutation(["user.changeName"], {
    onSuccess(newName) {
      setUser(newName);
    },
  });

  // HANDLERS
  const handleNameChange = () => {
    const validate = nameSchema.safeParse(nameInput);
    if (!validate.success) {
      setNameError(validate.error.message);
    } else if (validate.success) {
      changeName.mutate({
        name: nameInput,
      });
      if (changeName.error) {
        setFormError(changeName.error.message);
      }
    }
  };
  return (
    <>
      <input
        type="checkbox"
        id="account-name-change-modal"
        className="modal-toggle"
      />
      <div className="modal w-full flex-col items-center justify-center">
        <div className="modal-box relative p-7">
          <label
            htmlFor="account-name-change-modal"
            className="btn btn-circle btn-sm absolute right-2 top-2 hover:bg-error"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">Enter New Name</h3>
          <div className="p-2" />
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <input
                defaultValue={user?.name ? user.name : ""}
                onChange={(e) => setNameInput(e.target.value)}
                className="text-md h-full w-full rounded-md p-2 text-primary-content"
              />
            </div>
            <div className="col-span-1">
              <button
                className="btn btn-primary btn-xl h-full w-full rounded-md"
                onClick={() => handleNameChange()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountNameChangeModal;
