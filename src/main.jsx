// Refactored Main File with Routes and Suspense
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./routes/App.jsx"));
const Categories = lazy(() => import("./routes/Category/Categories.jsx"));
const LandingPageLayout = lazy(() => import("./layout/LandingPageLayout.jsx"));
const Vendors = lazy(() => import("./routes/Vendors.jsx"));
const About = lazy(() => import("./routes/About.jsx"));
const Contact = lazy(() => import("./routes/Contact.jsx"));
const Login = lazy(() => import("../pages/login.jsx"));
const Order = lazy(() => import("../pages/Order.jsx"));
const MyCart = lazy(() => import("../pages/myCart.jsx"));
const Favourites = lazy(() => import("../pages/Favourites.jsx"));
const SignUp = lazy(() => import("../pages/signUp.jsx"));
const ProductDetails = lazy(() =>
  import("./routes/Category/ProductsDetails.jsx")
);
const HeaderSignUp = lazy(() => import("./components/HeaderSignUp.jsx"));

const LoadingFallback = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <>
          <HeaderSignUp />
          <Login />
        </>
      </Suspense>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <>
          <HeaderSignUp />
          <SignUp />
        </>
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <LandingPageLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Categories />
              </Suspense>
            ),
          },
          {
            path: ":category",
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Categories />
              </Suspense>
            ),
          },
          {
            path: ":category/:productId",
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <ProductDetails />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "vendors",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Vendors />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "favourites",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Favourites />
          </Suspense>
        ),
      },
      {
        path: "order",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Order />
          </Suspense>
        ),
      },
      {
        path: "my-cart",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MyCart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
