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
import UpdatePlant from "../Pages/UpdatePlant";

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
        loader: () => fetch("https://plant-server-side-iceeeflhw-rahmatullahs-projects-5d1688dc.vercel.app/plants"),
        Component: AllPlants,
      },
      {
        path: "/addPlants",
        Component: AddPlants,
      },
      {
        path: "/myPlants",
        loader: () => fetch("https://plant-server-side-iceeeflhw-rahmatullahs-projects-5d1688dc.vercel.app/plants"),
        Component: MyPlants,
      },
      {
        path: "/plantDetails/:id",
        loader: ({ params }) =>
          fetch(`https://plant-server-side-iceeeflhw-rahmatullahs-projects-5d1688dc.vercel.app/plants/${params.id}`),
        Component: PlantsTableDetails,
      },
      {
        path: "/updatePlant/:id",
        loader: ({params}) => fetch(`https://plant-server-side-iceeeflhw-rahmatullahs-projects-5d1688dc.vercel.app/plants/${params.id}`),
        Component: UpdatePlant,
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
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
