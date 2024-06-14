import { createBrowserRouter } from "react-router-dom";
import StandAlone from "../pages/StandAlone";
import Home from "../pages/Home";
import Dynamic from "../pages/Dynamic/Dynamic";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/stand',
    element: <StandAlone />,
  },
  {
    path: '/dynamic',
    element: <Dynamic />,
  }
])

export default router;