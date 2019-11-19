import React, { Component } from "react";
import axios from "axios";

export class DeleteAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleId: "",
      title: "",
      author: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .delete("https://best-books-tkling.herokuapp.com/ourbooks")
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
          className="btn btn-danger"
          type="submit"
          value="Delete All Books"
        ></input>
      </form>
    );
  }
}

export default DeleteAll;
