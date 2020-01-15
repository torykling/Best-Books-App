import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchNonfictionTitle from "./NonfictionInputs/SearchNonfictionTitle";
import SearchNonfictionAuthor from "./NonfictionInputs/SearchNonfictionAuthor";
import SearchNonfictionRank from "./NonfictionInputs/SearchNonfictionRank";

export class NonfictionBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.nonfiction
    };
  }
  checkEmpty = argument => {
    if (argument === "") {
      this.setState({ results: this.props.nonfiction });
    }
  };
  handleChangeTitle = e => {
    e.preventDefault();
    const searchResults = this.props.nonfiction.filter(
      book =>
        e.target.value.toUpperCase() ===
        book.title
          .split("")
          .slice(0, e.target.value.length)
          .join("")
    );
    this.setState({ results: searchResults });
    this.checkEmpty(e.target.value);
  };
  handleChangeAuthor = e => {
    e.preventDefault();
    const searchResults = this.props.nonfiction.filter(
      book =>
        e.target.value ===
        book.author
          .split("")
          .slice(0, e.target.value.length)
          .join("")
    );
    this.setState({ results: searchResults });
    this.checkEmpty(e.target.value);
  };
  handleChangeRank = e => {
    e.preventDefault();
    const searchResults = this.props.nonfiction.filter(
      book => parseInt(e.target.value) === book.rank
    );
    this.setState({ results: searchResults });
    this.checkEmpty(e.target.value);
  };
  render() {
    let bookList;
    if (this.state.results != null) {
      bookList = this.state.results.map(index => {
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
            <Link className="banner" to={`/nonfiction/${index._id}`}>
              {index.title}
            </Link>
          </div>
        );
      });
    }

    return (
      <div style={containerStyle}>
        <div style={containerStyle}>
          <SearchNonfictionTitle handleChange={this.handleChangeTitle} />
          <SearchNonfictionAuthor handleChange={this.handleChangeAuthor} />
          <SearchNonfictionRank handleChange={this.handleChangeRank} />
        </div>
        {bookList}
      </div>
    );
  }
}

export default NonfictionBookList;

const containerStyle = {
  width: "100%",
  height: "300%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "10px",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center"
};
