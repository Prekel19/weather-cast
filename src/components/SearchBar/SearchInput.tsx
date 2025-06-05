interface SearchInputProps {
  onChange: (value: string) => void;
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <input
      className="searchbar_input"
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search location"
    />
  );
};
