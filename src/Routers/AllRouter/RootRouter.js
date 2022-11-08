import { createBrowserRouter } from "react-router-dom";
import AllService from "../../Component/Home/AllService";
import ServiceDetails from "../../Component/Service/ServiceDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import PostService from "../../Pages/Post/PostService";
import Regestre from "../../Pages/Regester/Regestre";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/post",
        element: <PostService></PostService>,
      },
      {
        path: "/allService",
        element: <AllService></AllService>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Regestre></Regestre>,
      },
      {
        path: "/servicedetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicedetails/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);
