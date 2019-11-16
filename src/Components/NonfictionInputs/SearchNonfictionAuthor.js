import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class SearchNonfictionAuthor extends Component {
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
    this.setState({ author: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/nonfiction/author/" + this.state.author)
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
        let imageStyle = {
          backgroundImage: `url(${index.bookImage})`,
          backgroundSize: "cover",
          backgroundPostion: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          width: "200px",
          margin: "10px"
        };
        return (
          <div style={imageStyle} key={index._id}>
            <Link to={`/books/${index._id}`}>{index.title}</Link>
          </div>
        );
      });
    }
    return (
      <div>
        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control input-group-prepend"
            type="text"
            name="author"
            placeholder="Search by author"
            onChange={this.handleChange}
          ></input>
          <input
            className="btn btn-secondary input-group-append"
            type="submit"
            value="Search"
          ></input>
        </form>
        {searchResult}
      </div>
    );
  }
}

export default SearchNonfictionAuthor;
