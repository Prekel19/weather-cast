import axios from "axios";

const baseUrl: string = "https://api.weatherapi.com/v1/";

export async function getWeatherApi<T>(
  url: string,
  params: Record<string, string | number | undefined>
): Promise<T> {
  const formatedUrl: string =
    baseUrl + url + "?key=" + import.meta.env.VITE_WEATHER_API_KEY;

  const res = await axios.get(formatedUrl, {
    params: params,
  });

  return res.data;
}
