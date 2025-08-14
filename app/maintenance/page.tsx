import "./maintenance.css";

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <div className="maintenance-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        <h1 className="maintenance-title">We&apos;ll be back soon!</h1>

        <p className="maintenance-description">
          Sorry for the inconvenience. We&apos;re performing some maintenance at
          the moment. If you need to contact us in the meantime, please reach
          out to us at{" "}
          <a
            href="mailto:saisoesan.dev@gmail.com"
            className="maintenance-email"
          >
            saisoesan.dev@gmail.com
          </a>
        </p>

        <div className="maintenance-footer">
          <p>&mdash; Sai Soe San</p>
          <div className="maintenance-social">
            <a
              href="https://www.linkedin.com/in/sai-soe-san-886188199/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SaiSoeSan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
