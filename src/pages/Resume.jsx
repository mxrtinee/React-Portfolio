export default function Resume() {
  return (
    <div className="resume-container">
      <article>
        <h1>Resume</h1>
        <p>
          Results-driven full-stack software developer with a passion for creating robust and scalable solutions. Experienced in both front-end and back-end technologies, with expertise in React.js, Node.js, and database management. Proven ability to deliver high-quality software and collaborate effectively in cross-functional teams.
        </p>
      </article>

      <article>
        {/* Link to your resume PDF */}
        <p>
          Download my resume{' '}
          <a href="https://drive.google.com/file/d/1aavKAdfuj--AOEV_tjyuBT22WcSe682T/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      </article>

      <article>
        {/* Breakdown of full-stack skills */}
        <h2>Full-Stack Skills</h2>
        <ul>
          <li>Frontend: React, JavaScript, HTML, CSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB, MySQL</li>
          <li>Version Control: Git</li>
          {/* Add more skills as needed */}
        </ul>
      </article>

      <article>
        {/* Education Section */}
        <h2>Education</h2>
        <p>
          Continuing and Professional Education Coding Boot Camp
          <br />University of Oregon, 2024
        </p>
      </article>
    </div>
  );
}