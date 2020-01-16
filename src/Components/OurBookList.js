import React, { Component } from "react";
import DeleteOne from "./OurBookInputs/DeleteOne";
import { Link } from "react-router-dom";

export class OurBookList extends Component {
  render() {
    let ourList;
    if (this.props.ourBooks.length !== 0) {
      ourList = this.props.ourBooks.map(index => {
        return (
          <li className="list-group-item result" key={index._id}>
            {index.title} written by {index.author}
            <div className="ourbuttons">
              <Link
                className="btn btn-primary updatebutton"
                to={`/updatepage/${index.title}`}
              >
                Update
              </Link>
              <DeleteOne getData={this.props.getData} title={index.title} />
            </div>
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

        <Link className="btn btn-success addbutton" to="/addpage">
          Add a Book
        </Link>
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
