import { Search } from "lucide-react";
import type { City } from "./SearchBar";

interface ISearchResultItem {
  key: number;
  city: City;
}

export const SearchResultItem = ({ key, city }: ISearchResultItem) => {
  const cityData: string[] = [city.name, city.region, city.country];
  const result: string = cityData.filter((el) => el.length > 0).join(", ");

  return (
    <li className="searchbar_results-item" key={key}>
      <Search size={15} />
      {result}
    </li>
  );
};
