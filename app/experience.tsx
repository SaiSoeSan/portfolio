const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="experience"
    >
      <div className="my-auto">
        <h1 className="mb-5 category">Experience</h1>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="position mb-0">Full Stack Web Developer</h3>
            <div className="company">ERA Realty Network Pte Ltd, Singapore</div>
            <span className="work-duration text-primary">
              December 2021 - April 2024
            </span>
            <p className="mt-3">Building Web Applications for agents</p>
            <ul className="responsibility">
              <li>
                Developed robust front-end components using Vue.js and Nuxt.js
                and designed back-end APIs with Laravel, following DRY
                principles to enhance code maintainability and reduce future
                maintenance time, decreasing developer onboarding time by 25%.
              </li>
              <li>
                Implemented payment processing systems using PayPal with secure
                transaction protocols and compliance measures, leading to a 35%
                improvement in payment processing efficiency.
              </li>
              <li>
                Integrated Medisave and Singpass Login APIs using JavaScript and
                PHP in Laravel, optimizing user authentication and government
                service access, which significantly boosted user trust and
                reduced manual processing times.
              </li>
              <li>
                Designed and implemented a personalized dashboard using Vue.js,
                SCSS, and Oracle, incorporating custom user settings and dynamic
                data visualizations to enhance user experience and satisfaction.
              </li>
              <li>
                Conducted in-depth vulnerability assessments using Java and JSP,
                identifying critical security issues and automating patch
                deployments, significantly reducing potential threats and
                ensuring robust application security.
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              JavaScript, Vue.js, Nuxt.js, jQuery, AJAX, PHP, Laravel, Oracle,
              MySQL, Bootstrap, SCSS
            </span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="position mb-0">Full Stack Web Developer</h3>
            <div className="company">
              Momenta Group Pte Ltd and Dining Butler Pte Ltd, Singapore.
            </div>
            <span className="work-duration text-primary">
              February 2020 - December 2021
            </span>
            <p className="mt-3">Developing web applications.</p>
            <ul className="responsibility">
              <li>
                Developed responsive web applications using Laravel, JavaScript,
                and Bootstrap, integrating Vimeo API, achieving a 30%
                improvement in system efficiency and streamlined workflows.
              </li>
              <li>
                Implemented payment processing systems using PayPal with secure
                transaction protocols and compliance measures, leading to a 35%
                improvement in payment processing efficiency.
              </li>
              <li>
                Performed comprehensive vulnerability assessments using PHP and
                JavaScript, identifying critical security flaws which ensured
                adherence to industry standards and reduced system downtime by
                15%.
              </li>
              <li>
                Engineered full project lifecycles in PHP, Laravel from
                requirement gathering to deployment, optimizing hosting on
                HostGator and HostSG servers for enhanced site performance and
                reliability.
              </li>
              <li>
                Created and optimized company websites using WordPress, HTML,
                and CSS, implementing custom features to improve functionality
                and user experience.
              </li>
              <li>
                Maintained and enhanced an existing F&B POS system with Laravel,
                MySQL, and Bootstrap, adding new features to boost functionality
                and user appeal, contributing to increased customer engagement.
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              JavaScript, PHP, Laravel, HTML, CSS, Bootstrap, MySQL, WordPress
            </span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="position mb-0">Web Developer</h3>
            <div className="company">
              Host Myanmar Software Solutions, Yangon, Myanmar{" "}
            </div>
            <span className="work-duration text-primary">
              October 2017 - November 2019
            </span>
            <p className="mt-3">Build websites and web applications.</p>
            <ul className="responsibility">
              <li>
                Designed and developed responsive web applications using RESTful
                APIs and structured, normalized database systems, achieving a
                30% improvement in data retrieval speed. Delivered user-friendly
                interfaces that boosted customer engagement by 25% through
                intuitive design.
              </li>
              <li>
                Developed full project lifecycles from requirement gathering to
                deployment, implementing optimized deployment strategies on
                HostGator, which reduced downtime by 15% and ensured on-time
                milestone completion.
              </li>
              <li>
                Built customized WordPress websites with advanced features such
                as custom post types, fields, and plugins, enhancing site
                functionality by 40% and improving user experience.
              </li>
              <li>
                Authored detailed user manuals and provided on-site demos,
                streamlining user onboarding and eliminating repetitive support
                queries while effectively showcasing application capabilities.
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              JavaScript, PHP, Laravel, HTML, CSS, Bootstrap, MySQL, WordPress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
