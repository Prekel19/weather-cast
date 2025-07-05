import { Container } from "@/components/ui/container/Container";
import { CurrentWeather } from "@/components/CurrentWeather/CurrentWeather";
import { WeatherForecast } from "@/components/WeatherForecast/WeatherForecast";
import { useParams } from "react-router";
import { getWeatherApi } from "@/utility/getWeatherApi";
import { useQuery } from "@tanstack/react-query";
import { IForecast } from "@/models/types";
import { ClipLoader } from "react-spinners";

export const CityWeather = () => {
  const { cityUrl } = useParams();

  const {
    data: weather,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["weather", { cityUrl }],
    queryFn: () => getWeatherApi<IForecast>("forecast.json", { q: cityUrl, days: 3 }),
  });

  if (isError) {
    return (
      <p className="current-weather_center current-weather_error">
        Wystąpił nieoczkiwany błąd.
      </p>
    );
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
      <WeatherForecast forecast={weather?.forecast.forecastday} isPending={isPending} />
    </>
  );
};
