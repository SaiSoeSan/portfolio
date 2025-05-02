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
                Developed responsive front-end applications using JavaScript,
                React, Next.js, jQuery, AJAX, and Bootstrap and implemented
                scalable RESTful APIs and web applications using PHP, Laravel,
                with Oracle including database schema design and optimization,
                following W3C web accessibility standards for user experiences.
              </li>
              <li>
                Integrated third-party APIs such as Dedoco Digital Signing,
                Medisave, and Singpass Login to streamline authentication
                boosting user trust and reducing manual processing times.
              </li>
              <li>
                Implemented PayPal and PayNow payment gateways with secure
                transactions, increasing payment processing efficiency by 35%
              </li>
              <li>
                Enhanced security by integrating Cloudflare Turnstile for the
                bot detection and implemented rate limit to prevent DDoS and
                brute-force attacks and conducted vulnerability assessments
                (including SQL injection and XSS), ensuring compliance with
                industry standards and reducing system downtime by 15%
              </li>
              <li>
                Provided technical support to 8,000+ realtors and authored
                detailed Confluence documentations and collaborated with Agile
                teams to streamline development workflows.
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              PHP, Laravel, Java, JSP, JavaScript, React, Next.js, WordPress,
              jQuery, AJAX, JSON, Oracle, MySQL, CSS, Bootstrap, Tailwind, Ant
              Design, Cloudflare Turnstile, API Rate Limit
            </span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="position mb-0">PHP Developer</h3>
            <div className="company">
              Momenta Group Pte Ltd and Dining Butler Pte Ltd, Singapore.
            </div>
            <span className="work-duration text-primary">
              February 2020 - December 2021
            </span>
            <p className="mt-3">Developing web applications.</p>
            <ul className="responsibility">
              <li>
                Designed database schema and optimization and implemented
                front-end applications, using JavaScript, Vue.js, jQuery, AJAX,
                Bootstrap, and CSS and implemented scalable RESTful APIs and web
                applications using PHP, Laravel, and MySQL
              </li>
              <li>
                Integrated third-party APIs, including PayPal for payments and
                Vimeo for video storage, to streamline operations and improve
                efficiency and user experience
              </li>
              <li>
                Performed vulnerability assessments (including SQL injection and
                XSS) for web security in the existing F&B POS system, reducing
                system downtime by 15% and enhanced security by integrating
                Google reCAPTCHA v3 to protect websites from brute-force
                attacks, and bots.
              </li>
              <li>
                Developed WordPress websites with Elementor, including
                e-commerce platforms using WooCommerce and engineered full
                project lifecycles —from requirement analysis to deployment—
                optimizing hosting on HostGator and Host SG servers for enhanced
                site performance and reliability
              </li>
              <li>
                Collaborated with clients to gather web application
                requirements, translating technical concepts into non-technical
                terms to ensure alignment and satisfaction
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              PHP, Laravel, MySQL, HTML, CSS, JavaScript, Vue.js, jQuery, AJAX,
              JSON, Bootstrap, WordPress, WooCommerce, Elementor, Google
              reCAPTCHA v3
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
                Developed responsive web applications and scalable RESTful APIs
                using PHP, Laravel, jQuery, AJAX, JSON and Bootstrap together
                with MySQL database and implemented responsive websites using
                WordPress and Drupal CMS improving user experience
              </li>
              <li>
                Collaborated with clients to gather and analyze web application
                requirements, translating technical concepts into non-technical
                terms to ensure alignment and satisfaction
              </li>
              <li>
                Authored detailed user manuals and conducted on-site demos,
                streamlining user onboarding and improving adoption rates
              </li>
            </ul>
            <p className="mb-0">Technologies Used:</p>
            <span className="technologies">
              PHP, Laravel, WordPress, Drupal, MySQL, HTML, CSS, JavaScript,
              jQuery, AJAX, JSON, Bootstrap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
