import Image from "next/image";
import testimonial from "../public/testimonial.jpg";
const Testimonial = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="testimonial"
    >
      <div className="my-auto">
        <h2 className="mb-5 category">Testimonial</h2>
        <p className="mb-5">
          I am honored to feature a testimonial from the Chief Technology
          Officer of ERA Realty Network Pte Ltd, where I had the privilege to
          contribute to innovative projects and deliver impactful solutions.
        </p>
        <Image
          src={testimonial}
          alt="Testimonial from CTO"
          className="img-fluid testimonial-img"
        />
      </div>
    </section>
  );
};

export default Testimonial;
