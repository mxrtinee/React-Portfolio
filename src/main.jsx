// Importing ReactDOM for rendering React components
import ReactDOM from 'react-dom/client';
// Importing createBrowserRouter and RouterProvider from 'react-router-dom' for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the main App component and other page components
import App from './App.jsx';
import Error from './pages/Error.jsx';
import Projects from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';

// Creating a BrowserRouter instance with route configurations
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Root component for the entire application
    errorElement: <Error />, // Error component to be displayed on route errors
    children: [
      {
        index: true, // Default route for the root path
        element: <About />, // Component for the About page
      },
      {
        path: '/Projects',
        element: <Projects />, // Component for the Projects page
      },
      {
        path: '/Resume',
        element: <Resume />, // Component for the Resume page
      },
      {
        path: '/Contact',
        element: <Contact />, // Component for the Contact page
      },
    ],
  },
]);

// Rendering the application using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  // Providing the router to the entire application using RouterProvider
  <RouterProvider router={router} />
);
