import { useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CV from './pages/CV';
import About from './pages/About';
import QRCode from './pages/QRCode';

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
  },
  {
    path: "/qr",
    element: <QRCode />
  }
]);


function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  })

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
