import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";

import { Calendar, Dashboard, Messages, Teams, TournamentTracking } from './components';
// import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "tournament-tracking",
        element: <TournamentTracking />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path:"/sidebar",
    element:<Sidebar/>
  },
  
]);


function App() {
  
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
