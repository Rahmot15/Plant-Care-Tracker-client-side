import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";

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
    ],
  },
]);
