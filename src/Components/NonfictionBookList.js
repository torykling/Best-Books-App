import { Link } from "react-router-dom";
import SearchNonfictionTitle from "./NonfictionInputs/SearchNonfictionTitle";
import SearchNonfictionAuthor from "./NonfictionInputs/SearchNonfictionAuthor";
import SearchNonfictionRank from "./NonfictionInputs/SearchNonfictionRank";
import axios from "axios";

import React, { Component } from "react";

export class NonfictionBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books
    };
    this.getNonfiction = this.getNonfiction.bind(this);
  }
  getNonfiction() {
    axios.get("http://localhost:4000/nonfiction").then(res => {
      this.setState({ books: res.data });
      console.log(this.state);
    });
  }
  componentDidMount() {
    this.getNonfiction();
  }
  render() {
    let bookList;
    if (this.state.books != null) {
      bookList = this.state.books.map(index => {
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
      <div style={containerStyle}>
        <SearchNonfictionTitle />
        <SearchNonfictionAuthor />
        <SearchNonfictionRank />
        {bookList}
      </div>
    );
  }
}

export default NonfictionBookList;

const containerStyle = {
  width: "80%",
  height: "300%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "0 auto",
  textAlign: "center"
};
