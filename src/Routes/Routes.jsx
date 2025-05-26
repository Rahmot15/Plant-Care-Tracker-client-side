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
import PrivetRoute from "../Provider/PrivetRoute";

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
        hydrateFallbackElement: (
          <p className="text-center mt-10">
            <span className="loading  loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("https://plantserver.vercel.app/plants"),
        Component: AllPlants,
      },
      {
        path: "/addPlants",
        element: (
          <PrivetRoute>
            <AddPlants></AddPlants>
          </PrivetRoute>
        ),
      },
      {
        path: "/myPlants",
        hydrateFallbackElement: (
          <p className="text-center mt-10">
            <span className="loading  loading-dots loading-xl"></span>
          </p>
        ),

        loader: () => fetch("https://plantserver.vercel.app/plants"),
        element: (
          <PrivetRoute>
            <MyPlants></MyPlants>
          </PrivetRoute>
        ),
      },
      {
        path: "/plantDetails/:id",
        hydrateFallbackElement: (
          <p className="text-center mt-10">
            <span className="loading  loading-dots loading-xl"></span>
          </p>
        ),
        loader: ({ params }) =>
          fetch(`https://plantserver.vercel.app/plants/${params.id}`),
        Component: PlantsTableDetails,
      },
      {
        path: "/updatePlant/:id",
        hydrateFallbackElement: (
          <p className="text-center mt-10">
            <span className="loading  loading-dots loading-xl"></span>
          </p>
        ),

        loader: ({ params }) =>
          fetch(`https://plantserver.vercel.app/plants/${params.id}`),
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
