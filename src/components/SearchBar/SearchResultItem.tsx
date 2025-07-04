import type { City } from "@/models/types";
import { Search } from "lucide-react";
import { Link } from "react-router";

interface ISearchResultItem {
  city: City;
}

export const SearchResultItem = ({ city }: ISearchResultItem) => {
  const cityData: string[] = [city.name, city.region, city.country];
  const result: string = cityData.filter((el) => el.length > 0).join(", ");

  return (
    <li className="searchbar_results-item">
      <Link to={`/weather/${city.url}`}>
        <Search size={15} />
        {result}
      </Link>
    </li>
  );
};
