import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/welcome.page";
import Land from "../pages/land";
import Region from "../pages/regions/region";
import Scan from "../components/scan/scan.component";
import HomePage from "../pages/home.page";
import RoomMap from "../components/map/map-Supermarkt.component";
import ProductSearch from "../components/product/product-search.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
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
  {
    path: "home/product/search",
    element: <ProductSearch />,
  },
  {
    path: ":Id/map",
    element: <RoomMap />,
  },
]);

export default router;
