import Image from "next/image";
import profilePic from "../public/me.jpg";
const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#about">
        <span className="d-block d-lg-none">Sai Soe San</span>
        <span className="d-none d-lg-block">
          <Image
            priority
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={profilePic}
            alt="Author Profile Picture"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#testimonial">
              Testimonial
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
