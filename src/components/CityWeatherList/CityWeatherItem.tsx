import { ForecastDay } from "@/models/types";
import { useQuery } from "@tanstack/react-query";
import { WeatherDetailsItem } from "../WeatherDetailsItem/WeatherDetailsItem";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { Link } from "react-router";

const url: string = "https://api.weatherapi.com/v1/forecast.json";

interface CityWeatherListItem {
  city: string;
}

export const CityWeatherItem = ({ city }: CityWeatherListItem) => {
  const {
    data: forecast,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["weather-details", { city }],
    queryFn: async () => {
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: city,
          days: 1,
        },
      });

      return res.data.forecast.forecastday as ForecastDay[];
    },
  });

  if (isError) {
    return <p>Wystąpił nieoczekiwany błąd.</p>;
  }

  return (
    <>
      {isPending ? (
        <div className="city-weather-loading">
          <ClipLoader size={20} color="#fff6" />
        </div>
      ) : (
        <Link to={`weather/${city.toLocaleLowerCase()}`}>
          <WeatherDetailsItem heading={city} forecastday={forecast[0]} />
        </Link>
      )}
    </>
  );
};
