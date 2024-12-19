import { useEffect, useRef, useState } from "react";
import GermanMap from "../components/home/home-svg.component";
import HeaderNav from "../components/nav/Header-nav.component";
import ChooseLand from "../components/land.componennt";
import { Spin } from "antd";

const Land: React.FC = () => {
  const [ischooseLand, setChooseLand] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(-50);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timerRef.current);
  }, [percent]);

  const chooseTheLand = () => {
    setChooseLand((prevState) => !prevState);
  };
  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 flex flex-col gap-16">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <Spin percent={percent} size="large" />
          </div>
        )}
        {!loading && (
          <div>
            <HeaderNav isHome={false} isConnect={true} />
            <div className={`h-full ${!ischooseLand ? "flex items-center justify-center" : ""}`}>{!ischooseLand ? <ChooseLand onclick={chooseTheLand} /> : <GermanMap />}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Land;
