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
    axios
      .delete("http://localhost:4000/ourbooks")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Delete All Books"></input>
      </form>
    );
  }
}

export default DeleteAll;
