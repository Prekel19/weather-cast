import { IForecast } from "@/models/types";
import { useQuery } from "@tanstack/react-query";
import { WeatherDetailsItem } from "../WeatherDetailsItem/WeatherDetailsItem";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router";
import { getWeatherApi } from "@/utility/getWeatherApi";

interface CityWeatherListItem {
  city: string;
}

export const CityWeatherItem = ({ city }: CityWeatherListItem) => {
  const {
    data: weather,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["weather-details", { city }],
    queryFn: () =>
      getWeatherApi<IForecast>("forecast.json", {
        q: city.toLowerCase(),
        days: 1,
      }),
  });

  if (isError) {
    return (
      <div className="city-weather-loading">
        <p>Wystąpił nieoczekiwany błąd.</p>
      </div>
    );
  }

  return (
    <>
      {isPending ? (
        <div className="city-weather-loading">
          <ClipLoader size={20} color="#fff6" />
        </div>
      ) : (
        <Link to={`weather/${city.toLocaleLowerCase()}`}>
          <WeatherDetailsItem
            heading={city}
            forecastday={{
              conditionCode: weather.forecast.forecastday[0].day.condition.code,
              conditionText: weather.forecast.forecastday[0].day.condition.text,
              firstTemp_c: weather.forecast.forecastday[0].day.maxtemp_c,
              secondTemp_c: weather.forecast.forecastday[0].day.mintemp_c,
              humidity: weather.forecast.forecastday[0].day.avghumidity,
              wind: weather.forecast.forecastday[0].day.maxwind_kph,
            }}
          />
        </Link>
      )}
    </>
  );
};
