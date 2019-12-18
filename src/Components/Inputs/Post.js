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
    this.setState({ [e.target.name]: e.target.value.toUpperCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://best-books-tkling.herokuapp.com/ourbooks", {
        title: this.state.title,
        author: this.state.author
      })
      .then(res => {
        console.log(res);
        this.props.getData();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Title"
          onChange={this.handleChange}
        ></input>
        <input
          className="form-control input-group-prepend"
          type="text"
          name="author"
          placeholder="Author"
          onChange={this.handleChange}
        ></input>
        <input
          className="btn btn-primary input-group-append"
          type="submit"
        ></input>
      </form>
    );
  }
}

export default Post;
