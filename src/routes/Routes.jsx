import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Catagory from "../Pages/Home/Catagory/Catagory";
import NewsId from "../layouts/NewsId";
import News from "../Pages/News/News";
import Form from "../layouts/Form";
import Login from "../Pages/Form/Login/Login";
import SignUp from "../Pages/Form/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://dragon-news-server-babuhp80-gmailcom.vercel.app/news"),
      },
      {
        path: "/catagory/:id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-babuhp80-gmailcom.vercel.app/catagory/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: (
      <PrivetRoute>
        <NewsId></NewsId>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-babuhp80-gmailcom.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/form",
    element: <Form></Form>,
    children: [
      {
        path: "/form/login",
        element: <Login></Login>,
      },
      {
        path: "/form/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
