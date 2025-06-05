import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import axios from "axios";
import "./searchbar.scss";

const url: string = "https://api.weatherapi.com/v1/search.json";

interface City {
  id: number;
  name: string;
  country: string;
  region: string;
  url: string;
  lat: number;
  lon: number;
}

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const searchDebounce = useDebounce(search, 750);

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
          console.log(res.data);
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
      <SearchInput onChange={setSearch} />
      <Button>
        <Search cursor="pointer" />
      </Button>
      <ul>
        {cities?.map((city, index) => (
          <li key={index}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};
