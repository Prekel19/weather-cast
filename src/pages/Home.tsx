import { CityWeatherList } from "@/components/CityWeatherList/CityWeatherList";

export const Home = () => {
  const cities: string[] = ["Warsaw", "London", "Paris", "Barcelona", "Oslo"];

  return <CityWeatherList cities={cities} />;
};
