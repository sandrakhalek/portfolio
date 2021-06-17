import React from "react";
import Skill from "../skill/Skill";
import axios from "axios";

class SkillsList extends React.Component {
  constructor() {
    super();

    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:5000/mySkills/",
    })
      .then((response) => {
        this.setState({ skills: response.data });
      })
      .catch((error) => console.log(error));
  }

  deleteSkill(id) {
    axios({
      method: "DELETE",
      url: "http://localhost:5000/mySkills/" + id,
    }).then((response) => {
      this.setState({
        skills: this.state.skills.filter((el) => el._id !== id),
      });
    });
  }

  skillsList(cat) {
    return this.state.skills
      .filter((el) => el.category.toLowerCase() === cat.toLowerCase())
      .map((currentSkill) => {
        return (
          <Skill
            searchTerm={this.props.searchTerm}
            skill={currentSkill}
            onDelete={this.deleteSkill.bind(this)}
          />
        );
      });
  }

  render() {
    return (
      <div className="row ">
        <div className="col-xs-12 col-lg-6">
          <ul className="skill-list">
            {this.skillsList(this.props.cat).slice(0, 4)}
          </ul>
        </div>
        <div className="col-xs-12 col-lg-6">
          <ul className="skill-list">
            {this.skillsList(this.props.cat).slice(4)}
          </ul>
        </div>
      </div>
    );
  }
}
export default SkillsList;
