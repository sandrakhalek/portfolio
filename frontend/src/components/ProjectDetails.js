

function ProjectDetails() {
  return (
    <div>
      <div className="parallax">
        <aside className="parallax-bg-text">
          <h1 style={{ fontSize: "80px" }}>
            <b>
              BeanBox <br />
              Coffee Shop
            </b>
          </h1>
          <h3 style={{ color: "#ffffff" }}>
            <i>Branding Project</i>
          </h3>
        </aside>
      </div>
      <section className="project-desc-section center">
        <h1 className="letter-spacing center">Brief</h1>
        <svg className="project-desc-svg-rect ">
          <rect height="20px" width="100%" />
        </svg>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="project-desc-section center">
        <figure id="logo-desc">
          <img
            src="../Ressources/logo-description.svg"
            width="70%"
            alt="description"
          />
        </figure>
        <figure id="logo">
          <img src="../Ressources/logo.svg" width="100%" alt="logo" />
        </figure>
      </section>
      <section className="project-desc-section center">
        <h1 className="letter-spacing center">Challenge</h1>
        <svg className="project-desc-svg-rect ">
          <rect height="20px" width="100%" />
        </svg>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="project-desc-section center">
        <figure id="coffee-cups">
          <img src="../Ressources/cups.png" width="70%" alt="cups" />
        </figure>
        <figure id="coffee-mug">
          <img
            src="../Ressources/coffee-mug.png"
            width="100%"
            alt="mug"
          />
        </figure>
      </section>
      <br />
    </div>
  );
}

export default ProjectDetails;
