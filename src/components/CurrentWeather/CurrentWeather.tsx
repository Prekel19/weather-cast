import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { IForecast } from "@/models/types";
import { ClipLoader } from "react-spinners";
import { useGetDate } from "@/hooks/useGetDate";
import { Calendar, MapPin } from "lucide-react";
import { weatherIcons } from "@/models/data";
import { getImageURL } from "@/utility/getImageURL";
import axios from "axios";
import "./currentweather.scss";
import { CurrentWeatherDetails } from "./CurrentWeatherDetails";

const url: string = "https://api.weatherapi.com/v1/forecast.json";

export const CurrentWeather = () => {
  const { cityUrl } = useParams();
  const date: string = useGetDate();

  const {
    data: weather,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["weather", { cityUrl }],
    queryFn: async () => {
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: cityUrl,
          days: 1,
        },
      });

      return res.data as IForecast;
    },
  });

  if (isPending) {
    return <ClipLoader className="current-weather_center" color="#fff6" />;
  }

  if (isError) {
    return (
      <p className="current-weather_center current-weather_error">
        Wystąpił nieoczkiwany błąd.
      </p>
    );
  }

  return (
    <>
      <div className="current-weather_heading">
        <h2>
          <MapPin size={20} /> {weather?.location.name},{" "}
          <span>{weather?.location.country}</span>
        </h2>
        <p>
          <Calendar size={14} />
          {date}
        </p>
      </div>
      <div className="current-weather_content">
        <div className="current-weather_content-left">
          <img
            src={getImageURL(weatherIcons[weather?.current.condition.code])}
            height={120}
            width={120}
            alt={weather?.current.condition.text}
          />
          <div className="current-weather_content-left-info">
            <p className="current-weather_temperature">
              {Math.round(weather?.current.temp_c)}°C
            </p>
            <p className="current-weather_condition">{weather?.current.condition.text}</p>
          </div>
        </div>
        <CurrentWeatherDetails weather={weather} />
      </div>
    </>
  );
};
