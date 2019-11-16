import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.title);
    console.log(this.state.author);
  };
  handleSubmit = e => {
    axios
      .post("http://localhost:4000/ourbooks", {
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
          name="title"
          placeholder="Add a book title"
          onChange={this.handleChange}
        ></input>
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

export default Post;
