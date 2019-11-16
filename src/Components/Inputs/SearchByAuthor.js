import React, { Component } from "react";
import axios from "axios";

export class SearchByAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      results: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ author: e.target.value.toUpperCase() });
    console.log(this.state.title);
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/ourbooks/author/" + this.state.author)
      .then(res => {
        console.log(res);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    let searchResult;
    if (this.state.results != null) {
      searchResult = this.state.results.map(index => {
        return (
          <li key={index._id}>
            Title: {index.title} Author: {index.author}
          </li>
        );
      });
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="author"
            placeholder="Search for an author"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        <ul>{searchResult}</ul>
      </div>
    );
  }
}

export default SearchByAuthor;
