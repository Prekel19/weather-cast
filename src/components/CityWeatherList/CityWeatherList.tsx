import { CityWeatherItem } from "./CityWeatherItem";
import "./style.scss";

interface CityWeatherList {
  cities: string[];
}

export const CityWeatherList = ({ cities }: CityWeatherList) => {
  return (
    <div className="city-weather-list">
      {cities.map((city, index) => (
        <CityWeatherItem key={index} city={city} />
      ))}
    </div>
  );
};
