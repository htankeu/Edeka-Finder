import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "../routes/interface.routes";

const Routers = () => {
  return (
    <>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
};
export default Routers;
