import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import { Home } from "./Pages/Home";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import Fan from "./Pages/Fan";
import Chiller from "./Pages/Chiller";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "home", // Still keeping "/home" accessible
          element: <Home />,
        },
        {
          path: "fan", // Still keeping "/home" accessible
          element: <Fan />,
        },
        {
          path: "chiller", // Still keeping "/home" accessible
          element: <Chiller />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
