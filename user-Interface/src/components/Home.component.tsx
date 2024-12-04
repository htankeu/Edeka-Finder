import GermanMap from "./home/home-svg.component";

const HomeComponent: React.FC = () => {
  return (
    <>
      <div>
        {/* <div className="h-screen flex flex-col text-white items-center">
          <h1 className="font-bold lg:text-xl">Choose your Region in Germany</h1>
        </div> */}
        <GermanMap />
      </div>
    </>
  );
};

export default HomeComponent;
