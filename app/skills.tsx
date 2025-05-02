const Skills = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="skills"
    >
      <div className="my-auto">
        <h2 className="mb-5 category">Skills</h2>
        <h5 className="mb-5">Technical Skills</h5>
        <div className="row">
          <div className="col-md-4">
            <p className="programming-category mb-3">Programming Languages</p>
            <ul className="responsibility">
              <li>Javascript | PHP</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="programming-category mb-3">Web</p>
            <ul className="responsibility">
              <li>
                HTML | CSS | Bootstrap | Tailwind | jQuery | AJAX | JSON | REST
                | MVC | Redux | React Router | Ant Design
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="programming-category mb-3">Frameworks</p>
            <ul className="responsibility">
              <li>Laravel | React | Next.js | Vue.js | Express.js</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="programming-category mb-3">Database</p>
            <ul className="responsibility">
              <li>MySQL | Oracle</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="programming-category mb-3">Tools:</p>
            <ul className="responsibility">
              <li>
                Git | GitHub Desktop | SourceTree | VS Code | IntelliJ | Figma |
                Postman | phpMyAdmin | MySQL Workbench | Oracle SQL Developer |
                Jira Software | Confluence | Trello | Chrome Dev Tools |
                Bitbucket | Sentry | Slack | Docker
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="programming-category mb-3">Platforms</p>
            <ul className="responsibility">
              <li>Windows | MacOS</li>
            </ul>
          </div>
        </div>
        <h5 className="mb-5">Interpersonal Skills</h5>
        <ul className="responsibility">
          <li>
            Proactive, and initiative to share new ideas to improve the team
          </li>
          <li>Strong problem solving skills</li>
          <li>Eager to learn new technologies to stay up to date</li>
          <li>Easy to understand the project requirements</li>
          <li>Flexible and easily adaptable to new environments</li>
          <li>Good communication</li>
          <li>Take responsibility</li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
