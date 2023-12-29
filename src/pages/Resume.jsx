// Functional component representing the Resume page
export default function Resume() {
  return (
    // Container for the entire resume content
    <div className="resume-container">
      {/* Introduction section */}
      <article>
        {/* Resume heading */}
        <h1>Resume</h1>
        {/* Brief introduction about the developer */}
        <p>
          Results-driven full-stack software developer with a passion for creating robust and scalable solutions. 
          Experienced in both front-end and back-end technologies, with expertise in React.js, Node.js, and database management. 
          Proven ability to deliver high-quality software and collaborate effectively in cross-functional teams.
        </p>
      </article>

      {/* Resume download link section */}
      <article>
        {/* Link to download the developer's resume in PDF format */}
        <p>
          Download my resume{' '}
          <a href="https://drive.google.com/file/d/1aavKAdfuj--AOEV_tjyuBT22WcSe682T/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      </article>

      {/* Skills section */}
      <article>
        {/* Heading for the full-stack skills section */}
        <h2>Full-Stack Skills</h2>
        {/* List of full-stack skills */}
        <ul>
          <li>Frontend: React, JavaScript, HTML, CSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB, MySQL</li>
          <li>Version Control: Git</li>
          {/* Add more skills as needed */}
        </ul>
      </article>

      {/* Education section */}
      <article>
        {/* Heading for the education section */}
        <h2>Education</h2>
        {/* Details about the education, including the coding boot camp and graduation year */}
        <p>
          Continuing and Professional Education Coding Boot Camp
          <br />University of Oregon, 2024
        </p>
      </article>
    </div>
  );
}
