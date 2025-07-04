const daysOfWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const useGetDayOfWeek = (date: string) => {
  const d = new Date(date);
  return daysOfWeek[d.getDay()];
};
