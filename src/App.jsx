// Importing the Outlet component from 'react-router-dom' for rendering nested routes
import { Outlet } from 'react-router-dom';
// Importing the Header and Footer components for the main layout
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// Importing the App.css stylesheet to apply styles to the app
import './App.css';

// Functional component representing the main App layout
function App() {
  return (
    // Fragment to wrap multiple components without adding extra nodes to the DOM
    <>
      {/* Header component rendering the navigation bar */}
      <Header />
      {/* Main content area containing the nested routes */}
      <main className="mx-3">
        {/* Outlet component renders the nested routes defined in the Router */}
        <Outlet />
      </main>
      {/* Footer component displaying copyright information and social links */}
      <Footer />
    </>
  );
}

// Exporting the App component as the default export
export default App;
