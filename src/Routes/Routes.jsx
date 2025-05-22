import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import PlantsTableDetails from "../Components/PlantsTableDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allPlants",
        loader: () => fetch('http://localhost:3000/plants'),
        Component: AllPlants,
      },
      {
        path: "/addPlants",
        Component: AddPlants,
      },
      {
        path: "/myPlants",
        Component: MyPlants,
      },
      {
        path: "/plantDetails",
        Component: PlantsTableDetails,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      },
    ],
  },
]);
