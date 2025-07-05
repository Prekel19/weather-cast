import { City } from "@/models/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Link } from "react-router";
import axios from "axios";
import { ClipLoader } from "react-spinners";

interface ISearchResultItem {
  city: City;
}

const url: string = "https://api.weatherapi.com/v1/search.json";

export const SearchResults = () => {
  const { city } = useParams();

  const {
    data: results,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["search", { city }],
    queryFn: async () => {
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: city,
        },
      });

      return res.data as City[];
    },
  });

  if (isError) {
    return <p>Wystąpił nieoczkiwany błąd</p>;
  }

  return (
    <div className="search-result">
      {isPending ? (
        <ClipLoader size={20} color="#fff3" />
      ) : (
        results?.map((result) => <SearchResultItem city={result} />)
      )}
    </div>
  );
};

const SearchResultItem = ({ city }: ISearchResultItem) => {
  const cityData: string[] = [city.name, city.region, city.country];
  const result: string = cityData.filter((el) => el.length > 0).join(", ");

  return (
    <div className="search-result_item">
      <p>
        <Link to={`/weather/${city.url}`}>{result}</Link>
      </p>
    </div>
  );
};
