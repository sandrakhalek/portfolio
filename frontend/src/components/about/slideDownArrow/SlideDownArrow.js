import React from "react";
import $ from "jquery";
import "./SlideDownArrow.css";

class SlideDownArrow extends React.Component {
  componentDidMount() {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $(".arrow-bounce").fadeOut(200);
      } else {
        $(".arrow-bounce").fadeIn(200);
      }
    });
  }
  render() {
    return (
      <label>
        <i className="bx bx-down-arrow-alt bx-md arrow-bounce" />
      </label>
    );
  }
}

export default SlideDownArrow;
