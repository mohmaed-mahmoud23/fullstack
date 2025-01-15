import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword";
import Singup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "Singup",
        element: <Singup />,
      },
    ],
  },
]);

export default router;
