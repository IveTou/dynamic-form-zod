import { createBrowserRouter } from "react-router-dom";
import StandAlone from "../pages/StandAlone";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/stand',
    element: <StandAlone />,
  }
])

export default router;