// LIBRARIES
import React from "react";
import { trpc } from "utils/trpc";
import { FaPenSquare, FaWindowClose } from "react-icons/fa";

// COMPONENTS
import { useAllUsersDataStore } from "components/stores/allUsersDataStore";
import monthNumberToName from "components/helpers/monthNumberToName";
import dateToHoursMinutesAMPM from "components/helpers/dateToHoursMinutesAMPM";

// TYPES
// type UserExtended = {
//   user
// FC
const AllUsersTable = () => {
  // STORE
  const { allUsers, setAllUsers } = useAllUsersDataStore();

  // tRPC
  const {
    // data: userData,
    isLoading,
    error,
  } = trpc.useQuery(["admin.getAllUsers"], {
    onSuccess: (data) => {
      setAllUsers(data);
    },
  });

  return isLoading || allUsers?.length === 0 ? (
    <div className="text-lg text-base-content">{`No Users Found :'(`}</div>
  ) : (
    <div className="grid grid-cols-12 items-center gap-4">
      {/* <button
        className="col-span-12 text-center text-2xl font-bold text-base-content"
        onClick={() => console.log({ allUsers })}
      >
        Log AllUsers
      </button> */}
      <div className="col-span-2 flex justify-center text-lg font-semibold uppercase">
        Created
      </div>
      <div className="col-span-2 flex justify-center text-lg font-semibold uppercase">
        Name
      </div>
      <div className="col-span-4 flex justify-center text-lg font-semibold uppercase">
        Email
      </div>
      <div className="col-span-2 flex justify-center text-lg font-semibold uppercase">
        Role
      </div>
      <div className="col-span-1 flex justify-center text-lg font-semibold uppercase">
        Edit
      </div>
      <div className="col-span-1 flex justify-center text-lg font-semibold uppercase">
        Delete
      </div>
      {
        // TABLE DATA
        allUsers &&
          allUsers?.map((user) => (
            <React.Fragment key={user.id}>
              <div
                // Created
                className="col-span-2 flex justify-center"
              >
                {user?.createdAt
                  ? `${monthNumberToName(
                      user.createdAt.getMonth()
                    )} ${user.createdAt.getDate()}`
                  : "N/A"}
                <br />
                {dateToHoursMinutesAMPM(user.createdAt)}
              </div>
              <div
                // Name
                className="col-span-2 flex justify-center"
              >
                {user.name}
              </div>
              <div
                // Email
                className="col-span-4 text-lg"
              >
                {user.email}
              </div>
              <div
                // Role
                className="col-span-2 text-lg"
              >
                {user.role}
              </div>
              <div
                // Edit
                className="col-span-1 flex cursor-pointer justify-center text-xl text-warning/70 hover:text-warning"
                // onClick={() => {
                //   console.log(user);
                // }}
              >
                <FaPenSquare />
              </div>
              <div
                // Delete
                className="col-span-1 flex cursor-pointer justify-center text-xl text-error/70 hover:text-error"
                // onClick={() =>
                //   deleteChoreMutation.mutate({
                //     id: chore.id,
                //   })
                // }
              >
                <FaWindowClose />
              </div>
            </React.Fragment>
          ))
      }
    </div>
  );
};

export default AllUsersTable;
