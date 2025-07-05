import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { SearchResultItem } from "./SearchResultItem";
import { Search } from "lucide-react";
import { ClipLoader } from "react-spinners";
import type { City } from "@/models/types";
import axios from "axios";
import "./searchbar.scss";
import { useNavigate } from "react-router";

const url: string = "https://api.weatherapi.com/v1/search.json";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigate = useNavigate();
  const searchDebounce = useDebounce(search, 750);

  const handleSearch = () => {
    if (search.length > 0) {
      navigate(`/search/${search}`);
    }
  };

  useEffect(() => {
    if (searchDebounce) {
      const fetchCities = async () => {
        setIsLoading(true);
        try {
          const res = await axios.get(url, {
            params: {
              key: import.meta.env.VITE_WEATHER_API_KEY,
              q: searchDebounce,
            },
          });
          setCities(res.data as City[]);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchCities();
    } else {
      setCities([]);
    }
  }, [searchDebounce]);

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
      {cities.length > 0 && (
        <ul className="searchbar_results">
          {cities.map((city) => (
            <SearchResultItem key={city.id} city={city} />
          ))}
        </ul>
      )}
    </div>
  );
};
