const Education = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5 category">Education</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="position mb-0">
              Maharishi International University, Fairfield, Iowa
            </h3>
            <div className="company">Master of Science in Computer Science</div>
            <span
              className="work-duration text-primary"
              style={{ fontWeight: "bold" }}
            >
              In progress via distance education; expected completion 12/2026
            </span>
            <p className="mb-0 mt-3">Key Courses:</p>
            <span className="technologies">
              Web Application Programming, Big Data Technology, Web Application
              Architecture, Algorithms
            </span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="position mb-0">
              University of Computer Studies, Meiktila, Myanmar
            </h3>
            <div className="company">
              Bachelor of Science in Computer Science
            </div>
            <span className="work-duration text-primary">
              December 2012 - September 2017
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
