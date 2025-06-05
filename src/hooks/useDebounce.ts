import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<T>();

  useEffect(() => {
    const timeouot = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeouot);
  }, [value, delay]);

  return debounceValue;
};
