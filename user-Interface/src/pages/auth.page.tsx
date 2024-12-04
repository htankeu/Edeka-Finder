import { useState } from "react";
import Login from "../components/Auth-login.component";
import Register from "../components/Auth-register.component";
import HeaderNav from "../components/nav/Header-nav.component";
import GermanMap from "../components/home/home-svg.component";
import Rhinland from "../components/germany/rhinland.component";

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
        {/* <Rhinland/> */}
        <GermanMap/>
      </div>
    </>
  );
};

export default AuthPage;
