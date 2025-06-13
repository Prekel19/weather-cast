import { weatherIcons } from "@/models/data";
import { ForecastDay } from "@/models/types";
import { getImageURL } from "@/utility/getImageURL";
import { Droplets, Wind } from "lucide-react";

interface IForecastItem {
  forecastday: ForecastDay;
}

export const ForecastItem = ({ forecastday }: IForecastItem) => {
  return (
    <div className="forecast-item">
      <img
        src={getImageURL(weatherIcons[forecastday.day.condition.code])}
        alt={forecastday.day.condition.text}
        height={48}
        width={48}
      />
      <div className="forecast-item_temperatures">
        <h3>{Math.round(forecastday.day.maxtemp_c)}°C</h3>
        <h4>{Math.round(forecastday.day.mintemp_c)}°C</h4>
      </div>
      <div className="forecast-item_info">
        <div className="forecast-item_info-element">
          <Droplets size={14} />
          <p>{forecastday.day.avghumidity}%</p>
        </div>
        <div className="forecast-item_info-element">
          <Wind size={14} />
          <p>{Math.round(forecastday.day.maxwind_kph)} km/h</p>
        </div>
      </div>
      <p className="forecast-item_condition">{forecastday.day.condition.text}</p>
    </div>
  );
};
