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
          I am a motivated full-stack web developer with over 5 years of
          experience in the real estate and software development industries. My
          expertise lies in developing responsive, mobile-first web applications
          using HTML, CSS, and JavaScript and implementing RESTful APIs for web
          applications with PHP and Laravel. I integrated a lot of seamless API
          integrations with other systems such as Vimeo video platform,
          Singapore government APIs and Dedoco digitl signature. I excel in both
          collaborative team environments and independent work settings, and I
          enjoy contributing innovative ideas to projects. What drives me is
          creating web applications that empower clients to operate more
          efficiently, increase revenue, and achieve long-term success.
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
