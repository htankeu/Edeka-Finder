import { useEffect, useRef, useState } from "react";
import RoomMap from "../components/map/map-Supermarkt.component";
import SlideMenu from "../components/menu/slide-menu.component";
import HeaderNav from "../components/nav/Header-nav.component";
import ListProductsOverview from "../components/product/list-products.element";
import { Spin } from "antd";

const HomePage: React.FC = () => {
  const [loaded, setLoaded] = useState(true);
  const [percent, setPercent] = useState(-50);
  const [isconncet, setIsConnect] = useState<boolean>(false);
  const [ishome, setIsHome] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
      setLoaded(false);
      setIsConnect(true);
      setIsHome(true);
    }, 1500);
    return () => clearTimeout(timerRef.current);
  }, [percent]);

  return (
    <>
      <div className={` w-screen h-screen overflow-x-hidden overflow-y-scroll ${loaded ? "bg-white" : "bg-zinc-800"} `}>
        <HeaderNav isHome={ishome} isConnect={isconncet} />
        {loaded && (
          <div className="w-screen h-screen flex items-center justify-center">
            <Spin percent={percent} size="large" />
          </div>
        )}
        {!loaded && (
          <div className="h-full ">
            <SlideMenu />
            <div className="w-full z-0">
              <ListProductsOverview />
            </div>
          </div>
        )}
        {/* <RoomMap /> */}
      </div>
    </>
  );
};

export default HomePage;
