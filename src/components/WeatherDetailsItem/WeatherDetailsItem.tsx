import { weatherIcons } from "@/models/data";
import { IForecastItem } from "@/models/types";
import { getImageURL } from "@/utility/getImageURL";
import { Droplets, Wind } from "lucide-react";
import "./style.scss";

export const WeatherDetailsItem = ({ forecastday, heading }: IForecastItem) => {
  return (
    <div className="weather-details">
      <p>{heading}</p>
      <img
        src={getImageURL(weatherIcons[forecastday.day.condition.code])}
        alt={forecastday.day.condition.text}
        height={48}
        width={48}
      />
      <div className="weather-details_temperatures">
        <h3>{Math.round(forecastday.day.maxtemp_c)}°C</h3>
        <h4>{Math.round(forecastday.day.mintemp_c)}°C</h4>
      </div>
      <div className="weather-details_info">
        <div className="weather-details_info-element">
          <Droplets size={14} />
          <p>{forecastday.day.avghumidity}%</p>
        </div>
        <div className="weather-details_info-element">
          <Wind size={14} />
          <p>{Math.round(forecastday.day.maxwind_kph)} km/h</p>
        </div>
      </div>
      <p className="weather-details_condition">{forecastday.day.condition.text}</p>
    </div>
  );
};
