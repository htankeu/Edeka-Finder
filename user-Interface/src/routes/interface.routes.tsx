import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/welcome.page";
import Land from "../pages/land";
import Region from "../pages/regions/region";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/land",
    element: <Land />,
  },
  {
    path: "/region",
    element: <Region />,
  },
]);

export default router;
