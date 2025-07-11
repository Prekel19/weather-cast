import { weatherIcons } from "@/models/data";
import { getImageURL } from "@/utility/getImageURL";
import { Droplets, Wind } from "lucide-react";
import "./style.scss";

export interface IForecastItem {
  heading: string;
  forecastday: {
    conditionCode: number;
    conditionText: string;
    firstTemp_c: number;
    secondTemp_c?: number;
    humidity: number;
    wind: number;
  };
}

export const WeatherDetailsItem = ({ heading, forecastday }: IForecastItem) => {
  return (
    <div className="weather-details">
      <p>{heading}</p>
      <img
        src={getImageURL(weatherIcons[forecastday.conditionCode])}
        alt={forecastday.conditionText}
        height={48}
        width={48}
      />
      <div className="weather-details_temperatures">
        <h3>{Math.round(forecastday.firstTemp_c)}°C</h3>
        {forecastday.secondTemp_c && <h4>{Math.round(forecastday.secondTemp_c)}°C</h4>}
      </div>
      <div className="weather-details_info">
        <div className="weather-details_info-element">
          <Droplets size={14} />
          <p>{forecastday.humidity}%</p>
        </div>
        <div className="weather-details_info-element">
          <Wind size={14} />
          <p>{Math.round(forecastday.wind)} km/h</p>
        </div>
      </div>
      <p className="weather-details_condition">{forecastday.conditionText}</p>
    </div>
  );
};
