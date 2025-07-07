import { createContext, PropsWithChildren, useContext, useState } from "react";

type BackgroundContextVal = {
  background: string;
  changeBackground: (condition: string, isDay: boolean) => void;
};

const BackgroundContext = createContext<BackgroundContextVal | undefined>(undefined);

export const BackgroundProvider = ({ children }: PropsWithChildren) => {
  const [conditionText, setConditionText] = useState<string>("Sunny");
  const [isDay, setIsDay] = useState<boolean>(true);
  let background: string = "";

  const changeBackground = (condition: string, isDay: boolean) => {
    setConditionText(condition);
    setIsDay(isDay);
  };

  const getBackgroundClass = () => {
    const condition = conditionText.toLowerCase();
    if (condition.includes("rain") || condition.includes("drizzle")) {
      return "bg-rain";
    } else if (condition.includes("cloud")) {
      return isDay ? "bg-cloud-day" : "bg-cloud-night";
    } else if (condition.includes("snow")) {
      return "bg-snow";
    } else if (condition.includes("thunder")) {
      return "bg-thunder";
    } else if (condition.includes("fog") || condition.includes("mist")) {
      return "bg-fog";
    } else {
      return isDay ? "bg-default-day" : "bg-default-night";
    }
  };

  background = getBackgroundClass();

  return (
    <BackgroundContext value={{ background, changeBackground }}>
      {children}
    </BackgroundContext>
  );
};

export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);

  if (!context) {
    throw new Error("useBackgroundContext must be used with BackgroundProvider");
  }

  return context;
};
