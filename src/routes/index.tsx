import { createBrowserRouter } from "react-router-dom";
import Static from "../pages/Static";
import Home from "../pages/Home";
import Dynamic from "../pages/Dynamic";
import CrossValidation from "../pages/CrossValidation";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/static',
    element: <Static />,
  },
  {
    path: '/dynamic',
    element: <Dynamic />,
  },
  {
    path: '/cross',
    element: <CrossValidation />,
  },
])

export default router;