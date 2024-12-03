import { useEffect, useState } from "react";
import WelcomeSplash from "../components/Welcome.component";
import AuthPage from "./auth.page";

const WelcomePage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <WelcomeSplash isVisible={showSplash} />
        {!showSplash && <AuthPage />}
      </div>
    </>
  );
};

export default WelcomePage;
