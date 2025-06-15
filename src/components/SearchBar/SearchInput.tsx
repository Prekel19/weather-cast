import { memo } from "react";

interface SearchInputProps {
  onChange: (value: string) => void;
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <input
      className="searchbar_input"
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search location..."
    />
  );
};

export default memo(SearchInput);
