import Image from "next/image";
import linkedin from "../public/linkedin.png";
import github from "../public/github.png";
const About = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="name mb-0">Sai Soe San</h1>
        <div className="address mb-5">
          Fairfield, Iowa 52557 . (641) 233-1345 .&nbsp;
          <a href="mailto:saisoesan.dev@email.com">saisoesan.dev@gmail.com</a>
        </div>
        <p className="mb-5">
          Passionate Full Stack Web Developer with 5 years of experience
          designing, developing, and maintaining scalable enterprise web
          applications for the real estate and software development industries.
          Skilled in creating efficient, user-centric solutions using a strong
          tech stack, including PHP, Laravel, JavaScript, Vue.js, MySQL, and
          Oracle. Strong background in both backend and frontend development,
          with a focus on delivering high-quality, maintainable code. Excellent
          communicator and proactive team player with a proven ability to solve
          problems and adapt quickly to new challenges, building strong
          collaboration with cross-functional teams to achieve project goals and
          exceed client expectations.
        </p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/sai-soe-san-886188199/"
              target="_blank"
            >
              <Image
                style={{ width: "50px", height: "50px" }}
                src={linkedin}
                alt="LinkedIn Image"
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/SaiSoeSan" target="_blank">
              <Image
                style={{ width: "50px", height: "50px" }}
                src={github}
                alt="GitHub Image"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;