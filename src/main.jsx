import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Projects from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

