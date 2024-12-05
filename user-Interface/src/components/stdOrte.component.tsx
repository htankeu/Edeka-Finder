import { Cities } from "../elements/region-cities.elements";

const RPOrte: React.FC<string> = (idRegio: string) => {
  const regionCities: string[] = Cities[idRegio];

  return (
    <>
      <div>
        {regionCities.map((city) => {
          return <div>{city}</div>;
        })}
      </div>
    </>
  );
};

export default RPOrte;
