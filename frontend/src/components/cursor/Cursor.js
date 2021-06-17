import React from "react";
import $ from "jquery";
import "./Cursor.css";

class Cursor extends React.Component {
  componentDidMount() {
    $("body").on("mousemove", function (n) {
      $("#cursor").css("left", n.clientX + "px");
      $("#cursor").css("top", n.clientY + "px");
    });

    function cursorMouseOver(t) {
      $("#cursor").addClass("hover");
    }

    function cursorMouseOut(t) {
      $("#cursor").removeClass("hover");
    }

    function cursorMouseEvent(t) {
      t.addEventListener("mouseover", cursorMouseOver);
      t.addEventListener("mouseout", cursorMouseOut);
    }

    for (var r = $(".hoverbale"), a = r.length - 1; a >= 0; a--) {
      cursorMouseEvent(r[a]);
    }
  }

  render() {
    return <div className="cursor" id="cursor"></div>;
  }
}

export default Cursor;
