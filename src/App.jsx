import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import { Home } from "./Pages/Home";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import Pump from "./Pages/Pump";
import Fan from "./Pages/Fan";
import Chiller from "./Pages/Chiller";
import CreatePump from "./Pages/CreatePump";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "pump", // Still keeping "/home" accessible
          element: <Pump />,
        },
        {
          path: "fan",
          element: <Fan />,
        },
        {
          path: "chiller",
          element: <Chiller />,
        },
        {
          path: "createPump",
          element: <CreatePump />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
