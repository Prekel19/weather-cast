import { City } from "@/models/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Link } from "react-router";
import { ClipLoader } from "react-spinners";
import { getWeatherApi } from "@/utility/getWeatherApi";

interface ISearchResultItem {
  city: City;
}

export const Search = () => {
  const { city } = useParams();

  const {
    data: results,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["search", { city }],
    queryFn: () => getWeatherApi<City[]>("search.json", { q: city }),
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
      <Link to={`/weather/${city.url}`}>{result}</Link>
    </div>
  );
};
