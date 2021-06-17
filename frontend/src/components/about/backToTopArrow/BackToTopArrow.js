import React from "react";
import $ from "jquery";
import "./BackToTopArrow.css";

class BackToTopArrow extends React.Component {
  componentDidMount() {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 50) {
        $("#return-to-top").fadeIn(200); // Fade in the arrow
      } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
      }
    });

    $("#return-to-top").on("click", function () {
      // When arrow is clicked
      $("html").animate(
        {
          scrollTop: 0, // Scroll to top of body
        },
        500
      );
    });
  }
  render() {
    return (
      <button className="hoverbale" id="return-to-top">
        <i className="bx bxs-up-arrow" />
      </button>
    );
  }
}

export default BackToTopArrow;
