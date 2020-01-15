import React, { Component } from "react";
// import Post from "./Inputs/Post";
// import Put from "./Inputs/Put";
import DeleteOne from "./Inputs/DeleteOne";
import DeleteAll from "./Inputs/DeleteAll";
import { Link } from "react-router-dom";

export class OurBookList extends Component {
  render() {
    let ourList;
    if (this.props.ourBooks.length !== 0) {
      ourList = this.props.ourBooks.map(index => {
        return (
          <li className="list-group-item result" key={index._id}>
            {index.title} written by {index.author}
            <DeleteOne getData={this.props.getData} title={index.title} />
          </li>
        );
      });
    } else {
      ourList = (
        <li className="list-group-item result">No titles to display</li>
      );
    }

    return (
      <div style={textBoxStyle}>
        <h2 className="our-books-title">Books We Love:</h2>
        <ul className="list-group">{ourList}</ul>
        <div className="ourbuttons">
          <DeleteAll getData={this.props.getData} />
          <Link className="btn btn-success" to="/addupdate">
            Add Or Update a Book
          </Link>
        </div>
      </div>
    );
  }
}

export default OurBookList;

const textBoxStyle = {
  backgroundColor: "rgba(110, 117, 124, .7)",
  color: "white",
  margin: "0 auto",
  padding: "2px 20px",
  width: "80%"
};
