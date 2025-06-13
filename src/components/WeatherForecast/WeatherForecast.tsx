import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { ForecastDay } from "@/models/types";
import { Container } from "../ui/container/Container";
import { WeatherForecastLoadingItems } from "./WeatherForecastLoadingItems";
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
          days: 5,
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
      <h2>5-Day Forecast</h2>
      <div className="forecast-content">
        {isPending ? (
          <WeatherForecastLoadingItems />
        ) : (
          forecast?.map((forecastDay: ForecastDay, index) => (
            <ForecastItem key={index} forecastday={forecastDay} />
          ))
        )}
      </div>
    </Container>
  );
};
