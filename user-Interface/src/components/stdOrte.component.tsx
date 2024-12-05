import { useEffect, useState } from "react";
import { Cities } from "../elements/region-cities.elements";
import { Button, List } from "antd";

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

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <>
      <div className="">
        <List className="demo-loadmore-list" loading={initLoading} itemLayout="horizontal" loadMore={loadMore} dataSource={list} renderItem={(item) => <List.Item>{item.Name}</List.Item>}></List>
      </div>
    </>
  );
};

export default Orte;
