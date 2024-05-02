import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import AllCraftItem from "../pages/AllCraftItem/AllCraftItem";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import PrivateRoute from "./PrivateRoute";
import CraftViewDetail from "../pages/CraftViewDetail/CraftViewDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
      path: '/addcraft',
      element: <AddCraftItem></AddCraftItem>
    },
    {
      path: '/updatecraft',
      element: <UpdateCraft></UpdateCraft>
    },
    {
      path: '/allcraft',
      element: <AllCraftItem></AllCraftItem>
    },
    {
      path: '/craft/:id',
      element: <PrivateRoute><CraftViewDetail></CraftViewDetail></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/crafts')
    }
    ],
  },
]);

export default router;
