import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import "./searchbar.scss";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchDebounce = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchDebounce) {
      console.log(searchDebounce);
    }
  }, [searchDebounce]);

  return (
    <div className="searchbar">
      <SearchInput onChange={setSearchValue} />
      <Button>
        <Search cursor="pointer" />
      </Button>
    </div>
  );
};
