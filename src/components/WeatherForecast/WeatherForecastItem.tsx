import { useGetDayOfWeek } from "@/hooks/useGetDayOfWeek";
import { ForecastDay } from "@/models/types";
import { WeatherDetailsItem } from "../WeatherDetailsItem/WeatherDetailsItem";

interface IForecastItem {
  forecastday: ForecastDay;
}

export const ForecastItem = ({ forecastday }: IForecastItem) => {
  const dayOfWeek: string = useGetDayOfWeek(forecastday.date);

  return (
    <WeatherDetailsItem
      heading={dayOfWeek}
      forecastday={{
        conditionCode: forecastday.day.condition.code,
        conditionText: forecastday.day.condition.text,
        firstTemp_c: forecastday.day.maxtemp_c,
        secondTemp_c: forecastday.day.mintemp_c,
        humidity: forecastday.day.avghumidity,
        wind: forecastday.day.maxwind_kph,
      }}
    />
  );
};
