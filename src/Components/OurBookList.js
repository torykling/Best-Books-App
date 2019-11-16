import React, { Component } from "react";
import axios from "axios";
import Post from "./Inputs/Post";
import Put from "./Inputs/Put";
import DeleteOne from "./Inputs/DeleteOne";
import DeleteAll from "./Inputs/DeleteAll";
import SearchByTitle from "./Inputs/SearchByTitle";
import SearchByAuthor from "./Inputs/SearchByAuthor";

export class OurBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourBooks: props.ourBooks
    };
    this.getOurBooks = this.getOurBooks.bind(this);
  }
  getOurBooks = () => {
    axios.get("http://localhost:4000/ourbooks").then(res => {
      this.setState({ ourBooks: res.data });
      console.log(this.state);
    });
  };
  componentDidMount() {
    this.getOurBooks();
  }
  render() {
    let ourList;
    if (this.state.ourBooks != null) {
      ourList = this.state.ourBooks.map(index => {
        return (
          <li key={index._id}>
            Title: {index.title} Author: {index.author}
          </li>
        );
      });
    } else {
      ourList = <li>No titles to display</li>;
    }

    return (
      <div>
        <h1>Our Best Books</h1>
        <h2>Books recommended by users like you!</h2>
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
        <ul>{ourList}</ul>
      </div>
    );
  }
}

export default OurBookList;
