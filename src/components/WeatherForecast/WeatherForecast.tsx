import { Link, useParams } from "react-router";
import { ForecastDay } from "@/models/types";
import { Container } from "../ui/container/Container";
import { WeatherForecastLoading } from "./WeatherForecastLoading";
import { ForecastItem } from "./WeatherForecastItem";
import "./forecast.scss";

interface IWeatherForecast {
  forecast: ForecastDay[] | undefined;
  isPending: boolean;
}

export const WeatherForecast = ({ forecast, isPending }: IWeatherForecast) => {
  const { cityUrl } = useParams();

  return (
    <Container className="forecast">
      <h2>3-Day Forecast</h2>
      <div className="forecast-content">
        {isPending ? (
          <WeatherForecastLoading />
        ) : (
          forecast?.map((forecastDay: ForecastDay, index) => (
            <Link to={`/weather/${cityUrl}`}>
              <ForecastItem key={index} forecastday={forecastDay} />
            </Link>
          ))
        )}
      </div>
    </Container>
  );
};
