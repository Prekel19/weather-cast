import { Container } from "@/components/ui/container/Container";
import { CurrentWeather } from "@/components/CurrentWeather/CurrentWeather";
import { WeatherForecast } from "@/components/WeatherForecast/WeatherForecast";
import { WeatherHourly } from "@/components/WeatherHourly/WeatherHourly";
import { useBackgroundContext } from "@/context/BackgroundContext";
import { getWeatherApi } from "@/utility/getWeatherApi";
import { IForecast } from "@/models/types";

import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";

export const Weather = () => {
  const { cityUrl } = useParams();
  const { changeBackground } = useBackgroundContext();

  const {
    data: weather,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["weather", { cityUrl }],
    queryFn: () =>
      getWeatherApi<IForecast>("forecast.json", {
        q: cityUrl,
        days: 3,
      }),
  });

  useEffect(() => {
    if (weather) {
      changeBackground(
        weather?.current.condition.text,
        weather?.current.is_day === 1 ? true : false
      );
    }
  }, [weather]);

  if (isError) {
    return <p className="weather-error">An unexpected error occurred.</p>;
  }

  return (
    <>
      <Container className="current-weather">
        {isPending ? (
          <ClipLoader className="current-weather_center" color="#fff6" />
        ) : (
          <CurrentWeather weather={weather} />
        )}
      </Container>

      <Container className="weather-hourly">
        {isPending ? (
          <ClipLoader className="current-weather_center" color="#fff6" />
        ) : (
          <WeatherHourly weather={weather.forecast.forecastday[0].hour} />
        )}
      </Container>
      <WeatherForecast forecast={weather?.forecast.forecastday} isPending={isPending} />
    </>
  );
};
