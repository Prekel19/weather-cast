import { Container } from "@/components/ui/container/Container";
import { CurrentWeather } from "@/components/CurrentWeather/CurrentWeather";
import { WeatherForecast } from "@/components/WeatherForecast/WeatherForecast";

export const CityWeather = () => {
  return (
    <>
      <Container className="current-weather">
        <CurrentWeather />
      </Container>
      <WeatherForecast />
    </>
  );
};
