import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchFictionTitle from "./FictionInputs/SearchFictionTitle";
import SearchFictionAuthor from "./FictionInputs/SearchFictionAuthor";
import SearchFictionRank from "./FictionInputs/SearchFictionRank";
import axios from "axios";

export class FictionBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books
    };
    this.getFiction = this.getFiction.bind(this);
  }
  getFiction() {
    axios.get("http://localhost:4000/fiction").then(res => {
      this.setState({ books: res.data });
      console.log(this.state);
    });
  }
  componentDidMount() {
    this.getFiction();
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
        <SearchFictionTitle />
        <SearchFictionAuthor />
        <SearchFictionRank />
        {bookList}
      </div>
    );
  }
}

export default FictionBookList;

const containerStyle = {
  width: "80%",
  height: "300%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "0 auto",
  textAlign: "center"
};
