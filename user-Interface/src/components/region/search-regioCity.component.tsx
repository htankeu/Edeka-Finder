import { AutoComplete, Input, type AutoCompleteProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import { useState } from "react";

const SearchCity: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
  const onSelect = () => {};

  const searchResult = (query: string): DefaultOptionType[] =>
    new Array(5).map((_, idx) => {
      return {
        value: query,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {query}
          </div>
        ),
      };
    });

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <>
      <div>
        <AutoComplete popupMatchSelectWidth={252} style={{ width: 300 }} options={options} onSelect={onSelect} onSearch={handleSearch} size="large">
          <Input.Search size="large" placeholder="search..." enterButton />
        </AutoComplete>
      </div>
    </>
  );
};
export default SearchCity;
