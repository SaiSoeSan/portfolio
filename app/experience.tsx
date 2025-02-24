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
            <p className="mt-3">
              Building Web Applications for over 8,000 agents
            </p>
            <ul className="responsibility">
              <li>
                Created responsive mobile-first frontend web applications using
                JavaScript, jQuery, AJAX, Bootstrap, Vue.js and Nuxt.js.
              </li>
              <li>
                Implemented RESTful APIs for mobile app and web applications
                using PHP, Laravel with Oracle database enhancing code
                maintainability.
              </li>
              <li>
                Integrated third-party applications for seamless operations,
                including PayPal payment system, Dedoco Digital Signing,
                government APIs like Medisave and Singpass login to enhance
                efficiency and user experience.
              </li>
              <li>
                Collaborated with mobile developers and designers to integrate
                user-facing elements with server-side logic.
              </li>
              <li>
                Debugged, troubleshot, and resolved technical challenges,
                ensuring seamless functionality across all projects.
              </li>
              <li>
                Managed database structure using DB diagram and optimized
                databases including Eloquent ORM and Laravel Query Builder,
                ensuring efficient query performance and data integrity.
              </li>
              <li>
                Tested Laravel applications using PHPUnit including HTTP tests,
                and database tests.
              </li>
              <li>
                Implemented comprehensive vulnerability assessments for web
                security, including SQL injection and XSS in Laravel and JSP
                applications.
              </li>
              <li>
                Used version control tools like Git for source code management
                and collaboration, and Jira for project management, which have
                streamlined collaboration and workflow efficiency.
              </li>
              <li>
                Developed comprehensive Confluence documentation for every
                feature and application I worked on, ensuring easy handovers
                during critical situations, and streamlining onboarding
                processes for new team members.
              </li>
              <li>
                Provided technical support to customers by responding to
                inquiries via phone or in person, ensuring prompt and effective
                solutions to technical issues.
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
                Designed the database structure and developed a full-stack web
                applications, implemented responsive mobilefirst front-end
                applications using JavaScript, jQuery, AJAX, Bootstrap, and CSS.
              </li>
              <li>
                Implemented RESTful APIs for web applications using PHP, Laravel
                with MySQL database enhancing code maintainability.
              </li>
              <li>
                Integrated third-party applications for seamless operations,
                including PayPal payment system and Vimeo video storing API to
                enhance efficiency and user experience.
              </li>
              <li>
                Developed professional company websites using WordPress and
                Elementor, including ecommerce platforms with WooCommerce.
              </li>
              <li>
                Optimized website SEO with the Yoast plugin, ensuring
                user-friendly design and responsiveness.
              </li>
              <li>
                Performed comprehensive vulnerability assessments for web
                security such as SQL injection, XSS in our existing web-based
                F&B POS system.
              </li>
              <li>
                Assisted in on-site technical support, configuring printers for
                seamless integration with the company&apos;s POS software to
                ensure efficient operations.
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              JavaScript, jQuery, AJAX, PHP, Laravel, MySQL, JSON, HTML, CSS,
              Bootstrap, WordPress, Elementor, WooCommerce
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
                Created responsive mobile-first web applications and RESTful
                APIs using PHP, Laravel, jQuery, and Bootstrap.
              </li>
              <li>
                Developed professional WordPress websites with advanced features
                such as custom post types, fields, and plugins improving user
                experience.
              </li>
              <li>
                Implemented web applications using Drupal CMS, ensuring seamless
                content management and scalability.
              </li>
              <li>
                Performed data entry tasks for client web applications, ensuring
                accuracy and consistency of data.
              </li>
              <li>
                Collaborated with clients to gather and analyzed web application
                requirements, translating technical concepts into non-technical
                terms to ensure alignment and satisfaction.
              </li>
              <li>
                Authored detailed user manuals and conducted on-site demos,
                streamlining user onboarding and improving adoption rates.
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              JavaScript, jQuery, AJAX, PHP, Laravel, MySQL, HTML, CSS3,
              Bootstrap, JSON, WordPress, Drupal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
