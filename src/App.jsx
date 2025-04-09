import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import { Home } from "./Pages/Home";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import EditPump from "./Pages/EditPump";
import Fan from "./Pages/Fan";
import Chiller from "./Pages/Chiller";
import CreatePump from "./Pages/CreatePump";
import CreateFan from "./Pages/CreateFan";
import EditFan from "./Pages/EditFan";
import ActualFan from "./Pages/ActualFan";
import ActualPump from "./Pages/ActualPump";
import { Home } from "./Pages/Home";
import AllPump from "./Pages/AllPump";
import SampleTestData from "./Pages/SampleTestData";
import Projects from "./Pages/Projects";
import CreateProject from "./Pages/CreateProject";
import EditProject from "./Pages/EditProject";
import CreatePumpCreation from "./Pages/CreatePumpCreation";
import CreateFlowMeter from "./Pages/CreateFlowMeter";
import CreateDomesticHotWater from "./Pages/CreateDomesticHotWater";

import ChillerCreation from "./Pages/ChillerCreation";
import CreateChiller from "./Pages/CreateChiller";
import ActualChiller from "./Pages/ActualChiller";
import CreateFanCreation from "./Pages/CreateFanCreation";
import CreateFan1 from "./Pages/CreateFan1";
import EditFan1 from "./Pages/EditFan1";
import Dashboard from "./Pages/Dashboard";
import Project1 from "./Pages/Projects1";
import Projects2 from "./Pages/Projects2";
import { Navigate } from "react-router-dom";
import EditPumpCreation from "./Pages/EditPumpCreation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          index: true,
          element: <Navigate to="/dashboard" />,
        },
        {
          path: "editPump", // Still keeping "/home" accessible
          element: <EditPump />,
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
          path: "chillerCreation",
          element: <ChillerCreation />,
        },
        {
          path: "createChiller",
          element: <CreateChiller />,
        },
        {
          path: "actualChiller",
          element: <ActualChiller />,
        },
        {
          path: "createPump",
          element: <CreatePump />,
        },
        {
          path: "createFan",
          element: <CreateFan />,
        },
        {
          path: "editFan",
          element: <EditFan />,
        },
        {
          path: "editFan1",
          element: <EditFan1 />,
        },
        {
          path: "actualFan",
          element: <ActualFan />,
        },
        {
          path: "actualPump",
          element: <ActualPump />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "editPumpCreation",
          element: <EditPumpCreation />,
        },
        {
          path: "allPump",
          element: <AllPump />,
        },
        {
          path: "sampleTestData",
          element: <SampleTestData />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "createProject",
          element: <CreateProject />,
        },
        {
          path: "editProject",
          element: <EditProject />,
        },
        {
          path: "createPumpCreation",
          element: <CreatePumpCreation />,
        },
        {
          path: "createFlowMeter",
          element: <CreateFlowMeter />,
        },
        {
          path: "createDomesticHotWater",
          element: <CreateDomesticHotWater />,
        },
        {
          path: "createFanCreation",
          element: <CreateFanCreation />,
        },
        {
          path: "createFan1",
          element: <CreateFan1 />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "project1",
          element: <Project1 />,
        },
        {
          path: "project2",
          element: <Projects2 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
