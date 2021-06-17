import React from "react";
import SkillsList from "../skillList/SkillsList";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h2 className="skill-type letter-spacing">{this.props.skillCategory}</h2>
        <SkillsList cat={this.props.skillCategory} searchTerm={this.props.searchTerm}/>
      </div>
    );
  }
}

export default Skills;
