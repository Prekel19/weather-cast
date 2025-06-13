import { IForecast } from "@/models/types";
import { Droplets, Eye, Gauge, Sunrise, Sunset, Wind } from "lucide-react";
import { ReactElement } from "react";

interface ICurrentWeatherDetails {
  weather: IForecast;
}

interface ICurrentWeatherDetailsItem {
  title: string;
  icon: ReactElement;
  info: string;
}

export const CurrentWeatherDetails = ({ weather }: ICurrentWeatherDetails) => {
  const details: ICurrentWeatherDetailsItem[] = [
    {
      title: "Wind",
      icon: <Wind />,
      info: `${Math.round(weather?.current.wind_kph)} km/h`,
    },
    {
      title: "Humidity",
      icon: <Droplets />,
      info: `${weather?.current.humidity}%`,
    },
    {
      title: "Pressure",
      icon: <Gauge />,
      info: `${weather?.current.pressure_mb} mb`,
    },
    {
      title: "Visibility",
      icon: <Eye />,
      info: `${weather?.current.vis_km} km`,
    },
    {
      title: "Sunrise",
      icon: <Sunrise />,
      info: `${weather?.forecast.forecastday[0].astro.sunrise}`,
    },
    {
      title: "Sunset",
      icon: <Sunset />,
      info: `${weather?.forecast.forecastday[0].astro.sunset}`,
    },
  ];

  return (
    <div className="current-weather_content-right">
      {details.map((detail, index) => (
        <CurrentWeatherDetailsItem
          key={index}
          title={detail.title}
          icon={detail.icon}
          info={detail.info}
        />
      ))}
    </div>
  );
};

const CurrentWeatherDetailsItem = ({ title, icon, info }: ICurrentWeatherDetailsItem) => {
  return (
    <div className="current-weather_content-right-item">
      <div className="current-weather_content-right-icon">{icon}</div>
      <div className="current-weather_content-right-details">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};
