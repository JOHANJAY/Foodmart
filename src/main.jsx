import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./routes/Category/Categories.jsx";
import LandingPageLayout from "./layout/LandingPageLayout.jsx";
import Vendors from "./routes/Vendors.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Login from "../pages/login.jsx";
import Order from "../pages/Order.jsx";
import MyCart from "../pages/myCart.jsx";
import Favourites from "../pages/Favourites.jsx";
import Header from "./components/Header";
import HeaderSignUp from "./components/HeaderSignUp.jsx";
import SignUp from "../pages/signUp.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <HeaderSignUp />
        <Login />
      </>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <>
        <HeaderSignUp />
        <SignUp />
      </>
    ),
  },
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/vendors",
        element: <Vendors />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
