import { ClipLoader } from "react-spinners";

export const WeatherForecastLoading = () => {
  const itemsCount: number = 3;

  return (
    <>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div key={index} className="forecast-item">
          <ClipLoader size={20} color="#fff6" />
        </div>
      ))}
    </>
  );
};
