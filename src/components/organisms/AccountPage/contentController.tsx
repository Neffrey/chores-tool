// COMPONENTS
import { useAccountPageControllerStore } from "components/stores/accountPageControllerStore";
import AccountDetails from "components/organisms/AccountPage/accountDetails";
import CompletedTasks from "components/organisms/AccountPage/completedTasks";
import AssignedTasks from "components/organisms/AccountPage/assignedTasks";

// FC
const ContentSwitcher = () => {
  // STATE
  const currentTab = useAccountPageControllerStore((state) => state.currentTab);
  const setCurrentTab = useAccountPageControllerStore(
    (state) => state.setCurrentTab
  );

  return (
    <>
      <div
        // Side Menu
        className="col-span-1 p-4"
      >
        <ul className="menu w-full rounded-lg border-4 border-primary">
          <li>
            <div
              className={currentTab === "account-details" ? "active" : ""}
              onClick={() => setCurrentTab("account-details")}
            >
              Account Details
            </div>
          </li>
          <li>
            <div
              className={currentTab === "assigned-tasks" ? "active" : ""}
              onClick={() => setCurrentTab("assigned-tasks")}
            >
              Assigned Tasks
            </div>
          </li>
          <li>
            <div
              className={currentTab === "completed-tasks" ? "active" : ""}
              onClick={() => setCurrentTab("completed-tasks")}
            >
              Completed Tasks
            </div>
          </li>
        </ul>
      </div>
      <div
        // Main Content
        className="col-span-2 p-4"
      >
        {currentTab === "account-details" && <AccountDetails />}
        {currentTab === "assigned-tasks" && <AssignedTasks />}
        {currentTab === "completed-tasks" && <CompletedTasks />}
      </div>
    </>
  );
};

export default ContentSwitcher;
