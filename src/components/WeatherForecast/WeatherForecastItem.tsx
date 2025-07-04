import { useGetDayOfWeek } from "@/hooks/useGetDayOfWeek";
import { ForecastDay } from "@/models/types";
import { WeatherDetailsItem } from "../WeatherDetailsItem/WeatherDetailsItem";

interface IForecastItem {
  forecastday: ForecastDay;
}

export const ForecastItem = ({ forecastday }: IForecastItem) => {
  const dayOfWeek: string = useGetDayOfWeek(forecastday.date);

  return <WeatherDetailsItem heading={dayOfWeek} forecastday={forecastday} />;
};
