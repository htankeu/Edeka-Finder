import { AutoComplete, Input, type AutoCompleteProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import { useState } from "react";
import { Cities } from "../../elements/region-cities.elements";
import { useNavigate } from "react-router-dom";

const SearchCity: React.FC<{ id: string }> = (idRegio) => {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
  const regionCities: string[] = Cities[idRegio.id];
  const navigate = useNavigate();

  const onSelect = () => {};

  const handleclick = () => {
    navigate("/home");
  };

  const searchResult = (query: string): DefaultOptionType[] => {
    const result: string[] = regionCities.filter((value) => value.toLowerCase().includes(query.toLowerCase()));
    return result.map((city) => {
      return {
        value: city,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => {
              city.toLowerCase() === "worms" ? handleclick() : () => {};
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
