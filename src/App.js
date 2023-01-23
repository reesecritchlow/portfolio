import './App.css';
import Homepage from './pages/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CV from './pages/CV';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Homepage />,
  },
  {
    path: "/cv",
    element: <CV />
  },
  {
    path: "/",
    element: <About />
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
