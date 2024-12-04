import { RPCities } from "../elements/region-cities.elements";

const RPOrte: React.FC = () => {
  return (
    <>
      <div>
        {RPCities.map((city) => {
          return <div> {city}</div>;
        })}
      </div>
    </>
  );
};

export default RPOrte;
