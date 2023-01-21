import './App.css';
import Homepage from './pages/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CV from './pages/CV';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/cv",
    element: <CV />
  }
]);

function App() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xjx5hnb.css" />
      </head>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
