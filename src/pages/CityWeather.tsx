import { Container } from "@/components/ui/container/Container";
import { CurrentWeather } from "@/components/CurrentWeather/CurrentWeather";

export const CityWeather = () => {
  return (
    <Container className="current-weather">
      <CurrentWeather />
    </Container>
  );
};
