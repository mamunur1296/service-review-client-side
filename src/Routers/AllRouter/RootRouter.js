import { createBrowserRouter } from "react-router-dom";
import EooroPage from "../../Component/Error/EooroPage";
import AllService from "../../Component/Home/AllService";
import ServiceDetails from "../../Component/Service/ServiceDetails";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Myreveow from "../../Pages/Myreveow/Myreveow";
import MyrevewUpdate from "../../Pages/Myreveow/MyrevewUpdate";
import PostService from "../../Pages/Post/PostService";
import PostUpdate from "../../Pages/Post/PostUpdate";
import Regestre from "../../Pages/Regester/Regestre";
import PrivateRouter from "../Priveate/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <EooroPage></EooroPage>,
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
        element: (
          <PrivateRouter>
            <PostService></PostService>
          </PrivateRouter>
        ),
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/postUpdate/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicedetails/${params.id}`),
        element: <PostUpdate></PostUpdate>,
      },
      {
        path: "/recewupdate/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allrevewsbyid/${params.id}`),
        element: <MyrevewUpdate></MyrevewUpdate>,
      },
      {
        path: "/myrevew",
        element: (
          <PrivateRouter>
            <Myreveow></Myreveow>
          </PrivateRouter>
        ),
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
