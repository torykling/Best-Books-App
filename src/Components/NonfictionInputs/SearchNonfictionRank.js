import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class SearchNonfictionRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: 0,
      results: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ rank: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/nonfiction/rank/" + this.state.rank)
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="rank"
            placeholder="Search for a book by rank (from 1 to 15)"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        {searchResult}
      </div>
    );
  }
}

export default SearchNonfictionRank;
