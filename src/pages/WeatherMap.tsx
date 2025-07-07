import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface IWeatherMap {
  title: string;
  weatherLayerName: string;
}

const weatherLayerData: IWeatherMap[] = [
  { title: "Clouds", weatherLayerName: "clouds_new" },
  { title: "Precipitation", weatherLayerName: "precipitation_new" },
  { title: "Sea level pressure", weatherLayerName: "pressure_new" },
  { title: "Wind speed", weatherLayerName: "wind_new" },
  { title: "Temperature", weatherLayerName: "temp_new" },
];

export const WeatherMap = () => {
  const [weatherLayer, setWeatherLayer] = useState<string>("clouds_new");

  return (
    <div className="weathermap">
      <div className="weathermap_layers">
        {weatherLayerData.map((item, index) => (
          <Button
            key={index}
            className={`weathermap_btn ${
              weatherLayer === item.weatherLayerName ? "current" : ""
            }`}
            onClick={() => setWeatherLayer(item.weatherLayerName)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <MapContainer className="weathermap_container" center={[51.9194, 19.1451]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer
          url={`https://tile.openweathermap.org/map/${weatherLayer}/{z}/{x}/{y}.png?appid=${
            import.meta.env.VITE_OPEN_WEATHER_API_KEY
          }`}
          attribution="&copy; OpenWeatherMap"
        />
      </MapContainer>
    </div>
  );
};
