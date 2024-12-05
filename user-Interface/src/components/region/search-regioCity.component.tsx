import { AutoComplete, Input, type AutoCompleteProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import { useState } from "react";
import { Cities } from "../../elements/region-cities.elements";

const SearchCity: React.FC<{ id: string }> = (idRegio) => {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
  const regionCities: string[] = Cities[idRegio.id];

  const onSelect = () => {};

  const searchResult = (query: string): DefaultOptionType[] => {
    const result: string[] = regionCities.filter((value) => value.includes(query));
    return result.map((city) => {
      return {
        value: city,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {city}
          </div>
        ),
      };
    });
  };

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
