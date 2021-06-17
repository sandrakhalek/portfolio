import React from "react";
import "./Project.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

class Project extends React.Component {
  render() {
    return (
      <Carousel
        indicators={false}
        interval={null}
        nextIcon={<i class="bx bxs-right-arrow bx-md"></i>}
        prevIcon={<i class="bx bxs-left-arrow bx-md"></i>}
      >
        <Carousel.Item>
          <Link to="/beanBox">
            <img
              className="d-block "
              src="../Ressources/coffee.svg"
              alt="BeanBox"
              width="55%"
            />
            <Carousel.Caption>
              <h2 className="letter-spacing"> BeanBox Coffee Shop </h2>
              <svg className="project-svg-rect">
                <rect height="15px" width="100%" />
              </svg>
              <h5 className="figcaption-subtitle"> Branding project </h5>
              <p>
                A project that consisted on creating a logo and brand identity
                for a coffee shop
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/beanBox">
            <img
              className=" d-block "
              src="../Ressources/booking.svg"
              alt="Booking.com"
              width="55%"
            />
            <Carousel.Caption className="carousel-caption d-none d-md-block project-caption">
              <h2 className="letter-spacing"> Booking.com </h2>
              <svg className="project-svg-rect">
                <rect height="15px" width="100%" />
              </svg>
              <h5 className="figcaption-subtitle"> Website Lift Up </h5>
              <p>
                Re - designing the known booking.com website, giving it a lift
                up.
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block "
            src="../Ressources/coffee.svg"
            alt="BeanBox"
            width="55%"
          />
          <Carousel.Caption className="carousel-caption d-none d-md-block project-caption">
            <h2 className="letter-spacing"> BeanBox Coffee Shop </h2>
            <svg className="project-svg-rect">
              <rect height="15px" width="100%" />
            </svg>
            <h5 className="figcaption-subtitle"> Branding project </h5>
            <p>
              A project that consisted on creating a logo and brand identity for
              a coffee shop
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Project;
