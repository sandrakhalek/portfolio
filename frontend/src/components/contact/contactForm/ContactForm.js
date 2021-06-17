import React, { Component } from "react";
import axios from "axios";
import "./ContactForm.css";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Send",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:5000/contactme/",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Send" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  render() {
    let buttonText = this.state.status;
    return (
      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Description</label>
          <textarea
            id="message"
            className="form-control"
            value={this.state.message}
            placeholder="Project description"
            rows={5}
            onChange={this.handleChange.bind(this)}
            required
          />
        </div>
        <button id="sendBtn" className="letter-spacing hoverbale" type="submit">
          {buttonText}
          <i className="bx bx-arrow-back bx-rotate-180" />
        </button>
      </form>
    );
  }
}

export default ContactForm;
