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
      .get(
        "https://best-books-tkling.herokuapp.com/nonfiction/rank/" +
          this.state.rank
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
            <Link style={bannerStyle} to={`/books/${index._id}`}>
              {index.title}
            </Link>
          </div>
        );
      });
    } else {
      searchResult = "";
    }
    return (
      <div>
        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control input-group-prepend"
            type="text"
            name="rank"
            placeholder="Search by rank (1-15)"
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

export default SearchNonfictionRank;

const bannerStyle = {
  display: "inline-block",
  backgroundColor: "white",
  minWidth: "200px",
  width: "100%"
};
