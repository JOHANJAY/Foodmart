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

const router = createBrowserRouter([
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
