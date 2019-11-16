import React, { Component } from "react";
import axios from "axios";

export class SearchByTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      results: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ title: e.target.value.toUpperCase() });
    console.log(this.state.title);
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/ourbooks/title/" + this.state.title)
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
            name="title"
            placeholder="Search for a book title"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        <ul>{searchResult}</ul>
      </div>
    );
  }
}

export default SearchByTitle;
