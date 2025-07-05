import { IForecast } from "@/models/types";
import { useGetDate } from "@/hooks/useGetDate";
import { Calendar, MapPin } from "lucide-react";
import { weatherIcons } from "@/models/data";
import { getImageURL } from "@/utility/getImageURL";
import { CurrentWeatherDetails } from "./CurrentWeatherDetails";
import "./currentweather.scss";

interface ICurrentWeather {
  weather: IForecast;
}

export const CurrentWeather = ({ weather }: ICurrentWeather) => {
  const date: string = useGetDate();

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
