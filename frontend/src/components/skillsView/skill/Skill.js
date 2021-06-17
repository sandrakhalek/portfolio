import React from "react";

function Skill(props) {
  var name = props.skill.name.toUpperCase();
  var searchTerm = props.searchTerm.toLowerCase();

  const searchNotNull = props.searchTerm !== "";
  const isFound = name.toLowerCase().includes(searchTerm);

  return (
    <li
      className="skill-name"
      style={{
        backgroundColor: searchNotNull && isFound ? "#c4494b" : "#e4afb0",
      }}
    >
      {name}
      <span
        className="list-x hoverbale"
        onClick={() => {
          props.onDelete(props.skill._id);
        }}
      >
        x
      </span>
    </li>
  );
}

export default Skill;
