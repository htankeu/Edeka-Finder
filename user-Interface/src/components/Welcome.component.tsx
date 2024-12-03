import edekabg from "../assets/logo-edeka.png";
import type { SplashModel } from "../models/splash.model";

const WelcomeSplash: React.FC<SplashModel> = (splasParam: SplashModel) => {
  return (
    <>
      <div className={`h-screen flex items-cente justify-center transition opacity ease-linear delay-1000 ${splasParam.isVisible ? "visible" : "hidden"}`}>
        <img className="transition opacity ease-linear delay-1000" src={edekabg.src} />
      </div>
    </>
  );
};

export default WelcomeSplash;

{
  /* <style>
  #background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition:
      opacity 1s ease,
      visibility 1s ease;
  }

  .container {
    font-family: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;
    height: 100%;
  }

  .container.hidden {
    opacity: 0;
    visibility: hidden;
  }

  @media screen and (max-width: 768px) {
    #container {
      display: flex;
      flex-direction: column;
    }
  }
</style> */
}
