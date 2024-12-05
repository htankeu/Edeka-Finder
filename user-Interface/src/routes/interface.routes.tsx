import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/welcome.page";
import Land from "../pages/land";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/land",
    element: <Land />,
  },
]);

export default router;
