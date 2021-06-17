import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row home-row ">
          <section className="col-xs-12 col-lg-9 title-div">
            <div id="container">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "UI/UX Designer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <h1 className="second-title">
              Multimedia &amp; Software <br />
              Engineer
            </h1>
          </section>
          <aside className="avatar-div col-xs-7 col-lg-3">
            <img id="avatar" alt="Avatar"
              src={window.localStorage.getItem('theme') === 'light' ? "../Ressources/avatar.svg" : "../Ressources/avatarAfter.svg"} />
          </aside>
        </div>
        <section>
          <a href="/projects" className="hoverbale explore ">
            Explore Projects <i className="bx bx-arrow-back bx-rotate-180" />
          </a>
        </section>
      </div>
    );
  }
}

export default Home;
