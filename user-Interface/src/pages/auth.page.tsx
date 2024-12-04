import { useState } from "react";
import Login from "../components/Auth-login.component";
import Register from "../components/Auth-register.component";
import HeaderNav from "../components/nav/Header-nav.component";
import GermanMap from "../components/home/home-svg.component";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLoging] = useState<boolean>(true);

  const toogleAuth = () => {
    setIsLoging((prevState) => !prevState);
  };
  return (
    <>
      <div className="bg-zinc-800">
        <HeaderNav />
        {/* {isLogin ? <Login toogle={toogleAuth}/> : <Register toogle={toogleAuth} />} */}
        <GermanMap/>
      </div>
    </>
  );
};

export default AuthPage;
