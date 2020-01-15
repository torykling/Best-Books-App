import React, { Component } from "react";
import Post from "./Inputs/Post";
import Put from "./Inputs/Put";
import DeleteOne from "./Inputs/DeleteOne";
import DeleteAll from "./Inputs/DeleteAll";

export class OurBookList extends Component {
  render() {
    let ourList;
    if (this.props.ourBooks != null) {
      ourList = this.props.ourBooks.map(index => {
        return (
          <li className="list-group-item" style={resultStyle} key={index._id}>
            {index.title} written by {index.author}
          </li>
        );
      });
    } else {
      ourList = (
        <li style={resultStyle} className="list-group-item">
          No titles to display
        </li>
      );
    }

    return (
      <div style={textBoxStyle}>
        <h5>Books Recommended by Users Like You!</h5>

        <h5>Add a book here</h5>
        <Post getData={this.props.getData} />
        <h5>Or update a book</h5>
        <Put getData={this.props.getData} />
        <h5>Delete a book</h5>
        <DeleteOne getData={this.props.getData} />

        <DeleteAll getData={this.props.getData} />

        <h2 className="our-books-title">Books We Love:</h2>
        <ul className="list-group">{ourList}</ul>
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
const resultStyle = {
  color: "grey"
};
