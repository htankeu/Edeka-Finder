import SlideMenu from "../components/menu/slide-menu.component";
import HeaderNav from "../components/nav/Header-nav.component";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen">
        <HeaderNav />
        <div className="h-full flex flex-row">
          <div className="flex justify-center items-center">
            <SlideMenu />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
