import React from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeCategory(e) {
    this.setState({ category: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "POST",
      url: "http://localhost:5000/mySkills/add",
      data: this.state,
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Modal
        id="addSkillModal"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add a Skill </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label> Skill </label>
              <input
                className="form-control"
                id="skillname"
                placeholder="i.e React"
                name="skillname"
                onChange={this.onChangeName.bind(this)}
                value={this.state.name}
                required
              />
            </div>
            <div className="form-group">
              <label> Category </label>
              <select
                className="form-control"
                id="cat-skill-options"
                onChange={this.onChangeCategory.bind(this)}
                value={this.state.category}
                selected={this.state.category}
                required
              >
                <option>  </option>
                <option> Technical </option>
                <option> Soft </option>
                <option> Software </option>
              </select>
            </div>
            <input
              type="submit"
              className="btn btn-btn-primary"
              onClick={this.props.onHide}
              value="Add Skill"
            />
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CustomModal;
