import Login from "../components/Auth-login.component";
import Register from "../components/Auth-register.component";

const AuthPage: React.FC = () => {
  return (
    <>
      <div>
        <Login />
        <Register />
      </div>
    </>
  );
};

export default AuthPage;
