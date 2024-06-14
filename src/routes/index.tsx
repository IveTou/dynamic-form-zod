import { createBrowserRouter } from "react-router-dom";
import Static from "../pages/Static";
import Home from "../pages/Home";
import Dynamic from "../pages/Dynamic";

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
  }
])

export default router;