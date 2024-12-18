import RoomMap from "../components/map/map-Supermarkt.component";
import SlideMenu from "../components/menu/slide-menu.component";
import HeaderNav from "../components/nav/Header-nav.component";
import ListProductsOverview from "../components/product/list-products.element";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen overflow-x-hidden overflow-y-scroll">
        <HeaderNav isHome={true} isConnect={true} />
        <div className="h-full flex flex-row">
          <div className="flex justify-center items-center">
            <SlideMenu />
          </div>
          <div>
            <ListProductsOverview />
          </div>
        </div>
        {/* <RoomMap /> */}
      </div>
    </>
  );
};

export default HomePage;
