import { ReactElement } from "react";
import { ClipLoader } from "react-spinners";

export const WeatherForecastLoadingItems = () => {
  const loaders: ReactElement[] = [
    <ClipLoader size={18} color="#fff6" />,
    <ClipLoader size={18} color="#fff6" />,
    <ClipLoader size={18} color="#fff6" />,
    <ClipLoader size={18} color="#fff6" />,
    <ClipLoader size={18} color="#fff6" />,
  ];

  return (
    <>
      {loaders.map((loader) => (
        <div className="forecast-item">{loader}</div>
      ))}
    </>
  );
};
