import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import DisplayVideo from "./pages/DisplayVideo";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/video/:id",
    element: <DisplayVideo />,
  },
  {
    path: "/search",
    element: <Result />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
