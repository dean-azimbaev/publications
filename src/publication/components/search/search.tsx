import { Input } from "antd";
import { FC } from "react";

interface SearchProps {
  onSearch: (value: any) => any;
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onSearch(value);

  return (
    <div>
      <Input placeholder="search by name or id" onChange={handleSearch} />
    </div>
  );
};
