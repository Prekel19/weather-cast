import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { ICurrentWeather } from "@/types/types";
import { ClipLoader } from "react-spinners";
import { useGetDate } from "@/hooks/useGetDate";
import axios from "axios";
import "./currentweather.scss";
import { Calendar, MapPin } from "lucide-react";

const url: string = "https://api.weatherapi.com/v1/current.json";

export const CurrentWeather = () => {
  const { cityUrl } = useParams();
  const date: string = useGetDate();

  const {
    data: weather,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["weather", { cityUrl }],
    queryFn: async () => {
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: cityUrl,
        },
      });

      return res.data as ICurrentWeather;
    },
  });

  if (isPending) {
    return <ClipLoader className="current-weather_center" color="#fff6" />;
  }

  if (isError) {
    return (
      <p className="current-weather_center current-weather_error">
        Wystąpił nieoczkiwany błąd.
      </p>
    );
  }

  return (
    <>
      <div className="current-weather_heading">
        <h2>
          <MapPin size={20} /> {weather?.location.name},{" "}
          <span>{weather?.location.country}</span>
        </h2>
        <p>
          <Calendar size={14} />
          {date}
        </p>
      </div>
    </>
  );
};
