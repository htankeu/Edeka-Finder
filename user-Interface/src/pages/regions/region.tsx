import HeaderNav from "../../components/nav/Header-nav.component";
import Orte from "../../components/stdOrte.component";

const Region: React.FC = () => {
  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen overflow-auto text-white">
        <HeaderNav/>
        <Orte id={"RP"}/>
      </div>
    </>
  );
};
export default Region;
