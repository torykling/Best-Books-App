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
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="titleId"
          placeholder="Current Title"
          onChange={this.handleChange}
        ></input>
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="New Title"
          onChange={this.handleChange}
        />
        <input
          className="form-control input-group-prepend"
          type="text"
          name="author"
          placeholder="New Author"
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

export default Put;
