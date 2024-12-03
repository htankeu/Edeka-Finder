import { useEffect, useState } from "react";
import WelcomeSplash from "../components/Welcome.component";
import AuthPage from "./auth.page";
import type { SplashModel } from "../models/splash.model";

const WelcomePage: React.FC = () => {
  const [showSplash, setShowSplash] = useState<SplashModel>({ isVisible: true, animation: "animate-splash" });

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash({ isVisible: false, animation: "hidden" }), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <WelcomeSplash isVisible={showSplash.isVisible} animation={showSplash.animation} />
        {!showSplash.isVisible && <AuthPage />}
      </div>
    </>
  );
};

export default WelcomePage;
