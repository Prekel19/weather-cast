import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axios from "axios";

const url: string = "https://api.weatherapi.com/v1/forecast.json";

export const CurrentWeather = () => {
  const { cityUrl } = useParams();

  const {
    data: weather,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["weather", { cityUrl }],
    queryFn: async () => {
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: cityUrl,
        },
      });

      return res.data;
    },
  });

  console.log(weather);

  return <div>CurrentWeather</div>;
};
