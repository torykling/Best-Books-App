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
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        "https://best-books-tkling.herokuapp.com/ourbooks/title/" +
          this.state.title
      )
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
          <li className="list-group-item" style={resultStyle} key={index._id}>
            Title: {index.title} Author: {index.author}
          </li>
        );
      });
    }
    return (
      <div>
        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control input-group-prepend"
            type="text"
            name="title"
            placeholder="Search by title"
            onChange={this.handleChange}
          ></input>
          <input
            className="btn btn-primary input-group-append"
            type="submit"
            value="Search"
          ></input>
        </form>
        <ul>{searchResult}</ul>
      </div>
    );
  }
}

export default SearchByTitle;

const resultStyle = {
  color: "grey"
};
