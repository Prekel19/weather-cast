import { memo } from "react";

interface SearchInputProps {
  onChange: (value: string) => void;
  onKeyDown: (key: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onChange, onKeyDown }: SearchInputProps) => {
  return (
    <input
      className="searchbar_input"
      type="text"
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => onKeyDown(e)}
      placeholder="Search location..."
    />
  );
};

export default memo(SearchInput);
