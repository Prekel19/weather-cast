const daysOfWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months: string[] = [
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

export const useGetDate = (): string => {
  const d: Date = new Date();

  return (
    daysOfWeek[d.getDay()] +
    ", " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    ", " +
    d.getFullYear()
  );
};
