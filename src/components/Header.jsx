// Importing necessary components from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';

// Functional component for the Header
function Header() {
  // Get the current page path using useLocation from 'react-router-dom'
  const currentPage = useLocation().pathname;

  // Return the JSX for the header navigation
  return (
    // Navigation bar with a light background
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container for the navigation bar content */}
      <div className="container-fluid">
        {/* Logo linked to the homepage */}
        <Link to="/" className="navbar-brand">
          Martin.Estrada
        </Link>

        {/* Navigation links on the right */}
        <div className="navbar-collapse justify-content-end">
          {/* List of navigation items */}
          <ul className="navbar-nav">
            {/* About Me link with conditional active class */}
            <li className="nav-item">
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                About Me
              </Link>
            </li>
            
            {/* Projects link with conditional active class */}
            <li className="nav-item">
              <Link to="/Projects" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>
                Projects
              </Link>
            </li>
            
            {/* Contact link with conditional active class */}
            <li className="nav-item">
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </Link>
            </li>
            
            {/* Resume link with conditional active class */}
            <li className="nav-item">
              <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Exporting the Header component to make it available for other parts of the application
export default Header;
