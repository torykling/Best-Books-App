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
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.toUpperCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url =
      "https://best-books-tkling.herokuapp.com/ourbooks/title/" +
      this.state.titleId;
    axios
      .put(url, {
        title: this.state.title,
        author: this.state.author
      })
      .then(res => {
        console.log(res);
        this.props.getData();
        this.props.history.push("/ourbooks");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form
        className="input-group mb-3 put-container"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control put-input"
          type="text"
          name="titleId"
          placeholder="Current Title"
          onChange={this.handleChange}
        ></input>
        <input
          className="form-control put-input"
          type="text"
          name="title"
          placeholder="New Title"
          onChange={this.handleChange}
        />
        <input
          className="form-control input-group-prepend put-input"
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
