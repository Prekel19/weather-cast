import { Button } from "@/components/ui/button";
import { SearchResultItem } from "./SearchResultItem";
import { useDebounce } from "@/hooks/useDebounce";
import { getWeatherApi } from "@/utility/getWeatherApi";
import type { City } from "@/models/types";
import SearchInput from "./SearchInput";

import { useState } from "react";
import { Search } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const searchDebounce = useDebounce(search, 750);

  const handleSearch = () => {
    if (search.length > 0) {
      navigate(`/search/${search}`);
    }
  };

  const {
    data: cities,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", { searchDebounce }],
    queryFn: () => getWeatherApi<City[]>("search.json", { q: searchDebounce }),
    enabled: !!searchDebounce,
  });

  if (isError) {
    console.log("An unexpected error occurred.");
  }

  return (
    <div className="searchbar">
      <SearchInput
        onChange={setSearch}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            (e.target as HTMLInputElement).blur();
            handleSearch();
          }
        }}
      />
      {isLoading ? (
        <ClipLoader size={20} color="#fff6" />
      ) : (
        <Button onClick={handleSearch}>
          <Search cursor="pointer" />
        </Button>
      )}
      {cities && (
        <ul className="searchbar_results">
          {cities.map((city) => (
            <SearchResultItem key={city.id} city={city} />
          ))}
        </ul>
      )}
    </div>
  );
};
