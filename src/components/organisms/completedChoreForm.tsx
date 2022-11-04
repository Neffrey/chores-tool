// LIBRARIES
import { trpc } from "utils/trpc";

// COMPONENTS
import { useCompletedChoreFormStore } from "components/stores/completedChoreFormStore";
import { useUserDataStore } from "components/stores/userDataStore";
import { useVisitorDataStore } from "components/stores/visitorDataStore";

// CONSTANTS
const TIME_SELECT_OPTIONS = [
  "5 Minutes",
  "15 Minutes",
  "30 Minutes",
  "1 Hour",
  "Enter Custom",
];

// FC
const CompletedChoreForm = () => {
  // STORE
  const { user } = useUserDataStore();
  const { allChores, setAllChores } = useVisitorDataStore();
  const {
    name,
    setName,
    comment,
    setComment,
    isDifficult,
    toggleIsDifficult,
    timeSelectOption,
    setTimeSelectOption,
    customTime,
    setCustomTime,
    //timeSelectValues,
    resetForm,
  } = useCompletedChoreFormStore();

  //tRPC
  const addChore = trpc.useMutation(["user.addCompletedChore"], {
    onSuccess(newChore) {
      setAllChores([...allChores, newChore]);
      resetForm();
    },
  });

  // TIME SELECT SWITCH - return time in minutes
  const getMinutesFromTimeSelect = () => {
    switch (timeSelectOption) {
      case 0:
        return 5;
      case 1:
        return 15;
      case 2:
        return 30;
      case 3:
        return 60;
      case 4:
        return customTime;
      default:
        return 0;
    }
  };

  // HANDLERS
  const handleSubmit = () => {
    addChore.mutate({
      name: name,
      comment: comment,
      isDifficult: isDifficult,
      time: Math.ceil(getMinutesFromTimeSelect() / 5), // time in 5 minute chunks rounded up
    });
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center">
      <label className="col-span-2 flex min-w-full flex-col items-start justify-center uppercase tracking-widest">
        Completed chore
        <div className="p-1" />
        <input
          name="addCompletedChoreName"
          type="text"
          value={name}
          className="w-full min-w-full rounded-md border-2 border-primary bg-neutral-content p-2 text-neutral"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="p-4" />
      <label className="col-span-2 flex min-w-full flex-col items-start justify-center uppercase tracking-widest">
        Optional Comment
        <div className="p-1" />
        <textarea
          name="addCompletedChoreComment"
          value={comment}
          className="col-span-2 w-full min-w-full rounded-md border-2 border-primary bg-neutral-content p-2 text-neutral"
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <div className="grid min-w-full grid-cols-2 pt-5">
        <label className="flex cursor-pointer items-center justify-center p-2">
          <input
            type="checkbox"
            checked={isDifficult}
            onChange={toggleIsDifficult}
            className="checkbox checkbox-lg"
          />
          <div className="p-2" />
          <span className="text-lg uppercase">Difficult Chore</span>
        </label>
        <label className="flex cursor-pointer items-center justify-center p-2">
          <select
            name="addCompletedChorePoints"
            value={timeSelectOption}
            className="w-full min-w-full rounded-md border-2 border-primary bg-neutral-content p-2 text-neutral"
            onChange={(e) => setTimeSelectOption(parseInt(e.target.value, 10))}
          >
            {TIME_SELECT_OPTIONS.map((value, index) => (
              <option key={index} value={index}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="p-2" />
      {timeSelectOption === 4 && (
        <label className="grid cursor-pointer grid-cols-2 items-center justify-center p-2">
          Enter time in minutes
          <input
            type="number"
            value={customTime}
            placeholder="Enter time in minutes"
            className="w-full min-w-full rounded-md border-2 border-primary bg-neutral-content p-2 text-neutral"
            onChange={(e) => setCustomTime(parseInt(e.target.value, 10))}
          />
          <div className="p-2" />
        </label>
      )}
      <button
        className="btn-primary btn-lg btn col-span-2 w-full"
        onClick={handleSubmit}
      >
        Add Chore
      </button>
    </div>
  );
};

export default CompletedChoreForm;
