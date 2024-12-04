import edekabg from "../assets/logo-edeka.png";
import type { SplashModel } from "../models/splash.model";

const WelcomeSplash: React.FC<SplashModel> = (splasParam: SplashModel) => {
  return (
    <>
      <div className={`h-screen bg-zinc-800 flex items-center justify-center ${splasParam.isVisible ? splasParam.animation : "hidden"}`}>
        <img className="" src={edekabg.src}  />
      </div>
    </>
  );
};

export default WelcomeSplash;
