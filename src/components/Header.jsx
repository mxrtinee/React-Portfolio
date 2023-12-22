import { Link, useLocation } from 'react-router-dom';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo linked to the homepage */}
        <Link to="/" className="navbar-brand">
          Martin.Estrada
        </Link>

        {/* Navigation links on the right */}
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </Link>
            </li>
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

export default Header;
