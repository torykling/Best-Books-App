import React, { Component } from "react";
import axios from "axios";

export class DeleteOne extends Component {
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
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const url = "http://localhost:4000/ourbooks/title/" + this.state.titleId;
    axios
      .delete(url)
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
          placeholder="Add a title for the book you want to delete"
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="Delete"></input>
      </form>
    );
  }
}

export default DeleteOne;
