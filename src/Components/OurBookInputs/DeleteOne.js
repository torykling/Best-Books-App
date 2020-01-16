import React, { Component } from "react";
import axios from "axios";

export class DeleteOne extends Component {
  delete = title => {
    const url =
      "https://best-books-tkling.herokuapp.com/ourbooks/title/" + title;
    axios
      .delete(url)
      .then(res => {
        console.log(res);
        this.props.getData();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <button
        className="btn btn-warning deletebutton"
        onClick={() => {
          this.delete(this.props.title);
        }}
      >
        Delete
      </button>
    );
  }
}

export default DeleteOne;
