import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { ForecastDay } from "@/models/types";
import { Container } from "../ui/container/Container";
import { WeatherForecastLoading } from "./WeatherForecastLoading";
import { ForecastItem } from "./WeatherForecastItem";
import axios from "axios";
import "./forecast.scss";

const url: string = "https://api.weatherapi.com/v1/forecast.json";

export const WeatherForecast = () => {
  const { cityUrl } = useParams();

  const {
    data: forecast,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["forecast", { cityUrl }],
    queryFn: async () => {
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: cityUrl,
          days: 3,
        },
      });

      return res.data.forecast.forecastday as ForecastDay[];
    },
  });

  if (isError) {
    return <p>Wystąpił nieoczekiwany błąd.</p>;
  }

  return (
    <Container className="forecast">
      <h2>3-Day Forecast</h2>
      <div className="forecast-content">
        {isPending ? (
          <WeatherForecastLoading />
        ) : (
          forecast.map((forecastDay: ForecastDay, index) => (
            <Link to={`/weather/${cityUrl}`}>
              <ForecastItem key={index} forecastday={forecastDay} />
            </Link>
          ))
        )}
      </div>
    </Container>
  );
};
