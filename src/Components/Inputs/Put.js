import React, { Component } from "react";
import axios from "axios";

export class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleId: "",
      title: "",
      author: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    console.log(this.state.title);
    console.log(this.state.author);
  };
  handleSubmit = e => {
    const url = "http://localhost:4000/ourbooks/title/" + this.state.titleId;
    axios
      .put(url, {
        title: this.state.title,
        author: this.state.author
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="titleId"
          placeholder="Add a title for the book you want to edit"
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="title"
          placeholder="Add the updated title"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Add an author"
          onChange={this.handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default Put;
