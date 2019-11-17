import React, { Component } from "react";
import axios from "axios";
import Post from "./Inputs/Post";
import Put from "./Inputs/Put";
import DeleteOne from "./Inputs/DeleteOne";
import DeleteAll from "./Inputs/DeleteAll";
import SearchByTitle from "./Inputs/SearchByTitle";
import SearchByAuthor from "./Inputs/SearchByAuthor";
import Clear from "./Inputs/Clear";

export class OurBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourBooks: props.ourBooks
    };

    this.getOurBooks = this.getOurBooks.bind(this);
    this.myController = new AbortController();
  }

  getOurBooks = () => {
    axios
      .get("https://best-books-tkling.herokuapp.com/ourbooks", {
        signal: this.myController.signal
      })
      .then(res => {
        this.setState({ ourBooks: res.data });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getOurBooks();
  }
  componentDidUpdate() {
    this.getOurBooks();
  }
  componentWillUnmount() {
    this.myController.abort();
  }

  render() {
    let ourList;
    if (this.state.ourBooks != null) {
      ourList = this.state.ourBooks.map(index => {
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
        <h1>Our Best Books</h1>
        <h2>Books recommended by users like you!</h2>
        <Clear />
        <h5>Add a book here</h5>
        <Post />
        <h5>Or update a book</h5>
        <Put />
        <h5>Delete a book</h5>
        <DeleteOne />

        <DeleteAll />

        <h5>Search for a book on this list by title or author</h5>
        <SearchByTitle />
        <SearchByAuthor />
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
