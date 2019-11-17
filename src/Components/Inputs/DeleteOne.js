import React, { Component } from "react";
import axios from "axios";

export class DeleteOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ titleId: e.target.value.toUpperCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const url =
      "https://best-books-tkling.herokuapp.com/ourbooks/title/" +
      this.state.titleId;
    axios
      .delete(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control input-group-prepend"
          type="text"
          name="titleId"
          placeholder="Add a title for the book you want to delete"
          onChange={this.handleChange}
        ></input>
        <input
          className="btn btn-warning input-group-append"
          type="submit"
          value="Delete"
        ></input>
      </form>
    );
  }
}

export default DeleteOne;
