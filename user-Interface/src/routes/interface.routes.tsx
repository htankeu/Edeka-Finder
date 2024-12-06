import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/welcome.page";
import Land from "../pages/land";
import Region from "../pages/regions/region";
import Scan from "../components/scan/scan.component";

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
  {
    path: "/scan",
    element: <Scan />,
  },
]);

export default router;
