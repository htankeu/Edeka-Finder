import { useEffect, useState } from "react";
import { Cities } from "../elements/region-cities.elements";
import { Button, List } from "antd";
import { DownOutlined } from "@ant-design/icons";
import SearchCity from "./region/search-regioCity.component";
import { useNavigate } from "react-router-dom";

interface CityType {
  Name: string;
}

const count = 1;

const Orte: React.FC<{ id: string }> = (idRegio) => {
  const regionCities: string[] = Cities[idRegio.id];
  const firstOUtput: string[] = [regionCities[0], regionCities[1], regionCities[2], regionCities[3], regionCities[4]];

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CityType[]>([]);
  const [list, setList] = useState<CityType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInitLoading(false);
    regionCities.map((city: string) => {
      const newCity: CityType = {
        Name: city,
      };
      setData((prevState) => {
        prevState.push(newCity);
        return prevState;
      });
    });

    firstOUtput.map((city: string) => {
      const newCity: CityType = {
        Name: city,
      };
      setList((prevState) => {
        prevState.push(newCity);
        return prevState;
      });
    });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(data.concat([...new Array(count)].map(() => ({ Name: "" }))));
  };

  const handlelick = () => {
    navigate("/scan");
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button type="primary" onClick={onLoadMore}>
          More <DownOutlined />
        </Button>
      </div>
    ) : null;

  return (
    <>
      <div className="flex flex-col  px-5 text-white mt-10">
        <div className="flex items-center justify-center">
          <SearchCity id={idRegio.id} />
        </div>
        <div className="">
          <List
            className="demo-loadmore-list text-white"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={(item) => (
              <List.Item
                className="text-white"
                onClick={() => {
                  item.Name.toLowerCase() === "worms" ? handlelick() : () => {};
                }}
              >
                <h3 className={`${item.Name.toLowerCase() === "worms" ? "text-white" : "text-gray-500"} font-bold`}>{item.Name}</h3>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </>
  );
};

export default Orte;
