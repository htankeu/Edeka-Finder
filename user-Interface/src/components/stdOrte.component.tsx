import { Cities } from "../elements/region-cities.elements";

const Orte: React.FC<{id:string}> = (idRegio) => {
  const regionCities: string[] = Cities[idRegio.id];

  return (
    <>
      <div className="">
        {regionCities.map((city) => {
          return <div>{city}</div>;
        })}
      </div>
    </>
  );
};

export default Orte;
