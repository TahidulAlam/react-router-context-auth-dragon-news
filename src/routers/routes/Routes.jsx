import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AboutUs from "../../pages/home/aboutUs/AboutUs";
import Career from "../../pages/home/career/Career";
import Home from "../../pages/home/Home";
import Details from "../../pages/details/Details";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";
import PrivateRoute from "../privateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/src/assets/data/news.json"),
        children: [
          {
            path: "/about",
            element: <AboutUs></AboutUs>,
          },
          {
            path: "/career",
            element: <Career></Career>,
          },
        ],
      },
    ],
  },
  {
    path: "/details/:_id",
    element: (
      <PrivateRoute>
        <Details></Details>
      </PrivateRoute>
    ),
    loader: () => fetch("/src/assets/data/news.json"),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default Routes;
