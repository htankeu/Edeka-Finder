import HeaderNav from "../../components/nav/Header-nav.component";
import Orte from "../../components/stdOrte.component";

const Region: React.FC = () => {
  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen overflow-auto text-white">
        <HeaderNav isHome={false} isConnect={true} />
        <Orte id={"RP"} />
      </div>
    </>
  );
};
export default Region;
