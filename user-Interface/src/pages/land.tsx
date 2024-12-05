import { useState } from "react";
import GermanMap from "../components/home/home-svg.component";
import HeaderNav from "../components/nav/Header-nav.component";
import ChooseLand from "../components/land.componennt";

const Land: React.FC = () => {
  const [ischooseLand, setChooseLand] = useState<boolean>(false);

  const chooseTheLand = () => {
    setChooseLand((prevState) => !prevState);
  };
  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 flex flex-col gap-16">
        <HeaderNav />
        <div className={`h-full ${!ischooseLand ? "flex items-center justify-center" : ""}`}>{!ischooseLand ? <ChooseLand onclick={chooseTheLand} /> : <GermanMap />}</div>
      </div>
    </>
  );
};

export default Land;
