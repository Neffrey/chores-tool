const monthNumberToName = (number: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const result = months[number];
  if (result === undefined) {
    return "no month";
  }
  return result;
};

export default monthNumberToName;
