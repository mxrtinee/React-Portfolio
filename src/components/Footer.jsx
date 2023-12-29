// Functional component for the Footer
function Footer() {
  return (
    // Footer container with a dark background, light text, and padding
    <footer className="bg-dark text-light py-3">
      {/* Container to center the content and add spacing */}
      <div className="container text-center">
        {/* Copyright text */}
        <h3>Copyright © 2023. All rights are reserved</h3>
        
        {/* GitHub icon with a link to the GitHub profile */}
        <a href="https://github.com/mxrtinee" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <i className="fab fa-github fa-2x"></i>
        </a>
        
        {/* LinkedIn icon with a link to the LinkedIn profile */}
        <a href="https://www.linkedin.com/in/martineestrada/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        
        {/* Twitter icon with a link to the Twitter profile */}
        <a href="https://twitter.com/_martindev" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

// Exporting the Footer component to make it available for other parts of the application
export default Footer;