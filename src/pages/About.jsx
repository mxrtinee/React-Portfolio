export default function About() {
  return (
    <div id="about-container" className="about-container">
      <h1 id="about-title" className="about-title">About Me</h1>
      <img
        id="profile-image"
        className="profile-image"
        src="./public/images/martin.jpg"
        alt="Martin Estrada"
      />
      <p id="intro-text" className="intro-text">
        Hello, I am Martin Estrada, a passionate and results-driven full-stack software developer. With a strong foundation
        in both front-end and back-end technologies, I bring a holistic approach to creating robust and scalable software
        solutions.
      </p>
      <section id="technical-expertise" className="about-section">
        <h2>Technical Expertise</h2>
        <p>
          My journey in software development began with a curiosity for crafting seamless user experiences on the front end.
          Proficient in modern JavaScript frameworks such as React.js, I specialize in building responsive and interactive
          user interfaces that elevate the overall user experience.
          <br></br> On the server side, I have a wealth of experience working with technologies like Node.js and Express.js.
          Leveraging these tools, I design and implement scalable APIs and backend systems that form the backbone of robust
          applications.
        </p>
      </section>
  <section>
    <h2>Database Management</h2>
    <p>Database architecture is a crucial aspect of any applications performance, and I excel in designing and optimizing databases. Whether it is SQL databases like MySQL or NoSQL databases like MongoDB, I am adept at structuring data to meet the unique requirements of each project.</p>
  </section>
  <section>
    <h2>DevOps and Deployment</h2>
    <p>Taking a project from development to deployment is a process I thoroughly enjoy. I am well-versed in deploying applications on cloud platforms such as AWS or Heroku, and I utilize containerization tools like Docker for seamless and scalable deployments.</p>
  </section>
  <section>
    <h2>Continuous Learning</h2>
    <p>In the ever-evolving field of technology, I believe in the importance of continuous learning. I stay up-to-date with the latest industry trends and technologies, ensuring that the solutions I develop are not only cutting-edge but also built on best practices.</p>
  </section>
  <section>
    <h2>Collaboration and Communication</h2>
    <p>I understand the significance of effective collaboration in a team environment. My communication skills, coupled with the ability to work seamlessly with cross-functional teams, contribute to a positive and productive work environment.<br></br>

    If you are looking for a full-stack developer who combines technical expertise with a passion for creating innovative solutions, I would love to be part of your next project. Lets build something amazing together!</p>
  </section>
</div>

  );
}
